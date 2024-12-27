import '../(main)/globals.css'
import DashboardHeading from './_components/DashboardHeading'
import Sidebar from './_components/Sidebar'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="">
        <DashboardHeading />
        <Sidebar />
        <div className=" ml-[252px] mt-2 mr-4">{children}</div>
      </body>
    </html>
  )
}
