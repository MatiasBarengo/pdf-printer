import Image from "next/image"

export default function Header() {
    return (
        <div className="print-header relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-red-100 to-orange-50"></div>

            {/* Content Container */}
            <div className="relative px-6 py-8 print-header-content">
                {/* Top Decorative Border */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-red-500 to-blue-600"></div>

                {/* Main Content - Flex Row */}
                <div className="flex flex-row items-center justify-between print-header-row">
                    <div className="print-header-cremigal-logo">
                        <Image
                            src={'/cremigal-logo.png'}
                            width={90}
                            height={50}
                            alt="Cremigal Logo"
                        />
                    </div>
                    {/* Center - Logo and Title */}
                    <div className="flex flex-col items-center">
                        <div className="relative w-36 h-36 print-header-lyr-logo">
                            <Image
                                src="/logolyr.png"
                                alt="LYR Distribuidora Logo"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                    <div className="print-header-punta-logo">
                        <Image
                            src={'/puntadelagua.png'}
                            width={50}
                            height={50}
                            alt="Punta del Agua Logo"
                        />
                    </div>
                </div>

                {/* Bottom Decorative Border */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-red-500 to-blue-600"></div>
            </div>
        </div>
    )
}

