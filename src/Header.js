import React from "react"

function Header() {
    return (
        <div>

            <div class="bg-purple-900">
                <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div class="relative flex items-center justify-between">
                        <img class="object-contain h-20"
                            src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                            alt="Problem?"
                        />
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                            Meme Generator
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header