import React from 'react'

export default function Cards() {
    return (

        <div class="flex min-h-screen items-center justify-center p-10 bg-yellow-50">
            <div class="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
                <div class="row-span-2 flex flex-col rounded-md border border-slate-200 bg-white">
                    <div class="h-1/2 flex-1"><img src="https://images.unsplash.com/photo-1630404991412-9504d094e8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" class="w-full object-cover object-right-top" alt="omnichannel" /></div>
                    <div class="p-10">
                        <h3 class="text-xl font-medium text-gray-700">European Green Deal</h3>
                        <p class="mt-2 text-slate-500">Whiting UE, roughly 75% of the building stock is energy inefficient and over 85% of them will still be standing in 2050, when Europe must be climate neutral. This objective is at the heart of the  European Green Deal  and in line with the EU’s commitment to global climate action under the  Paris Agreement.</p>
                        
                    </div>
                </div>
                <div class="flex rounded-md border border-slate-200 bg-white">
                    <div class="flex-1 p-10">
                        <h3 class="text-xl font-medium text-gray-700">Our cities, our buildings</h3>
                        <p class="mt-2 text-slate-500">Buildings currently account for 40% of energy consumed in the EU and 36% of energy-related greenhouse gas emissions. But nowadays less than 1% of the national building stock is renovated each year due to the cost, which is often the major hurdle to renovation.</p>
                        
                    </div>

                    <div class=" hidden h-full w-1/3 overflow-hidden lg:block">
                        <div class=" inset-0">
                            <img src="https://images.unsplash.com/photo-1455778977533-4a3ef39091c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="h-full w-full object-cover object-left-top" alt="" />
                        </div>
                    </div>
                </div>
                <div class="flex rounded-md border border-slate-200 bg-white">
                    <div class="flex-1 p-10">
                        <h3 class="text-xl font-medium text-gray-700">Our commitment</h3>
                        <p class="mt-2 text-slate-500">Energy efficient renovations, as well as companies and professionals, can be certified by blockchain. Projects can be helped economically from their initial phase, focused on the deduction of emissions as earlier as possible in the construction process.</p>
                        
                    </div>

                    <div class=" hidden h-full w-1/3 overflow-hidden lg:block">
                        <div class=" inset-0">
                            <img src="https://images.unsplash.com/photo-1590725121839-892b458a74fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="h-full w-full object-cover object-left-top" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
