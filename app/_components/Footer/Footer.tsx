import Image from 'next/image'
import React from 'react'
import { logo, logoWhite } from '../images'

function Footer() {
  return (
    <div className="w-full bg-slate-600">
      <footer className=" max-md:px-4 md:container md:m-auto site-footer">
        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-[50%_25%_25%] gap-6">
            <div className=" bg">
              <h6>About</h6>
              <p><Image src={logoWhite} alt='Logo' /></p>
              <p className="text-[#d8c8c8]">
                The Jobs To Be Done (JTBD) framework helps businesses understand customers' needs by
                identifying the "jobs" they want to accomplish, viewing products as tools they
                "hire" to solve specific problems.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Services</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">Design Product</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                    Market Innovation
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/java-programming-language/">
                    Customer Segmentation
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/android/">Behavior Analysis</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/templates/">Solution Design</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Contact Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contribute-at-scanfcode/">Services</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="">
          <div className="flex justify-between flex-col md:flex-row items-center">
            <div className="h-full">
              <p className="mt-4 text-jtbd-text-tertiary">jobstobeok.org</p>
            </div>
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className=" text-jtbd-text-tertiary mt-4">
                Copyright &copy; 2024 All Rights Reserved
            
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
