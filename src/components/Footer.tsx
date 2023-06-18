import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { pink } from "@mui/material/colors";

export default function Footer() {
  return (
    <div className="FooterStyle">
      <ul>
        <li>Common questions and answers</li>
        <li>Customer service</li>
        <li> About us</li>
        <li>Legal use</li>
      </ul>
      <ul>
        <li>SUSTAINABILITY</li>
        <li>Contact Us</li>
        <li>press</li>
        <li>police</li>
      </ul>
      <ul>
        <li>Page Blogs</li>
        <li>Tel : +46768526619</li>
        <li>akotabe02@gmail.com</li>
        <li>opening hours :Monday-Friday : 9:00 - 16:00 oclock</li>
      </ul>
      <div>
        <p>Subscripe to our Newsletters</p>
        <input type="text" placeholder="E-Mail" />
        <button className="bg-color">send</button>
        <Tabs color="primary">
          <Tab icon={<FacebookIcon color="primary" />} />
          <Tab icon={<LinkedInIcon color="primary" />} />
          <Tab icon={<YouTubeIcon sx={{ color: pink[500] }} />} />
        </Tabs>
      </div>
    </div>
  );
}
