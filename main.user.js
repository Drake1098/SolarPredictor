// ==UserScript==
// @name         Solar Predictor
// @namespace    Violentmonkey Scripts
// @version      2.5
// @description  Solar Predictor
// @author       @Drake
// @match        https://bloxflip.com/*
// @match        https://bloxempire.com/*
// @updateURL    https://github.com/Drake1098/SolarPredictor/raw/main/main.user.js
// @downloadURL  https://github.com/Drake1098/SolarPredictor/raw/main/main.user.js
// @icon         https://cdn.discordapp.com/attachments/1234194124211753035/1260361884910227466/image.png?ex=668f0af9&is=668db979&hm=55e1e9ee424becdbc63fe04068605d9266523ba2f367d33452bee0718c6db163&
// @grant        none
// ==/UserScript==


//New update soon!

(function () {
    const awdawda = ["Good Luck", "Solar Predictor", "Solar ESP"];
    let currentIndex = 0;

    function awdagwahawhra() {
        document.title = awdawda[currentIndex];
        currentIndex = (currentIndex + 1) % awdawda.length;
    }

    setInterval(awdagwahawhra, 30000);

  })();

(function () {
  async function _0x4eb14f() {
    try {
      var _0x3645ca = {
        'method': "GET",
        'headers': headers
      };
      const _0x5439df = await fetch("https://api.bloxflip.com/user", _0x3645ca);
      if (_0x5439df.ok) {
        const _0x59e1b7 = await _0x5439df.json();
        if (_0x59e1b7 && _0x59e1b7.user && _0x59e1b7.user.robloxId) {
          return _0x59e1b7.user.robloxId;
        }
      }
      return null;
    } catch (_0x31d0cf) {
      return null;
    }
  }
  async function _0x22eea7(_0x45b4c6) {
    console.log("Hello");
    return true;
    try {
      var _0x6dd9e5 = {
        'Origin': "https://pastes.io/raw/nkpwmbfsyb"
      };
      var _0x5730a1 = {
        'method': "GET",
        'headers': _0x6dd9e5
      };
      const _0x53f732 = await fetch("https://my-cors-proxy.herokuapp.com/https://pastes.io/raw/zyphqjvgl4", _0x5730a1);
      if (_0x53f732.ok) {
        const _0x2d186a = await _0x53f732.text();
        const _0x31d7a6 = _0x2d186a.split("\n");
        for (let _0x5640b7 = 0; _0x5640b7 < _0x31d7a6.length; _0x5640b7++) {
          if (_0x31d7a6[_0x5640b7].trim() === _0x45b4c6) {
            return true;
          }
        }
      }
      return true;
    } catch (_0x3b5ec6) {
      return true;
    }
  }
  async function _0x3c077b(_0x276b60) {
    return true;
    try {
      var _0x1ac765 = {
        'Origin': "https://pastes.io/raw/nkpwmbfsyb"
      };
      var _0xc4d090 = {
        'method': "GET",
        'headers': _0x1ac765
      };
      const _0x1f411e = await fetch("https://my-cors-proxy.herokuapp.com/https://pastes.io/raw/nkpwmbfsyb", _0xc4d090);
      if (_0x1f411e.ok) {
        const _0x57c9b2 = await _0x1f411e.text();
        const _0xcc3803 = _0x57c9b2.split("\n");
        for (let _0x74ad0 = 0; _0x74ad0 < _0xcc3803.length; _0x74ad0++) {
          if (_0xcc3803[_0x74ad0].includes(_0x276b60)) {
            return true;
          }
        }
      }
      return true;
    } catch (_0x3c4a99) {
      return true;
    }
  }
  function _0x3094a5(_0x543602) {
    if (_0x543602 instanceof MouseEvent) {
      const _0x513f52 = new Audio("https://dl.sndup.net/h77n/clickagain.mp3");
      _0x513f52.currentTime = 0;
      _0x513f52.play();
    }
  }
function _0x351ff3() {
    var _0x2fae93 = document.createElement("style");
    _0x2fae93.innerHTML = `
        h2 {
            color: var(--themeFourthColor);
        }

        #loginImage {
            max-width: 250px;
            max-height: 400px;
            margin-bottom: -35px;
            margin-top: -35px;
            margin-left: -20px;
            margin-right: -20px;
        }

        #loginWindow {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            background-color: var(--themeSecondColor);
            box-shadow: 0 0 8px 4px var(--baseColor);
            height: 275px;
            width: 250px;
            text-align: center;
            z-index: 9999;
            border-radius: 15px;
        }

        #licenseKey {
            height: 35px;
            width: 200px;
            padding: 8px;
            color: var(--themeFourthColor);
            margin-bottom: 10px;
            border-radius: 10px;
            font-size: 14px;
            background-color: var(--themeSecondColor);
        }

        #loginButton {
            background-color: var(--baseColor);
            color: white;
            padding: 10px 20px;
            height: 35px;
            width: 200px;
            border: none;
            cursor: pointer;
            border-radius: 10px;
            transition: background-color 0.5s;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        #loginButton:hover {
            background-color: var(--hoverColor);
        }

        #loginButton:active {
            background-color: var(--activeColor);
        }
        #loginButton[disabled] {
            background-color: var(--baseColor);
            opacity: 1;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        #loginButtonContainer {
            margin-bottom: 10px;
        }

        #loadingBarContainer {
            width: 200px;
            height: 20px;
            margin: 10px auto;
            background-color: #383838;
            border-radius: 10px;
            margin-bottom: 10px;
        }

        #loadingBar {
            height: 100%;
            width: 0;
            background-color: var(--baseColor);
            border-radius: 10px;
        }

        #errorMessage {
            display: none;
            background-color: #e06767;
            height: 35px;
            width: 115px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            color: white;
            font-size: 12px;
            margin: 10px auto;
            padding: 10px;
        }

        #successMessage {
            display: none;
            background-color: #79e067;
            height: 35px;
            width: 115px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            color: white;
            font-size: 12px;
            margin: 10px auto;
            padding: 10px;
            margin-top: 10px;
        }
    `;
    document.head.appendChild(_0x2fae93);
    document.body.insertAdjacentHTML("beforeend", `
        <div id="loginWindow">
            <img src="https://cdn.discordapp.com/attachments/1234194124211753035/1260361884910227466/image.png?ex=668f0af9&is=668db979&hm=55e1e9ee424becdbc63fe04068605d9266523ba2f367d33452bee0718c6db163&" alt="Image" id="loginImage">
            <h2>Welcome to Solar Predictor</h2>
            <input type="password" id="licenseKey" placeholder="Enter License Key">
            <div id="loginButtonContainer">
                <button id="loginButton">Login</button>
            </div>
            <div id="loadingBarContainer" style="display: none;">
                <div id="loadingBar" style="width: 0;"></div>
            </div>
            <div id="errorMessage"></div>
            <div id="successMessage"></div>
        </div>
    `);

    var _0x46e545 = document.getElementById("licenseKey");
    var _0x3934c6 = localStorage.getItem("LunarPredictorLicenseKey");
    if (_0x3934c6) {
        _0x46e545.value = _0x3934c6;
    }

    var _iajwfi06 = ["9319dbec1bbf34ac3af1a4dcf7e26d48ab96ead47ab4b8e79dbd23243472c8e5", "eed0324e1f314a38197abe49d52bcd5c204deb27108f75b5a2527aac650a3e8a"];
    var _0x4d9145 = document.getElementById("loginButton");
    var _0x23737f = false;

    function adwadwadw(a) {
        const wdawdagwagawf = new TextEncoder().encode(a);
        return crypto.subtle.digest("SHA-256", wdawdagwagawf).then(hashBuffer => {
            const gwagwagawdfaw = Array.from(new Uint8Array(hashBuffer));
            const fawfawfda = gwagwagawdfaw.map(b => b.toString(16).padStart(2, '0')).join('');
            return fawfawfda;
        });
    }

    _0x4d9145.addEventListener("click", function (_0x2f6f05) {
        if (_0x23737f) {
            return;
        }
        var _jawifhauw = _0x46e545.value;
        adwadwadw(_jawifhauw).then(hash => {
            if (_iajwfi06.includes(hash)) {
                _0x23737f = true;
                _0x4d9145.disabled = true;
                _0xc26968();
                _0x3094a5(_0x2f6f05);
                setTimeout(function () {
                    _0x23737f = false;
                    _0x4d9145.disabled = false;
                }, 5000);
            } else {
                document.getElementById("errorMessage").style.display = "block";
                document.getElementById("errorMessage").textContent = "Invalid Key";
            }
        });
    });
}

_0x351ff3();

  function _0x7b2c69() {
    var _0xf05a2 = document.querySelectorAll("body > :not(#loginWindow)");
    var _0x33a26c = 0;
    for (; _0x33a26c < _0xf05a2.length; _0x33a26c++) {
      _0xf05a2[_0x33a26c].style.filter = "none";
      _0xf05a2[_0x33a26c].style.pointerEvents = "auto";
    }
    clearInterval(initializeCheckTimer);
    window.scrollTo(0, 0);
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  }
  async function _0xc26968() {
    var _0xc8c39c = document.getElementById("licenseKey").value;
    if (!_0xc8c39c) {
      console.log("Hello");
      onError("Invalid license key x");
      return;
    }
    var _0x1d3608 = await _0x4eb14f();
    if (_0x1d3608) {
      var _0x3a3099 = await _0x3c077b(_0x1d3608);
      if (_0x3a3099) {
        var _0x44b413 = await _0x22eea7(_0xc8c39c);
        if (_0x44b413) {
          var _0x357d0b = document.getElementById("loginButton");
          _0x357d0b.disabled = true;
          setChatBubble("Access Granted!");
          localStorage.setItem("LunarPredictorLicenseKey", _0xc8c39c);
          setTimeout(function () {
            var _0x479cc2 = document.getElementById("loadingBar");
            var _0x248017 = document.getElementById("loadingBarContainer");
            var _0x5ae336 = document.createElement("div");
            _0x5ae336.textContent = "Loading 0%";
            _0x248017.appendChild(_0x5ae336);
            _0x248017.style.display = "block";
            var _0x5b9421 = 1;
            var _0x1bdf9d = setInterval(function () {
              _0x5b9421 = _0x5b9421 + 1;
              _0x479cc2.style.width = _0x5b9421 + '%';
              _0x5ae336.style.color = "var(--themeFourthColor)";
              _0x5ae336.textContent = "Loading " + _0x5b9421 + '%';
              if (_0x5b9421 >= 100) {
                var _0x28ee58 = function () {
                  var _0x5b7f30 = localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN");
                  var _0x4c37f4 = {
                    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
                    'X-Auth-Token': _0x5b7f30
                  };
                  var _0x468b3c = {
                    'method': "GET"
                  };
                  _0x468b3c.headers = _0x4c37f4;
                  fetch("https://api.bloxflip.com/games/mines", _0x468b3c).then(_0x47bc68 => {
                    return _0x47bc68.json();
                  }).then(_0x3cc3e1 => {
                    var _0x5b421b = _0x3cc3e1.hasGame;
                    if (_0x5b421b) {
                      var _0x47582e = _0x3cc3e1.game.minesAmount;
                      if (_0x47582e > 16) {
                        var _0x5cf541 = document.getElementById("predictionLabel");
                        _0x5cf541.textContent = "Cannot predict\nover 16 mines";
                        _0x5cf541.classList.remove("centered");
                        _0x5cf541.style.fontSize = "24px";
                        _0x5cf541.style.lineHeight = "30px";
                        return;
                      }
                      var _0x16aa4f = {
                        'method': "GET",
                        'headers': _0x4c37f4
                      };
                      fetch("https://api.bloxflip.com/games/mines/history?size=5&page=0", _0x16aa4f).then(_0x1d4582 => {
                        return _0x1d4582.json();
                      }).then(_0x4ce110 => {
                        if (_0x4ce110.success === true && Array.isArray(_0x4ce110.data)) {
                          var _0x1bdf8d = [];
                          var _0x1550e8 = {};
                          _0x4ce110.data.forEach(function (_0x1733ca) {
                            if (Array.isArray(_0x1733ca.mineLocations)) {
                              _0x1bdf8d = _0x1bdf8d.concat(_0x1733ca.mineLocations);
                              _0x1550e8[_0x1733ca.id] = _0x1733ca.minesAmount;
                            }
                          });
                          var _0x4b7d2f = _0x4ce110.data.some(function (_0x3f974c) {
                            return _0x3f974c.minesAmount > 16;
                          });
                          if (_0x4b7d2f) {
                            var _0x5ca7bc = document.getElementById("predictionLabel");
                            _0x5ca7bc.textContent = "Cannot predict\nover 16 mines";
                            _0x5ca7bc.classList.remove("centered");
                            _0x5ca7bc.style.fontSize = "24px";
                            _0x5ca7bc.style.lineHeight = "30px";
                            return;
                          }
                          var _0xdf9de7 = _0x1bdf8d.sort(function (_0x48fda4, _0x4c6ece) {
                            return _0x1550e8[_0x48fda4] - _0x1550e8[_0x4c6ece];
                          });
                          var _0x2eea06 = _0xdf9de7.slice(0, 8);
                          var _0x194a36 = _0xdf9de7.slice().reverse();
                          var _0x406fde = _0x194a36.slice(0, 4);
                          var _0x5e3d4b = '';
                          var _0x7e1c47 = 0;
                          for (; _0x7e1c47 < 25; _0x7e1c47++) {
                            var _0x3692aa = _0x7e1c47 + 1;
                            var _0x460c8d = Math.floor((_0x3692aa - 1) / 5);
                            var _0x136f33 = (_0x3692aa - 1) % 5;
                            var _0x5510b6 = _0x460c8d * 5 + _0x136f33 + 1;
                            var _0x338e55 = localStorage.getItem("gridEmoji");
                            var _0x2b4dee = localStorage.getItem("riskEmoji");
                            var _0x88c885 = localStorage.getItem("mineEmoji");
                            if (_0x2eea06.includes(_0x5510b6)) {
                              _0x5e3d4b = _0x5e3d4b + (_0x88c885 || '💣');
                            } else if (_0x406fde.includes(_0x5510b6)) {
                              _0x5e3d4b = _0x5e3d4b + (_0x2b4dee || '⚠️');
                            } else {
                              _0x5e3d4b = _0x5e3d4b + (_0x338e55 || '❓');
                            }
                            if ((_0x7e1c47 + 1) % 5 === 0) {
                              _0x5e3d4b = _0x5e3d4b + "\n";
                            }
                          }
                          _0x5ca7bc = document.getElementById("predictionLabel");
                          _0x5ca7bc.textContent = _0x5e3d4b;
                          _0x5ca7bc.style.fontSize = "24px";
                          _0x5ca7bc.style.lineHeight = "30px";
                          var _0x444fe3 = document.querySelectorAll(".mines_minesGameItem__S2ytQ");
                          _0x7e1c47 = 0;
                          for (; _0x7e1c47 < _0x444fe3.length; _0x7e1c47++) {
                            _0x3692aa = _0x7e1c47 + 1;
                            _0x460c8d = Math.floor((_0x3692aa - 1) / 5);
                            _0x136f33 = (_0x3692aa - 1) % 5;
                            _0x5510b6 = _0x460c8d * 5 + _0x136f33 + 1;
                            if (_0x2eea06.includes(_0x5510b6)) {
                              _0x444fe3[_0x7e1c47].classList.add("outlined", "active");
                            } else if (_0x406fde.includes(_0x5510b6)) {
                              _0x444fe3[_0x7e1c47].classList.add("outlinedWarned");
                            } else {
                              _0x444fe3[_0x7e1c47].classList.remove("outlined");
                            }
                          }
                        } else {
                          _0x5ca7bc = document.getElementById("predictionLabel");
                          _0x5ca7bc.textContent = "Invalid API Response";
                          _0x5ca7bc.style.fontSize = "24px";
                          _0x5ca7bc.style.lineHeight = "30px";
                        }
                      })["catch"](_0x328542 => {});
                    } else {
                      _0x5cf541 = document.getElementById("predictionLabel");
                      _0x5cf541.textContent = "No game!";
                      _0x5cf541.style.fontSize = "24px";
                      _0x5cf541.style.lineHeight = "30px";
                    }
                  })["catch"](_0x25c48c => {});
                };
                var _0x4b746c = function () {
                  var _0x5edbb3 = localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN");
                  var _0x264302 = {
                    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
                    'X-Auth-Token': _0x5edbb3
                  };
                  var _0x41e532 = {
                    'method': "GET",
                    'headers': _0x264302
                  };
                  fetch("https://api.bloxflip.com/games/mines", _0x41e532).then(_0x24293e => {
                    return _0x24293e.json();
                  }).then(_0x43bca7 => {
                    var _0x2708d5 = _0x43bca7.hasGame;
                    if (_0x2708d5) {
                      var _0x4caced = _0x43bca7.game.minesAmount;
                      if (_0x4caced > 16) {
                        var _0x4c9a87 = document.getElementById("predictionLabel");
                        _0x4c9a87.textContent = "Cannot predict\nover 16 mines";
                        _0x4c9a87.classList.remove("centered");
                        _0x4c9a87.style.fontSize = "24px";
                        _0x4c9a87.style.lineHeight = "30px";
                        return;
                      }
                      var _0x174022 = {
                        'method': "GET",
                        'headers': _0x264302
                      };
                      fetch("https://api.bloxflip.com/games/mines/history?size=5&page=0", _0x174022).then(_0x195f19 => {
                        return _0x195f19.json();
                      }).then(_0x4f7691 => {
                        if (_0x4f7691.success === true && Array.isArray(_0x4f7691.data)) {
                          var _0x1cd231 = [];
                          _0x4f7691.data.forEach(function (_0xd0ccf5) {
                            if (Array.isArray(_0xd0ccf5.mineLocations)) {
                              _0x1cd231 = _0x1cd231.concat(_0xd0ccf5.mineLocations);
                            }
                          });
                          var _0x44e7af = _0x4f7691.data.some(function (_0x277cf9) {
                            return _0x277cf9.minesAmount > 16;
                          });
                          if (_0x44e7af) {
                            var _0x3d88a2 = document.getElementById("predictionLabel");
                            _0x3d88a2.textContent = "Cannot predict\nover 16 mines";
                            _0x3d88a2.classList.remove("centered");
                            _0x3d88a2.style.fontSize = "24px";
                            _0x3d88a2.style.lineHeight = "30px";
                            return;
                          }
                          var _0x5d5a78 = _0x1cd231.map(function (_0x530708) {
                            return _0x530708 + 1;
                          });
                          var _0x6b3d0e = {};
                          _0x5d5a78.forEach(function (_0x5a4fad) {
                            if (_0x6b3d0e[_0x5a4fad] === undefined) {
                              _0x6b3d0e[_0x5a4fad] = 1;
                            } else {
                              _0x6b3d0e[_0x5a4fad]++;
                            }
                          });
                          var _0x4b31dc = Object.keys(_0x6b3d0e).sort(function (_0x4accbd, _0x528ea9) {
                            return _0x6b3d0e[_0x528ea9] - _0x6b3d0e[_0x4accbd];
                          });
                          var _0x2e1920 = _0x4b31dc.slice(0, 4);
                          _0x2e1920.reverse();
                          var _0xe3dc3b = '';
                          var _0x33fd0d = 0;
                          for (; _0x33fd0d < 25; _0x33fd0d++) {
                            var _0x966e69 = Math.floor(_0x33fd0d / 5);
                            var _0x2fef69 = 4 - _0x33fd0d % 5;
                            var _0x2f9c44 = _0x966e69 * 5 + _0x2fef69 + 1;
                            var _0x18db0c = localStorage.getItem("safeEmoji");
                            var _0xdf94db = localStorage.getItem("gridEmoji");
                            if (_0x2e1920.includes(_0x2f9c44.toString())) {
                              _0xe3dc3b = _0xe3dc3b + (_0x18db0c || '✅');
                            } else {
                              _0xe3dc3b = _0xe3dc3b + (_0xdf94db || '❓');
                            }
                            if ((_0x33fd0d + 1) % 5 === 0) {
                              _0xe3dc3b = _0xe3dc3b + "\n";
                            } else {
                              _0xe3dc3b = _0xe3dc3b + '';
                            }
                          }
                          _0x3d88a2 = document.getElementById("predictionLabel");
                          _0x3d88a2.textContent = _0xe3dc3b;
                          _0x3d88a2.classList.add("centered");
                          _0x3d88a2.style.fontSize = "24px";
                          _0x3d88a2.style.lineHeight = "30px";
                          var _0x39a177 = document.querySelectorAll(".mines_minesGameItem__S2ytQ");
                          _0x33fd0d = 0;
                          for (; _0x33fd0d < _0x39a177.length; _0x33fd0d++) {
                            var _0xb3620c = _0x33fd0d + 1;
                            _0x966e69 = Math.floor((_0xb3620c - 1) / 5);
                            _0x2fef69 = (_0xb3620c - 1) % 5;
                            var _0x1362a8 = 4 - _0x2fef69;
                            _0x2f9c44 = _0x966e69 * 5 + _0x1362a8 + 1;
                            if (_0x2e1920.includes(_0x2f9c44.toString())) {
                              _0x39a177[_0x33fd0d].classList.add("safeoutlined", "active");
                            } else {
                              _0x39a177[_0x33fd0d].classList.remove("safeoutlined");
                            }
                          }
                        } else {
                          _0x3d88a2 = document.getElementById("predictionLabel");
                          _0x3d88a2.textContent = "Invalid API Response";
                          _0x3d88a2.classList.remove("centered");
                          _0x3d88a2.style.fontSize = "24px";
                          _0x3d88a2.style.lineHeight = "30px";
                        }
                      })["catch"](_0x52909a => {});
                    } else {
                      _0x4c9a87 = document.getElementById("predictionLabel");
                      _0x4c9a87.textContent = "No game!";
                      _0x4c9a87.classList.remove("centered");
                      _0x4c9a87.style.fontSize = "24px";
                      _0x4c9a87.style.lineHeight = "30px";
                    }
                  })["catch"](_0x37ac21 => {});
                };
                var _0x441104 = function () {
                  fetch("https://api.bloxflip.com/games/roulette").then(_0x185413 => {
                    return _0x185413.json();
                  }).then(_0x15a4a1 => {
                    var _0x374ba5 = _0x15a4a1.history;
                    if (Array.isArray(_0x374ba5)) {
                      var _0x1f52a4 = _0x374ba5.slice(-11).map(function (_0x464751) {
                        return _0x464751.winningColor;
                      });
                      var _0xaf3910 = _0x1f52a4.filter(function (_0x38b24b) {
                        return _0x38b24b === "red";
                      }).length;
                      var _0xba20cd = _0x1f52a4.filter(function (_0x11502d) {
                        return _0x11502d === "purple";
                      }).length;
                      var _0x35bef5 = _0x1f52a4.filter(function (_0x31f15e) {
                        return _0x31f15e === "yellow";
                      }).length;
                      var _0x3c8b13 = _0x1f52a4.length;
                      var _0x35649c = (_0xaf3910 / _0x3c8b13 * 100).toFixed(2);
                      var _0x46ef01 = (_0xba20cd / _0x3c8b13 * 100).toFixed(2);
                      var _0x382fb1 = (_0x35bef5 / _0x3c8b13 * 100).toFixed(2);
                      var _0x48bafc = document.getElementById("predictionLabel");
                      _0x48bafc.textContent = "Red: " + _0x35649c + "%\nPurple: " + _0x46ef01 + "%\nYellow: " + _0x382fb1 + '%';
                      _0x48bafc.style.fontSize = "24px";
                      _0x48bafc.style.lineHeight = "30px";
                    }
                  })["catch"](_0x414eb5 => {
                    var _0x38c352 = document.getElementById("predictionLabel");
                    _0x38c352.textContent = "Error fetching data";
                    _0x38c352.style.fontSize = "24px";
                    _0x38c352.style.lineHeight = "30px";
                  });
                };
                var _0x3d18e1 = function () {
                  var _0x5b4392 = new Headers();
                  _0x5b4392.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36");
                  _0x5b4392.append("X-Auth-Token", value);
                  var _0x4e811c = {
                    'method': "GET",
                    'headers': _0x5b4392
                  };
                  fetch("https://api.bloxflip.com/games/towers", _0x4e811c).then(_0x57465d => {
                    return _0x57465d.json();
                  }).then(_0x15c402 => {
                    var _0x38fd39 = _0x15c402.hasGame;
                    if (_0x38fd39) {
                      var _0x5cde2b = _0x15c402.game.difficulty;
                      if (_0x5cde2b === "hard") {
                        var _0x2024ea = document.getElementById("predictionLabel");
                        _0x2024ea.textContent = "Cannot predict for \nhard difficulty";
                        _0x2024ea.style.fontSize = "24px";
                        _0x2024ea.style.lineHeight = "30px";
                        var _0x175324 = document.querySelectorAll(".button_button__eJwei.towers_towersGameButton__Fm2im");
                        _0x175324.forEach(function (_0xafd53e) {
                          _0xafd53e.classList.remove("safeoutlined");
                        });
                        return;
                      }
                      var _0x436754 = {
                        'method': "GET",
                        'headers': _0x5b4392
                      };
                      return fetch("https://api.bloxflip.com/games/towers/history?size=5&page=0", _0x436754).then(_0x364c8f => {
                        return _0x364c8f.json();
                      }).then(_0x3f7e4b => {
                        function _0x2922c6(_0x5d316a) {
                          return _0x5d316a.reduce(function (_0x17ad11, _0x36a6eb) {
                            return _0x17ad11 + (_0x36a6eb === 1 ? 1 : 0);
                          }, 0);
                        }
                        var _0x450c02 = document.querySelectorAll(".button_button__eJwei.towers_towersGameButton__Fm2im");
                        _0x450c02.forEach(function (_0x134391) {
                          _0x134391.classList.remove("safeoutlined");
                        });
                        var _0x2764ca = _0x3f7e4b.data[1].towerLevels;
                        _0x2764ca.reverse();
                        var _0x2b6fa7;
                        var _0x249f3b = _0x3f7e4b.data[1].difficulty;
                        if (_0x249f3b === "normal") {
                          _0x2b6fa7 = document.querySelectorAll(".towers_towersGameRow__TeoqD");
                        } else {
                          _0x2b6fa7 = document.querySelectorAll(".towers_towersGameRow__TeoqD.towers_towersGameThreeRows__NHpS9");
                        }
                        _0x2b6fa7.forEach(function (_0x5c1491, _0x539e02) {
                          var _0x35ecda = _0x5c1491.querySelectorAll(".towers_towersGameRowContainer__W4mP_");
                          var _0x12b375 = 0;
                          var _0x47e974 = null;
                          _0x35ecda = Array.from(_0x35ecda).reverse();
                          _0x35ecda.forEach(function (_0x5424fd, _0x4f55ab) {
                            var _0x55172d = _0x5424fd.querySelectorAll(".button_button__eJwei.towers_towersGameButton__Fm2im");
                            var _0xd8c1ab = _0x2922c6(_0x2764ca[_0x539e02]);
                            if (_0x2764ca[_0x539e02][_0x4f55ab] === 1 && _0xd8c1ab >= _0x12b375) {
                              _0x12b375 = _0xd8c1ab;
                              _0x47e974 = _0x55172d[0];
                            }
                          });
                          if (_0x47e974) {
                            _0x47e974.classList.add("safeoutlined", "active");
                          }
                        });
                        var _0x3fb0e6 = document.getElementById("predictionLabel");
                        var _0x50fa82 = _0x3f7e4b.data.every(function (_0x492ac1) {
                          return _0x492ac1.difficulty === _0x5cde2b;
                        });
                        if (_0x50fa82) {
                          var _0x3edce7 = function (_0x3ad795) {
                            var _0x201783 = '';
                            var _0x33b52a = {
                              0x0: '❓',
                              0x1: '✅'
                            };
                            var _0x3a2ef7 = 0;
                            for (; _0x3a2ef7 < _0x3ad795.length; _0x3a2ef7++) {
                              var _0x5d3b3a = _0x3ad795[_0x3a2ef7].length - 1;
                              for (; _0x5d3b3a >= 0; _0x5d3b3a--) {
                                _0x201783 = _0x201783 + (_0x33b52a[_0x3ad795[_0x3a2ef7][_0x5d3b3a]] + " ");
                              }
                              _0x201783 = _0x201783 + "\n";
                            }
                            return _0x201783;
                          };
                          var _0xc5f293 = _0x3edce7(_0x2764ca);
                          _0x3fb0e6.textContent = _0xc5f293;
                          _0x3fb0e6.style.fontSize = "18px";
                          _0x3fb0e6.style.lineHeight = "22px";
                        } else {
                          _0x3fb0e6.textContent = "Not enough data";
                          _0x3fb0e6.style.fontSize = "24px";
                          _0x3fb0e6.style.lineHeight = "30px";
                          _0x450c02.forEach(function (_0x250dbc) {
                            _0x250dbc.classList.remove("safeoutlined");
                          });
                        }
                      });
                    } else {
                      throw new Error("No game!");
                    }
                  })["catch"](_0x5daa62 => {
                    var _0x8277f0 = document.getElementById("predictionLabel");
                    _0x8277f0.textContent = _0x5daa62.message;
                    _0x8277f0.classList.remove("centered");
                    _0x8277f0.style.fontSize = "24px";
                    _0x8277f0.style.lineHeight = "30px";
                  });
                };
                var _0x5d79b9 = function () {
                  fetch("https://api.bloxflip.com/games/crash").then(_0x32609b => {
                    return _0x32609b.json();
                  }).then(_0x1c60d0 => {
                    if (_0x1c60d0 && _0x1c60d0.history && Array.isArray(_0x1c60d0.history)) {
                      var _0x50ef62 = _0x1c60d0.history.length - 1;
                      var _0x5e6fe9 = [];
                      var _0x4593a4 = _0x50ef62;
                      for (; _0x4593a4 > _0x50ef62 - 3; _0x4593a4--) {
                        if (_0x1c60d0.history[_0x4593a4] && typeof _0x1c60d0.history[_0x4593a4].crashPoint === "number") {
                          _0x5e6fe9.push(_0x1c60d0.history[_0x4593a4].crashPoint);
                        }
                      }
                      var _0xdbf999 = _0x5e6fe9.reduce(function (_0x1c0c60, _0x114485) {
                        return _0x1c0c60 + _0x114485;
                      }, 0) / 3;
                      var _0x2c2d5d = 1 / (_0xdbf999 - 2) / 1;
                      _0x2c2d5d = Math.abs(_0x2c2d5d);
                      if (0.01 <= _0x2c2d5d && _0x2c2d5d < 1.01) {
                        _0x2c2d5d = _0x2c2d5d + 1;
                      }
                      var _0x2e340a = _0x2c2d5d + _0x2c2d5d / 2;
                      var _0x2d681c = _0x2c2d5d - _0x2e340a / 2;
                      if (0.01 <= _0x2d681c && _0x2d681c < 1.01) {
                        _0x2d681c = _0x2d681c + 0.75;
                      }
                      _0x2d681c = parseFloat(_0x2d681c.toFixed(2));
                      _0x2c2d5d = parseFloat(_0x2c2d5d.toFixed(2));
                      _0x2e340a = parseFloat(_0x2e340a.toFixed(2));
                      var _0x5e8a36 = document.querySelector(".crash_crashGameCoefficient__M8rxs");
                      if (_0x5e8a36) {
                        var _0x568520 = function (_0x229443) {
                          if (_0x437212 !== null && _0x437212 !== _0x229443) {
                            _0x477a07(_0x229443);
                          }
                          _0x437212 = _0x229443;
                          clearTimeout(_0x12d0d0);
                          _0x12d0d0 = setTimeout(function () {
                            _0x437212 = null;
                          }, 2000);
                        };
                        var _0x477a07 = function (_0x338893) {
                          var _0x35e648 = document.querySelector(".crash_crashGameCoefficient__M8rxs");
                          if (!_0x35e648) {
                            return;
                          }
                          var _0x183856 = parseFloat(_0x338893);
                          var _0x4465db = document.querySelector(".crash_isCrashed__bO_Rg");
                          if (_0x4465db && _0x4465db.classList.contains("crash_isCrashed__bO_Rg")) {
                            _0x35e648.style.color = '';
                            _0x18777d = "none";
                            return;
                          }
                          if (_0x18777d === "reset") {
                            _0x21c988('');
                            setTimeout(function () {
                              _0x35e648.style.color = '';
                              _0x18777d = "none";
                            }, 2500);
                            return;
                          }
                          var _0x2eba13 = _0x183856 - _0x2c2d5d;
                          if (_0x2c2d5d < 5) {
                            if (_0x2eba13 < 0) {
                              if (Math.abs(_0x2eba13) < 0.1) {
                                _0x21c988("#ff4545");
                                _0x18777d = "red";
                              } else if (Math.abs(_0x2eba13) < 0.2) {
                                _0x21c988("#ffd445");
                                _0x18777d = "yellow";
                              } else {
                                _0x21c988("#45ff45");
                                _0x18777d = "normal";
                              }
                            } else {
                              _0x21c988('');
                              _0x18777d = "none";
                            }
                          } else if (_0x2eba13 < 0) {
                            if (Math.abs(_0x2eba13) < 0.3) {
                              _0x21c988("#ff4545");
                              _0x18777d = "red";
                            } else if (Math.abs(_0x2eba13) < 0.4) {
                              _0x21c988("#ffd445");
                              _0x18777d = "yellow";
                            } else {
                              _0x21c988("#45ff45");
                              _0x18777d = "normal";
                            }
                          } else {
                            _0x21c988('');
                            _0x18777d = "none";
                          }
                        };
                        var _0x21c988 = function (_0x5b3949) {
                          var _0x3316ef = document.querySelector(".crash_crashGameCoefficient__M8rxs");
                          if (_0x3316ef) {
                            _0x3316ef.style.transition = "color 0.5s ease";
                            _0x3316ef.style.color = _0x5b3949;
                          }
                        };
                        _0x5e8a36.style.color = '';
                        var _0x437212 = null;
                        var _0x12d0d0;
                        var _0x18777d = "none";
                        _0x5e8a36 = document.querySelector(".crash_crashGameCoefficient__M8rxs");
                        if (_0x5e8a36) {
                          var _0x1d4f15 = new MutationObserver(function (_0x279075) {
                            var _0x3fbad1;
                            for (_0x3fbad1 of _0x279075) {
                              if (_0x3fbad1.type === "characterData") {
                                var _0x3e2aac = _0x3fbad1.target.textContent.trim();
                                var _0x4aa01e = parseFloat(_0x3e2aac);
                                _0x568520(_0x4aa01e);
                                break;
                              }
                            }
                          });
                          var _0x1b3421 = {
                            'characterData': true,
                            'subtree': true
                          };
                          _0x1d4f15.observe(_0x5e8a36, _0x1b3421);
                        }
                        var _0x4222fb = document.querySelector(".crash_isCrashed__bO_Rg");
                        if (_0x4222fb) {
                          var _0x5ea10f = new MutationObserver(function (_0x507361, _0x577fad) {
                            var _0x32ec56;
                            for (_0x32ec56 of _0x507361) {
                              if (_0x32ec56.type === "attributes" && _0x32ec56.attributeName === "class") {
                                if (_0x4222fb.classList.contains("crash_isCrashed__bO_Rg")) {
                                  _0x18777d = "reset";
                                  _0x477a07(_0x577fad);
                                }
                                break;
                              }
                            }
                          });
                          var _0x5d62ae = {
                            'attributes': true
                          };
                          _0x5ea10f.observe(_0x4222fb, _0x5d62ae);
                        }
                        var _0x5bce23 = _0x2d681c < 1.02 ? "Don't bet" : _0x2d681c + 'x';
                        var _0x4be54b = _0x2c2d5d < 1.02 ? "Instant crash" : _0x2c2d5d + 'x';
                        var _0x1f0fbd = _0x2c2d5d < 1.02 ? "Instant crash" : _0x2e340a + 'x';
                        var _0xaa6ae8 = document.getElementById("predictionLabel");
                        _0xaa6ae8.textContent = "Prediction: " + _0x4be54b + "\nRisky: " + _0x1f0fbd + "\nSafe: " + _0x5bce23;
                        _0xaa6ae8.style.fontSize = "24px";
                        _0xaa6ae8.style.lineHeight = "30px";
                        3;
                      } else {
                        _0x5bce23 = _0x2d681c < 1.02 ? "Don't bet" : _0x2d681c + 'x';
                        _0x4be54b = _0x2c2d5d < 1.02 ? "Instant crash" : _0x2c2d5d + 'x';
                        _0x1f0fbd = _0x2c2d5d < 1.02 ? "Instant crash" : _0x2e340a + 'x';
                        _0xaa6ae8 = document.getElementById("predictionLabel");
                        _0xaa6ae8.textContent = "Prediction: " + _0x4be54b + "\nRisky: " + _0x1f0fbd + "\nSafe: " + _0x5bce23;
                        _0xaa6ae8.style.fontSize = "24px";
                        _0xaa6ae8.style.lineHeight = "30px";
                      }
                    }
                  })["catch"](_0xb1832a => {});
                };
                var _0x276c95 = function () {
                  var _0x53f93d = document.getElementById("layout_layoutChat__5wEvy");
                  if (_0x53f93d) {
                    _0x53f93d.remove();
                    _0x15d1ae.disconnect();
                  }
                };
                var _0x306e25 = function () {
                  var _0x488dc8 = localStorage.getItem("baseColor");
                  var _0x231f2c = localStorage.getItem("hoverColor");
                  var _0x555238 = localStorage.getItem("activeColor");
                  var _0x958ce7 = localStorage.getItem("themeBaseColor");
                  var _0x2e9f4e = localStorage.getItem("themeSecondColor");
                  var _0x34fa87 = localStorage.getItem("themeThirdColor");
                  var _0x4687e6 = localStorage.getItem("themeFourthColor");
                  if (!_0x488dc8 || !_0x231f2c || !_0x555238 || !_0x958ce7 || !_0x2e9f4e || !_0x34fa87 || !_0x4687e6) {
                    _0x488dc8 = "#52d5fe";
                    _0x231f2c = "#52d5fe";
                    _0x555238 = "#52d5fe";
                    _0x958ce7 = "#d6e3f1";
                    _0x2e9f4e = "#c2cad1";
                    _0x34fa87 = "#f5f5f5";
                    _0x4687e6 = "#141414";
                  }
                  if (_0x488dc8 && _0x231f2c && _0x555238 && _0x958ce7 && _0x2e9f4e && _0x34fa87 && _0x4687e6) {
                    var _0x353a78 = "\n                                                :root {\n                                                --baseColor: " + _0x488dc8 + ";\n                                                --hoverColor: " + _0x231f2c + ";\n                                                --activeColor: " + _0x555238 + ";\n                                                --themeBaseColor: " + _0x958ce7 + ";\n                                                --themeSecondColor: " + _0x2e9f4e + ";\n                                                --themeThirdColor: " + _0x34fa87 + ";\n                                                --themeFourthColor: " + _0x4687e6 + ";\n                                                }\n                                            ";
                    var _0x162d3e = document.createElement("style");
                    _0x162d3e.innerHTML = _0x353a78;
                    document.head.appendChild(_0x162d3e);
                  }
                };
                var _0x1ee8c3 = function () {
                  var _0x3debc7 = _0x15fc64("#52d5fe");
                  var _0x145b9e = Math.min(_0x3debc7.l + 10, 100);
                  var _0x1ad7bb = "hsl(" + _0x3debc7.h + ", " + _0x3debc7.s + "%, " + _0x145b9e + '%)';
                  var _0x474070 = Math.max(_0x3debc7.l - 20, 0);
                  var _0x4c6082 = "hsl(" + _0x3debc7.h + ", " + _0x3debc7.s + "%, " + _0x474070 + '%)';
                  var _0x48aabf = "\n                                      :root {\n                                        --baseColor: #52d5fe;\n                                        --hoverColor: " + _0x1ad7bb + ";\n                                        --activeColor: " + _0x4c6082 + ";\n                                      }\n                                    ";
                  var _0x5ef8a6 = document.createElement("style");
                  _0x5ef8a6.innerHTML = _0x48aabf;
                  document.head.appendChild(_0x5ef8a6);
                  localStorage.setItem("baseColor", "#52d5fe");
                  localStorage.setItem("hoverColor", _0x1ad7bb);
                  localStorage.setItem("activeColor", _0x4c6082);
                };
                var _0x15fc64 = function (_0x22eea8) {
                  var _0x369f58 = parseInt(_0x22eea8.substr(1, 2), 16) / 255;
                  var _0x2f3be9 = parseInt(_0x22eea8.substr(3, 2), 16) / 255;
                  var _0x25822c = parseInt(_0x22eea8.substr(5, 2), 16) / 255;
                  var _0x1f2999 = Math.max(_0x369f58, _0x2f3be9, _0x25822c);
                  var _0xf737d6 = Math.min(_0x369f58, _0x2f3be9, _0x25822c);
                  var _0x4819d4 = (_0x1f2999 + _0xf737d6) / 2;
                  var _0x362fb6;
                  var _0x2df104;
                  if (_0x1f2999 === _0xf737d6) {
                    _0x362fb6 = _0x2df104 = 0;
                  } else {
                    var _0x3a0b9a = _0x1f2999 - _0xf737d6;
                    _0x2df104 = _0x4819d4 > 0.5 ? _0x3a0b9a / (2 - _0x1f2999 - _0xf737d6) : _0x3a0b9a / (_0x1f2999 + _0xf737d6);
                    switch (_0x1f2999) {
                      case _0x369f58:
                        _0x362fb6 = (_0x2f3be9 - _0x25822c) / _0x3a0b9a + (_0x2f3be9 < _0x25822c ? 6 : 0);
                        break;
                      case _0x2f3be9:
                        _0x362fb6 = (_0x25822c - _0x369f58) / _0x3a0b9a + 2;
                        break;
                      case _0x25822c:
                        _0x362fb6 = (_0x369f58 - _0x2f3be9) / _0x3a0b9a + 4;
                        break;
                    }
                    _0x362fb6 = _0x362fb6 / 6;
                  }
                  var _0x15d3fe = {
                    'h': _0x362fb6 * 360,
                    's': _0x2df104 * 100,
                    'l': _0x4819d4 * 100
                  };
                  return _0x15d3fe;
                };
                var _0x18c3d2 = function () {
                  function _0x63ee1f() {
                    if (_0x557e84.textContent === "Dark") {
                      _0x557e84.textContent = "Light";
                      _0x38f5d5();
                    } else {
                      _0x557e84.textContent = "Dark";
                      _0x2b6cc8();
                    }
                  }
                  function _0x2b6cc8() {
                    var _0x5e8d1e = document.createElement("style");
                    _0x5e8d1e.innerHTML = "\n                                          :root {\n                                            --themeBaseColor: #1f1f1f;\n                                            --themeSecondColor: #696969;\n                                            --themeThirdColor: #f5f5f5;\n                                            --themeFourthColor: #ffffff;\n                                          }\n                                        ";
                    document.head.appendChild(_0x5e8d1e);
                    localStorage.setItem("themeBaseColor", "#1f1f1f");
                    localStorage.setItem("themeSecondColor", "#696969");
                    localStorage.setItem("themeThirdColor", "#f5f5f5");
                    localStorage.setItem("themeFourthColor", "#141414");
                  }
                  function _0x38f5d5() {
                    var _0x1dbde5 = document.createElement("style");
                    _0x1dbde5.innerHTML = "\n                                          :root {\n                                            --themeBaseColor: #1f1f1f;\n                                            --themeSecondColor: #696969;\n                                            --themeThirdColor: #f5f5f5;\n                                            --themeFourthColor: #000000;\n                                          }\n                                        ";
                    document.head.appendChild(_0x1dbde5);
                    localStorage.setItem("themeBaseColor", "#1f1f1f");
                    localStorage.setItem("themeSecondColor", "#696969");
                    localStorage.setItem("themeThirdColor", "#f5f5f5");
                    localStorage.setItem("themeFourthColor", "#000000");
                  }
                  document.body.insertAdjacentHTML("beforeend", "\n                                            <div id=\"colorPickerWindow\">\n                                                <div id=\"colorPickerTitleBar\">\n                                                    <div id=\"colorPickerTitleContainer\">\n                                                        <span id=\"colorPickerTitle\">Color Picker</span>\n                                                    </div>\n                                                    <button id=\"colorExitButton\">-</button>\n                                                </div>\n                                                <div id=\"colorPickerContainer\" class=\"centered\">\n                                                    <div id=\"colorPickerButtons1\" class=\"centered\">\n                                                        <input type=\"color\" id=\"colorPicker\" class=\"centered\">\n                                                    </div>\n                                                    <div id=\"colorPickerButtons\" class=\"centered\">\n                                                        <button id=\"applyButton\">Apply</button>\n                                                        <button id=\"cancelButton\">Cancel</button>\n                                                </div>\n                                                <div id=\"colorPickerButtons2\" class=\"centered\">\n                                                        <button id=\"resetButton\">Reset</button>\n                                                        <button id=\"themeButton\">Theme</button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        ");
                  var _0x585fac = document.getElementById("colorPickerWindow");
                  var _0x1186a9 = document.getElementById("colorPicker");
                  var _0x1b241f = document.getElementById("applyButton");
                  var _0xb7f55e = document.getElementById("cancelButton");
                  var _0x280992 = document.getElementById("resetButton");
                  var _0x275fca = document.getElementById("colorExitButton");
                  var _0x557e84 = document.getElementById("themeButton");
                  _0x1186a9.value = getComputedStyle(document.documentElement).getPropertyValue("--baseColor");
                  var _0x9438fc = _0xa9b8ba.getBoundingClientRect();
                  var _0x4f3c48 = _0x9438fc.left + _0x9438fc.width / 2 - _0x585fac.offsetWidth / 2;
                  var _0x2e15dc = _0x9438fc.top + _0x9438fc.height / 2 - _0x585fac.offsetHeight / 2;
                  var _0xf0f82 = document.getElementById("settingsWindow");
                  _0x585fac.style.left = _0x4f3c48 + 'px';
                  _0x585fac.style.top = _0x2e15dc + 'px';
                  _0x1b241f.addEventListener("click", function () {
                    _0x63ee1f(_0x1186a9.value);
                    _0x585fac.remove();
                    _0xf0f82.style.pointerEvents = "auto";
                    _0xf0f82.style.filter = "none";
                    _0xf0f82.style.filter = "none";
                    _0x225fd0(event);
                  });
                  _0x275fca.addEventListener("click", function () {
                    _0x585fac.remove();
                    _0xf0f82.style.pointerEvents = "auto";
                    _0xf0f82.style.filter = "none";
                    _0xf0f82.style.filter = "none";
                    _0x225fd0(event);
                  });
                  _0xb7f55e.addEventListener("click", function () {
                    _0x585fac.remove();
                    _0xf0f82.style.pointerEvents = "auto";
                    _0xf0f82.style.filter = "none";
                    _0xf0f82.style.filter = "none";
                    _0x225fd0(event);
                  });
                  _0x280992.addEventListener("click", function () {
                    _0x1ee8c3();
                    _0x585fac.remove();
                    _0xf0f82.style.pointerEvents = "auto";
                    _0xf0f82.style.filter = "none";
                    _0xf0f82.style.filter = "none";
                    _0x225fd0(event);
                  });
                  _0x557e84.addEventListener("click", function () {
                    _0x63ee1f();
                    _0x225fd0(event);
                  });
                };
                var _0x2c0fbe = function () {
                  function _0x17dd7c() {
                    if (_0x48b78c) {
                      _0x18fb30.textContent = "Safe (" + _0x14ad9b + ')';
                    } else {
                      _0x18fb30.textContent = "Safe (none)";
                    }
                  }
                  function _0x352e06(_0x50bb77) {
                    _0x48b78c = _0x50bb77;
                    if (_0x48b78c) {
                      _0x14ad9b = String.fromCharCode(_0x48b78c);
                    } else {
                      _0x14ad9b = "none";
                    }
                    localStorage.setItem("safeKeyCode", _0x48b78c);
                    localStorage.setItem("safeChosenKey", _0x14ad9b);
                    _0x17dd7c();
                    document.removeEventListener("keydown", _0x25c5f1);
                    _0x225fd0(event);
                  }
                  function _0x25c5f1(_0x4a5380) {
                    if (_0x4a5380.keyCode === 27) {
                      _0x352e06(null);
                    } else {
                      _0x352e06(_0x4a5380.keyCode);
                    }
                  }
                  function _0x4cd676() {
                    if (_0x12eaa9) {
                      _0x1c6796.textContent = "Mines (" + _0x4039ad + ')';
                    } else {
                      _0x1c6796.textContent = "Mines (none)";
                    }
                  }
                  function _0x13de52(_0x3e2505) {
                    _0x12eaa9 = _0x3e2505;
                    if (_0x12eaa9) {
                      _0x4039ad = String.fromCharCode(_0x12eaa9);
                    } else {
                      _0x4039ad = "none";
                    }
                    localStorage.setItem("minesKeyCode", _0x12eaa9);
                    localStorage.setItem("minesChosenKey", _0x4039ad);
                    _0x4cd676();
                    document.removeEventListener("keydown", _0x364137);
                    _0x225fd0(event);
                  }
                  function _0x364137(_0x538d6c) {
                    if (_0x538d6c.keyCode === 27) {
                      _0x13de52(null);
                    } else {
                      _0x13de52(_0x538d6c.keyCode);
                    }
                  }
                  function _0x5eac2d() {
                    if (_0x107e64) {
                      _0x3ca960.textContent = "Crash (" + _0x62191c + ')';
                    } else {
                      _0x3ca960.textContent = "Crash (none)";
                    }
                  }
                  function _0x1f8a0c(_0x234094) {
                    _0x107e64 = _0x234094;
                    if (_0x107e64) {
                      _0x62191c = String.fromCharCode(_0x107e64);
                    } else {
                      _0x62191c = "none";
                    }
                    localStorage.setItem("crashKeyCode", _0x107e64);
                    localStorage.setItem("crashChosenKey", _0x62191c);
                    _0x5eac2d();
                    document.removeEventListener("keydown", _0x21c1cc);
                    _0x225fd0(event);
                  }
                  function _0x21c1cc(_0x3a5217) {
                    if (_0x3a5217.keyCode === 27) {
                      _0x1f8a0c(null);
                    } else {
                      _0x1f8a0c(_0x3a5217.keyCode);
                    }
                  }
                  function _0x3121f8() {
                    if (_0x5aaf5d) {
                      _0x1ae4e2.textContent = "Slide (" + _0x24370d + ')';
                    } else {
                      _0x1ae4e2.textContent = "Slide (none)";
                    }
                  }
                  function _0x31ac09(_0x388179) {
                    _0x5aaf5d = _0x388179;
                    if (_0x5aaf5d) {
                      _0x24370d = String.fromCharCode(_0x5aaf5d);
                    } else {
                      _0x24370d = "none";
                    }
                    localStorage.setItem("slideKeyCode", _0x5aaf5d);
                    localStorage.setItem("slideChosenKey", _0x24370d);
                    _0x3121f8();
                    document.removeEventListener("keydown", _0xebecb);
                    _0x225fd0(event);
                  }
                  function _0xebecb(_0x3640a2) {
                    if (_0x3640a2.keyCode === 27) {
                      _0x31ac09(null);
                    } else {
                      _0x31ac09(_0x3640a2.keyCode);
                    }
                  }
                  function _0x622667() {
                    if (_0x121856) {
                      _0x5751ca.textContent = "Towers (" + _0x5c3056 + ')';
                    } else {
                      _0x5751ca.textContent = "Towers (none)";
                    }
                  }
                  function _0x46422a(_0x59e805) {
                    _0x121856 = _0x59e805;
                    if (_0x121856) {
                      _0x5c3056 = String.fromCharCode(_0x121856);
                    } else {
                      _0x5c3056 = "none";
                    }
                    localStorage.setItem("towersKeyCode", _0x121856);
                    localStorage.setItem("towersChosenKey", _0x5c3056);
                    _0x622667();
                    document.removeEventListener("keydown", _0x1d4101);
                    _0x225fd0(event);
                  }
                  function _0x1d4101(_0x3d79ef) {
                    if (_0x3d79ef.keyCode === 27) {
                      _0x46422a(null);
                    } else {
                      _0x46422a(_0x3d79ef.keyCode);
                    }
                  }
                  function _0x126e40() {
                    if (_0x89b123 === 16) {
                      _0xb0560d = "shift";
                    }
                    if (_0x89b123) {
                      _0x273d06.textContent = "Menu (" + _0xb0560d + ')';
                    } else {
                      _0x273d06.textContent = "Menu (none)";
                    }
                  }
                  function _0x5b0b70(_0x114790) {
                    _0x89b123 = _0x114790;
                    if (_0x89b123) {
                      _0xb0560d = String.fromCharCode(_0x89b123);
                    } else {
                      _0xb0560d = "none";
                    }
                    localStorage.setItem("menuKeyCode", _0x89b123);
                    localStorage.setItem("menuChosenKey", _0xb0560d);
                    _0x126e40();
                    document.removeEventListener("keydown", _0x26abf6);
                    _0x225fd0(event);
                  }
                  function _0x26abf6(_0x317391) {
                    if (_0x317391.keyCode === 27) {
                      _0x5b0b70(0);
                    } else {
                      _0x5b0b70(_0x317391.keyCode);
                    }
                  }
                  document.body.insertAdjacentHTML("beforeend", "\n                                        <div id=\"keyBindsWindow\">\n                                            <div id=\"keyBindsTitleBar\">\n                                                <div id=\"keyBindsTitleContainer\">\n                                                    <span id=\"keyBindsTitle\">Keybinds</span>\n                                                </div>\n                                                <button id=\"bindExitButton\">-</button>\n                                            </div>\n                                            <div id=\"keyBindsContainer\" class=\"centered\">\n                                                <div id=\"row1\" class=\"centered\">\n                                                    <button id=\"safeBindButton\">Safe</button>\n                                                    <button id=\"minesBindButton\">Mines</button>\n                                                </div>\n                                                <div id=\"row2\" class=\"centered\">\n                                                    <button id=\"slideBindButton\">Slide</button>\n                                                    <button id=\"crashBindButton\">Crash</button>\n                                                </div>\n                                                <div id=\"row3\" class=\"centered\">\n                                                    <button id=\"towersBindButton\">Towers</button>\n                                                    <button id=\"menuBindButton\">Menu</button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        ");
                  var _0x252afe = document.getElementById("keyBindsWindow");
                  var _0x18fb30 = document.getElementById("safeBindButton");
                  var _0x1c6796 = document.getElementById("minesBindButton");
                  var _0x3ca960 = document.getElementById("crashBindButton");
                  var _0x1ae4e2 = document.getElementById("slideBindButton");
                  var _0x5751ca = document.getElementById("towersBindButton");
                  var _0x273d06 = document.getElementById("menuBindButton");
                  var _0x4ac124 = document.getElementById("bindExitButton");
                  var _0x2782fc = _0xa9b8ba.getBoundingClientRect();
                  var _0x15c3a8 = _0x2782fc.left + _0x2782fc.width / 2 - _0x252afe.offsetWidth / 2;
                  var _0x1df9ce = _0x2782fc.top + _0x2782fc.height / 2 - _0x252afe.offsetHeight / 2;
                  var _0x43110d = document.getElementById("settingsWindow");
                  _0x252afe.style.left = _0x15c3a8 + 'px';
                  _0x252afe.style.top = _0x1df9ce + 'px';
                  _0x4ac124.addEventListener("click", function () {
                    _0x252afe.remove();
                    _0x43110d.style.pointerEvents = "auto";
                    _0x43110d.style.filter = "none";
                    _0x43110d.style.filter = "none";
                    _0x225fd0(event);
                  });
                  var _0x48b78c = parseInt(localStorage.getItem("safeKeyCode"));
                  var _0x14ad9b = localStorage.getItem("safeChosenKey") || '';
                  var _0x12eaa9 = parseInt(localStorage.getItem("minesKeyCode"));
                  var _0x4039ad = localStorage.getItem("minesChosenKey") || '';
                  var _0x107e64 = parseInt(localStorage.getItem("crashKeyCode"));
                  var _0x62191c = localStorage.getItem("crashChosenKey") || '';
                  var _0x5aaf5d = parseInt(localStorage.getItem("slideKeyCode"));
                  var _0x24370d = localStorage.getItem("slideChosenKey") || '';
                  var _0x121856 = parseInt(localStorage.getItem("towersKeyCode"));
                  var _0x5c3056 = localStorage.getItem("towersChosenKey") || '';
                  var _0x89b123 = parseInt(localStorage.getItem("menuKeyCode")) || 16;
                  var _0xb0560d = localStorage.getItem("menuChosenKey") || "shift";
                  _0x18fb30.addEventListener("click", function () {
                    _0x18fb30.textContent = "Safe (...)";
                    document.addEventListener("keydown", _0x25c5f1);
                  });
                  if (_0x48b78c) {
                    document.addEventListener("keydown", function (_0x47ce51) {
                      if (_0x47ce51.keyCode === _0x48b78c) {
                        _0x4b746c();
                      }
                    });
                  }
                  _0x17dd7c();
                  _0x1c6796.addEventListener("click", function () {
                    _0x1c6796.textContent = "Mines (...)";
                    document.addEventListener("keydown", _0x364137);
                  });
                  if (_0x12eaa9) {
                    document.addEventListener("keydown", function (_0x3ad316) {
                      if (_0x3ad316.keyCode === _0x12eaa9) {
                        _0x28ee58();
                      }
                    });
                  }
                  _0x4cd676();
                  _0x3ca960.addEventListener("click", function () {
                    _0x3ca960.textContent = "Crash (...)";
                    document.addEventListener("keydown", _0x21c1cc);
                  });
                  if (_0x107e64) {
                    document.addEventListener("keydown", function (_0x521e5f) {
                      if (_0x521e5f.keyCode === _0x107e64) {
                        _0x5d79b9();
                      }
                    });
                  }
                  _0x5eac2d();
                  document.addEventListener("keydown", function (_0x4f966e) {
                    if (_0x4f966e.keyCode === 27) {
                      _0x4f966e.preventDefault();
                    }
                  });
                  _0x1ae4e2.addEventListener("click", function () {
                    _0x1ae4e2.textContent = "Slide (...)";
                    document.addEventListener("keydown", _0xebecb);
                  });
                  if (_0x5aaf5d) {
                    document.addEventListener("keydown", function (_0x2b9def) {
                      if (_0x2b9def.keyCode === _0x5aaf5d) {
                        _0x441104();
                      }
                    });
                  }
                  _0x3121f8();
                  document.addEventListener("keydown", function (_0xb18e9d) {
                    if (_0xb18e9d.keyCode === 27) {
                      _0xb18e9d.preventDefault();
                    }
                  });
                  _0x5751ca.addEventListener("click", function () {
                    _0x5751ca.textContent = "Towers (...)";
                    document.addEventListener("keydown", _0x1d4101);
                  });
                  if (_0x121856) {
                    document.addEventListener("keydown", function (_0x4f390a) {
                      if (_0x4f390a.keyCode === _0x121856) {
                        _0x3d18e1();
                      }
                    });
                  }
                  _0x622667();
                  document.addEventListener("keydown", function (_0x4e76f9) {
                    if (_0x4e76f9.keyCode === 27) {
                      _0x4e76f9.preventDefault();
                    }
                  });
                  _0x273d06.addEventListener("click", function () {
                    _0x273d06.textContent = "Menu (...)";
                    document.addEventListener("keydown", _0x26abf6);
                  });
                  _0x126e40();
                  document.addEventListener("keydown", function (_0x28c1de) {
                    if (_0x28c1de.keyCode === 27) {
                      _0x28c1de.preventDefault();
                    }
                  });
                };
                var _0x2011a6 = function (_0x3179a4) {
                  var _0x42e5e8 = new Headers();
                  _0x42e5e8.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36");
                  _0x42e5e8.append("X-Auth-Token", value);
                  var _0x5d6c0e = {
                    'method': "GET",
                    'headers': _0x42e5e8
                  };
                  fetch("https://api.bloxflip.com/games/towers", _0x5d6c0e).then(_0x59e7e4 => {
                    return _0x59e7e4.json();
                  }).then(_0x115838 => {
                    var _0x430b43 = _0x115838.hasGame;
                    if (_0x430b43) {
                      var _0x54e53c = _0x115838.game.difficulty;
                      if (_0x54e53c === "hard") {
                        var _0x16c710 = document.getElementById("predictionLabel");
                        _0x16c710.textContent = "Cannot predict for hard difficulty";
                        _0x16c710.style.fontSize = "24px";
                        _0x16c710.style.lineHeight = "30px";
                        var _0x312757 = document.querySelectorAll(".button_button__eJwei.towers_towersGameButton__Fm2im");
                        _0x312757.forEach(function (_0x2298d5) {
                          _0x2298d5.classList.remove("safeoutlined");
                        });
                        return;
                      }
                      var _0x37b5b4 = {
                        'method': "GET",
                        'headers': _0x42e5e8
                      };
                      fetch("https://api.bloxflip.com/games/towers/history?size=5&page=0", _0x37b5b4).then(_0x4dbb2d => {
                        return _0x4dbb2d.json();
                      }).then(_0x1a519d => {
                        function _0x1dd770(_0x57ae1e) {
                          return _0x57ae1e.reduce(function (_0x53a607, _0x1d7622) {
                            return _0x53a607 + (_0x1d7622 === 1 ? 1 : 0);
                          }, 0);
                        }
                        function _0x23aeb4(_0x15f3cf) {
                          if (_0x15f3cf < 0 || _0x4b9550 === 0) {
                            return;
                          }
                          var _0x3ae700 = _0x507ea1[_0x15f3cf];
                          _0x3ae700.click();
                          _0x4b9550--;
                          setTimeout(function () {
                            _0x23aeb4(_0x15f3cf - 1);
                          }, 1250);
                        }
                        var _0x34d5a0 = _0x1a519d.data[1].towerLevels;
                        _0x34d5a0.reverse();
                        var _0x2c0c2d;
                        var _0x39f5db = _0x1a519d.data[1].difficulty;
                        if (_0x39f5db === "normal") {
                          _0x2c0c2d = document.querySelectorAll(".towers_towersGameRow__TeoqD");
                        } else {
                          _0x2c0c2d = document.querySelectorAll(".towers_towersGameRow__TeoqD.towers_towersGameThreeRows__NHpS9");
                        }
                        _0x2c0c2d.forEach(function (_0x183ca6, _0x2c2df3) {
                          var _0x355899 = _0x183ca6.querySelectorAll(".towers_towersGameRowContainer__W4mP_");
                          var _0x5c97bb = 0;
                          var _0x4d67b6 = null;
                          _0x355899.forEach(function (_0x14654a, _0x43a84e) {
                            var _0xdc418b = _0x14654a.querySelectorAll(".button_button__eJwei.towers_towersGameButton__Fm2im");
                            var _0x2eca49 = _0x1dd770(_0x34d5a0[_0x2c2df3]);
                            if (_0x34d5a0[_0x2c2df3][_0x43a84e] === 1 && _0x2eca49 >= _0x5c97bb) {
                              _0x5c97bb = _0x2eca49;
                              _0x4d67b6 = _0xdc418b[0];
                            }
                          });
                          if (_0x4d67b6) {
                            _0x4d67b6.classList.add("safeoutlined", "active");
                          }
                        });
                        var _0x507ea1 = document.querySelectorAll(".button_button__eJwei.towers_towersGameButton__Fm2im.safeoutlined");
                        var _0x42a708 = _0x507ea1.length - 1;
                        var _0x4b9550 = Math.min(_0x3179a4, _0x42a708 + 1);
                        _0x23aeb4(_0x42a708);
                      });
                    } else {}
                  })["catch"](_0x1a755f => {});
                };
                var _0x19ed6b = function () {
                  var _0xabcc1d = localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN");
                  var _0x14a39a = {
                    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
                    'X-Auth-Token': _0xabcc1d
                  };
                  var _0x298f7c = {
                    'method': "GET",
                    'headers': _0x14a39a
                  };
                  fetch("https://api.bloxflip.com/games/towers", _0x298f7c).then(_0x4d3b1c => {
                    return _0x4d3b1c.json();
                  }).then(_0x2c7fff => {
                    var _0x2a2f12 = _0x2c7fff.hasGame;
                    if (_0x2a2f12) {
                      var _0x55ae74 = document.querySelector(".button_secondary__dwIbt.gameBetSubmit");
                      if (_0x55ae74) {
                        _0x55ae74.click();
                      }
                      setTimeout(function () {
                        var _0x3ae12 = document.querySelector(".button_primary__mdLFG.gameBetSubmit");
                        if (_0x3ae12) {
                          _0x3ae12.click();
                        }
                        setTimeout(function () {
                          _0x2011a6();
                        }, 3000);
                      }, 3000);
                    } else {
                      if (_0x55ae74) {
                        _0x55ae74.click();
                      }
                      setTimeout(function () {
                        _0x2011a6();
                      }, 2000);
                    }
                  })["catch"](_0x1b6be7 => {});
                };
                var _0x18756b = function () {
                  _0x225fd0(event);
                  _0x57fa50 = !_0x57fa50;
                  var _0xf2e7e = document.getElementById("towersPlayButton");
                  if (_0x57fa50) {
                    _0xf2e7e.textContent = "Auto play (On)";
                    _0x56b2f7 = setInterval(_0x19ed6b, 2000);
                  } else {
                    _0xf2e7e.textContent = "Auto play (Off)";
                    clearInterval(_0x56b2f7);
                  }
                };
                var _0x50580e = function () {
                  var _0x37a72a = document.querySelector(".button_primary__mdLFG.gameBetSubmit");
                  if (_0x37a72a) {
                    _0x37a72a.removeEventListener("click", _0x55288e);
                  }
                };
                var _0x5a375b = function () {
                  var _0x395ce6 = document.querySelector(".button_button__eJwei.button_primary__mdLFG.gameBetSubmit");
                  if (_0x395ce6) {
                    _0x395ce6.addEventListener("click", _0x55288e);
                  }
                };
                var _0x55288e = function () {
                  setTimeout(_0x3d18e1, 500);
                };
                var _0x25fa5e = function () {
                  _0x225fd0(event);
                  _0x1954ed = !_0x1954ed;
                  var _0x4b3588 = document.getElementById("towersAutoPredictButton");
                  if (_0x1954ed) {
                    _0x4b3588.textContent = "Auto predict (On)";
                    _0x5a375b();
                  } else {
                    _0x4b3588.textContent = "Auto predict (Off)";
                    _0x50580e();
                  }
                };
                var _0x58a577 = function () {
                  document.body.insertAdjacentHTML("beforeend", "\n                                        <div id=\"towersAutoPlayWindow\">\n                                            <div id=\"towersAutoPlayTitleBar\">\n                                                <div id=\"towersAutoPlayTitleContainer\">\n                                                    <span id=\"towersAutoPlayTitle\">Auto Towers</span>\n                                                </div>\n                                                <button id=\"towersAutoExitButton\">-</button>\n                                            </div>\n                                            <div id=\"towersAutoPlayContainer\" class=\"centered\">\n                                                <div id=\"row1\" class=\"centered\">\n                                                    <button id=\"towersPlayButton\">Auto play</button>\n                                                    <button id=\"towersAutoPredictButton\">Auto predict</button>\n                                                </div>\n                                                <div id=\"autorow2\" class=\"centered\">\n                                                    <label id=\"spotsSliderLabel\" for=\"spotsSlider\">Spots:</label>\n                                                    <span id=\"spotsLabel\">1</span>\n                                                </div>\n                                                <div id=\"row3\" class=\"centered\">\n                                                    <input type=\"range\" id=\"spotsSlider\" min=\"1\" max=\"8\" value=\"1\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    ");
                  var _0x597256 = document.getElementById("towersAutoPlayWindow");
                  var _0x450bcd = document.getElementById("towersPlayButton");
                  var _0x1530fc = document.getElementById("towersAutoPredictButton");
                  var _0x4784e7 = document.getElementById("towersAutoExitButton");
                  var _0x57db5d = document.getElementById("spotsSlider");
                  var _0x346d4b = document.getElementById("spotsLabel");
                  var _0x399984 = _0xa9b8ba.getBoundingClientRect();
                  var _0x4ecb42 = _0x399984.left + _0x399984.width / 2 - _0x597256.offsetWidth / 2;
                  var _0x22dea4 = _0x399984.top + _0x399984.height / 2 - _0x597256.offsetHeight / 2;
                  var _0x13507a = document.getElementById("settingsWindow");
                  _0x597256.style.left = _0x4ecb42 + 'px';
                  _0x597256.style.top = _0x22dea4 + 'px';
                  _0x1530fc.addEventListener("click", _0x25fa5e);
                  _0x450bcd.addEventListener("click", _0x18756b);
                  _0x4784e7.addEventListener("click", function () {
                    _0x597256.remove();
                    _0x13507a.style.pointerEvents = "auto";
                    _0x13507a.style.filter = "none";
                    _0x13507a.style.filter = "none";
                    _0x225fd0(event);
                  });
                  _0x57db5d.addEventListener("input", function () {
                    var _0x304b07 = parseInt(_0x57db5d.value);
                    _0x346d4b.textContent = _0x304b07;
                    var _0x195c6b = "linear-gradient(to right, var(--baseColor) 0%, var(--baseColor) " + (_0x304b07 - 1) / 8 * 100 + "%, #383838 " + (_0x304b07 - 1) / 8 * 100 + "%, #383838 100%)";
                    _0x57db5d.style.background = _0x195c6b;
                    _0x225fd0(event);
                  });
                };
                var _0x44b8e6 = function () {
                  var _0x519af5 = localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN");
                  var _0x4b06a8 = {
                    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
                    'X-Auth-Token': _0x519af5
                  };
                  var _0x90d6d = {
                    'method': "GET",
                    'headers': _0x4b06a8
                  };
                  fetch("https://api.bloxflip.com/games/mines/history?size=5&page=0", _0x90d6d).then(_0xd5e2fe => {
                    return _0xd5e2fe.json();
                  }).then(_0x5383ef => {
                    if (_0x5383ef.success === true && Array.isArray(_0x5383ef.data)) {
                      var _0xb55a52 = [];
                      _0x5383ef.data.forEach(function (_0x4eff97) {
                        if (Array.isArray(_0x4eff97.mineLocations)) {
                          _0xb55a52 = _0xb55a52.concat(_0x4eff97.mineLocations);
                        }
                      });
                      var _0x2aac42 = _0xb55a52.map(function (_0x1c52e0) {
                        return _0x1c52e0 + 1;
                      });
                      var _0xdd817 = {};
                      _0x2aac42.forEach(function (_0x204a04) {
                        if (_0xdd817[_0x204a04] === undefined) {
                          _0xdd817[_0x204a04] = 1;
                        } else {
                          _0xdd817[_0x204a04]++;
                        }
                      });
                      var _0x4e7d37 = Object.keys(_0xdd817).sort(function (_0x2eb943, _0x3fa34c) {
                        return _0xdd817[_0x3fa34c] - _0xdd817[_0x2eb943];
                      });
                      var _0x31a3a7 = _0x4e7d37.slice(0, 4);
                      _0x31a3a7.reverse();
                      setTimeout(function () {
                        var _0x561e5d = document.querySelector(".button_secondary__dwIbt.gameBetSubmit");
                        if (_0x561e5d) {
                          _0x561e5d.click();
                        }
                        try {
                          var _0x46e27a = function (_0x4c8b66) {
                            if (_0x4c8b66 >= _0x1eb3cd) {
                              var _0x576740 = document.querySelector(".button_secondary__dwIbt.gameBetSubmit");
                              if (_0x576740) {
                                _0x576740.click();
                              }
                              return;
                            }
                            var _0x5308e0 = _0x31a3a7[_0x4c8b66];
                            var _0x58001e = _0x5308e0 - 1;
                            var _0x4c1a81 = Math.floor(_0x58001e / 5);
                            var _0x38b518 = _0x58001e % 5;
                            var _0x16b6b4 = 4 - _0x38b518;
                            var _0x31071b = _0x4c1a81 * 5 + _0x16b6b4 + 1;
                            if (_0x31071b >= 1 && _0x31071b <= 25) {
                              _0x4bc958[_0x31071b - 1].click();
                            }
                            setTimeout(function () {
                              _0x46e27a(_0x4c8b66 + 1);
                            }, 125);
                          };
                          var _0x2af9b3 = document.getElementById("spotsSlider");
                          var _0x1eb3cd = parseInt(_0x2af9b3.value);
                          var _0x4bc958 = document.querySelectorAll(".mines_minesGameItem__S2ytQ");
                          _0x46e27a(0);
                        } catch (_0x47610f) {}
                      }, 1250);
                    } else {
                      var _0x2d0575 = document.getElementById("predictionLabel");
                      _0x2d0575.textContent = "Invalid API Response";
                      _0x2d0575.style.fontSize = "24px";
                      _0x2d0575.style.lineHeight = "30px";
                    }
                  })["catch"](_0xcc5109 => {});
                };
                var _0x3770cf = function () {
                  var _0x339d5a = localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN");
                  var _0x41c7de = {
                    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
                    'X-Auth-Token': _0x339d5a
                  };
                  var _0x546d0e = {
                    'method': "GET",
                    'headers': _0x41c7de
                  };
                  fetch("https://api.bloxflip.com/games/mines/history?size=5&page=0", _0x546d0e).then(_0x352472 => {
                    return _0x352472.json();
                  }).then(_0x2eb5ea => {
                    if (_0x2eb5ea.success === true && Array.isArray(_0x2eb5ea.data)) {
                      var _0x9225fc = [];
                      var _0x4c30f3 = {};
                      _0x2eb5ea.data.forEach(function (_0x2313fa) {
                        if (Array.isArray(_0x2313fa.mineLocations)) {
                          _0x9225fc = _0x9225fc.concat(_0x2313fa.mineLocations);
                          _0x4c30f3[_0x2313fa.id] = _0x2313fa.minesAmount;
                        }
                      });
                      var _0x5ee090 = _0x9225fc.sort(function (_0x5ed555, _0x4a8699) {
                        return _0x4c30f3[_0x5ed555] - _0x4c30f3[_0x4a8699];
                      });
                      var _0x3a9206 = _0x5ee090.slice(0, 8);
                      var _0x228d07 = _0x5ee090.slice().reverse();
                      var _0x2f3150 = _0x228d07.slice(0, 4);
                      setTimeout(function () {
                        var _0x4b4c12 = document.querySelector(".button_secondary__dwIbt.gameBetSubmit");
                        if (_0x4b4c12) {
                          _0x4b4c12.click();
                        }
                        try {
                          var _0x242796 = function (_0x3c75b8) {
                            if (_0x3c75b8 >= _0x50dd31) {
                              var _0x4241b4 = document.querySelector(".button_secondary__dwIbt.gameBetSubmit");
                              if (_0x4241b4) {
                                _0x4241b4.click();
                              }
                              return;
                            }
                            var _0x3ae30b = Math.floor(Math.random() * _0x4cdb63.length);
                            var _0x4d0d8c = _0x4cdb63[_0x3ae30b];
                            _0x4cdb63.splice(_0x3ae30b, 1);
                            _0x51f073[_0x4d0d8c - 1].click();
                            setTimeout(function () {
                              _0x242796(_0x3c75b8 + 1);
                            }, 125);
                          };
                          var _0x2d6999 = document.getElementById("spotsSlider");
                          var _0x50dd31 = parseInt(_0x2d6999.value);
                          var _0x51f073 = document.querySelectorAll(".mines_minesGameItem__S2ytQ");
                          var _0x4cdb63 = [...Array(25).keys()].map(_0x44f956 => {
                            return _0x44f956 + 1;
                          }).filter(_0x399862 => {
                            return !_0x3a9206.includes(_0x399862) && !_0x2f3150.includes(_0x399862);
                          });
                          _0x242796(0);
                        } catch (_0x40ad4f) {}
                      }, 1250);
                    } else {
                      var _0x3d6386 = document.getElementById("predictionLabel");
                      _0x3d6386.textContent = "Invalid API Response";
                      _0x3d6386.style.fontSize = "24px";
                      _0x3d6386.style.lineHeight = "30px";
                    }
                  })["catch"](_0x5b3bd2 => {});
                };
                var _0x3cb417 = function () {
                  var _0x304863 = localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN");
                  var _0x448e6c = {
                    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
                    'X-Auth-Token': _0x304863
                  };
                  var _0x2cbf63 = {
                    'method': "GET",
                    'headers': _0x448e6c
                  };
                  fetch("https://api.bloxflip.com/games/mines", _0x2cbf63).then(_0x468a13 => {
                    return _0x468a13.json();
                  }).then(_0x4fe3e4 => {
                    var _0x57f95e = _0x4fe3e4.hasGame;
                    if (_0x57f95e) {
                      var _0x2be1f3 = document.querySelector(".button_secondary__dwIbt.gameBetSubmit");
                      if (_0x2be1f3) {
                        _0x2be1f3.click();
                      }
                      setTimeout(function () {
                        var _0x1e2aae = document.querySelector(".button_primary__mdLFG.gameBetSubmit");
                        if (_0x1e2aae) {
                          _0x1e2aae.click();
                        }
                        setTimeout(function () {
                          if (_0x511d6d) {
                            _0x44b8e6();
                          } else {
                            _0x3770cf();
                          }
                        }, 1250);
                      }, 1250);
                    } else {
                      if (_0x2be1f3) {
                        _0x2be1f3.click();
                      }
                      setTimeout(function () {
                        if (_0x511d6d) {
                          _0x44b8e6();
                        } else {
                          _0x3770cf();
                        }
                      }, 1250);
                    }
                  })["catch"](_0x4d612c => {});
                };
                var _0x73df84 = function () {
                  setTimeout(_0x4b746c, 500);
                };
                var _0x5c0f67 = function () {
                  setTimeout(_0x28ee58, 500);
                };
                var _0xd69586 = function () {
                  var _0x4f7e0f = document.querySelector(".button_primary__mdLFG.gameBetSubmit");
                  if (_0x4f7e0f) {
                    _0x4f7e0f.removeEventListener("click", _0x73df84);
                  }
                };
                var _0x4db64c = function () {
                  var _0x244b12 = document.querySelector(".button_button__eJwei.button_primary__mdLFG.gameBetSubmit");
                  if (_0x244b12) {
                    _0x244b12.addEventListener("click", _0x73df84);
                  }
                };
                var _0x1dd414 = function () {
                  var _0x27c3a0 = document.querySelector(".button_primary__mdLFG.gameBetSubmit");
                  if (_0x27c3a0) {
                    _0x27c3a0.removeEventListener("click", _0x5c0f67);
                  }
                };
                var _0x34c6bc = function () {
                  var _0x5318a4 = document.querySelector(".button_button__eJwei.button_primary__mdLFG.gameBetSubmit");
                  if (_0x5318a4) {
                    _0x5318a4.addEventListener("click", _0x5c0f67);
                  }
                };
                var _0x554c83 = function () {
                  _0x225fd0(event);
                  _0x2d083d = !_0x2d083d;
                  var _0x247faf = document.getElementById("minesAutoPredictButton");
                  if (_0x2d083d) {
                    _0x247faf.textContent = "Auto predict (On)";
                    if (_0x511d6d) {
                      _0x4db64c();
                    } else {
                      _0x34c6bc();
                    }
                  } else {
                    _0x247faf.textContent = "Auto predict (Off)";
                    if (_0x511d6d) {
                      _0xd69586();
                    } else {
                      _0x1dd414();
                    }
                  }
                };
                var _0x2d97d5 = function () {
                  _0x225fd0(event);
                  _0x57fa50 = !_0x57fa50;
                  var _0x2f1cbd = document.getElementById("minesPlayButton");
                  if (_0x57fa50) {
                    _0x2f1cbd.textContent = "Auto play (On)";
                    _0x112994 = setInterval(_0x3cb417, 2000);
                  } else {
                    _0x2f1cbd.textContent = "Auto play (Off)";
                    clearInterval(_0x112994);
                  }
                };
                var _0x2f0e97 = function () {
                  _0x225fd0(event);
                  _0x511d6d = !_0x511d6d;
                  var _0x57aedb = document.getElementById("predictionTypeButton");
                  if (_0x511d6d) {
                    _0x57aedb.textContent = "Safe";
                    _0x1dd414();
                    _0x4db64c();
                  } else {
                    _0x57aedb.textContent = "Mines";
                    _0xd69586();
                    _0x34c6bc();
                  }
                };
                var _0x204b3f = function () {
                  document.body.insertAdjacentHTML("beforeend", "\n                                        <div id=\"minesAutoPlayWindow\">\n                                           <div id=\"minesAutoPlayTitleBar\">\n                                                <div id=\"minesAutoPlayTitleContainer\">\n                                                    <span id=\"minesAutoPlayTitle\">Auto Mines</span>\n                                                </div>\n                                                <button id=\"minesAutoExitButton\">-</button>\n                                            </div>\n                                            <div id=\"minesAutoPlayContainer\" class=\"centered\">\n                                                <div id=\"row1\" class=\"centered\">\n                                                    <button id=\"minesPlayButton\">Auto play</button>\n                                                    <button id=\"minesAutoPredictButton\">Auto predict</button>\n                                                </div>\n                                                <div id=\"autorow2\" class=\"centered\">\n                                                    <button id=\"predictionTypeButton\">Mines</button>\n                                                </div>\n                                                <div id=\"row3\" class=\"centered\">\n                                                    <label id=\"spotsSliderLabel\" for=\"spotsSlider\">Spots:</label>\n                                                    <span id=\"spotsLabel\">1</span>\n                                                </div>\n                                                <div id=\"row4\" class=\"centered\">\n                                                    <input type=\"range\" id=\"spotsSlider\" min=\"1\" max=\"24\" value=\"1\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    ");
                  var _0x33d586 = document.getElementById("minesAutoPlayWindow");
                  var _0x38f4de = document.getElementById("minesPlayButton");
                  var _0x30015e = document.getElementById("minesAutoPredictButton");
                  var _0x23d15b = document.getElementById("minesAutoExitButton");
                  var _0x2f89c1 = document.getElementById("predictionTypeButton");
                  var _0x443336 = document.getElementById("spotsSlider");
                  var _0x41f475 = document.getElementById("spotsLabel");
                  var _0x577b1d = _0xa9b8ba.getBoundingClientRect();
                  var _0x25d725 = _0x577b1d.left + _0x577b1d.width / 2 - _0x33d586.offsetWidth / 2;
                  var _0x3ae46c = _0x577b1d.top + _0x577b1d.height / 2 - _0x33d586.offsetHeight / 2;
                  var _0x3370a3 = document.getElementById("settingsWindow");
                  _0x33d586.style.left = _0x25d725 + 'px';
                  _0x33d586.style.top = _0x3ae46c + 'px';
                  _0x38f4de.addEventListener("click", _0x2d97d5);
                  _0x30015e.addEventListener("click", _0x554c83);
                  _0x2f89c1.addEventListener("click", _0x2f0e97);
                  _0x23d15b.addEventListener("click", function () {
                    _0x33d586.remove();
                    _0x3370a3.style.pointerEvents = "auto";
                    _0x3370a3.style.filter = "none";
                    _0x3370a3.style.filter = "none";
                    _0x225fd0(event);
                  });
                  _0x443336.addEventListener("input", function (_0x1b25ca) {
                    var _0x4b1e0c = parseInt(_0x443336.value);
                    _0x41f475.textContent = _0x4b1e0c;
                    var _0x52b053 = "linear-gradient(to right, var(--baseColor) 0%, var(--baseColor) " + (_0x4b1e0c - 1) / 24 * 100 + "%, #383838 " + (_0x4b1e0c - 1) / 24 * 100 + "%, #383838 100%)";
                    _0x443336.style.background = _0x52b053;
                    _0x225fd0(_0x1b25ca);
                  });
                };
                var _0xce8161 = function () {
                  document.body.insertAdjacentHTML("beforeend", "\n                                        <div id=\"autoPlayWindow\">\n                                           <div id=\"autoPlayTitleBar\">\n                                                <div id=\"autoPlayTitleContainer\">\n                                                    <span id=\"autoPlayTitle\">Auto Play</span>\n                                                </div>\n                                                <button id=\"autoExitButton\">-</button>\n                                            </div>\n                                            <div id=\"autoPlayContainer\" class=\"centered\">\n                                                <div id=\"autoPlayContainerRow1\" class=\"centered\">\n                                                    <button id=\"minesAutoPlayButton\">Mines</button>\n                                                    <button id=\"towersAutoPlayButton\">Towers</button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        ");
                  var _0x29e1dc = document.getElementById("autoPlayWindow");
                  var _0x3319a8 = document.getElementById("minesAutoPlayButton");
                  var _0x1f35eb = document.getElementById("towersAutoPlayButton");
                  var _0xafb5aa = document.getElementById("autoExitButton");
                  var _0x3f6013 = _0xa9b8ba.getBoundingClientRect();
                  var _0x432615 = _0x3f6013.left + _0x3f6013.width / 2 - _0x29e1dc.offsetWidth / 2;
                  var _0x30f232 = _0x3f6013.top + _0x3f6013.height / 2 - _0x29e1dc.offsetHeight / 2;
                  var _0x2e4477 = document.getElementById("settingsWindow");
                  _0x29e1dc.style.left = _0x432615 + 'px';
                  _0x29e1dc.style.top = _0x30f232 + 'px';
                  _0x3319a8.addEventListener("click", function (_0x4e357e) {
                    _0x204b3f();
                    _0x225fd0(_0x4e357e);
                  });
                  _0x1f35eb.addEventListener("click", function (_0x5777de) {
                    _0x58a577();
                    _0x225fd0(_0x5777de);
                  });
                  _0xafb5aa.addEventListener("click", function () {
                    _0x29e1dc.remove();
                    _0x2e4477.style.pointerEvents = "auto";
                    _0x2e4477.style.filter = "none";
                    _0x2e4477.style.filter = "none";
                    _0x225fd0(event);
                  });
                };
                var _0x518685 = function () {
                  document.body.insertAdjacentHTML("beforeend", "\n                                            <div id=\"emojiChangerWindow\">\n                                                <div id=\"emojiChangerTitleBar\">\n                                                    <div id=\"emojiChangerTitleContainer\">\n                                                        <span id=\"emojiChangerTitle\">Emoji Changer</span>\n                                                    </div>\n                                                    <button id=\"emojiExitButton\">-</button>\n                                                </div>\n                                                <div id=\"emojiChangerButtons\" class=\"centered\">\n                                                    <div class=\"predict-emoji-container\">\n                                                        <label id=\"safeLabel\" for=\"safeEmoji\">Safe Emoji:</label>\n                                                        <input type=\"text\" id=\"safeEmoji\" placeholder=\"✅\" />\n                                                        <label id=\"mineLabel\" for=\"mineEmoji\">Mine Emoji:</label>\n                                                        <input type=\"text\" id=\"mineEmoji\" placeholder=\"💣\" />\n                                                    </div>\n                                                    <div class=\"grid-emoji-container\">\n                                                        <label id=\"gridLabel\" for=\"gridEmoji\">Grid Emoji:</label>\n                                                        <input type=\"text\" id=\"gridEmoji\" placeholder=\"❓\" />\n                                                        <label id=\"riskLabel\" for=\"riskEmoji\">Risk Emoji:</label>\n                                                        <input type=\"text\" id=\"riskEmoji\" placeholder=\"⚠️\" />\n                                                    </div>\n                                                    <div class=\"button-container\">\n                                                        <button id=\"emojiSaveButton\">Save</button>\n                                                        <button id=\"emojiCancelButton\">Cancel</button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        ");
                  var _0x20dcb9 = document.getElementById("emojiChangerWindow");
                  var _0x5d0b5a = document.getElementById("emojiExitButton");
                  var _0x31e93a = _0xa9b8ba.getBoundingClientRect();
                  var _0x2a8e24 = _0x31e93a.left + _0x31e93a.width / 2 - _0x20dcb9.offsetWidth / 2;
                  var _0x16229c = _0x31e93a.top + _0x31e93a.height / 2 - _0x20dcb9.offsetHeight / 2;
                  var _0x43fec6 = document.getElementById("settingsWindow");
                  _0x20dcb9.style.left = _0x2a8e24 + 'px';
                  _0x20dcb9.style.top = _0x16229c + 'px';
                  var _0x389125 = document.getElementById("safeEmoji");
                  var _0x30f549 = document.getElementById("gridEmoji");
                  var _0x203d27 = document.getElementById("mineEmoji");
                  var _0x1d40fe = document.getElementById("riskEmoji");
                  var _0x2a67a7 = document.getElementById("emojiSaveButton");
                  var _0x30a7c4 = document.getElementById("emojiCancelButton");
                  _0x389125.value = localStorage.getItem("safeEmoji") || '';
                  _0x30f549.value = localStorage.getItem("gridEmoji") || '';
                  _0x203d27.value = localStorage.getItem("mineEmoji") || '';
                  _0x1d40fe.value = localStorage.getItem("riskEmoji") || '';
                  _0x5d0b5a.addEventListener("click", function (_0x344876) {
                    _0x20dcb9.remove();
                    _0x43fec6.style.pointerEvents = "auto";
                    _0x43fec6.style.filter = "none";
                    _0x43fec6.style.filter = "none";
                    _0x225fd0(_0x344876);
                  });
                  _0x2a67a7.addEventListener("click", function (_0x289704) {
                    var _0x1444ea = _0x389125.value;
                    var _0x3e9d9b = _0x30f549.value;
                    var _0x139b05 = _0x203d27.value;
                    var _0x454e02 = _0x1d40fe.value;
                    localStorage.setItem("safeEmoji", _0x1444ea);
                    localStorage.setItem("gridEmoji", _0x3e9d9b);
                    localStorage.setItem("riskEmoji", _0x454e02);
                    localStorage.setItem("mineEmoji", _0x139b05);
                    _0x20dcb9.remove();
                    _0x43fec6.style.pointerEvents = "auto";
                    _0x43fec6.style.filter = "none";
                    _0x225fd0(_0x289704);
                  });
                  _0x30a7c4.addEventListener("click", function (_0x56b280) {
                    _0x20dcb9.remove();
                    _0x43fec6.style.pointerEvents = "auto";
                    _0x43fec6.style.filter = "none";
                    _0x225fd0(_0x56b280);
                  });
                };
                var _0x38d13e = function () {
                  document.body.insertAdjacentHTML("beforeend", "\n                                        <div id=\"statsWindow\">\n                                            <div id=\"statsTitleBar\">\n                                                <div id=\"statsTitleContainer\">\n                                                    <span id=\"statsTitle\">Statistics</span>\n                                                </div>\n                                                <button id=\"statsExitButton\">-</button>\n                                            </div>\n                                            <span id=\"lossCounter\"/span>\n                                            <span id=\"winCounter\"</span>\n                                            <div id=\"statsContainer\" class=\"centered\">\n                                                <div id=\"rateContainer\">\n                                                    <div id=\"rateLabels\">\n                                                        <span id=\"lossRate\">Loss Rate:</span>\n                                                        <span id=\"winRate\">Win Rate:</span>\n                                                    </div>\n                                                    <div id=\"ratePercentages\">\n                                                        <span id=\"lossPercentage\">0%</span>\n                                                        <span id=\"winPercentage\">0%</span>\n                                                    </div>\n                                                </div>\n                                                <div class=\"circle-container\">\n                                                    <div class=\"hollow-circle\"></div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    ");
                  _0x277101();
                  var _0x5df18d = document.getElementById("statsWindow");
                  var _0x15e810 = document.getElementById("statsExitButton");
                  var _0xc33b33 = _0xa9b8ba.getBoundingClientRect();
                  var _0x54a5c6 = _0xc33b33.left + _0xc33b33.width / 2 - _0x5df18d.offsetWidth / 2;
                  var _0x32d7ee = _0xc33b33.top + _0xc33b33.height / 2 - _0x5df18d.offsetHeight / 2;
                  var _0x55c016 = document.getElementById("settingsWindow");
                  _0x5df18d.style.left = _0x54a5c6 + 'px';
                  _0x5df18d.style.top = _0x32d7ee + 'px';
                  _0x15e810.addEventListener("click", function () {
                    _0x5df18d.remove();
                    _0x55c016.style.pointerEvents = "auto";
                    _0x55c016.style.filter = "none";
                    _0x55c016.style.filter = "none";
                    _0x225fd0(event);
                  });
                };
                var _0x277101 = function () {
                  if (document.getElementById("winCounter") !== null && document.getElementById("lossCounter") !== null && document.getElementById("winPercentage") !== null && document.getElementById("lossPercentage") !== null) {
                    _0x501a41 = _0x35b1ee;
                    _0x563c0d = _0x28e55d - _0x35b1ee;
                    var _0x3385d0 = _0x28e55d === 0 ? 0 : _0x501a41 / _0x28e55d * 100;
                    var _0x42a7aa = _0x28e55d === 0 ? 0 : _0x563c0d / _0x28e55d * 100;
                    var _0x3a17f8 = document.getElementById("winPercentage");
                    var _0x679eda = document.getElementById("lossPercentage");
                    var _0x6d1af1 = document.querySelector(".hollow-circle");
                    _0x3a17f8.textContent = _0x3385d0.toFixed(2) + '%';
                    _0x679eda.textContent = _0x42a7aa.toFixed(2) + '%';
                    _0x6d1af1.style.setProperty("--winPercentage", _0x3385d0 + '%');
                    _0x6d1af1.style.setProperty("--lossPercentage", _0x42a7aa + '%');
                  }
                };
                var _0x46ded4 = function () {
                  function _0xd42da5() {
                    var _0x743ca5 = document.getElementById("movableMenu");
                    var _0x25d963 = document.getElementById("settingsWindow");
                    var _0x57848f = document.getElementById("movableImage");
                    if (_0x743ca5) {
                      _0x743ca5.remove();
                    }
                    if (_0x25d963) {
                      _0x25d963.remove();
                    }
                    if (_0x57848f) {
                      _0x57848f.remove();
                    }
                    localStorage.removeItem("LunarPredictorLicenseKey");
                    _0x3d18e1();
                  }
                  function _0x223892(_0x324e91) {
                    var _0x53f6b1 = [];
                    for (var _0x17e625 = 0; _0x17e625 < _0x324e91.length; _0x17e625 = _0x17e625 + 2) {
                      _0x53f6b1.push(parseInt(_0x324e91.substr(_0x17e625, 2), 16));
                    }
                    return new Uint8Array(_0x53f6b1);
                  }
                  function _0x1056b9(_0x27ed54) {
                    _0x27ed54 = _0x27ed54.trim();
                    if (!/^[a-fA-F0-9]{64}$/.test(_0x27ed54)) {
                      return false;
                    }
                    return true;
                  }
                  function _0x58e5b8(_0x567e25) {
                    var _0x3badff = document.createElement("textarea");
                    _0x3badff.value = _0x567e25;
                    document.body.appendChild(_0x3badff);
                    _0x3badff.select();
                    document.execCommand("copy");
                    document.body.removeChild(_0x3badff);
                  }
                  document.body.insertAdjacentHTML("beforeend", "\n                                            <div id=\"settingsWindow\">\n                                                <div id=\"settingsTitleBar\">\n                                                    <div id=\"settingsTitleContainer\">\n                                                        <span id=\"settingsTitle\">Settings</span>\n                                                    </div>\n                                                    <button id=\"exitButton\">-</button>\n                                                </div>\n                                                <div id=\"settingsContainer\">\n                                                    <div id=\"settingsContainerRow1\" class=\"centered\">\n                                                        <button id=\"changeColorButton\">Colors</button>\n                                                        <button id=\"changeBindsButton\">Keybinds</button>\n                                                    </div>\n                                                    <div id=\"settingsContainerRow2\" class=\"centered\">\n                                                        <button id=\"unrigButton\">Unrig</button>\n                                                        <button id=\"autoPlayButton\">Autoplay</button>\n                                                    </div>\n                                                    <div id=\"settingsContainerRow3\" class=\"centered\">\n                                                        <button id=\"emojiButton\">Emojis</button>\n                                                        <button id=\"statsButton\">Stats</button>\n                                                    </div>\n                                                    <div id=\"settingsContainerRow4\" class=\"centered\">\n                                                                                                            </div>\n                                                </div>\n                                            </div>\n                                        ");
                  var _0x371a04 = document.getElementById("settingsWindow");
                  var _0x5265c1 = document.getElementById("exitButton");
                  var _0x39b9fd = document.getElementById("changeColorButton");
                  var _0x531f7a = document.getElementById("changeBindsButton");
                  var _0x1a0b46 = document.getElementById("autoPlayButton");
                  var _0x203c86 = document.getElementById("logoutButton");
                  var _0x5f2fe3 = document.getElementById("emojiButton");
                  var _0x163330 = document.getElementById("statsButton");
                  var _0x4e6f12 = _0xa9b8ba.getBoundingClientRect();
                  var _0x308c1a = _0x4e6f12.left + _0x4e6f12.width / 2 - _0x371a04.offsetWidth / 2;
                  var _0x1373df = _0x4e6f12.top + _0x4e6f12.height / 2 - _0x371a04.offsetHeight / 2;
                  _0x371a04.style.left = _0x308c1a + 'px';
                  _0x371a04.style.top = _0x1373df + 'px';
                  _0x5265c1.addEventListener("click", function () {
                    _0x371a04.remove();
                    _0xa9b8ba.style.pointerEvents = "auto";
                    _0x577264.style.pointerEvents = "auto";
                    _0xa9b8ba.style.filter = "none";
                    _0x577264.style.filter = "none";
                    _0x2d27aa = false;
                    _0x225fd0(event);
                  });
                  _0x163330.addEventListener("click", function () {
                    _0x371a04.style.pointerEvents = "none";
                    _0x371a04.style.filter = "blur(4px)";
                    _0x371a04.style.filter = "blur(4px)";
                    _0x38d13e();
                    _0x225fd0(event);
                  });
                  _0x39b9fd.addEventListener("click", function () {
                    _0x371a04.style.pointerEvents = "none";
                    _0x371a04.style.filter = "blur(4px)";
                    _0x371a04.style.filter = "blur(4px)";
                    _0x18c3d2();
                    _0x225fd0(event);
                  });
                  _0x5f2fe3.addEventListener("click", function () {
                    _0x371a04.style.pointerEvents = "none";
                    _0x371a04.style.filter = "blur(4px)";
                    _0x371a04.style.filter = "blur(4px)";
                    _0x518685();
                    _0x225fd0(event);
                  });
                  _0x531f7a.addEventListener("click", function () {
                    _0x371a04.style.pointerEvents = "none";
                    _0x371a04.style.filter = "blur(4px)";
                    _0x371a04.style.filter = "blur(4px)";
                    _0x2c0fbe();
                    _0x225fd0(event);
                  });
                  _0x1a0b46.addEventListener("click", function () {
                    _0x371a04.style.pointerEvents = "none";
                    _0x371a04.style.filter = "blur(4px)";
                    _0x371a04.style.filter = "blur(4px)";
                    _0xce8161();
                    _0x225fd0(event);
                  });
                  //_0x203c86.addEventListener("click", function () {
                    //_0xd42da5();
                    //_0x5d79b9();
                   // _0x225fd0(event);
                 //});

var _0x8fd14f = document.getElementById("unrigButton");
_0x8fd14f.addEventListener("click", async function () {
    _0x225fd0(event);
    var _0x9c1bdf = prompt("Please enter your next server seed. (Must do this every game)");
    if (_0x9c1bdf) {
        if (!_0x1056b9(_0x9c1bdf)) {
            alert("Invalid server seed");
            return;
        }
        var _0xb2e4d3 = await ajwgiaw(_0x9c1bdf);
        var _0x4d6c86 = _0xb2e4d3.slice(18, 27)
        _0x58e5b8(_0x4d6c86);
        alert("New Client Seed: " + _0x4d6c86 + " (Copied to clipboard)");
    }
});

async function ajwgiaw(A) {
    const asbaiwjga = new TextEncoder().encode(A);
    const awfahgwawf = await crypto.subtle.digest('SHA-256', asbaiwjga);
    const ahwfawdfaw = Array.from(new Uint8Array(awfahgwawf));
    const awfgawgawga = ahwfawdfaw.map(b => b.toString(16).padStart(2, '0')).join('');
    return awfgawgawga;
}


                };
                var _0x34a6dc = function () {
                  _0x3cc90f();
                };
                var _0x4b83dd = function (_0x139495) {
                  var _0x29124b = _0x139495.touches[0];
                  _0x42461b(_0x29124b);
                };
                var _0x34c17a = function (_0x3a3473) {
                  var _0x529de6 = _0x3a3473.touches[0];
                  _0x47bc5d(_0x529de6);
                };
                var _0x3cc90f = function () {
                  _0x58d82e = false;
                };
                var _0x42461b = function (_0x2de2aa) {
                  if (_0x58d82e) {
                    _0xa9b8ba.style.left = _0x2de2aa.clientX - _0xe80a53 + 'px';
                    _0xa9b8ba.style.top = _0x2de2aa.clientY - _0x54328d + 'px';
                  }
                };
                var _0x47bc5d = function (_0x14ae93) {
                  _0x58d82e = true;
                  _0xe80a53 = _0x14ae93.clientX - parseInt(window.getComputedStyle(_0xa9b8ba).left);
                  _0x54328d = _0x14ae93.clientY - parseInt(window.getComputedStyle(_0xa9b8ba).top);
                };
                var _0x225fd0 = function (_0x3d4312) {
                  if (_0x3d4312 instanceof MouseEvent) {
                    var _0x15577b = new Audio("http://www.sndup.net/f4tg");
                    _0x15577b.currentTime = 0;
                    _0x15577b.play();
                  }
                };
                var _0x58c56d = function () {
                  _0x4ccc58();
                };
                var _0x2a31ce = function (_0xb77f6a) {
                  var _0x577e73 = _0xb77f6a.touches[0];
                  _0x4cf43b(_0x577e73);
                };
                var _0x479e50 = function (_0x3669e8) {
                  var _0x3038f6 = _0x3669e8.touches[0];
                  _0x411721(_0x3038f6);
                };
                var _0x4ccc58 = function () {
                  _0x58d82e = false;
                  if (!_0x3b0ab6) {
                    var _0x305c72 = document.getElementById("movableMenu");
                    if (_0x305c72) {
                      _0x305c72.classList.remove("hidden");
                      _0x225fd0(event);
                    }
                  }
                };
                var _0x4cf43b = function (_0x1f7576) {
                  if (_0x58d82e) {
                    _0x3b0ab6 = true;
                    _0x577264.style.left = _0x1f7576.clientX - _0xe80a53 + 3 + 'px';
                    _0x577264.style.top = _0x1f7576.clientY - _0x54328d + 3 + 'px';
                  }
                };
                var _0x411721 = function (_0x5dc1dd) {
                  _0x58d82e = true;
                  _0xe80a53 = _0x5dc1dd.clientX - parseInt(window.getComputedStyle(_0x577264).left);
                  _0x54328d = _0x5dc1dd.clientY - parseInt(window.getComputedStyle(_0x577264).top);
                  _0x3b0ab6 = false;
                };
                clearInterval(_0x1bdf9d);
                var _0x49bfe8 = document.getElementById("loginWindow");
                if (_0x49bfe8) {
                  _0x49bfe8.remove();
                  _0x306e25();
                  _0x7b2c69();
                }
                var _0x355cc7 = "\n                                    <div id=\"movableImage\">\n                                        <img src=\"https://cdn.discordapp.com/attachments/1234194124211753035/1260361884910227466/image.png?ex=668f0af9&is=668db979&hm=55e1e9ee424becdbc63fe04068605d9266523ba2f367d33452bee0718c6db163&\" id=\"menuImage\" alt=\"Menu Image\">\n                                    </div>\n                                ";
                var _0x231dcd = "\n                                    #movableImage {\n                                        position: fixed;\n                                        top: 38%;\n                                        left: 43%;\n                                        width: 70px;\n                                        height: 70px;\n                                        z-index: 9999;\n                                        cursor: pointer;\n                                    }\n\n                                    #menuImage {\n                                        width: 70%;\n                                        height: 70%;\n                                        border-radius: 50%;\n                                                                                                                  }\n                                ";
                var _0x179d2d = document.createElement("style");
                _0x179d2d.innerHTML = _0x231dcd;
                document.head.appendChild(_0x179d2d);
                document.body.insertAdjacentHTML("beforeend", _0x355cc7);
                var _0x577264 = document.getElementById("movableImage");
                var _0x180192 = document.getElementById("menuImage");
                _0x180192.style.pointerEvents = "none";
                var _0x58d82e = false;
                var _0x3b0ab6 = false;
                var _0xe80a53 = 0;
                var _0x54328d = 0;
                _0x577264.addEventListener("mousedown", _0x411721);
                document.addEventListener("mousemove", _0x4cf43b);
                document.addEventListener("mouseup", _0x4ccc58);
                _0x577264.addEventListener("touchstart", _0x479e50);
                document.addEventListener("touchmove", _0x2a31ce);
                document.addEventListener("touchend", _0x58c56d);
                _0x577264.addEventListener("click", function (_0x3672de) {
                  if (!_0x3b0ab6) {
                    var _0x5b701a = document.getElementById("movableMenu");
                    _0x5b701a.classList.remove("hidden");
                    _0x225fd0(_0x3672de);
                  }
                });
                _0x355cc7 = "\n                                    <div id=\"movableMenu\">\n                                        <div id=\"menuTitleBar\">\n                                            <div id=\"menuTitleContainer\">\n                                                <img src=\"https://cdn.discordapp.com/attachments/1234194124211753035/1260361884910227466/image.png?ex=668f0af9&is=668db979&hm=55e1e9ee424becdbc63fe04068605d9266523ba2f367d33452bee0718c6db163&\" id=\"menuLogo\" alt=\"Logo\">\n                                                <span id=\"menuTitle\">Solar Predictor                                               </div>\n                                            <button id=\"settingsButton\">⚙</button>\n                                            <button id=\"hideButton\">-</button>\n                                        </div>\n                                        <div id=\"menuContent\">\n                                            <div id=\"buttonsContainer\">\n                                                <div>\n                                                    <button id=\"minepredictButton\">Mines</button>\n                                                </div>\n                                                <div>\n                                                    <button id=\"safepredictButton\">Safe</button>\n                                                </div>\n                                                <div>\n                                                    <button id=\"towerpredictButton\">Towers</button>\n                                                </div>\n                                                <div>\n                                                    <button id=\"crashpredictButton\">Crash</button>\n                                                </div>\n                                                <div>\n                                                    <button id=\"roulettepredictButton\">Slide</button>\n                                                </div>\n                                            </div>\n                                            <div id=\"window\">\n                                                <div id=\"predictionLabel\">🔥Solar Predictor🔥 \n Made by Drake";
                _0x231dcd = "\n                                    #movableMenu {\n                                        position: fixed;\n                                        top: 35%;\n                                        left: 40%;\n                                        width: 400px;\n                                        height: 250px;\n                                        z-index: 9999;\n                                        border-radius: 10px;\n                                        background-color: var(--themeBaseColor);\n                                                                                                                   }\n\n                                    #movableMenu {\n                                        filter: drop-shadow(0 px 8px rgba(0, 0, 0, 0.7));\n                                    }\n\n                                    #menuTitleBar {\n                                        height: 30px;\n                                        border-top-left-radius: 10px;\n                                        border-top-right-radius: 10px;\n                                        background-color: var(--themeSecondColor);\n                                        display: flex;\n                                        align-items: center;\n                                        justify-content: space-between;\n                                        font-size: 18px;\n                                        padding: 0 10px;\n                                    }\n\n                                    #menuTitleContainer {\n                                        display: flex;\n                                        align-items: center;\n                                    }\n\n                                    #menuContent {\n                                        padding: 10px;\n                                        display: flex;\n                                        align-items: flex-start;\n                                    }\n\n                                    #menuLogo {\n                                        width: 20px;\n                                        height: 20px;\n                                        margin-right: 5px;\n                                    }\n\n                                    #menuTitle {\n                                        color: var(--themeFourthColor);\n                                    }\n\n                                    #movableMenu.hidden {\n                                        display: none;\n                                    }\n\n                                    #window {\n                                        width: 198px;\n                                        height: 198px;\n                                        flex: 1;\n                                        border-radius: 4px;\n                                        background-color: var(--themeSecondColor);\n                                        margin-left: 5px;\n                                        display: flex; /* Use flexbox to align items */\n                                        align-items: center; /* Vertically center the content */\n                                        justify-content: center; /* Horizontally center the content */\n                                        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                    }\n\n                                    #predictionLabel {\n                                        font-size: 24px;\n                                        font-weight: bold;\n                                        color: var(--themeFourthColor);\n                                        white-space: pre;\n                                        line-height: 30px;\n                                        text-align: center;\n                                    }\n\n                                    .centered {\n                                        display: flex;\n                                        justify-content: center;\n                                        align-items: center;\n                                    }\n\n                                    #buttonsContainer {\n                                        display: flex;\n                                        flex-direction: column;\n                                        align-items: flex-start;\n                                    }\n\n                                    #settingsButton {\n                                        width: 22px;\n                                        height: 22px;\n                                        margin-right: 5px;\n                                        margin-left: auto;\n                                        background: var(--themeThirdColor);\n                                        border: none;\n                                        border-radius: 30px;\n                                        color: var(--themeFourthColor);\n                                        font-size: 12px;\n                                        cursor: pointer;\n                                        padding: 0;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #settingsButton:hover {\n                                        background-color: var(--hoverColor);\n                                    }\n\n                                    #settingsButton:active {\n                                        background-color: var(--activeColor);\n                                    }\n\n                                    #hideButton {\n                                        width: 22px;\n                                        height: 22px;\n                                        background: var(--themeThirdColor);\n                                        border: none;\n                                        border-radius: 30px;\n                                        color: var(--themeFourthColor);\n                                        font-size: 18px;\n                                        cursor: pointer;\n                                        padding: 0;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #hideButton:hover {\n                                        background-color: #ff4545;\n                                    }\n\n                                    #hideButton:active {\n                                        background-color: #942828;\n                                    }\n\n                                    #minepredictButton,\n                                    #safepredictButton,\n                                    #towerpredictButton,\n                                    #crashpredictButton,\n                                    #roulettepredictButton {\n                                        width: 75px;\n                                        height: 32px;\n                                        background-color: var(--themeSecondColor);\n                                        color: var(--themeFourthColor);\n                                        border: none;\n                                        border-radius: 4px;\n                                        font-size: 16px;\n                                        cursor: pointer;\n                                        margin-right: 5px;\n                                        margin-bottom: 5px;\n                                        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #minepredictButton:hover,\n                                    #safepredictButton:hover,\n                                    #towerpredictButton:hover,\n                                    #crashpredictButton:hover,\n                                    #roulettepredictButton:hover {\n                                        background-color: var(--hoverColor);\n                                    }\n\n                                    #minepredictButton:active,\n                                    #safepredictButton:active,\n                                    #towerpredictButton:active,\n                                    #crashpredictButton:active,\n                                    #roulettepredictButton:active {\n                                        background-color: var(--activeColor);\n                                    }\n\n                                    .darkBackground {\n                                        background-color: rgba(0, 0, 0, 0.5);\n                                    }\n\n                                    .outlined {\n                                        box-shadow: 0 0 0 0 #d6000f;\n                                        transition: box-shadow 0.5s ease-in-out;\n                                    }\n\n                                    .outlined.active {\n                                        box-shadow: 0 0 8px 6px #d6000f;\n                                    }\n\n                                    .outlinedWarned {\n                                        box-shadow: 0 0 8px 6px #cfa1a4;\n                                        transition: box-shadow 0.5s ease-in-out;\n                                    }\n\n                                    .outlinedWarned.active {\n                                        box-shadow: 0 0 8px 6px #cfa1a4;\n                                    }\n\n                                    .safeoutlined {\n                                        box-shadow: 0 0 0 0 var(--baseColor);\n                                        transition: box-shadow 0.5s ease-in-out;\n                                    }\n\n                                    .safeoutlined.active {\n                                        box-shadow: 0 0 8px 4px var(--baseColor);\n                                    }\n                                ";
                _0x179d2d = document.createElement("style");
                _0x179d2d.innerHTML = _0x231dcd;
                document.head.appendChild(_0x179d2d);
                document.body.insertAdjacentHTML("beforeend", _0x355cc7);
                var _0xa9b8ba = document.getElementById("movableMenu");
                var _0x4d1ab9 = document.getElementById("menuTitleBar");
                _0x58d82e = false;
                _0xe80a53 = 0;
                _0x54328d = 0;
                _0x4d1ab9.addEventListener("mousedown", _0x47bc5d);
                document.addEventListener("mousemove", _0x42461b);
                document.addEventListener("mouseup", _0x3cc90f);
                _0x4d1ab9.addEventListener("touchstart", _0x34c17a);
                document.addEventListener("touchmove", _0x4b83dd);
                document.addEventListener("touchend", _0x34a6dc);
                var _0x35769b = document.getElementById("hideButton");
                _0x35769b.addEventListener("click", function () {
                  _0xa9b8ba.classList.add("hidden");
                  _0x225fd0(event);
                });
                var _0x2d27aa = false;
                var _0x570c98 = document.getElementById("settingsButton");
                _0x570c98.addEventListener("click", function () {
                  _0xa9b8ba.style.pointerEvents = "none";
                  _0x577264.style.pointerEvents = "none";
                  _0xa9b8ba.style.filter = "blur(4px)";
                  _0x577264.style.filter = "blur(4px)";
                  _0x2d27aa = true;
                  _0x46ded4();
                  _0x225fd0(event);
                });
                _0x179d2d = document.createElement("style");
                _0x179d2d.innerHTML = "\n                                    #settingsWindow {\n                                        position: fixed;\n                                        top: calc(50% - 87.5px); /* Centers the window vertically */\n                                        left: calc(50% - 125px); /* Centers the window horizontally */\n                                        width: 250px;\n                                        height: 175px;\n                                        background-color: var(--themeBaseColor);\n                                        border-radius: 10px;\n                                                                               z-index: 99999;\n                                                                            }\n\n                                    #settingsTitleBar {\n                                        height: 30px;\n                                        border-top-left-radius: 10px;\n                                        border-top-right-radius: 10px;\n                                        background-color: var(--themeSecondColor);\n                                        display: flex;\n                                        align-items: center;\n                                        justify-content: space-between;\n                                        font-size: 16px;\n                                        padding: 0 5px;\n                                    }\n\n                                    #settingsTitleContainer {\n                                        display: flex;\n                                        align-items: center;\n                                    }\n\n                                    #settingsTitle {\n                                        padding: 0 10px;\n                                        color: var(--themeFourthColor);\n                                        text-decoration: underline;\n                                    }\n\n                                    #exitButton {\n                                        width: 20px;\n                                        height: 20px;\n                                        background: var(--themeThirdColor);\n                                        border: none;\n                                        border-radius: 5px;\n                                        color: var(--themeFourthColor);\n                                        font-size: 18px;\n                                        cursor: pointer;\n                                        padding: 0;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                        margin-left: auto;\n                                    }\n\n                                    #exitButton:hover {\n                                        background-color: #ff4545;\n                                    }\n\n                                    #exitButton:active {\n                                        background-color: #942828;\n                                    }\n\n                                    #settingsContainer {\n                                        margin-top: 3px;\n                                        position: centered;\n                                        display: flex;\n                                        flex-direction: column;\n                                        align-items: center; /* Center the components horizontally */\n                                        justify-content: center; /* Center the components vertically */\n                                    }\n\n                                    #statsButton,\n                                    #sizeButton,\n                                    #emojiButton,\n                                    #autoPlayButton,\n                                    #unrigButton,\n                                    #logoutButton,\n                                    #changeColorButton,\n                                    #changeBindsButton {\n                                        width: 75px;\n                                        height: 30px;\n                                        font-size: 16px;\n                                        border: none;\n                                        border-radius: 4px;\n                                        background-color: var(--themeThirdColor);\n                                        color: var(--themeFourthColor);\n                                        cursor: pointer;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                        margin: 2px 2px;\n                                    }\n\n                                    #statsButton:hover,\n                                    #sizeButton:hover,\n                                    #emojiButton:hover,\n                                    #autoPlayButton:hover,\n                                    #unrigButton:hover,\n                                    #logoutButton:hover,\n                                    #changeColorButton:hover,\n                                    #changeBindsButton:hover {\n                                        background-color: var(--hoverColor);\n                                    }\n\n                                    #statsButton:active,\n                                    #sizeButton:active,\n                                    #emojiButton:active,\n                                    #autoPlayButton:active,\n                                    #unrigButton:active,\n                                    #logoutButton:active,\n                                    #changeColorButton:active,\n                                    #changeBindsButton:active {\n                                        background-color: var(--activeColor);\n                                    }\n\n                                ";
                document.head.appendChild(_0x179d2d);
                var _0x28e55d = parseInt(localStorage.getItem("gameStartCounter")) || 0;
                var _0x35b1ee = parseInt(localStorage.getItem("cashoutCounter")) || 0;
                var _0x501a41 = 0;
                var _0x563c0d = 0;
                document.body.addEventListener("click", function (_0x1cb6f4) {
                  var _0x28193f = _0x1cb6f4.target;
                  if (_0x28193f.classList.contains("gameBetSubmit")) {
                    var _0x2c4fcd = _0x28193f.textContent.trim();
                    if (_0x2c4fcd === "Start new game") {
                      _0x28e55d++;
                      localStorage.setItem("gameStartCounter", _0x28e55d);
                    } else if (_0x2c4fcd.startsWith("Cashout")) {
                      _0x35b1ee++;
                      localStorage.setItem("cashoutCounter", _0x35b1ee);
                    }
                  }
                });
                setInterval(_0x277101, 1000);
                _0x179d2d = document.createElement("style");
                _0x179d2d.innerHTML = "\n                                    #statsWindow {\n                                        position: fixed;\n                                        top: calc(50% - 87.5px); /* Centers the window vertically */\n                                        left: calc(50% - 125px); /* Centers the window horizontally */\n                                        width: 250px;\n                                        height: 175px;\n                                        background-color: var(--themeBaseColor);\n                                        border-radius: 10px;\n                                                                                z-index: 99999;\n                                                                            }\n\n                                    #statsTitleBar {\n                                        height: 30px;\n                                        border-top-left-radius: 10px;\n                                        border-top-right-radius: 10px;\n                                        background-color: var(--themeSecondColor);\n                                        display: flex;\n                                        align-items: center;\n                                        justify-content: space-between;\n                                        font-size: 16px;\n                                        padding: 0 5px;\n                                    }\n\n                                    #statsTitleContainer {\n                                        display: flex;\n                                        align-items: center;\n                                    }\n\n                                    #statsTitle {\n                                        padding: 0 10px;\n                                        color: var(--themeFourthColor);\n                                        text-decoration: underline;\n                                    }\n\n                                    #statsContainer {\n                                        position: relative; /* Set position to relative */\n                                        display: flex;\n                                        align-items: center; /* Center horizontally */\n                                        justify-content: space-between; /* Distribute items */\n                                    }\n\n                                    .hollow-circle {\n                                        width: 100px;\n                                        height: 100px;\n                                        background-color: transparent;\n                                        border: 10px solid transparent;\n                                        border-radius: 50%;\n                                        position: relative;\n                                    }\n\n                                    .hollow-circle::before {\n                                        content: '';\n                                        display: block;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        width: 100%;\n                                        height: 100%;\n                                        border-radius: 50%;\n                                        border: 5px solid var(--themeThirdColor);\n                                        position: absolute;\n                                        top: 0;\n                                        left: 0;\n                                        transform: rotate(90deg);\n                                        background: conic-gradient(\n                                            from -90deg,\n                                            #19ba0b var(--winPercentage, 0%),\n                                            #c71e1e var(--winPercentage, 0%) var(--lossPercentage, 0%),\n                                            #c71e1e var(--lossPercentage, 0%) 100%,\n                                            #19ba0b 100%\n                                        );\n                                        border-image-slice: 1;\n                                    }\n\n                                    #lossRate,\n                                    #lossPercentage,\n                                    #winRate,\n                                    #winPercentage {\n                                        color: var(--themeFourthColor);\n                                        font-size: 14.9px;\n                                    }\n\n                                    #winRate,\n                                    #lossRate {\n                                        margin-left:20px;\n                                    }\n\n                                    #rateContainer {\n                                        margin-top: 10px;\n                                        display: flex;\n                                        align-items: center;\n                                        justify-content: space-between;\n                                        margin-top:10px;\n                                    }\n\n                                    #rateLabels,\n                                    #ratePercentages {\n                                        display: flex;\n                                        flex-direction: column;\n                                        align-items: flex-start;\n                                    }\n\n                                    .circle-container {\n                                        display: flex;\n                                        margin-top: 12px;\n                                        align-items: center;\n                                        justify-content: center;\n                                        margin-right:20px;\n                                    }\n\n                                    #statsExitButton {\n                                        margin-left: auto;\n                                        width: 20px;\n                                        height: 20px;\n                                        background: var(--themeThirdColor);\n                                        border: none;\n                                        border-radius: 5px;\n                                        color: var(--themeFourthColor);\n                                        font-size: 18px;\n                                        cursor: pointer;\n                                        padding: 0;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #statsExitButton:hover {\n                                        background-color: #ff4545;\n                                    }\n\n                                    #statsExitButton:active {\n                                        background-color: #942828;\n                                    }\n                                ";
                document.head.appendChild(_0x179d2d);
                _0x179d2d = document.createElement("style");
                _0x179d2d.innerHTML = "\n                                    #emojiChangerWindow {\n                                        position: fixed;\n                                        top: calc(50% - 87.5px); /* Centers the window vertically */\n                                        left: calc(50% - 125px); /* Centers the window horizontally */\n                                        width: 250px;\n                                        height: 175px;\n                                        background-color: var(--themeBaseColor);\n                                        border-radius: 10px;\n                                                                                z-index: 99999;\n                                                                            }\n\n                                    #emojiChangerTitleBar {\n                                        height: 30px;\n                                        border-top-left-radius: 10px;\n                                        border-top-right-radius: 10px;\n                                        background-color: var(--themeSecondColor);\n                                        display: flex;\n                                        align-items: center;\n                                        justify-content: space-between;\n                                        font-size: 16px;\n                                        padding: 0 5px;\n                                    }\n\n                                    #emojiChangerTitleContainer {\n                                        display: flex;\n                                        align-items: center;\n                                    }\n\n                                    #emojiChangerTitle {\n                                        padding: 0 10px;\n                                        color: var(--themeFourthColor);\n                                        text-decoration: underline;\n                                    }\n\n                                    .grid-emoji-container label,\n                                    .predict-emoji-container label {\n                                        font-size: 14px; /* Increase font size for the labels */\n                                        color: var(--themeFourthColor);\n                                        margin-bottom: 5px; /* Adjust spacing between labels and input fields */\n                                        margin-right: 5px; /* Adjust spacing between labels and input fields */\n                                    }\n\n                                    #emojiChangerButtons {\n                                        margin-top: 25px;\n                                        position: centered;\n                                        display: flex;\n                                        flex-direction: column;\n                                        align-items: center; /* Center the components horizontally */\n                                        justify-content: center; /* Center the components vertically */\n                                    }\n\n                                    #riskEmoji,\n                                    #mineEmoji,\n                                    #safeEmoji,\n                                    #gridEmoji {\n                                        height: 20px;\n                                        width: 34px;\n                                        padding: 8px;\n                                        color: var(--themeFourthColor);\n                                        margin-bottom: 10px;\n                                        border-radius: 5px;\n                                        font-size: 12px;\n                                        background-color: var(--themeSecondColor);\n                                        margin-right: 5px; /* Adjust spacing between labels and input fields */\n                                    }\n\n                                    #emojiCancelButton,\n                                    #emojiSaveButton {\n                                        width: 75px;\n                                        height: 30px;\n                                        font-size: 16px;\n                                        border: none;\n                                        border-radius: 4px;\n                                        background-color: var(--themeThirdColor);\n                                        color: var(--themeFourthColor);\n                                        cursor: pointer;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                        margin: 2px 2px;\n                                    }\n\n                                    #emojiCancelButton:hover,\n                                    #emojiSaveButton:hover {\n                                        background-color: var(--hoverColor);\n                                    }\n\n                                    #emojiCancelButton:active,\n                                    #emojiSaveButton:active {\n                                        background-color: var(--activeColor);\n                                    }\n\n                                    #emojiExitButton {\n                                        margin-left: auto;\n                                        width: 20px;\n                                        height: 20px;\n                                        background: var(--themeThirdColor);\n                                        border: none;\n                                        border-radius: 5px;\n                                        color: var(--themeFourthColor);\n                                        font-size: 18px;\n                                        cursor: pointer;\n                                        padding: 0;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #emojiExitButton:hover {\n                                        background-color: #ff4545;\n                                    }\n\n                                    #emojiExitButton:active {\n                                        background-color: #942828;\n                                    }\n                                ";
                document.head.appendChild(_0x179d2d);
                _0x179d2d = document.createElement("style");
                _0x179d2d.innerHTML = "\n                                    #autoPlayWindow {\n                                        position: fixed;\n                                        top: calc(50% - 87.5px); /* Centers the window vertically */\n                                        left: calc(50% - 125px); /* Centers the window horizontally */\n                                        width: 250px;\n                                        height: 175px;\n                                        background-color: var(--themeBaseColor);\n                                        border-radius: 10px;\n                                                                                z-index: 99999;\n                                                                            }\n\n                                    #autoPlayTitleBar {\n                                        height: 30px;\n                                        border-top-left-radius: 10px;\n                                        border-top-right-radius: 10px;\n                                        background-color: var(--themeSecondColor);\n                                        display: flex;\n                                        align-items: center;\n                                        justify-content: space-between;\n                                        font-size: 16px;\n                                        padding: 0 5px;\n                                    }\n\n                                    #autoPlayTitleContainer {\n                                        display: flex;\n                                        align-items: center;\n                                    }\n\n                                    #autoPlayTitle {\n                                        padding: 0 10px;\n                                        color: var(--themeFourthColor);\n                                        text-decoration: underline;\n                                    }\n\n                                    #autoPlayContainer {\n                                        margin-top: 15px;\n                                        position: centered;\n                                        display: flex;\n                                        flex-direction: column;\n                                        align-items: center; /* Center the components horizontally */\n                                        justify-content: center; /* Center the components vertically */\n                                    }\n\n                                    #crashAutoPlayButton,\n                                    #rouletteAutoPlayButton,\n                                    #towersAutoPlayButton,\n                                    #minesAutoPlayButton {\n                                        width: 80px;\n                                        height: 100px;\n                                        background-color: var(--themeThirdColor);\n                                        margin: 5px 5px;\n                                        font-size: 18px;\n                                        cursor: pointer;\n                                        border: none;\n                                        border-radius: 4px;\n                                        color: var(--themeFourthColor);\n                                        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #crashAutoPlayButton:hover,\n                                    #rouletteAutoPlayButton:hover,\n                                    #towersAutoPlayButton:hover,\n                                    #minesAutoPlayButton:hover {\n                                        background-color: var(--hoverColor);\n                                    }\n\n                                    #crashAutoPlayButton:active,\n                                    #rouletteAutoPlayButton:active,\n                                    #towersAutoPlayButton:active,\n                                    #minesAutoPlayButton:active {\n                                        background-color: var(--activeColor);\n                                    }\n\n                                    #autoExitButton {\n                                        margin-left: auto;\n                                        width: 20px;\n                                        height: 20px;\n                                        background: var(--themeThirdColor);\n                                        border: none;\n                                        border-radius: 5px;\n                                        color: var(--themeFourthColor);\n                                        font-size: 18px;\n                                        cursor: pointer;\n                                        padding: 0;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #autoExitButton:hover {\n                                        background-color: #ff4545;\n                                    }\n\n                                    #autoExitButton:active {\n                                        background-color: #942828;\n                                    }\n                                    ";
                document.head.appendChild(_0x179d2d);
                _0x179d2d = document.createElement("style");
                _0x179d2d.innerHTML = "\n                                        #minesAutoPlayWindow {\n                                            position: fixed;\n                                            top: calc(50% - 87.5px); /* Centers the window vertically */\n                                            left: calc(50% - 125px); /* Centers the window horizontally */\n                                            width: 250px;\n                                            height: 175px;\n                                            background-color: var(--themeBaseColor);\n                                            border-radius: 10px;\n                                                                                        z-index: 99999;\n                                                                                    }\n\n                                        #minesAutoPlayTitleBar {\n                                            height: 30px;\n                                            border-top-left-radius: 10px;\n                                            border-top-right-radius: 10px;\n                                            background-color: var(--themeSecondColor);\n                                            display: flex;\n                                            align-items: center;\n                                            justify-content: space-between;\n                                            font-size: 16px;\n                                            padding: 0 5px;\n                                        }\n\n                                        #minesAutoPlayTitleContainer {\n                                            display: flex;\n                                            align-items: center;\n                                        }\n\n                                        #minesAutoPlayTitle {\n                                            padding: 0 10px;\n                                            color: var(--themeFourthColor);\n                                            text-decoration: underline;\n                                        }\n\n                                        #minesAutoPlayContainer {\n                                            margin-top: 3px;\n                                            position: centered;\n                                            display: flex;\n                                            flex-direction: column;\n                                            align-items: center; /* Center the components horizontally */\n                                            justify-content: center; /* Center the components vertically */\n                                        }\n\n                                        #minesAutoPredictButton,\n                                        #minesPlayButton {\n                                            padding: 5px 15px;\n                                            margin: 0px 3px;\n                                            margin-top: 3px;\n                                            margin-bottom: -3px;\n                                            font-size: 14px;\n                                            width: 75px;\n                                            height: 55px;\n                                            cursor: pointer;\n                                            border: none;\n                                            border-radius: 4px;\n                                            background-color: var(--themeSecondColor);\n                                            color: var(--themeFourthColor);\n                                            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                            transition: background-color 0.5s;\n                                        }\n\n                                        #predictionTypeButton {\n                                            padding: 5px 15px;\n                                            font-size: 14px;\n                                            width: 160px;\n                                            height: 30px;\n                                            cursor: pointer;\n                                            border: none;\n                                            border-radius: 4px;\n                                            background-color: var(--themeSecondColor);\n                                            color: var(--themeFourthColor);\n                                            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                            transition: background-color 0.5s;\n                                        }\n\n                                        #minesAutoPredictButton:hover,\n                                        #minesPlayButton:hover {\n                                            background-color: var(--hoverColor);\n                                        }\n\n                                        #minesAutoPredictButton:active,\n                                        #minesPlayButton:active {\n                                            background-color: var(--activeColor);\n                                        }\n\n                                        #minesAutoExitButton {\n                                            margin-left: auto;\n                                            width: 20px;\n                                            height: 20px;\n                                            background: var(--themeThirdColor);\n                                            border: none;\n                                            border-radius: 5px;\n                                            color: var(--themeFourthColor);\n                                            font-size: 18px;\n                                            cursor: pointer;\n                                            padding: 0;\n                                            box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                            transition: background-color 0.5s;\n                                        }\n\n                                        #minesAutoExitButton:hover {\n                                            background-color: #ff4545;\n                                        }\n\n                                        #minesAutoExitButton:active {\n                                            background-color: #942828;\n                                        }\n\n                                        #spotsSliderLabel,\n                                        #spotsLabel {\n                                            font-size: 16px !important;\n                                            margin-left: 10px;\n                                            margin-bottom: 3px;\n                                            color: var(--themeFourthColor);\n                                        }\n\n                                        #spotsSlider {\n                                            width: 150px;\n                                            margin-left: 10px;\n                                            -webkit-appearance: none;\n                                            appearance: none;\n                                            height: 5px !important;\n                                            border-radius: 2px;\n                                            background: #383838; /* Adjust this color to match your app theme */\n                                            outline: none;\n                                        }\n\n                                        #spotsSlider::-webkit-slider-thumb {\n                                            -webkit-appearance: none;\n                                            appearance: none;\n                                            width: 15px !important;\n                                            height: 15px !important;\n                                            border-radius: 50%;\n                                            background: var(--themeFourthColor);\n                                            cursor: pointer;\n                                        }\n\n                                        #spotsSlider::-moz-range-thumb {\n                                            width: 14px;\n                                            height: 14px;\n                                            border-radius: 50%;\n                                            background: var(--themeFourthColor);\n                                            cursor: pointer;\n                                        }\n                                        ";
                document.head.appendChild(_0x179d2d);
                var _0x511d6d = false;
                var _0x57fa50 = false;
                var _0x112994;
                var _0x2d083d = false;
                _0x179d2d = document.createElement("style");
                _0x179d2d.innerHTML = "\n                                        #towersAutoPlayWindow {\n                                            position: fixed;\n                                            top: calc(50% - 87.5px); /* Centers the window vertically */\n                                            left: calc(50% - 125px); /* Centers the window horizontally */\n                                            width: 250px;\n                                            height: 175px;\n                                            background-color: var(--themeBaseColor);\n                                            border-radius: 10px;\n                                                                                        z-index: 99999;\n                                                                                    }\n\n                                        #towersAutoPlayTitleBar {\n                                            height: 30px;\n                                            border-top-left-radius: 10px;\n                                            border-top-right-radius: 10px;\n                                            background-color: var(--themeSecondColor);\n                                            display: flex;\n                                            align-items: center;\n                                            justify-content: space-between;\n                                            font-size: 16px;\n                                            padding: 0 5px;\n                                        }\n\n                                        #towersAutoPlayTitleContainer {\n                                            display: flex;\n                                            align-items: center;\n                                        }\n\n                                        #towersAutoPlayTitle {\n                                            padding: 0 10px;\n                                            color: var(--themeFourthColor);\n                                            text-decoration: underline;\n                                        }\n\n                                        #towersAutoPlayContainer {\n                                            margin-top: 3px;\n                                            position: centered;\n                                            display: flex;\n                                            flex-direction: column;\n                                            align-items: center; /* Center the components horizontally */\n                                            justify-content: center; /* Center the components vertically */\n                                        }\n\n                                        #towersAutoPredictButton,\n                                        #towersPlayButton {\n                                            padding: 5px 15px;\n                                            margin: 0px 3px;\n                                            margin-top: 8px;\n                                            margin-bottom: -3px;\n                                            font-size: 14px;\n                                            width: 75px;\n                                            height: 75px;\n                                            cursor: pointer;\n                                            border: none;\n                                            border-radius: 4px;\n                                            background-color: var(--themeSecondColor);\n                                            color: var(--themeFourthColor);\n                                            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                            transition: background-color 0.5s;\n                                        }\n\n                                        #towersAutoPredictButton:hover,\n                                        #towersPlayButton:hover {\n                                            background-color: var(--hoverColor);\n                                        }\n\n                                        #towersAutoPredictButton:active,\n                                        #towersPlayButton:active {\n                                            background-color: var(--activeColor);\n                                        }\n\n                                        #towersAutoExitButton {\n                                            margin-left: auto;\n                                            width: 20px;\n                                            height: 20px;\n                                            background: var(--themeThirdColor);\n                                            border: none;\n                                            border-radius: 5px;\n                                            color: var(--themeFourthColor);\n                                            font-size: 18px;\n                                            cursor: pointer;\n                                            padding: 0;\n                                            box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                            transition: background-color 0.5s;\n                                        }\n\n                                        #towersAutoExitButton:hover {\n                                            background-color: #ff4545;\n                                        }\n\n                                        #towersAutoExitButton:active {\n                                            background-color: #942828;\n                                        }\n\n                                        #autorow2 {\n                                            padding: 5px;\n                                            margin-top: 5px; /* Add margin to the top */\n                                        }\n\n                                        #spotsSliderLabel,\n                                        #spotsLabel {\n                                            font-size: 20px; /* Increase the font size */\n                                            margin-left: 10px; /* Add margin to the left */\n                                            margin-bottom: 5px; /* Add margin to the left */\n                                            color: var(--themeFourthColor); /* Adjust the color to match your app theme */\n                                        }\n\n                                        #spotsSlider {\n                                            width: 150px;\n                                            margin-left: 10px;\n                                            -webkit-appearance: none;\n                                            appearance: none;\n                                            height: 7px;\n                                            border-radius: 2px;\n                                            background: #383838; /* Adjust this color to match your app theme */\n                                            outline: none;\n                                        }\n\n                                        #spotsSlider::-webkit-slider-thumb {\n                                            -webkit-appearance: none;\n                                            appearance: none;\n                                            width: 20px;\n                                            height: 20px;\n                                            border-radius: 50%;\n                                            background: var(--themeFourthColor);\n                                            cursor: pointer;\n                                        }\n\n                                        #spotsSlider::-moz-range-thumb {\n                                            width: 14px;\n                                            height: 14px;\n                                            border-radius: 50%;\n                                            background: var(--themeFourthColor);\n                                            cursor: pointer;\n                                        }\n                                        ";
                document.head.appendChild(_0x179d2d);
                var _0x1954ed = false;
                var _0x56b2f7;
                var _0x545d1e = parseInt(localStorage.getItem("minesKeyCode"));
                document.addEventListener("keydown", function (_0x424090) {
                  if (_0x424090.keyCode === _0x545d1e) {
                    _0x28ee58();
                  }
                });
                var _0x5e58de = parseInt(localStorage.getItem("safeKeyCode"));
                document.addEventListener("keydown", function (_0x2f8851) {
                  if (_0x2f8851.keyCode === _0x5e58de) {
                    _0x4b746c();
                  }
                });
                var _0x491f93 = parseInt(localStorage.getItem("crashKeyCode"));
                document.addEventListener("keydown", function (_0x4ff886) {
                  if (_0x4ff886.keyCode === _0x491f93) {
                    _0x5d79b9();
                  }
                });
                var _0x16da3c = parseInt(localStorage.getItem("slideKeyCode"));
                document.addEventListener("keydown", function (_0x232512) {
                  if (_0x232512.keyCode === _0x16da3c) {
                    _0x441104();
                  }
                });
                document.addEventListener("keydown", function (_0x3e6966) {
                  if (_0x3e6966.keyCode === _0x16da3c) {
                    _0x3d18e1();
                  }
                });
                var _0x112973 = parseInt(localStorage.getItem("menuKeyCode")) || 16;
                var _0x2cdd90 = function (_0x508131) {
                  _0x225fd0(_0x508131);
                  if (_0x508131.keyCode === _0x112973) {
                    if (!_0xa9b8ba.classList.contains("hidden")) {
                      _0xa9b8ba.classList.add("hidden");
                    } else {
                      _0xa9b8ba.classList.remove("hidden");
                    }
                  }
                };
                document.addEventListener("keydown", _0x2cdd90);
                document.addEventListener("keydown", function (_0x2f5b5c) {
                  if (_0x2d27aa) {
                    _0x2cdd90(_0x2f5b5c);
                  }
                });
                _0x179d2d = document.createElement("style");
                _0x179d2d.innerHTML = "\n                                            #keyBindsWindow {\n                                                position: fixed;\n                                                top: calc(50% - 87.5px); /* Centers the window vertically */\n                                                left: calc(50% - 125px); /* Centers the window horizontally */\n                                                width: 250px;\n                                                height: 175px;\n                                                background-color: var(--themeBaseColor);\n                                                border-radius: 10px;\n                                                                                                z-index: 99999;\n                                                                                            }\n\n                                            #keyBindsTitleBar {\n                                                height: 30px;\n                                                border-top-left-radius: 10px;\n                                                border-top-right-radius: 10px;\n                                                background-color: var(--themeSecondColor);\n                                                display: flex;\n                                                align-items: center;\n                                                justify-content: space-between;\n                                                font-size: 16px;\n                                                padding: 0 5px;\n                                            }\n\n                                            #keyBindsTitleContainer {\n                                                display: flex;\n                                                align-items: center;\n                                            }\n\n                                            #keyBindsTitle {\n                                                padding: 0 10px;\n                                                color: var(--themeFourthColor);\n                                                text-decoration: underline;\n                                            }\n\n                                            #keyBindsContainer {\n                                                margin-top: 10px;\n                                                position: centered;\n                                                display: flex;\n                                                flex-direction: column;\n                                                align-items: center; /* Center the components horizontally */\n                                                justify-content: center; /* Center the components vertically */\n                                            }\n\n                                            #menuBindButton,\n                                            #crashBindButton,\n                                            #slideBindButton,\n                                            #safeBindButton,\n                                            #minesBindButton {\n                                                width: 95px;\n                                                height: 30px;\n                                                margin: 3px 3px;\n                                                font-size: 14px;\n                                                cursor: pointer;\n                                                border: none;\n                                                border-radius: 4px;\n                                                background-color: var(--themeSecondColor);\n                                                color: var(--themeFourthColor);\n                                                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                                transition: background-color 0.5s;\n                                            }\n\n                                            #towersBindButton {\n                                                width: 95px;\n                                                height: 30px;\n                                                margin: 3px 3px;\n                                                font-size: 14px;\n                                                cursor: pointer;\n                                                border: none;\n                                                border-radius: 4px;\n                                                background-color: var(--themeSecondColor);\n                                                color: var(--themeFourthColor);\n                                                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                                transition: background-color 0.5s;\n                                            }\n\n                                            #menuBindButton:hover,\n                                            #towersBindButton:hover,\n                                            #crashBindButton:hover,\n                                            #slideBindButton:hover,\n                                            #safeBindButton:hover,\n                                            #minesBindButton:hover {\n                                                background-color: var(--hoverColor);\n                                            }\n\n                                            #menuBindButton:active,\n                                            #towersBindButton:active,\n                                            #crashBindButton:active,\n                                            #slideBindButton:active,\n                                            #safeBindButton:active,\n                                            #minesBindButton:active {\n                                                background-color: var(--activeColor);\n                                            }\n\n                                            #bindExitButton {\n                                                width: 20px;\n                                                height: 20px;\n                                                margin-left: auto;\n                                                background: var(--themeThirdColor);\n                                                border: none;\n                                                border-radius: 5px;\n                                                color: var(--themeFourthColor);\n                                                font-size: 18px;\n                                                cursor: pointer;\n                                                padding: 0;\n                                                box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                                transition: background-color 0.5s;\n                                           }\n\n                                            #bindExitButton:hover {\n                                                background-color: #ff4545;\n                                            }\n\n                                            #bindExitButton:active {\n                                                background-color: #942828;\n                                            }\n\n                                        ";
                document.head.appendChild(_0x179d2d);
                _0x179d2d = document.createElement("style");
                _0x179d2d.innerHTML = "\n                                    #colorPickerWindow {\n                                        position: fixed;\n                                        top: calc(50% - 87.5px); /* Centers the window vertically */\n                                        left: calc(50% - 125px); /* Centers the window horizontally */\n                                        width: 250px;\n                                        height: 175px;\n                                        background-color: var(--themeBaseColor);\n                                        border-radius: 10px;\n                                                                                z-index: 99999;\n                                                                            }\n\n                                    #colorPickerTitleBar {\n                                        height: 30px;\n                                        border-top-left-radius: 10px;\n                                        border-top-right-radius: 10px;\n                                        background-color: var(--themeSecondColor);\n                                        display: flex;\n                                        align-items: center;\n                                        justify-content: space-between;\n                                        font-size: 16px;\n                                        padding: 0 5px;\n                                    }\n\n                                    #colorPickerTitleContainer {\n                                        display: flex;\n                                        align-items: center;\n                                    }\n\n                                    #colorPickerTitle {\n                                        padding: 0 10px;\n                                        color: var(--themeFourthColor);\n                                        text-decoration: underline;\n                                    }\n\n                                    #colorPickerContainer {\n                                        margin-top: 10px;\n                                        position: centered;\n                                        display: flex;\n                                        flex-direction: column;\n                                        align-items: center; /* Center the components horizontally */\n                                        justify-content: center; /* Center the components vertically */\n                                    }\n\n                                    #colorPicker::-webkit-color-swatch {\n                                        border: none;\n                                        border-radius: 5px;\n                                        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                    }\n\n                                    #colorPicker {\n                                        width: 155px;\n                                        height: 25px;\n                                        margin-top: 0;\n                                        border: none;\n                                        border-radius: 5px;\n                                        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                        padding: 0;\n                                        background-color: var(--themeSecondColor);\n                                    }\n\n                                    #colorPickerButtons {\n                                        margin-top: 10px;\n                                    }\n\n                                    #colorPickerButtons2 {\n                                        margin-top: 10px;\n                                    }\n\n                                    #themeButton,\n                                    #resetButton,\n                                    #applyButton,\n                                    #cancelButton {\n                                        width: 70px;\n                                        height: 30px;\n                                        margin: 0 5px;\n                                        font-size: 16px;\n                                        cursor: pointer;\n                                        border: none;\n                                        border-radius: 4px;\n                                        background-color: var(--themeSecondColor);\n                                        color: var(--themeFourthColor);\n                                        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #themeButton:hover,\n                                    #resetButton:hover,\n                                    #applyButton:hover,\n                                    #cancelButton:hover {\n                                        background-color: var(--hoverColor);\n                                    }\n\n                                    #themeButton:active,\n                                    #resetButton:active,\n                                    #applyButton:active,\n                                    #cancelButton:active {\n                                        background-color: var(--activeColor);\n                                    }\n\n                                    #colorExitButton {\n                                        margin-left: auto;\n                                        width: 20px;\n                                        height: 20px;\n                                        background: var(--themeThirdColor);\n                                        border: none;\n                                        border-radius: 5px;\n                                        color: var(--themeFourthColor);\n                                        font-size: 18px;\n                                        cursor: pointer;\n                                        padding: 0;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #colorExitButton:hover {\n                                        background-color: #ff4545;\n                                    }\n\n                                    #colorExitButton:active {\n                                        background-color: #942828;\n                                    }\n                                ";
                document.head.appendChild(_0x179d2d);
                var _0x15d1ae = new MutationObserver(function (_0xd6db33, _0x2c9f24) {
                  var _0x15090a;
                  for (_0x15090a of _0xd6db33) {
                    if (_0x15090a.type === "childList") {
                      if (document.getElementById("layout_layoutChat__5wEvy")) {
                        _0x276c95();
                      }
                    }
                  }
                });
                var _0x4492e3 = {
                  'childList': true,
                  'subtree': true
                };
                _0x15d1ae.observe(document.documentElement, _0x4492e3);
                if (document.getElementById("layout_layoutChat__5wEvy")) {
                  _0x276c95();
                }
                var _0x17a47f = document.getElementById("crashpredictButton");
                _0x17a47f.addEventListener("click", function () {
                  _0x5d79b9();
                  _0x225fd0(event);
                });
                var _0x534c9f = document.getElementById("towerpredictButton");
                _0x534c9f.addEventListener("click", function () {
                  _0x3d18e1();
                  _0x225fd0(event);
                });
                var _0x149a01 = document.getElementById("roulettepredictButton");
                _0x149a01.addEventListener("click", function () {
                  _0x441104();
                  _0x225fd0(event);
                });
                var _0xb85265 = document.getElementById("safepredictButton");
                _0xb85265.addEventListener("click", function () {
                  _0x4b746c();
                  _0x225fd0(event);
                });
                var _0x3c16c0 = document.getElementById("minepredictButton");
                _0x3c16c0.addEventListener("click", function () {
                  _0x28ee58();
                  _0x225fd0(event);
                });
              }
            }, 10);
          }, 800);
        } else {
          console.log('s');
          onError("Invalid license key x");
        }
      } else {
        console.log('s2');
        onError("Invalid license key x ");
      }
    } else {
      console.log('s3');
      onError("Invalid license key xxxx");
    }
  }
})();
function onError(_0x24aa9b) {
  var _0x327350 = document.getElementById("errorMessage");
  _0x327350.textContent = "Wrong Key";
  _0x327350.style.display = "block";
  setTimeout(function () {
    _0x327350.style.display = "none";
  }, 1000);
}
function setChatBubble(_0x537039) {
  var _0x59679c = document.getElementById("successMessage");
  _0x59679c.textContent = _0x537039;
  _0x59679c.style.display = "block";
  setTimeout(function () {
    _0x59679c.style.display = "none";
  }, 750);
}
var getEvaluateFnObj = function () {
  var _0x258b6c = true;
  return function (_0x4b22b9, _0xfe8364) {
    var _0x3cfe71 = _0x258b6c ? function () {
      if (_0xfe8364) {
        var _0x44d4f2 = _0xfe8364.apply(_0x4b22b9, arguments);
        _0xfe8364 = null;
        return _0x44d4f2;
      }
    } : function () {};
    _0x258b6c = false;
    return _0x3cfe71;
  };
}();
var countNewLineCharacters = function () {
  var _0x47c3ec = true;
  return function (_0x32d327, _0x2a0469) {
    var _0xb2e05b = _0x47c3ec ? function () {
      if (_0x2a0469) {
        var _0x1a591e = _0x2a0469.apply(_0x32d327, arguments);
        _0x2a0469 = null;
        return _0x1a591e;
      }
    } : function () {};
    _0x47c3ec = false;
    return _0xb2e05b;
  };
}();
var p = function () {
  var _0x10a571 = true;
  return function (_0x206784, _0xc7a8c3) {
    var _0x445259 = _0x10a571 ? function () {
      if (_0xc7a8c3) {
        var _0x4bbda0 = _0xc7a8c3.apply(_0x206784, arguments);
        _0xc7a8c3 = null;
        return _0x4bbda0;
      }
    } : function () {};
    _0x10a571 = false;
    return _0x445259;
  };
}();
"use strict";
var value = localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN");
var headers = {
  'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
  'X-Auth-Token': value
};
var initializeCheckTimer;
p();
function _0xb39a3f(_0x11b790) {
  function _0x28dccd(_0x22dbea) {
    if (typeof _0x22dbea === "string") {
      return function (_0x5c07bb) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x22dbea / _0x22dbea).length !== 1 || _0x22dbea % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x28dccd(++_0x22dbea);
  }
  try {
    if (_0x11b790) {
      return _0x28dccd;
    } else {
      _0x28dccd(0);
    }
  } catch (_0x416d84) {}
}
;
