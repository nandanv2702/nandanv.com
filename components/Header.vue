<template>
    <div class="root min-h-full center">
        <div id="hero" class="p-5 center">
            <div id="profile" class="card shadow-md p-5 md max-w-xl">
                <div class="center p-3">
                    <img src="https://blog.nandanv.com/about/profile.jpg" alt="my photo" class="photo shadow-md">
                </div>
                <div class="info">
                    <div class="text-3xl font-semibold center py-2 text-gray-900">Nandan V</div>
                    <div class="description text-xl text-gray-800 leading-8">
                        <p class="font-semibold">
                            Stuff I do:
                        </p>
                        <ul class="list-disc m-5">
                            <li>
                                Full-stack web development (check out my projects below!)
                            </li>
                            <li>
                                Mfg. Eng. at Harley-Davidson
                        
                            </li>
                            <li>
                                Make films
                            </li>
                        </ul>
                    </div>
                    <div class="center">
                        <button class="bg-yellow-400 p-2 shadow-md hover:shadow-lg rounded-lg text-lg text-gray-800 font-semibold">
                            <span class="mx-3 text-gray">
                                See More Below!
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero {
    width: 60%;
    backdrop-filter: blur(12px) saturate(100%);
    -webkit-backdrop-filter: blur(12px) saturate(200%);
    background-color: rgba(209, 213, 219, 0.3);
    border-radius: 6px;
    border: 1px solid rgba(36, 36, 36, 0.228);
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
    backdrop-filter: blur(10px) saturate(180%);
    -webkit-backdrop-filter: blur(10px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
}

img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    background-position:center;
    border-radius: 50%;
}
</style>