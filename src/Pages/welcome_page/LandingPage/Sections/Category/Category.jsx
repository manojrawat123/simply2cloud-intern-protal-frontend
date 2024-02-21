import React from 'react'

const all_category= [
    {title: "Graphics & Design",icon:""},
    {title: "Digital Marketing",icon:""},
    {title: "Illustrator",icon:""},
    {title: "Logo Designer",icon:""},
    {title: "SEO Specialist",icon:""},
    {title: "Content Marketer",icon:""},
    {title: "Writing & Translation",icon:""},
    {title: "Video & Animation",icon:""},
    {title: "Music & Audio",icon:""},
    {title: "Scriptwriter",icon:""}
]

function Category() {
    return (
        <div class="all-category-section">
            <div class="all-category-section-inner px-[32px] mb-16">
                <div class="heading text-3xl font-semibold mb-9 text-[#404145]">
                    <h1>You need it, we've got it</h1>
                </div>

                <div class="category-items grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-7">
                    
                    {all_category.map( ({title,icon})=> 
                            (<div class="category-item cursor-pointer group">
                        <div class="category-icon">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg" class="object-contain w-14 mx-auto" />
                        </div>
                        <hr class="transition-all mx-auto group-hover:border-[#1dbf73] group-hover:w-1/4 w-1/6" />
                        <div class="category-name text-[#7d7d7f] font-semibold text-center">
                            <p>{title}</p>
                        </div>
                            </div>)
                    )}
                </div>
            </div>
        </div>
    )
}

export default Category
