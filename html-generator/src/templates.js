

let templateObj = {
    "natBannerDesktop": {
        "options": ["bgColor", "textColor", "bannerCopy", "popHeaderCopy", "disclaimerCopy"],
        "template": `<style type="text/css">

                        #swBanner { position: relative; }
                        #swBanner {height:37px; background: {{bgColor}}; color: {{textColor}}; text-align: center;}
                        .siteWidth>p {font-size: 20px; padding-top: 5px; height:37px}
                        area {outline: none;}
                        body.oldCheckout .targettedCampaignBanner, body.shippinginfoPage .targettedCampaignBanner {display: none;}

                          #swBanner .siteWidth {display: block; max-width:1300px; margin:0 auto; text-decoration: none; position: relative;}
                          #swBanner a { text-decoration: none; }
                          
                          #swBanner a.detailsWindowLink {font-size: .8em; position: absolute; right: 3px; bottom: 15px; color: {{textColor}}; text-decoration: none;}
                          #swBanner .detailsWindow {position: absolute; width: 400px; top: 38px; right: 0; background: #fff; color: #000; padding: 20px; z-index: 25; display: none; border:1px solid #716d6a; }

                          /* change background color to match PSD below */
                          #swBanner .popHeader {background:{{bgColor}}; color: {{textColor}}; width: 416px; margin: -20px 0 0 -20px; padding: 20px 12px; margin-bottom: 10px; font-size:16px; line-height:1.5em;letter-spacing: .02em; text-align:left;}
                          /* change background color above */

                          #swBanner .detailsWindowLink.active .open, #swBanner .detailsWindowLink.inactive .close {display: none;}
                          #swBanner .detailsWindow p {margin-bottom: 10px;}
                          #swBanner .popup-text { line-height: 1.5em; text-align: left; white-space: pre-wrap;}
                          
                    </style>
                    <div id="swBanner"><!-- Add Hastebin link and image path below -->
                    <div class="siteWidth"><!-- <a href="#"> --><!-- hastebin Link --><p style="text-transform: uppercase;">{{bannerCopy}}</p><!-- </a> --><!-- Image path --> <a class="detailsWindowLink inactive" href="#" onclick="$(this).toggleClass('inactive active').siblings('.detailsWindow').first().slideToggle(); return false;"> <span class="open">*Details</span> <span class="close">&times; Close</span> </a>
                    <div class="detailsWindow">
                    <p class="popHeader" style="text-transform: uppercase;"><strong>{{popHeaderCopy}}</strong></p>
                    <!-- Paste offer and promo code here -->

                    <p class="popup-text"><strong>{{disclaimerCopy}}</strong></p>
                    <strong><!-- Paste Exclusions here --><!-- do not edit below this line --></strong></div>
                    <strong> </strong></div>
                    </div>`
    },
    "natBannerDesktopLinked": {
        "options": ["bgColor", "textColor", "bannerCopy", "popHeaderCopy", "disclaimerCopy","linkURL"],
        "template": `<style type="text/css">

                        #swBanner { position: relative; }
                        #swBanner {height:37px; background: {{bgColor}}; color: {{textColor}}; text-align: center;}
                        a>p {font-size: 20px; padding-top: 5px; height:37px;}
                        area {outline: none;}
                        body.oldCheckout .targettedCampaignBanner, body.shippinginfoPage .targettedCampaignBanner {display: none;}

                          #swBanner .siteWidth {display: block; max-width:1300px; margin:0 auto; text-decoration: none; position: relative;}
                          #swBanner a { text-decoration: none; color: {{textColor}}; }
                          
                          #swBanner a.detailsWindowLink {font-size: .8em; position: absolute; right: 3px; bottom: 15px; color: {{textColor}}; text-decoration: none;}
                          #swBanner .detailsWindow {position: absolute; width: 400px; top: 38px; right: 0; background: #fff; color: #000; padding: 20px; z-index: 25; display: none; border:1px solid #716d6a; }

                          /* change background color to match PSD below */
                          #swBanner .popHeader {background:{{bgColor}}; color: {{textColor}}; width: 416px; margin: -20px 0 0 -20px; padding: 20px 12px; margin-bottom: 10px; font-size:16px; line-height:1.5em;letter-spacing: .02em; text-align:left;}
                          /* change background color above */

                          #swBanner .detailsWindowLink.active .open, #swBanner .detailsWindowLink.inactive .close {display: none;}
                          #swBanner .detailsWindow p {margin-bottom: 10px;}
                          #swBanner .popup-text { line-height: 1.5em; text-align: left; white-space: pre-wrap;}
                          
                    </style>
                    <div id="swBanner"><!-- Add Hastebin link and image path below -->
                    <div class="siteWidth"> <a href="{{linkURL}}"> <!-- hastebin Link --><p style="text-transform: uppercase;">{{bannerCopy}}</p> </a> <!-- Image path --> <a class="detailsWindowLink inactive" href="#" onclick="$(this).toggleClass('inactive active').siblings('.detailsWindow').first().slideToggle(); return false;"> <span class="open">*Details</span> <span class="close">&times; Close</span> </a>
                    <div class="detailsWindow">
                    <p class="popHeader" style="text-transform: uppercase;"><strong>{{popHeaderCopy}}</strong></p>
                    <!-- Paste offer and promo code here -->

                    <p class="popup-text"><strong>{{disclaimerCopy}}</strong></p>
                    <strong><!-- Paste Exclusions here --><!-- do not edit below this line --></strong></div>
                    <strong> </strong></div>
                    </div>`
    }
}


export default templateObj;


/************************

- edit template to have {{}} notation where options are put (DONE: also added popHeader input into App.js)
- edit helpers.js to create factory that edits the option changed and outputs the new code (DONE)
- add helper functions to components (DONE: naturalizer non-linked banner is working)
- once above is working, add other templates (DONE)
- add in template selection option (DONE)
- add in disabling/showing of options depending on which banner is selected (DONE)
- add way to display code to user (DONE)
- Add input validation for before updating preview and before showing output
- Add template for non-naturalizer brand. Need to get CSS to display properly

*************************/

































