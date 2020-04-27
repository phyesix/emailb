export default [
  {
    id: 0,
    name: "Skeleton",
    minifiedHTML: `<!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="x-apple-disable-message-reformatting"/> <title>{{head.title}}</title><!--[if mso]> <style>*{font-family: 'Roboto', sans-serif !important;}</style><![endif]--> <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet"> <style>/* What it does: Remove spaces around the email design added by some email clients. */ /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */ html, body{margin: 0 auto !important; padding: 0 !important; height: 100% !important; width: 100% !important;}body{font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';}.body{margin: 0 auto !important;}/* What it does: Stops email clients resizing small text. */ *{-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;}div, p, a, li, td{-webkit-text-size-adjust: none; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility;}/* What it does: Centers email on Android 4.4 */ div[style*="margin: 16px 0"]{margin: 0 !important;}/* What it does: Stops Outlook from adding extra spacing to tables. */ table, td{mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;}/* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */ table{border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;}table table table{table-layout: auto;}table, td{border-spacing: 0 !important; border-collapse:collapse !important;}/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */ a{text-decoration: none;}/* What it does: Uses a better rendering method when resizing images in IE. */ img{-ms-interpolation-mode:bicubic;}/* What it does: A work-around for email clients meddling in triggered links. */ *[x-apple-data-detectors], /* iOS */ .unstyle-auto-detected-links *, .aBn{border-bottom: 0 !important; cursor: default !important; color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important;}/* What it does: Prevents Gmail from changing the text color in conversation threads. */ .im{color: inherit !important;}/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */ .a6S{display: none !important; opacity: 0.01 !important;}/* If the above doesn't work, add a .g-img class to any image in question. */ img.g-img + div{display: none !important;}</style><!--[if mso]> <style type="text/css"> ul, ol{margin: 0 !important;}li{margin-left: 30px !important;}li.list-item-first{margin-top: 0 !important;}li.list-item-last{margin-bottom: 10px !important;}</style><![endif]--> <style>/* What it does: Hover styles for buttons */ .button-td, .button-a{transition: all 100ms ease-in;}/* .button-td-primary:hover, .button-a-primary:hover{background: #555555 !important; border-color: #555555 !important;}*/ .show-on-responsive{/*table-cell*/ display: none !important;;}/* Media Queries */ @media screen and (max-width: 700px){.email-container{width: 100% !important; margin: auto !important;}/* What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. */ .fluid{max-width: 100% !important; height: auto !important; margin-left: auto !important; margin-right: auto !important;}/* What it does: Forces table cells into full-width rows. */ .stack-column, .stack-column-center{display: block !important; width: 100% !important; max-width: 100% !important; direction: ltr !important;}/* And center justify these ones. */ .stack-column-center{text-align: center !important;}.stack-column-center h2, .stack-column-center p{text-align: center !important;}/* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */ .center-on-narrow{text-align: center !important; display: block !important; margin-left: auto !important; margin-right: auto !important; float: none !important;}table.center-on-narrow{display: inline-block !important;}/* What it does: Adjust typography on small screens to improve readability */ .email-container p{/*font-size: 17px !important;*/}.button-a{font-size: 16px !important; line-height: 1 !important;}/*Batu*/ /*u + .body{!*iOS Gmail app full width*!*/ /*min-width : 100vw !important;*/ /*margin: 0 auto !important;*/ /*}*/ table td{/*border-color : #ffffff !important;*/ /*background-color : #ffffff !important;*/}.social-networks{max-width: 200px !important;}/*Keeps these rules at the end for more priority*/ .inline-on-responsive{display: block !important; width: 100% !important; text-align: center !important;}.hide-on-responsive{/*replace with .stack-column-center*/ display: none !important;;}.show-on-responsive{/*table-cell*/ display: block !important;;}.full-center-responsive-logo{width: 100%;}.full-center-responsive-logo img{margin: 0 auto;}.mobile-padding-fix{padding-left: 15px !important; padding-right: 15px !important;}.g-img{width: 100%; height: auto;}}/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89 */ /* Create one of these media queries for each additional viewport size you'd like to fix */ @media screen and (max-width: 525px){.mobile-hidden{display: none !important;}}/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */ @media only screen and (min-width: 320px) and (max-width: 374px){u + .body{min-width: 320px !important; margin: 0 auto !important;}}/* iPhone 6, 6S, 7, 8, and X */ @media only screen and (min-width: 375px) and (max-width: 413px){u + .body{min-width: 375px !important; margin: 0 auto !important;}}/* iPhone 6+, 7+, and 8+ */ @media only screen and (min-width: 414px){u + .body{min-width: 414px !important; margin: 0 auto !important;}}/* fix align problem for iPhone 6 on gmail app */ @media only screen and (min-width: 375px) and (max-width: 413px){u + .body{min-width: 375px !important; width: 375px !important; margin: 0 auto !important;}}/* SAMSUNG MAIL ANDROID 7.0 WIDTH FIX */ #MessageViewBody, #MessageWebViewDiv{width: 100% !important; margin: 0 auto !important;}</style><!--[if gte mso 9]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]--> </head><!--The email background color (#222222) is defined in three places:1. body tag: for most email clients2. center tag: for Gmail and Inbox mobile apps and web versions of Gmail, GSuite, Inbox, Yahoo, AOL, Libero, Comcast, freenet, Mail.ru, Orange.fr3. mso conditional: For Windows 10 Mail--><body width="100%" style="width: 100%; margin: 0 auto !important; padding: 0 !important; mso-line-height-rule: exactly; background-color: #edf1f6;" class="body"><center style="width: 100%; margin: 0 auto !important; background-color: #edf1f6; "><!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%; background-color: #edf1f6;"> <tr> <td width="100%" style="width: 100%;"><![endif]--> <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; font-family: 'Roboto', sans-serif;">{{hidden-text}}</div><div style="display: none; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; font-family: 'Roboto', sans-serif;"> &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp; </div>{{injectHere}}<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto;" class="email-container"> <tr> <td height="40">&nbsp;</td></tr><tr> <td style="font-size: 18px; line-height: 1.7; text-align: center; color: #888888;"> <p style="margin: 0; padding: 0 10px;" class="locale"> Need help with anything? </p></td></tr><tr> <td style="font-size: 18px; line-height: 1.7; text-align: center; color: #888888;"> <p style="margin: 0; padding: 0 10px;" class="locale"> As always, our <a href="{{shortURL 'https://www.jotform.com/contact/?utm_source={{utm_source}}&utm_medium=email&utm_content=link_247&utm_campaign={{utm_campaign}}'}}&username={username}" style="color: #439dff; text-decoration: underline;">24/7 friendly support team</a> is here to help. </p></td></tr><tr> <td height="20">&nbsp;</td></tr><tr> <td style="font-size: 18px; line-height: 1.7; text-align: center; color: #888888;"> <p style="margin: 0; padding: 0 10px;" class="locale"> Warmest regards, </p></td></tr><tr> <td style="font-size: 18px; line-height: 1.7; text-align: center; color: #888888;"> <p style="margin: 0"> <img src="https://emails.jotform.com/img/common/ui-kit/podo.png?v={{version}}" width="100" alt="alt_text" border="0" class="fluid" style="height: auto; background: none; font-size: 15px; line-height: 15px; color: #555555; margin: 10px 0"> </p></td></tr><tr> <td style="font-size: 18px; line-height: 1.7; font-weight: bold; text-align: center; color: #888888;"> <p style="margin: 0; padding: 0 10px;" class="locale"> The JotForm Team </p></td></tr><tr> <td height="20">&nbsp;</td></tr><tr> <td align="center"><!--[if mso]> <table class="social-networks" role="presentation" cellspacing="0" cellpadding="0" border="0" width="450" style="width: 450px;" align="center"> <tr> <td width="450" style="width: 450px;"><![endif]--> <table class="social-networks" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" align="center" style="max-width: 450px"> <tr> <td class="inline-on-responsive"><!--[if mso]> <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="300" style="width: 300px;" align="center"> <tr> <td width="300" style="width: 300px;"><![endif]--> <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;" align="center"> <tr> <td align="center"> <a href="{{shortURL 'https://twitter.com/jotform/?utm_source={{utm_source}}&utm_medium=email&utm_content=social_twitter&utm_campaign={{utm_campaign}}'}}&username={username}" style="display: inline-block;"> <img src="https://emails.jotform.com/img/common/ui-kit/social/gray/twitter.png?v={{version}}" width="45" alt="alt_text" border="0" class="fluid" style="height: auto; background: none; font-size: 15px; line-height: 15px; color: #555555;"> </a> </td><td align="center"> <a href="{{shortURL 'https://www.facebook.com/JotForm/?utm_source={{utm_source}}&utm_medium=email&utm_content=social_facebook&utm_campaign={{utm_campaign}}'}}&username={username}" style="display: inline-block;"> <img src="https://emails.jotform.com/img/common/ui-kit/social/gray/facebook.png?v={{version}}" width="45" alt="alt_text" border="0" class="fluid" style="height: auto; background: none; font-size: 15px; line-height: 15px; color: #555555;"> </a> </td><td align="center"> <a href="{{shortURL 'https://www.linkedin.com/company/jotform/?utm_source={{utm_source}}&utm_medium=email&utm_content=social_linkedin&utm_campaign={{utm_campaign}}'}}&username={username}" style="display: inline-block;"> <img src="https://emails.jotform.com/img/common/ui-kit/social/gray/linkedin.png?v={{version}}" width="45" alt="alt_text" border="0" class="fluid" style="height: auto; background: none; font-size: 15px; line-height: 15px; color: #555555;"> </a> </td><td align="center"> <a href="{{shortURL 'https://www.jotform.com/blog/?utm_source={{utm_source}}&utm_medium=email&utm_content=social_blog&utm_campaign={{utm_campaign}}'}}&username={username}" style="display: inline-block;"> <img src="https://emails.jotform.com/img/common/ui-kit/social/gray/blog.png?v={{version}}" width="45" alt="alt_text" border="0" class="fluid" style="height: auto; background: none; font-size: 15px; line-height: 15px; color: #555555;"> </a> </td></tr></table><!--[if mso]> </td></tr></table><![endif]--> </td><td class="inline-on-responsive"><!--[if mso]> <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="300" style="width: 300px;" align="center"> <tr> <td width="300" style="width: 300px;"><![endif]--> <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;" align="center"> <tr> <td align="center"> <a href="{{shortURL 'https://www.pinterest.com/jotform/?utm_source={{utm_source}}&utm_medium=email&utm_content=social_pinterest&utm_campaign={{utm_campaign}}'}}&username={username}" style="display: inline-block;"> <img src="https://emails.jotform.com/img/common/ui-kit/social/gray/pinterest.png?v={{version}}" width="45" alt="alt_text" border="0" class="fluid" style="height: auto; background: none; font-size: 15px; line-height: 15px; color: #555555;"> </a> </td><td align="center"> <a href="{{shortURL 'https://www.instagram.com/jotform/?utm_source={{utm_source}}&utm_medium=email&utm_content=social_instagram&utm_campaign={{utm_campaign}}'}}&username={username}" style="display: inline-block;"> <img src="https://emails.jotform.com/img/common/ui-kit/social/gray/instagram.png?v={{version}}" width="45" alt="alt_text" border="0" class="fluid" style="height: auto; background: none; font-size: 15px; line-height: 15px; color: #555555;"> </a> </td><td align="center"> <a href="{{shortURL 'https://www.youtube.com/user/TheJotForm/?utm_source={{utm_source}}&utm_medium=email&utm_content=social_youtube&utm_campaign={{utm_campaign}}'}}&username={username}" style="display: inline-block;"> <img src="https://emails.jotform.com/img/common/ui-kit/social/gray/youtube.png?v={{version}}" width="45" alt="alt_text" border="0" class="fluid" style="height: auto; background: none; font-size: 15px; line-height: 15px; color: #555555;"> </a> </td><td align="center"> <a href="{{shortURL 'https://stories.jotform.com/?utm_source={{utm_source}}&utm_medium=email&utm_content=social_medium&utm_campaign={{utm_campaign}}'}}&username={username}" style="display: inline-block;"> <img src="https://emails.jotform.com/img/common/ui-kit/social/gray/medium.png?v={{version}}" width="45" alt="alt_text" border="0" class="fluid" style="height: auto; background: none; font-size: 15px; line-height: 15px; color: #555555;"> </a> </td></tr></table><!--[if mso]> </td></tr></table><![endif]--> </td></tr></table><!--[if mso]> </td></tr></table><![endif]--> </td></tr><tr> <td height="40">&nbsp;</td></tr><tr> <td align="center"><!--[if (gte mso 9)|(IE)]> <table align="center" border="0" cellspacing="0" cellpadding="0" width="450" style="width: 450px;"> <tr> <td align="center" valign="top" width="450" style="width: 450px;"><![endif]--> <table class="social-area" align="center" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 450px;"> <tr> <td class="social-area-td" width="49.5%"> <table width="100%" border="0" cellspacing="0" cellpadding="0" style="text-align: center"> <tr> <td align="right"> <a href="{{shortURL 'https://app.adjust.com/wbl5mhj?campaign={{utm_campaign}}&adgroup={{utm_source}}&creative=cta_ios'}}&username={username}&utm_campaign={{utm_campaign}}&utm_medium=email&utm_content=cta_footer_appstore&utm_source={{utm_source}}" style="text-decoration: none;" target="_blank"> <img src="https://emails.jotform.com/img/common/store-appstore-download.png?v={{version}}" alt="Mobile Forms on App Store" style="max-width: 95%; display: block;" width="170"> </a> </td></tr></table> </td><td width="1%"></td><td class="social-area-td" width="49.5%"> <table width="100%" border="0" cellspacing="0" cellpadding="0" style="text-align: center"> <tr> <td align="left"> <a href="{{shortURL 'https://app.adjust.com/wbl5mhj?fallback=https://play.google.com/store/apps/details?id=com.jotform.v2&campaign={{utm_campaign}}&adgroup={{utm_source}}&creative=cta_android'}}&username={username}&utm_campaign={{utm_campaign}}&utm_medium=email&utm_content=cta_footer_playstore&utm_source={{utm_source}}" style="text-decoration: none;" target="_blank"> <img src="https://emails.jotform.com/img/common/store-googleplay-getiton.png?v={{version}}" alt="Mobile Forms on Play Store" style="max-width: 95%; display: block;" width="170"> </a> </td></tr></table> </td></tr></table><!--[if (gte mso 9)|(IE)]> </td></tr></table><![endif]--> </td></tr><tr> <td height="40">&nbsp;</td></tr></table> <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%; margin: 0 auto;" bgcolor="#f6f7f9"> <tbody> <tr> <td> <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto;" class="email-container" > <tr> <td valign="top" style="padding: 20px;"><!--[if mso]> <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px;" align="center"> <tr> <td width="700" style="width: 700px;"><![endif]--> <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;"> <tr> <td style="text-align: center; font-size: 12px; line-height: 1.8; color: #595959;"> <p style="display: inline-block; margin: 0; max-width: 100%;" class="locale"><a href="{{shortURL 'https://www.jotform.com/?utm_source={{utm_source}}&utm_medium=email&utm_content=link_footer_jotform&utm_campaign={{utm_campaign}}'}}&username={username}" style="color:#fc8925; text-decoration: none; display: inline-block;">JotForm Inc.</a> 111 Pine St. Suite 1815, San Francisco, CA 94111</p></td></tr><tr> <td style="text-align: center; font-size: 12px; line-height: 1.8; color: #595959;"> <p style="display: inline-block; margin: 0; max-width: 100%;" class="locale">Receiving this since you have a JotForm account: <strong>{username}</strong>. No longer want to receive emails from JotForm?</p></td></tr><tr> <td> <img id="trackCode_eee" width="1" height="1" src="https://events.jotform.com/email/{tracking_formId}/?ref={utm_campaign}&res={username}" style="overflow:hidden; max-height:0; width: 1px; height: 1px; display: none;"/> </td></tr><tr> <td> <img id="trackCode_evr" width="1" height="1" src="https://www.google-analytics.com/collect?v=1&tid=UA-1170872-18&cid={username}&t=event&ec=email&ea=open&el={utm_campaign}&cs=SaleCampaign&cm=email&cn={utm_campaign}" style="overflow:hidden; max-height:0; width: 1px; height: 1px; display: none;"/> </td></tr><tr> <td style="font-size: 12px; line-height: 1.8; color: #595959;"><!--[if mso]> <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px;" align="center"> <tr> <td width="700" style="width: 700px;"><![endif]--> <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" align="center"> <tr> <td class="inline-on-responsive" style="text-align: right; font-size: 12px; line-height: 1.8; color: #595959;"> <p style="margin: 0; max-width: 100%;" class="locale"><a href="https://www.jotform.com/unsubscribe/{email}?ref={utm_campaign}&utm_campaign={utm_source}&utm_source={utm_campaign}&utm_medium=email&utm_content=unsubscribe_all" style="color:#f88924; text-decoration: none; line-height: 18px; font-size: 12px;">Unsubscribe</a> from JotForm emails</p></td><td class="hide-on-responsive" width="2%" style="text-align: center;"> <p style="margin: 0; max-width: 100%;">|</p></td><td class="inline-on-responsive" style="text-align: left;font-size: 12px; line-height: 1.8; color: #595959;"> <p style="margin: 0; max-width: 100%;" class="locale"><a href="https://www.jotform.com/unsubscribecampaign/{username}/{campaign_id}/{utm_campaign}/?utm_campaign={utm_source}&utm_source={utm_campaign}&utm_medium=email&utm_content=unsubscribe-campaign" style="color:#f88924; text-decoration: none; line-height: 18px; font-size: 12px;">Unsubscribe</a> from <span style="display: inline; text-transform: capitalize;">{campaign_type}</span> emails</p></td></tr></table><!--[if mso]> </td></tr></table><![endif]--> </td></tr></table><!--[if mso]> </td></tr></table><![endif]--> </td></tr></table> </td></tr></tbody> </table><!--[if mso | IE]></td></tr></table><![endif]--> </center></body></html>`
  },
  {
    id: 10,
    name: "LogoLeft",
    visible: true,
    params: {
      utm_campaign: {
        inherit: true,
        title: "UTM Campaign",
        val: "",
        input: {
          type: "text"
        }
      },
      utm_source: {
        inherit: true,
        title: "UTM Source",
        val: "",
        input: {
          type: "text"
        }
      },
      href: {
        title: "Link",
        val: "https://www.jotform.com/",
        input: {
          type: "url"
        }
      }
    },
    minifiedHTML: ` <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto; text-align: center" class="email-container"> <tr> <td height="20">&nbsp;</td></tr><tr> <td><!--[if mso]> <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px;" align="center"> <tr> <td width="700" style="width: 700px;"><![endif]--> <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;" align="center"> <tr> <td align="left" class="full-center-responsive-logo"><a href="{{shortURL 'https://www.jotform.com/?utm_source={{utm_source}}&utm_medium=email&utm_content=newsletter-logo&utm_campaign={{utm_campaign}}'}}&username={username}" style="outline: none; text-decoration: none; display: block; "><img src="https://emails.jotform.com/img/common/ui-kit/logo.png?v={{version}}" width="160" alt="Jotform" border="0" style="height: auto; background: none; font-size: 16px; line-height: 15px; color: #555555; display: block;"></a></td><td align="right" class="hide-on-responsive"><a href="https://emails.jotform.com/{{url}}/{username}?utm_source={{utm_source}}&utm_medium=email&utm_content=link_view_in_browser&utm_campaign={{utm_campaign}}&email={email}&campaign_id={campaign_id}" rel="nofollow" style="font-size: 10px; color: transparent; text-decoration: none; ">View this email in your browser</a></td></tr></table><!--[if mso]> </td></tr></table><![endif]--> </td></tr><tr> <td height="20"></td></tr></table>`,
    html: `<!--logoLeft-->
    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto; text-align: center" class="email-container">
        <tr>
            <td height="20">&nbsp;</td>
        </tr>
        <tr>
            <td>
                <!--[if mso]>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px;" align="center">
                    <tr>
                        <td width="700" style="width: 700px;">
                <![endif]-->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;" align="center">
                    <tr>
                        <td align="left" class="full-center-responsive-logo"><a href="{{shortURL 'https://www.jotform.com/?utm_source={{utm_source}}&utm_medium=email&utm_content=newsletter-logo&utm_campaign={{utm_campaign}}'}}&username={username}" style="outline: none; text-decoration: none; display: block; "><img src="https://emails.jotform.com/img/common/ui-kit/logo.png?v={{version}}" width="160" alt="Jotform" border="0" style="height: auto; background: none; font-size: 16px; line-height: 15px; color: #555555; display: block;"></a></td>
                        <td align="right" class="hide-on-responsive"><a href="https://emails.jotform.com/{{url}}/{username}?utm_source={{utm_source}}&utm_medium=email&utm_content=link_view_in_browser&utm_campaign={{utm_campaign}}&email={email}&campaign_id={campaign_id}" rel="nofollow" style="font-size: 10px; color: transparent; text-decoration: none; ">View this email in your browser</a></td>
                    </tr>
                </table>
                <!--[if mso]>
                </td>
                </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
        <tr>
            <td height="20"></td>
        </tr>
    </table>
    
    <!--/logoLeft-->
    `
  },
  {
    id: 1,
    name: "LogoCenter",
    visible: true,
    params: {
      utm_campaign: {
        inherit: true,
        title: "UTM Campaign",
        val: "",
        input: {
          type: "text"
        }
      },
      utm_source: {
        inherit: true,
        title: "UTM Source",
        val: "",
        input: {
          type: "text"
        }
      },
      href: {
        title: "Link",
        val: "https://www.jotform.com/",
        input: {
          type: "url"
        }
      }
    },
    minifiedHTML: `<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto; text-align: center" class="email-container" > <tr> <td height="20">&nbsp;</td></tr><tr> <td align="center"> <a href="{{shortURL 'https://www.jotform.com/?utm_source={{utm_source}}&utm_medium=email&utm_content=newsletter-logo&utm_campaign={{utm_campaign}}'}}&username={username}" style="outline: none; text-decoration: none; display: block;" ><img src="https://emails.jotform.com/img/common/ui-kit/logo.png?v={{version}}" width="160" alt="Jotform" border="0" style="height: auto; background: none; font-size: 15px; line-height: 15px; color: #555555; display: block;"/></a> </td></tr><tr> <td height="20" style="overflow: hidden;"> <a href="https://emails.jotform.com/{{url}}/{username}?utm_source={utm_source}&utm_medium=email&utm_content=link_view_in_browser&utm_campaign={utm_campaign}&email={email}&campaign_id={campaign_id}" rel="nofollow" style="font-size: 10px; color: transparent; text-decoration: none; " >View this email in your browser</a > </td></tr></table>`,
    html: `<!--logoCenter-->
    <table
      align="center"
      role="presentation"
      cellspacing="0"
      cellpadding="0"
      border="0"
      width="700"
      style="width: 700px; margin: 0 auto; text-align: center"
      class="email-container"
    >
      <tr>
        <td height="20">&nbsp;</td>
      </tr>
      <tr>
        <td align="center">
          <a
            href="{{shortURL '{{href}}/?utm_source={{utm_source}}&utm_medium=email&utm_content=newsletter-logo&utm_campaign={{utm_campaign}}'}}&username={username}"
            style="outline: none; text-decoration: none; display: block;"
            ><img
              src="https://emails.jotform.com/img/common/ui-kit/logo.png?v={{version}}"
              width="160"
              alt="Jotform"
              border="0"
              style="height: auto; background: none; font-size: 15px; line-height: 15px; color: #555555; display: block;"
          /></a>
        </td>
      </tr>
      <tr>
        <td height="20" style="overflow: hidden;">
          <a
            href="https://emails.jotform.com/{{url}}/{username}?utm_source={utm_source}&utm_medium=email&utm_content=link_view_in_browser&utm_campaign={utm_campaign}&email={email}&campaign_id={campaign_id}"
            rel="nofollow"
            style="font-size: 10px; color: transparent; text-decoration: none; "
            >View this email in your browser</a
          >
        </td>
      </tr>
    </table>
    
    <!--/logoCenter-->
    `
  },
  {
    id: 2,
    name: `HeroImgFull`,
    visible: true,
    params: {
      utm_campaign: {
        inherit: true,
        title: "UTM Campaign",
        val: "",
        input: {
          type: "text"
        }
      },
      utm_source: {
        inherit: true,
        title: "UTM Source",
        val: "",
        input: {
          type: "text"
        }
      },
      href: {
        title: "Link",
        val: "",
        input: {
          type: "url"
        }
      },
      src: {
        title: "Source",
        val: "https://via.placeholder.com/1200x500",
        input: {
          type: "url"
        }
      }
    },
    minifiedHTML: `<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto;" class="email-container" bgcolor="#ffffff" > <tbody> <tr> <td> <a href="#" style="outline: none; text-decoration: none;" ><img src="https://via.placeholder.com/1200x700" width="700" height="" alt="{{head.title}}" border="0" style="width: 100%; max-width: 700px; height: auto; background: #dddddd; font-size: 15px; line-height: 15px; color: #555555; margin: auto; display: block;" class="g-img"/></a> </td></tr><tr> <td height="40"></td></tr></tbody> </table>`,
    html: `<!--mailImage-->
    <table
      align="center"
      role="presentation"
      cellspacing="0"
      cellpadding="0"
      border="0"
      width="700"
      style="width: 700px; margin: 0 auto;"
      class="email-container"
      bgcolor="#ffffff"
    >
      <tbody>
        <tr>
          <td>
            <a href="{{shortURL '{{href}}/?utm_source={{utm_source}}&utm_medium=email&utm_content=newsletter-hero-image&utm_campaign={{utm_campaign}}'}}&username={username}" style="outline: none; text-decoration: none;"
              ><img
                src="{{src}}"
                width="700"
                height=""
                alt="{{head.title}}"
                border="0"
                style="width: 100%; max-width: 700px; height: auto; background: #dddddd; font-size: 15px; line-height: 15px; color: #555555; margin: auto; display: block;"
                class="g-img"
            /></a>
          </td>
        </tr>
        <tr>
          <td height="40"></td>
        </tr>
      </tbody>
    </table>
    <!--/mailImage-->
    `
  },
  {
    id: 3,
    name: `Paragraph`,
    visible: true,
    editableContent: true,
    params: {
      align: {
        title: "Align",
        val: "left",
        input: {
          type: "select",
          options: [
            { title: "Left", value: "left" },
            { title: "Center", value: "center" },
            { title: "Right", value: "right" }
          ]
        }
      },
      utm_campaign: {
        inherit: true,
        title: "UTM Campaign",
        val: "",
        input: {
          type: "text"
        }
      },
      utm_source: {
        inherit: true,
        title: "UTM Source",
        val: "",
        input: {
          type: "text"
        }
      },
      href: {
        title: "Link",
        val: "",
        input: {
          type: "url"
        }
      },
      content: {
        title: "Content",
        val: "",
        input: {
          type: "text"
        }
      }
    },
    minifiedHTML: `<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto;" class="email-container" bgcolor="#ffffff" > <tbody> <tr> <td> <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;" > <tr> <td class="mobile-padding-fix" style="padding: 0 40px 40px; font-size: 16px; line-height: 30px; color: #464646; text-align: left;" > <a href="{{shortURL 'https://www.jotform.com/?utm_source={{utm_source}}&utm_medium=email&utm_content={{utm_content}}&utm_campaign={{utm_campaign}}'}}&username={username}" style="color: #464646; text-decoration: none;"> <p style="margin: 0 0 10px; font-size: 18px; line-height: 32px; color: #464646;" >{{content}}</p></a> </td></tr></table> </td></tr></tbody> </table>`,
    html: `<!--paragraph-->
    <table
      align="center"
      role="presentation"
      cellspacing="0"
      cellpadding="0"
      border="0"
      width="700"
      style="width: 700px; margin: 0 auto;"
      class="email-container"
      bgcolor="#ffffff"
    >
      <tbody>
        <tr>
          <td>
            <table
              role="presentation"
              cellspacing="0"
              cellpadding="0"
              border="0"
              width="100%"
              style="width: 100%;"
            >
              <tr>
                <td
                  class="mobile-padding-fix"
                  style="padding: 0 40px 40px; font-size: 16px; line-height: 30px; color: #464646; text-align: left;"
                >
                  <a href="{{shortURL '{{href}}/?utm_source={{utm_source}}&utm_medium=email&utm_content={{utm_content}}&utm_campaign={{utm_campaign}}'}}&username={username}" style="color: #464646; text-decoration: none;">
                    <p
                      style="margin: 0 0 10px; font-size: 18px; line-height: 32px; color: #464646;"
                    >
                      {{content}}
                    </p>
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!--/paragraph-->
    `
  },
  {
    id: 4,
    name: `VideoThumbnail`,
    visible: true,
    params: {
      utm_campaign: {
        inherit: true,
        title: "UTM Campaign",
        val: "",
        input: {
          type: "text"
        }
      },
      utm_source: {
        inherit: true,
        title: "UTM Source",
        val: "",
        input: {
          type: "text"
        }
      },
      href: {
        title: "Link",
        val: "",
        input: {
          type: "url"
        }
      },
      headline: {
        title: "Headline",
        val: "Watch our {month} newsletter on YouTube",
        input: {
          type: "text"
        }
      },
      src: {
        title: "Source",
        val: "",
        input: {
          type: "url"
        }
      }
    },
    minifiedHTML: `<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto;" class="email-container"><tr><td dir="ltr" valign="top" width="100%" style="padding: 0 40px 40px; background-color: #ffffff;"><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;"><tr><td width="250" style="width: 250px;" class="stack-column-center"><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;"><tr><td dir="ltr" valign="top" style="padding: 0 10px 0 0;"><a href="{{href}}" style="outline: none; text-decoration: none;"><img src="{{src}}" width="230" height="130" alt="Youtube" border="0" class="center-on-narrow" style="height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555; display: block; max-width: 100%;"></a></td></tr></table></td><td class="stack-column-center"><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;"><tr><td dir="ltr" valign="top" style="font-size: 24px; line-height: 1.3; color: #464646; padding: 0; text-align: left;" class="center-on-narrow"><h2 style="margin: 10px 0; color: #464646; font-weight: bold; text-align: left; font-size: 20px; line-height: 27px"><a href="#" style="color:#464646; text-decoration: none;">Watch our {{month}} Newsletter on YouTube</a></h2><p style="margin: 0; color:#707070; font-size: 20px; line-height: 27px; font-weight: 700;"><a href="{{href}}" style="color:#707070; text-decoration: none;">JotForm</a></p></td></tr></table></td></tr></table></td></tr></table>`,
    html: `<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto;" class="email-container">
    <tr>
      <td dir="ltr" valign="top" width="100%" style="padding: 0 40px 40px; background-color: #ffffff;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;">
          <tr>
            <!-- Column : BEGIN -->
            <td width="250" style="width: 250px;" class="stack-column-center">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;">
                <tr>
                  <td dir="ltr" valign="top" style="padding: 0 10px 0 0;">
                    <a href="#" style="outline: none; text-decoration: none;"><img src="{{src}}" width="230" height="130" alt="Youtube" border="0" class="center-on-narrow" style="height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555; display: block; max-width: 100%;"></a>
                  </td>
                </tr>
              </table>
            </td>
            <td class="stack-column-center">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;">
                <tr>
                  <td dir="ltr" valign="top" style="font-size: 24px; line-height: 1.3; color: #464646; padding: 0; text-align: left;" class="center-on-narrow">
                    <h2 style="margin: 10px 0; color: #464646; font-weight: bold; text-align: left; font-size: 20px; line-height: 27px"><a href="#" style="color:#464646; text-decoration: none;">{{headline}}</a></h2>
                    <p style="margin: 0; color:#707070; font-size: 20px; line-height: 27px; font-weight: 700;"><a href="#" style="color:#707070; text-decoration: none;">JotForm</a></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
    `
  },
  {
    id: 5,
    name: `SectionDivider`,
    visible: true,
    params: {},
    minifiedHTML: `<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto;" class="email-container" bgcolor="#ffffff"><tr><td><center style="width: 100%;"><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="90%" style="width: 90%;"><tr><td aria-hidden="true" height="1" style="font-size: 0; line-height: 0; background-color: #edf1f6;" bgcolor="#edf1f6">&nbsp;</td></tr><tr><td aria-hidden="true" height="39" style="font-size: 0; line-height: 0;">&nbsp;</td></tr></table></center></td></tr></table>`,
    html: `<!--sectionDivider-->
    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto;" class="email-container" bgcolor="#ffffff">
      <tr>
        <td>
          <center style="width: 100%;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="90%" style="width: 90%;">
              <tr>
                <td aria-hidden="true" height="1" style="font-size: 0; line-height: 0; background-color: #edf1f6;" bgcolor="#edf1f6">
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td aria-hidden="true" height="39" style="font-size: 0; line-height: 0;">
                  &nbsp;
                </td>
              </tr>
            </table>
          </center>
        </td>
      </tr>
    </table>
    <!--/sectionDivider-->
    `
  },
  {
    id: 6,
    name: `HeadingLvl1`,
    visible: true,
    editableContent: true,
    params: {
      align: {
        title: "Align",
        val: "center",
        input: {
          type: "select",
          options: [
            { title: "Left", value: "left" },
            { title: "Center", value: "center" },
            { title: "Right", value: "right" }
          ]
        }
      },
      utm_campaign: {
        inherit: false,
        title: "UTM Campaign",
        val: "",
        input: {
          type: "text"
        }
      },
      utm_source: {
        inherit: false,
        title: "UTM Source",
        val: "paragraph",
        input: {
          type: "text"
        }
      },
      href: {
        title: "Link",
        val: "https://www.jotform.com/",
        input: {
          type: "url"
        }
      },
      content: {
        title: "Heading",
        val: "Heading Level 1",
        input: {
          type: "text"
        }
      }
    },
    minifiedHTML: `<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto;" class="email-container" bgcolor="#ffffff"><tbody><tr><td><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;"><tr><td class="mobile-padding-fix" style="padding: 0 40px 40px; font-size: 24px; line-height: 33px; font-weight: 700; color: #464646;"><h1 style="margin: 0; font-size: 24px; line-height: 33px; font-weight: 700; text-align:{{align}}; color: #464646;">{{content}}</h1></td></tr></table></td></tr></tbody></table>`,
    html: `<!--h1-->
    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto;" class="email-container" bgcolor="#ffffff">
      <tbody>
      <tr>
        <td>
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;">
            <tr>
              <td class="mobile-padding-fix" style="padding: 0 40px 40px; font-size: 24px; line-height: 33px; font-weight: 700; color: #464646;">
                <h1 style="margin: 0; font-size: 24px; line-height: 33px; font-weight: 700; text-align: {{align}}; color: #464646;">{{content}}</h1>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      </tbody>
    </table>
    <!--/h1-->
    `
  },
  {
    id: 7,
    name: `HeadingLvl2`,
    visible: true,
    editableContent: true,
    params: {
      align: {
        title: "Align",
        val: "center",
        input: {
          type: "select",
          options: [
            { title: "Left", value: "left" },
            { title: "Center", value: "center" },
            { title: "Right", value: "right" }
          ]
        }
      },
      utm_campaign: {
        inherit: true,
        title: "UTM Campaign",
        val: "",
        input: {
          type: "text"
        }
      },
      utm_source: {
        inherit: true,
        title: "UTM Source",
        val: "",
        input: {
          type: "text"
        }
      },
      href: {
        title: "Link",
        val: "https://www.jotform.com/",
        input: {
          type: "url"
        }
      },
      content: {
        title: "Heading",
        val: "Heading Level 2",
        input: {
          type: "text"
        }
      }
    },
    minifiedHTML: `<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto;" class="email-container" bgcolor="#ffffff"><tbody><tr><td><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;"><tr><td class="mobile-padding-fix" style="padding: 0 40px 40px; font-size: 21px; line-height: 32px; font-weight: 700; color: #464646;"><h2 style="margin: 0; font-size: 21px; line-height: 32px; font-weight: 700; text-align: left; color: #464646;">{{content}}</h2></td></tr></table></td></tr></tbody></table>`,
    html: `<!--h2-->
    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto;" class="email-container" bgcolor="#ffffff">
      <tbody>
      <tr>
        <td>
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;">
            <tr>
              <td class="mobile-padding-fix" style="padding: 0 40px 40px; font-size: 21px; line-height: 32px; font-weight: 700; color: #464646;">
                <h2 style="margin: 0; font-size: 21px; line-height: 32px; font-weight: 700; text-align: left; color: #464646;">{{content}}</h2>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      </tbody>
    </table>
    <!--/h2-->
    `
  },
  {
    id: 8,
    name: `SectionImage`,
    visible: true,
    params: {
      utm_campaign: {
        inherit: true,
        title: "UTM Campaign",
        val: "",
        input: {
          type: "text"
        }
      },
      utm_source: {
        inherit: true,
        title: "UTM Source",
        val: "",
        input: {
          type: "text"
        }
      },
      href: {
        title: "Link",
        val: "",
        input: {
          type: "text"
        }
      },
      src: {
        title: "Source",
        val: "https://via.placeholder.com/1200x500",
        input: {
          type: "url"
        }
      }
    },
    minifiedHTML: `<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto;" class="email-container" bgcolor="#ffffff"><tbody><tr><td><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;"><tr><td class="mobile-padding-fix" style="padding: 0 40px 40px;"><a href="#" style="outline: none; text-decoration: none;"><img src="https://via.placeholder.com/1200x500" width="620" height="" alt="" border="0" style="width: 100%; max-width: 620px; height: auto; background: #dddddd; font-size: 15px; line-height: 15px; color: #555555; margin: auto; display: block;" class="g-img"></a></td></tr></table></td></tr></tbody></table>`,
    html: `<!--sectionImage-->
    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto;" class="email-container" bgcolor="#ffffff">
      <tbody>
      <tr>
        <td>
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;">
            <tr>
              <td class="mobile-padding-fix" style="padding: 0 40px 40px;">
                <a href="#" style="outline: none; text-decoration: none;"><img src="{{src}}" width="620" height="" alt="" border="0" style="width: 100%; max-width: 620px; height: auto; background: #dddddd; font-size: 15px; line-height: 15px; color: #555555; margin: auto; display: block;" class="g-img"></a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      </tbody>
    </table>
    <!--/sectionImage-->
    `
  },
  {
    id: 9,
    name: `CTA_Full`,
    visible: true,
    editableContent: true,
    params: {
      align: {
        title: "Text Align",
        val: "center",
        input: {
          type: "text"
        }
      },
      utm_campaign: {
        inherit: true,
        title: "UTM Campaign",
        val: "",
        input: {
          type: "text"
        }
      },
      utm_source: {
        inherit: true,
        title: "UTM Source",
        val: "",
        input: {
          type: "text"
        }
      },
      href: {
        title: "Link",
        val: "",
        input: {
          type: "url"
        }
      },
      content: {
        title: "CTA Text",
        val: "CTA",
        input: {
          type: "text"
        }
      }
    },
    minifiedHTML: `<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto;" class="email-container" bgcolor="#ffffff"><tr><td><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;"><tr><td class="mobile-padding-fix" style="padding: 0 40px 40px;"><table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width: 100%; margin: auto;" width="100%" bgcolor="#ffffff"><tr><td class="button-td button-td-primary" style="border-radius: 8px; background: #F88924;"><a class="button-a button-a-primary" href="{{href}}" style="background: #F88924; border: 1px solid #F88924; font-size: 21px; line-height: 1; text-decoration: none; padding: 16px 0; color: #ffffff; display: block; border-radius: 8px; text-align: center;"><span style="padding:0 25px; display:block; text-align: center;">{{content}}</span></a></td></tr></table></td></tr></table></td></tr></table>`,
    html: `<!--button-full-->
    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" style="width: 700px; margin: 0 auto;" class="email-container" bgcolor="#ffffff">
      <tr>
        <td>
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;">
            <tr>
              <td class="mobile-padding-fix" style="padding: 0 40px 40px;">
                <!-- Button : BEGIN -->
                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width: 100%; margin: auto;" width="100%" bgcolor="#ffffff">
                  <tr>
                    <td class="button-td button-td-primary" style="border-radius: 8px; background: #F88924;">
                      <a class="button-a button-a-primary" href="{{href}}" style="background: #F88924; border: 1px solid #F88924; font-size: 21px; line-height: 1; text-decoration: none; padding: 16px 0; color: #ffffff; display: block; border-radius: 8px; text-align: {{align}};"><span style="padding:0 25px; display:block; text-align: center;">{{content}}</span></a>
                    </td>
                  </tr>
                </table>
                <!-- Button : END -->
              </td>
            </tr>

          </table>
        </td>
      </tr>
      <!-- 1 Column Text + Button : END -->
    </table>
    <!--/button-full-->
    `
  }
];
