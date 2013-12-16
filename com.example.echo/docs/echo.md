---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements.  See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership.  The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License.  You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
---

Supported Platforms
-------------------

- Android


Quick Example
-------------

    callEchoPlugin: function() {
      var success = function(message) { alert(message == "echome"); }; // should alert true
      var error = function(message) { alert(message); };
      window.echoPlugin.callNativeFunction("echome", success, error);
    }
    
Full Example
------------

    <html>
        <head>
            <meta charset="utf-8" />
            <meta name="format-detection" content="telephone=no" />
            <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
            <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
            <link rel="stylesheet" type="text/css" href="css/index.css" />
            <title>Echo Plugin Test</title>
        </head>
        <body>
            <div class="app">
                <h1>Apache Cordova</h1>
                <div id="deviceready" class="blink">
                    <p class="event listening">Connecting to Device</p>
                    <p class="event received">Device is Ready</p>
                </div>
            </div>
            <script type="text/javascript" src="cordova.js"></script>
            <script type="text/javascript">
              var app = {
                // Application Constructor
                initialize: function() {
                    this.bindEvents();
                },
                // Bind Event Listeners
                //
                // Bind any events that are required on startup. Common events are:
                // 'load', 'deviceready', 'offline', and 'online'.
                bindEvents: function() {
                    document.addEventListener('deviceready', this.onDeviceReady, false);
                },
                // deviceready Event Handler
                //
                // The scope of 'this' is the event. In order to call the 'receivedEvent'
                // function, we must explicity call 'app.receivedEvent(...);'
                onDeviceReady: function() {
                    app.receivedEvent('deviceready');
                },
                // Update DOM on a Received Event
                receivedEvent: function(id) {
                    var parentElement = document.getElementById(id);
                    var listeningElement = parentElement.querySelector('.listening');
                    var receivedElement = parentElement.querySelector('.received');

                    listeningElement.setAttribute('style', 'display:none;');
                    receivedElement.setAttribute('style', 'display:block;');

                    console.log('Received Event: ' + id);
                    
                    app.initialize();
                    app.callEchoPlugin();        
                },
                callEchoPlugin: function() {
                  var success = function(message) { alert(message == "echome"); }; // should alert true
                  var error = function(message) { alert(message); };
                  window.echoPlugin.callNativeFunction("echome", success, error);
                },    
              };
            </script>
        </body>
    </html>


