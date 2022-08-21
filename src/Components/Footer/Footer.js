import React from 'react';

const Footer = () => {
    return (
        <footer class="footer p-10 backdrop-blur-sm bg-white/30 text-base-content mb-5">
            <div>
                <span class="footer-title text-white">Services</span> 
                <a class="link link-hover text-white">Graphic Design</a> 
                <a class="link link-hover text-white">Cyber Security</a> 
                <a class="link link-hover text-white">Web Development</a> 
                <a class="link link-hover text-white">Social Media Marketing</a> 
            </div> 
            <div>
                <span class="footer-title  text-white">Company</span> 
                <a class="link link-hover  text-white">About us</a> 
                <a class="link link-hover  text-white">Contact</a> 
                <a class="link link-hover  text-white">Jobs</a> 
                <a class="link link-hover text-white">Press kit</a> 
            </div> 
            <div>
                <span class="footer-title  text-white">Legal</span> 
                <a class="link link-hover  text-white">Terms of use</a> 
                <a class="link link-hover  text-white">Privacy policy</a> 
                <a class="link link-hover  text-white">Cookie policy</a>
            </div> 
            <div>
                <span class="footer-title text-white">Newsletter</span> 
                <div class="form-control w-80">
                <label class="label">
                    <span class="label-text text-white">Enter your email address</span>
                </label> 
                <div class="relative">
                    <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" /> 
                    <button class="btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                </div>
                </div>
            </div>
    </footer>
    );
};

export default Footer;