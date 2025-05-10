import React from 'react'
import VoltMeter from '../components/speedometer/VoltMeter'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className="bg-[#51495B] font-primary">
          {/* <!-- Hero --> */}
          <section id="hero" className="h-[90vh] flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-4 py-8">
            <div className="w-1/2 text-white ">
              <h1 className="mb-3 text-left font-normal text-3xl">
                Stay informed, Stay in control!
              </h1>
              <p className="text-left font-normal text-5xl">
                Monitor <span className="font-bold text-white">Voltage</span>, 
                <span className="font-bold text-white"> Ampere</span>, 
                and <span className="font-bold text-white"> Kilowatts</span> with 
                <span className="font-bold text-white"> Ease!</span>
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  className="px-6 py-4 rounded-2xl text-white bg-teal-500 hover:bg-teal-600"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Bagian Kanan (Gambar) */}
            <div className="lg:w-1/2 flex justify-end ">
              <img
                src="./icon/device_1.svg"
                className="w-full max-w-md "
                alt="hero-image"
              />
            </div>
          </section>

          <section id="device" className="h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/background/bg.svg')" }}>
              <div className="text-center max-w-7xl mx-auto px-4 py-8">
                  {/* Title Section */}
                  <h1 className="text-3xl font-bold text-white">Device Used</h1>
                  <h2 className="w-8 h-0.5 my-4 mx-auto bg-white rounded-md"></h2>
                  <p className="text-white max-w-2xl mx-auto text-lg font-normal">
                      Whether to increase the capacity of your team or to build your product from scratch, Mitrais is a world-class software development company with vast capabilities.
                  </p>

                  {/* Cards Section */}
                  <div className="mt-10 grid grid-cols-3 gap-6">
                      {/* Card 1 */}
                      <div className="bg-white rounded-lg shadow-lg p-6">
                          <img src="./device/Img.svg" alt="Device 1" className="w-3/4 max-w-md object-cover rounded-lg mx-auto"/>
                          <h3 className="text-lg font-semibold mt-4">Node mcu ESP8266</h3>
                          <p className="text-gray-600 mt-2">ESP8266 merupakan modul wifi yang berfungsi sebagai perangkat tambahan mikrokontroler seperti Arduino agar dapat terhubung langsung dengan wifi dan membuat koneksi TCP/IP.</p>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-white rounded-lg shadow-lg p-6">
                          <img src="./device/Img-1.svg" alt="Device 2" className="w-3/4 max-w-md object-cover rounded-lg mx-auto"/>
                          <h3 className="text-lg font-semibold mt-4">PZEM 004T V3</h3>
                          <p className="text-gray-600 mt-2">PZEM-004T adalah sebuah sensor yang digunakan untuk mengukur Tegangan (Voltage) dengan batas tegangan 80- 260V AC yang dapat dihubungkan dengan Arduino UNO maupun opensource lainnya.</p>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-white rounded-lg shadow-lg p-6">
                          <img src="./device/Img-2.svg" alt="Device 3" className="w-3/4 max-w-md object-cover rounded-lg mx-auto"/>
                          <h3 className="text-lg font-semibold mt-4">Rangkaian</h3>
                          <p className="text-gray-600 mt-2">Berikut Rangkaian yang dipakai yaitu memakai ESP8266 dan PZEM 004T lalu diikuti oleh Kabel Jumper, Kabel Data, Breadboard, dan Lampu. </p>
                      </div>
                  </div>
              </div>
          </section>

          {/* <!-- About us --> */}
          <section id="aboutus" className="h-[90vh] flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
                  {/* Bagian Kanan (Gambar) */}
                  <div className="w-1/2 flex justify-center">
                    <img
                      src="./icon/spam_icon.svg"
                      className="w-4/12"
                      alt="hero-image"
                    />
                  </div>
                  {/* Bagian Kiri (Teks) */}
                  <div className="lg:w-1/2 text-white mt-4">
                    <h1 className="text-left font-bold text-4xl">
                      About Us
                    </h1>
                    <h2 className="w-12 h-0.5 my-4 bg-white rounded-md"></h2>
                    <p className="text-left font-normal text-md">
                      SPAM (Smart Power Meter Measurement and Monitoring) adalah Website Pemantauan dan manajemen pemakaian energi listrik yang efisien telah 
                      menjadi fokus utama dalam upaya mengurangi konsumsi energi yang berlebihan dan mendorong keberlanjutan lingkungan. Dalam era Internet of 
                      Things (IoT), kehadiran perangkat-perangkat pintar dan sensor-sensor terhubung telah membuka peluang baru untuk memantau dan mengelola 
                      pemakaian energi dengan lebih efektif. Dalam konteks ini, desain antarmuka pengguna (user interface) yang baik dan intuitif. Website ini 
                      dapat memainkan peran penting dalam memberikan informasi yang akurat, mudah dipahami, dan dapat diakses oleh pengguna untuk mengontrol 
                      dan memonitor pemakaian energi mereka.
                    </p>
                  </div>
                </div>
              </div>
          </section>

          {/* <!-- Monitoring --> */}
          <section id="monitoring" className="h-screen flex flex-col items-center justify-center bg-white">
              <div className="text-center">
                  {/* Title Section */}
                  <h1 className="text-3xl font-bold text-[#FF7B12]">Realtime Monitoring</h1>
                  <h2 className="w-8 h-0.5 my-4 mx-auto bg-gray-400 rounded-md"></h2>
                  <p className="text-gray-600 max-w-2xl mx-auto text-lg font-normal">
                      Whether to increase the capacity of your team or to build your product from scratch, Mitrais is a world-class software development company with vast capabilities.
                  </p>

                  {/* Cards Section */}
                  <div>
                    <VoltMeter/>
                  </div>
              </div>
          </section>
    </div>
  )
}
