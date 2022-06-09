import React from 'react'

export default function HowItWorks() {
    return (

        <div class="py-16 bg-yellow-50">
            <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                <div class="container d-flex m-auto p-3 md:px-">
                    <div class="container mb-10">
                        <h1 class="text-5xl text-center font-semibold text-green-900">How It Works</h1>
                    </div>

                </div>
                <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
                    <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div class="mb-12 space-y-4">
                            <h3 class="text-2xl font-semibold text-purple-900">Plugin</h3>
                            <p class="mb-6">Use our BIM plugin to calculate the carbon emission savings you achieve in your renovation project by automatically comparing the existing building's data with the proposal and enhance your design by focusing on the green transition.</p>

                        </div>
                        <img src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg" class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600" />
                    </div>
                    <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div class="mb-12 space-y-4">
                            <h3 class="text-2xl font-semibold text-purple-900">Platform</h3>
                            <p class="mb-6">If the rehabilitation project meets the minimum requirements, the CO emission savings will be calculated and linked with Stunning Green platform to sell the surplus on the carbon credit blockchain market and use these funds to support the financing of the construction improvements.</p>

                        </div>
                        <img src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg" class="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600" />
                    </div>
                    <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div class="mb-12 space-y-4">
                            <h3 class="text-2xl font-semibold text-purple-900">Energy Efficiency</h3>
                            <p class="mb-6">A reputation database with successful cases and construction agents (architects, engineers and builders) is created to facilitate access for residents and public administrations to companies that work in accordance with climate goals.</p>

                        </div>
                        <img src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg" class="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600" />
                    </div>
                </div>
            </div>
        </div>
    )
}
