const express = require('express');
const app = express();
const port = 3000; // Укажите порт, на котором будет работать сервер

// Задайте маршрут для получения конфигурации
app.get('/generate-error', (req, res) => {
  try {
    // Генерация ошибки (например, вызов несуществующей функции)
    nonExistentFunction();
  } catch (error) {
    // Отправка ошибки 500 и сообщения об ошибке
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/get-config', (req, res) => {
  // Здесь верните JSON-конфиг
  const config = {
  "General": {
    "Main_Page_URL": "https://coastalanglermag.com/coastal-angler-magazine-national-edition-app/",
    "Preload_Main_Page_URL": false,
    "Remote_Server_Available": false,
    "Remote_Server_Root_URL": "",
    "Development_Always_Download_New_Config": true,
    "Allow_Local_Caching_For_Offline_Mode": false,
    "Welcome_Screen_URL": "",
    "Welcome_Screen_Required_Version": "1.0",
    "Multi_Configuration_URL": "",
    "Configuration_Id": "",
    "Disable_Custom_User_Agent": false,
    "Is_Webview_Load_Reporting_Disabled": false
  },
  "App_Permissions": {
    "iOS_Enable_Push_Notifications": true,
    "Android_Enable_Location": false,
    "iOS_Transparency_Tracker": true,
    "Android_Advertising_ID": false
  },
  "Navigation": {
    "Enable_Webview_Transition_Animation": false,
    "Show_Splash_Loading_Progress": true,
    "Enable_Progress_View": true,
    "iOS_Pull_To_Refresh": true,
    "Android_Pull_To_Refresh": true,
    "Open_Internal_Links_In_A_New_Screen": true,
    "Open_External_Links_In_A_New_Screen": true,
    "Open_Links_In_A_New_Screen": true,
    "Open_External_Links_In_App": true,
    "iOS_Back_Button_Bar": true,
    "Android_Back_Button_Bar": false,
    "Share_Button": true,
    "Exit_App_With_Back_Button": true,
    "iOS_Back_Swipe": false,
    "Enable_View_Controller": false
  },
  "Tab_Menu": {
    "Show_Tab_Menu": true,
    "Auto_Hide_Tab_Menu_On_Scroll": false,
    "Items": [
      {
        "Background_Color": "#FFFFFF",
        "Status_Bar_Color": "#000000",
        "Preload": false,
        "Icon_Font": null,
        "Icon_Font_Name": "fahome",
        "Icon_URL": null,
        "Active_Icon_URL": null,
        "URL": "https://artemmana3.github.io",
        "Label": {
          "en": "Home"
        },
        "Type": "Webview",
        "Icon_Font_Name_Web": "fa-home"
      },
      {
        "Tab_Alerts_URL": "https://coastalanglermag.com/canvas-api/notifications",
        "Tab_Alerts_Display": false,
        "Tab_Settings_Title": "Push Notifications",
        "Background_Color": "#FFFFFF",
        "Status_Bar_Color": "#000000",
        "Icon_Font": null,
        "Icon_Font_Name": "faleanpub",
        "Icon_URL": null,
        "Active_Icon_URL": null,
        "URL": "https://coastalanglermag.com/e-magazine/",
        "Label": {
          "en": "Print Mags"
        },
        "Type": "Webview",
        "Preload": false,
        "Icon_Font_Name_Web": "fa-leanpub"
      },
      {
        "Background_Color": "#FFFFFF",
        "Status_Bar_Color": "#000000",
        "Preload": false,
        "Icon_Font": null,
        "Icon_Font_Name": "faleanpub",
        "Icon_URL": null,
        "Active_Icon_URL": null,
        "URL": "https://coastalanglermag.com/the-angler-video-magazine/",
        "Label": {
          "en": "Video Mag"
        },
        "Type": "Webview",
        "Icon_Font_Name_Web": "fa-leanpub"
      },
      {
        "Tab_Alerts_Label": "Alerts",
        "Tab_Interests_Label": "Interests",
        "Tab_Settings_Label": "Settings",
        "Tab_Alerts_URL": "https://coastalanglermag.com/canvas-api/notifications",
        "Tab_Alerts_Display": false,
        "Tab_Settings_Title": "Push Notifications",
        "General_Alerts_Switch_Label": "Receive alerts",
        "Background_Color": "#FFFFFF",
        "Status_Bar_Color": "#000000",
        "Icon_Font": null,
        "Icon_Font_Name": "fabell",
        "Icon_URL": null,
        "Active_Icon_URL": null,
        "URL": null,
        "Label": {
          "en": "Alerts"
        },
        "Type": "Alerts",
        "Icon_Font_Name_Web": "fa-bell"
      }
    ]
  },
  "Regex_Internal_External": {
    "Internal_External_Rules": [
      {
        "Regex": "https?://([-\\w]+\\.)*example\\.com/?.*",
        "Internal": false
      },
      {
        "Regex": "https?://([-\\w]+\\.)*example\\.com/?.*",
        "Internal": false
      }
    ]
  },
  "Errors": {
    "Unable_To_Start_Message": "The app could not start, please check your connection",
    "Unable_To_Start_Button": "Try again",
    "No_Connection": "No Network detected"
  },
  "Styling": {
    "Highlight_Color": "#144179",
    "Status_Bar_Color": "#000000",
    "View_Background_Color": "#FFFFFF",
    "Android_Theme": "light",
    "iOS_Theme": "light",
    "iOS_Translucency": false,
    "No_Internet_Connection_Color": "#ff0000",
    "No_Internet_Connection_Text_Color": "#FFFFFF",
    "Tab_Bar_Loading_Progress_Color": "#177fb6",
    "Tab_Bar_Background_Color": "#ffffff",
    "Tab_Bar_Selected_Tab_Color": "#177fb6",
    "Android_Tab_Bar_Disabled_Tab_Color": "#929292",
    "Android_UI_Tab_Background_Color": "#f2f2f2",
    "Android_UI_Tab_Selected_Color": "#000000",
    "Android_UI_Tab_Disabled_Color": "#929292",
    "Android_Alerts_Tab_Bar_Bottom_Line_Selector": "#177fb6",
    "iOS_UI_Tab_Selected_Color": "#177fb6",
    "iOS_UI_Tab_Disabled_Color": "#999999",
    "Webpage_Unavailable_Button_Color": "#177fb6",
    "Android_Toggle_Switch_Thumb_Color_On": "#177fb6",
    "Android_Toggle_Switch_Thumb_Color_Off": "#EEEEEE",
    "Android_Toggle_Switch_Background_Color_On": "#D2D4D2",
    "Android_Toggle_Switch_Background_Color_Off": "#D2D4D2",
    "iOS_Toggle_Switch_Thumb_Color_On": "#FFFFFF",
    "iOS_Toggle_Switch_Thumb_Color_Off": "#FFFFFF",
    "iOS_Toggle_Switch_Background_Color_On": "#177fb6",
    "iOS_Toggle_Switch_Background_Color_Off": "#FFFFFF",
    "Splash_Screen_Loading_Progress_Color": "#FFFFFF",
    "Splash_Screen_Loading_Background_Color": "#000000",
    "Progress_View_Spinner_Color": "#000000",
    "iOS_Loading_Spinner": true,
    "iOS_Loading_Spinner_Color": "#177fb6",
    "iOS_Loading_Spinner_Position": "middle",
    "iOS_Loading_Spinner_Overlay": false,
    "iOS_Loading_Spinner_Overlay_Color": "#000000",
    "iOS_Loading_Spinner_Overlay_Opacity": "0.6",
    "Android_Loading_Spinner": true,
    "Android_Loading_Spinner_Color": "#177fb6",
    "Android_Loading_Spinner_Position": "middle",
    "Android_Loading_Spinner_Overlay": false,
    "Android_Loading_Spinner_Overlay_Color": "#000000",
    "Android_Loading_Spinner_Overlay_Opacity": "0.6",
    "Back_Button_Bar_Button_Color": "#999999",
    "Back_Button_Bar_Spinner_Color": "#FFFFFF",
    "Back_Button_Bar_Background_Color": "#FFFFFF",
    "Tab_Bar_Unselected_Tab_Color": "#999999",
    "Tab_Bar_Click_Effect": true,
    "iOS_Tab_Bar_Border": true,
    "iOS_Tab_Bar_Border_Color": "#DDDDDD",
    "Switch_Background_Color": "#FFFFFF",
    "Switch_Selected_Icon_Color": "#177fb6",
    "Switch_Unselected_Icon_Color": "#DADADA"
  },
  "App_Rater": {
    "Enable_App_Rater": false,
    "Feedback_Email_Address": "support@yourname.com",
    "Popup_Display_Delay_On_Trigger": "5",
    "Minimum_Launches_Until_Next_Prompt": "10",
    "Minimum_Days_Until_Next_Prompt": "10"
  },
  "Push_Notifications": {
    "Tags": [
      {
        "Id": "main_alerts",
        "Label": {
          "en": "Main Alerts"
        },
        "Type": "OneSignal",
        "Requires_Login": false
      },
      {
        "Id": "newsletter",
        "Label": {
          "en": "Newsletter"
        },
        "Type": "OneSignal",
        "Requires_Login": false
      }
    ]
  },
  "Redirect": {
    "Redirect_Items": [
      {
        "Regex": "",
        "Type": "SHARE"
      },
      {
        "Regex": "",
        "Type": "ALERTS_LIST"
      },
      {
        "Regex": "",
        "Type": "ALERTS_SETTINGS"
      },
      {
        "Regex": "",
        "Type": "ALERTS_INTERESTS"
      }
    ]
  },
  "Deep_Linking": {
    "Allow_Deep_Linking": false
  },
  "Code_Injecting": {
    "Enable_Injecting": true,
    "Code_Injecting_Items": [
      {
        "Regex": "https://artemmana3\\.github\\.io/*",
        "Code": "function mlDetectClick(text) {  const CANCEL_STRINGS = ['Empty cart', 'Complete purchase'];   const SCHEDULE_STRINGS = ['Add to cart'];      if (CANCEL_STRINGS.includes(text)) {    nativeFunctions.cancelLocalNotifications();   } else if (SCHEDULE_STRINGS.includes(text)) {    nativeFunctions.scheduleLocalNotifications();   } }  document.addEventListener('click', e => {  const buttonText = e.target.innerText;  mlDetectClick(buttonText) });",
        "Code_Url": null,
        "Type": "JS"
      },
      {
        "Regex": null,
        "Code_Url": null,
        "Type": "CSS"
      },
      {
        "Regex": "https://artemmana3\\.github\\.io/*",
        "Code_Url": null,
        "Type": "JS",
        "Code": "<style>body { background-color: red !important; }</style>"
      },
      {
        "Regex": "https://www.mediatrends.io/category/digital-media/",
        "Code_Url": null,
        "Type": "CSS",
        "Code": "<style>body { background-color: blue !important; }</style>"
      },
      {
        "Regex": "https://www.mediatrends.io/category/media-innovation/",
        "Code": "<style>body { background-color: coral !important; }</style>"
      }
    ]
  },
  "Login": {
    "Modal_Login_Enabled": false,
    "Exit_Login_Button_Enabled": false,
    "Show_Login_On_Start": false,
    "Login_URL": "https://",
    "Signup_URL": "",
    "Login_Complete_Regex": "",
    "Signup_Complete_Regex": "",
    "Logout_Complete_Regex": "",
    "Login_Check_URL": "",
    "Login_Form_FormId": "",
    "Login_Form_InputName": "",
    "Login_Form_InputId": "",
    "Signup_Form_FormId": "",
    "Signup_Form_InputId": "",
    "Signup_Form_InputName": "",
    "Login_Complete_String_Messages": [],
    "Signup_Complete_String_Messages": [],
    "Logout_Complete_String_Messages": [],
    "Login_Success_Message": "Login successful. Loading...",
    "Login_Method": "wordpress",
    "Android_Login_Spinner": false,
    "Regex_Cookie_Name": "",
    "Regex_Cookie_URL": {
      "Cookie_Rules": [
        {
          "Regex": "*"
        }
      ]
    }
  },
  "About_Business": {
    "App_Purpose": "",
    "Company_Size": "",
    "Role": ""
  },
  "Notification_Sequence": {
    "Enable_Notification_Sequence": true,
    "Notification_Sequence_Toggle": true,
    "Notification_Sequence_Toggle_Label": "Order Alerts",
    "Notifications": [
      {
        "Title": "Notification Title 1",
        "Content": "Notification Content 1",
        "URL": "https://coastalanglermag.com/the-angler-video-magazine/",
        "Timer": "15"
      },
      {
        "Title": "Notification Title 2",
        "Content": "Notification Content 2",
        "URL": "https://www.amazon.com/",
        "Timer": "20"
      }
    ]
  }
};

  res.json(config);
});

// Запустите сервер
app.listen(port, () => {
  console.log(`Сервер работает на порту ${port}`);
});
