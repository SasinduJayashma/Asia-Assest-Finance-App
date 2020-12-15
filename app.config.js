
var prod = true;

export default {
    name: "AAF GoldLoans",
    slug: "AAF-GoldLoans",
    version: "1.0.0",
    orientation: "portrait",
    // icon: "./assets/icon.png",
    // splash: {
    //   image: "./assets/splash.png",
    //   resizeMode: "contain",
    //   backgroundColor: "#ffffff"
    // },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    android: {
      useNextNotificationsApi: true,
      googleServicesFile: "./google-services.json",
      package: "com.aaf.goldloans",
      versionCode: 1
    },
    ios: {
      supportsTablet: true
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    description: "Asia Assets Finance Gold Loans App",
    extra: {
        fireBaseConfig: getFirebaseConfig(),
        baseURL: getBaseURL()
    },
};

function getFirebaseConfig() {
    if (prod) {
        return {
            // apiKey: "AIzaSyCWqohAygXu7twFe9xGlWV1KFl2WwYVNtQ",
            // authDomain: "aaf-redemption.firebaseapp.com",
            // databaseURL: "https://aaf-redemption.firebaseio.com/",
            // projectId: "aaf-redemption",
            // storageBucket: "aaf-redemption.appspot.com",
            // messagingSenderId: "809978616902",
            // appId: "1:809978616902:web:0d470c3ef0d376bca83e47",
            // measurementId: "G-L2QHPYB1MQ"
        }
    } else {
        return {
            apiKey: "AIzaSyDJHMU3kZFh0ft95YOjSHCKtt5zclbpIEE",
            authDomain: "aaf-redemption-dev.firebaseapp.com",
            databaseURL: "https://aaf-redemption-dev.firebaseio.com",
            projectId: "aaf-redemption-dev",
            storageBucket: "aaf-redemption-dev.appspot.com",
            messagingSenderId: "809978616902",
            appId: "1:809978616902:web:0d470c3ef0d376bca83e47",
            measurementId: "G-L2QHPYB1MQ"
        };
    }
}

function getBaseURL() {
    if (prod) {
        return 'https://aafgold.asiaassetfinance.com/'
    } else {
        return 'https://dev.aaf-redemption.ibros.co/'
    }
}


