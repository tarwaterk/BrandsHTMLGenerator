

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
                    <div class="siteWidth"><!-- <a href="#"> --><!-- hastebin Link --><p style="text-transform: uppercase; color: {{textColor}};">{{bannerCopy}}</p><!-- </a> --><!-- Image path --> <a class="detailsWindowLink inactive" href="#" onclick="$(this).toggleClass('inactive active').siblings('.detailsWindow').first().slideToggle(); return false;"> <span class="open">*Details</span> <span class="close">&times; Close</span> </a>
                    <div class="detailsWindow">
                    <p class="popHeader" style="text-transform: uppercase;"><strong>{{popHeaderCopy}}</strong></p>
                    <!-- Paste offer and promo code here -->

                    <p class="popup-text"><strong>{{disclaimerCopy}}</strong></p>
                    <strong><!-- Paste Exclusions here --><!-- do not edit below this line --></strong></div>
                    <strong> </strong></div>
                    </div>`,
        "siteStyles": `<style>

                    </style>`
    },
    "natBannerDesktopLinked": {
        "options": ["bgColor", "textColor", "bannerCopy", "popHeaderCopy", "disclaimerCopy", "linkURL"],
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
                    <div class="siteWidth"> <a href="{{linkURL}}"> <!-- hastebin Link --><p style="text-transform: uppercase; color: {{textColor}};">{{bannerCopy}}</p> </a> <!-- Image path --> <a class="detailsWindowLink inactive" href="#" onclick="$(this).toggleClass('inactive active').siblings('.detailsWindow').first().slideToggle(); return false;"> <span class="open">*Details</span> <span class="close">&times; Close</span> </a>
                    <div class="detailsWindow">
                    <p class="popHeader" style="text-transform: uppercase;"><strong>{{popHeaderCopy}}</strong></p>
                    <!-- Paste offer and promo code here -->

                    <p class="popup-text"><strong>{{disclaimerCopy}}</strong></p>
                    <strong><!-- Paste Exclusions here --><!-- do not edit below this line --></strong></div>
                    <strong> </strong></div>
                    </div>`,
        "siteStyles": `<style>

                    </style>`
    },
    "drsBanner": {
      "options": ["bannerCopy", "disclaimerCopy", "linkURL"],
      "template": `<script>
                      $('.newBannerDiv').ready( function() {
                       newTarget();
                      });
                    </script>

                    <style>
                      #TopMargin {padding-top: 100px !important;}
                    </style>

                    <div class="newBannerDiv" >

                      <div id="ls_sitewide_banner" class="wrapper sitewide_banner_wrapper">
                        <div class="container sitewide_banner">
                          <a href={{linkURL}} class="bannerLink">
                          <!-- Paste headline here >>>-->
                          <span class="promo-headline">
                            {{bannerCopy}}
                          </span> 
                          </a> 
                          <a class="sitewide_banner_toggle" href="#" onclick="swBanner(); return false;">details</a>
                          <a class="sitewide_banner_toggle close" href="#" onclick="swBanner(); return false;">close</a> 
                        </div><!-- .container -->

                        <!-- Paste disclaimer below -->
                        <div class="container banner_message">
                          {{disclaimerCopy}}
                        </div>
                        <!-- Paste disclaimer above -->

                      </div> <!-- .wrapper -->
                    </div> <!-- end newBannerDiv -->


                    <script type="text/javascript">
                      // TARGETED BANNER SCRIPT
                      function swBanner(){
                        $('.container.banner_message').slideToggle();
                        $('.sitewide_banner_toggle').toggle();
                        return false; 
                      };
                    </script>`,
      "siteStyles": `<style>
                      .newBannerDiv {
                        color:rgb(64, 64, 64);
                        display:block;
                        font-family:"Verlag A", "Verlag B", helvetica, arial, sans-serif;f
                        ont-size:14px;
                        height:0px;
                        line-height:21px;
                        text-size-adjust:100%;
                        width:1278px;
                        -webkit-font-smoothing:antialiased;
                      }
                      #ls_sitewide_banner {
                        background-attachment:scroll;
                        background-clip:border-box;
                        background-color:rgb(255, 255, 255);
                        background-image:none;
                        background-origin:padding-box;
                        background-position-x:0%;
                        background-position-y:0%;
                        background-repeat-x:;
                        background-repeat-y:;
                        background-size:auto;
                        color:rgb(64, 64, 64);
                        display:block;
                        float:left;
                        font-family:"Verlag A", "Verlag B", helvetica, arial, sans-serif;
                        font-size:14px;
                        height:40px;
                        line-height:21px;
                        padding-bottom:0px;
                        padding-left:0px;
                        padding-right:0px;
                        padding-top:0px;
                        text-align:center;
                        text-size-adjust:100%;
                        transition-delay:0s;
                        transition-duration:0.2s;
                        transition-property:all;
                        transition-timing-function:linear;
                        width:1278px;
                        -webkit-font-smoothing:antialiased;
                      }
                      .sitewide_banner {
                        box-sizing:border-box;
                        color:rgb(64, 64, 64);
                        display:block;
                        font-family:"Verlag A", "Verlag B", helvetica, arial, sans-serif;
                        font-size:14px;
                        height:40px;
                        line-height:21px;
                        margin-bottom:0px;
                        margin-left:0px;
                        margin-right:0px;
                        margin-top:0px;
                        max-width:none;
                        padding-bottom:8.00002px;
                        padding-left:75px;
                        padding-right:75px;
                        padding-top:8.00002px;
                        position:relative;
                        text-align:center;
                        text-size-adjust:100%;
                        width:1278px;
                        -webkit-font-smoothing:antialiased;
                      }
                      .bannerLink {
                        background-color:rgba(0, 0, 0, 0);
                        color:rgb(14, 28, 44);
                        cursor:auto;
                        display:inline;
                        font-family:Rokkitt-Bold, helvetica, arial, sans-serif;
                        font-size:16px;
                        height:auto;
                        line-height:24px;
                        text-align:center;
                        text-decoration:none;
                        text-size-adjust:100%;
                        width:auto;
                        -webkit-font-smoothing:antialiased;
                      }
                      .sitewide_banner_toggle {
                        background-color:rgba(0, 0, 0, 0);
                        color:rgb(14, 28, 44);
                        cursor:auto;
                        display:block;
                        font-family:Rokkitt-Bold, helvetica, arial, sans-serif;
                        font-size:16px;
                        height:24px;
                        line-height:24px;
                        position:absolute;
                        right:15px;
                        text-align:center;
                        text-decoration:underline;
                        text-size-adjust:100%;
                        top:8px;
                        width:44.7031px;
                        -webkit-font-smoothing:antialiased;
                      }
                      .close {
                        background-color:rgba(0, 0, 0, 0);
                        color:rgb(14, 28, 44);
                        cursor:auto;
                        display:none;
                        font-family:Rokkitt-Bold, helvetica, arial, sans-serif;
                        font-size:16px;
                        height:auto;
                        line-height:24px;
                        position:absolute;
                        right:15px;
                        text-align:center;
                        text-decoration:underline;
                        text-size-adjust:100%;
                        top:8px;
                        width:auto;
                        -webkit-font-smoothing:antialiased;
                      }
                      .banner_message {
                        box-sizing:border-box;
                        color:rgb(122, 122, 122);
                        display:none;
                        font-family:HelveticaNeue-Italic;
                        font-size:11px;
                        height:auto;
                        letter-spacing:normal;
                        line-height:16.5px;
                        margin-bottom:9.42854px;
                        margin-left:auto;
                        margin-right:auto;
                        margin-top:0px;
                        max-width:960px;
                        padding-bottom:0px;
                        padding-left:1.57146px;
                        padding-right:1.57146px;
                        padding-top:0px;
                        text-align:center;
                        text-size-adjust:100%;
                        width:90%;
                        word-spacing:0px;
                        -webkit-font-smoothing:antialiased;
                      }
                    </style>`
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
- Add input validation for before updating preview and before showing output (DONE)
- Add template for non-naturalizer brand. Need to get CSS to display properly 
  - One solution is to grab the styles for each element in template and create a styles property in the 
    template object that is injected into the preview div.



*************************/

































