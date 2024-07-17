import React from 'react'
import Image from 'next/image'

const Products = () => {
  return (
    <div>

      {/* <!-- our services section --> */}
      <section className=" py-[30vh]" id="services">
        <div className=" container mx-auto px-4 ">

          <h2 className="text-3xl font-bold text-white mb-8 text-center ">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">

              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Wheat Flour Grinding</h3>
                <p className="text-gray-700 text-base">Our wheat flour grinding service provides fresh, high-quality
                  flour to businesses and individuals in the area. We use state-of-the-art equipment to grind
                  wheat into flour, and we offer a variety of flours to meet the needs of our customers.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">

              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Gram Flour Grinding</h3>
                <p className="text-gray-700 text-base">Our gram flour is perfect for a variety of uses, including
                  baking, cooking, and making snacks. It is also a good source of protein and fiber.Our gram flour
                  grinding service is a convenient and affordable way to get the freshest gram flour possible.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">

              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Jowar Flour Grinding</h3>
                <p className="text-gray-700 text-base">Our jowar grinding service is a convenient and affordable way to
                  get fresh, high-quality jowar flour. We use state-of-the-art equipment to grind jowar into a
                  fine powder, which is perfect for making roti, bread, and other dishes.
                  <details>
                    <summary>Read More</summary>
                    <p>Our jowar flour is also
                      a good source of protein and fiber, making it a healthy choice for your family.</p>
                  </details>
                </p>

              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">

              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Chilli pounding</h3>
                <p className="text-gray-700 text-base">We specializes in the production of high-quality chili powder.
                  Our chili powder is made from the finest, freshest chilies, and we use traditional pounding
                  methods to ensure that our chili powder retains its full flavor and aroma.
                  <details>
                    <summary>Read More</summary>
                    <p> We offer a variety of chili powder products, including mild, medium, and hot. We also offer
                      custom blends to meet the specific needs of our customers.</p>
                  </details>
                </p>
              </div>
            </div>
            {/* <!-- special card --> */}
            <div
              className="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
              <div className="text-center text-white font-medium">Special product</div>

              <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Flavoured Spaghetti</h3>
                <p className="text-gray-700 text-base"><span className="font-medium underline">Our speciality is</span>
                  Bappa Flour Mill offers a variety of flavored spaghetti dishes that are sure to tantalize your
                  taste
                  buds. We use only the freshest ingredients Our
                  flavors include: Mango, spinach
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- gallery --> */}
      <section className="text-gray-700 body-font" id="gallery">
        <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
          Gallery
        </div>

        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">




          {/* 
        <!-- Repeat this div for each image --> */}
        </div>

      </section>

      {/* <!-- Visit us section --> */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">  </div>
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900" id="contactUs">Visit Our Location</h2>
          <p className="mt-3 text-lg text-gray-500">Let us serve you the best</p>
        </div>
        <div className="mt-8 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-bold text-gray-900">Contact</h3>
                  <p className="mt-1 font-bold text-gray-600"><a href="tel:+123">Phone: +91
                    123456789</a></p>
                  <a className="flex m-1" href="tel:+919823331842">
                    <div className="flex-shrink-0">
                      <div
                        className="flex items-center justify-between h-10 w-30 rounded-md bg-indigo-500 text-white p-2">


                        {/* <!-- Heroicon name: phone --> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        Call now
                      </div>
                    </div>

                  </a>
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                  <p className="mt-1 text-gray-600">Sale galli, 60 foot road, Latur</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                  <p className="mt-1 text-gray-600">Monday - Sunday : 2pm - 9pm</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>


  )
}

export default Products
