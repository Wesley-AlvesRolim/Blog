import { PaginationProtocol, PostAttributes, Root } from "~/domain/protocols";

export interface GetAllPostsUseCase {
  execute(): Promise<GetAllPostsReturn | null>;
}

export interface GetAllPostsReturn {
  posts: PostAttributes[];
  pagination?: PaginationProtocol;
}

export class GetAllPosts implements GetAllPostsUseCase {
  constructor(private url: string, private httpClient: Function) {
    this.url = url;
    this.httpClient = httpClient;
  }

  async execute(): Promise<GetAllPostsReturn | null> {
    try {
      const {
        data: { value },
      }: { data: { value: Root } } = await this.httpClient(this.url);

      return {
        posts: this.adapter(value),
        pagination: {
          currentPage: value.meta.pagination.page,
          totalPages: value.meta.pagination.pageCount,
          totalItems: value.meta.pagination.total,
        },
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  private adapter(posts: Root): PostAttributes[] {
    return posts.data.map((post) => ({
      ...post.attributes,
    }));
  }
}

export const getAllPostsUseCase = async (query: string) => {
  const config = useRuntimeConfig();
  return await new GetAllPosts(
    config.public.API_URL + "/api/posts" + query,
    useFetch
  ).execute();
};
