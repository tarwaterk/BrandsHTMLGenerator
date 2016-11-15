import React, { Component } from 'react';
import $ from 'jquery';

let templateObj = {
    "natBannerDesktop": {
        "template": `<style type="text/css">

                        #swBanner { position: relative; }
                        #swBanner {height:37px; background: #702e3e; color: #ffffff; text-align: center;}
                        .siteWidth>p {font-size: 20px; padding-top: 5px;}
                        area {outline: none;}
                        body.oldCheckout .targettedCampaignBanner, body.shippinginfoPage .targettedCampaignBanner {display: none;}

                          #swBanner .siteWidth {display: block; max-width:1300px; margin:0 auto; text-decoration: none; position: relative;}
                          #swBanner a { text-decoration: none; }
                          
                          #swBanner a.detailsWindowLink {font-size: .8em; position: absolute; right: 3px; bottom: 4px; color: #ffffff; text-decoration: none;}
                          #swBanner .detailsWindow {position: absolute; width: 400px; top: 38px; right: 0; background: #fff; color: #000; padding: 20px; z-index: 25; display: none; border:1px solid #716d6a; }

                          /* change background color to match PSD below */
                          #swBanner .popHeader {background:#702e3e; color: #ffffff; width: 416px; margin: -20px 0 0 -20px; padding: 20px 12px; margin-bottom: 10px; font-size:16px; line-height:1.5em;letter-spacing: .02em; text-align:left;}
                          /* change background color above */

                          #swBanner .detailsWindowLink.active .open, #swBanner .detailsWindowLink.inactive .close {display: none;}
                          #swBanner .detailsWindow p {margin-bottom: 10px;}
                          #swBanner .popup-text { line-height: 1.5em; text-align: left; white-space: pre-wrap;}
                          
                    </style>
                    <div id="swBanner"><!-- Add Hastebin link and image path below -->
                    <div class="siteWidth"><!-- <a href="#"> --><!-- hastebin Link --><p>Placing text here</p><!-- </a> --><!-- Image path --> <a class="detailsWindowLink inactive" href="#" onclick="$(this).toggleClass('inactive active').siblings('.detailsWindow').first().slideToggle(); return false;"> <span class="open">*Details</span> <span class="close">&times; Close</span> </a>
                    <div class="detailsWindow">
                    <p class="popHeader" style="text-transform: uppercase;"><strong>Enjoy $30 Off Your Purchase of $100<br />
                    or More*</strong> With Code: <strong>BFF30FS</strong></p>
                    <!-- Paste offer and promo code here -->

                    <p class="popup-text"><strong>*Enter promo code online at naturalizer.com. Offer valid on sale and regular price merchandise. Not valid on previous purchases or gift cards. Style, color and sizes may vary by store. Purchase must total $100.00 before taxes and shipping charges are applied to receive the $30 off discount. May not be combined with any other coupon offer or promotion. Offer expires 11:59 p.m. CST November 21, 2016.</strong></p>
                    <strong><!-- Paste Exclusions here --><!-- do not edit below this line --></strong></div>
                    <strong> </strong></div>
                    </div>`
    }
}


export default templateObj;


//style should be able to be injected through a style prop on each element that needs it
// <img src="http://www.carlosshoes.com/Content/2016/banners/nattyBanBan161017/i_02.png" />