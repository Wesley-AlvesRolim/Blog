<template>
  <footer class="w-full h-16 flex items-center shadow-inner shadow-emerald-400">
    <div
      class="w-11/12 mx-auto max-w-screen-lg flex items-center justify-between"
    >
      <p>Copyright © {{ new Date().getFullYear() }}</p>
      <nav>
        <ul 
					class="flex gap-4"
					>
          <li>
						<NuxtLink to="https://www.linkedin.com/in/wesley-alves-rolim/"  target="_blank">
							<div class="flex items-center gap-2">
								<PhosphorIconLinkedinLogo :size="24" />
								Linkedin
							</div>
						</NuxtLink>
					</li>
					<li>
            <NuxtLink to="https://github.com/Wesley-AlvesRolim">
							<div class="flex items-center gap-2">
								<PhosphorIconGithubLogo :size="24" />
								Github
							</div>
						</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
