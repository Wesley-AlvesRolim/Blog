import { PostAttributes, Root } from "~/domain/protocols";

export interface GetSinglePostUseCase {
  execute(): Promise<GetSinglePostReturn | null>;
}

export interface GetSinglePostReturn {
  post: PostAttributes;
}

export class GetSinglePost implements GetSinglePostUseCase {
  constructor(private url: string, private httpClient: Function) {
    this.url = url;
    this.httpClient = httpClient;
  }

  async execute(): Promise<GetSinglePostReturn | null> {
    try {
      const {
        data: { value },
      } = await this.httpClient(this.url);

      return {
        post: this.adapter(value),
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  private adapter(posts: Root): PostAttributes {
    const post = posts.data[0].attributes;
    post.createdAt = new Intl.DateTimeFormat("pt-BR").format(
      new Date(post.createdAt)
    );
    return post;
  }
}

export const getSinglePostUseCase = async (query: string) => {
  const config = useRuntimeConfig();
  return await new GetSinglePost(
    config.public.API_URL + "/api/posts" + query,
    useFetch
  ).execute();
};
