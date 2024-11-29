var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "麗中操場1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [ {
          "yaw": -0.9142014726476511,
          "pitch": 0.14719763264690755,
          "rotation": 0.7853981633974483,
          "target": "1-2"
        }
	  ],
      "infoHotspots": []
    },
    {
      "id": "1-2",
      "name": "麗中操場2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [ 
	  {
          "yaw": -1.464750991989984,
          "pitch": 0.10271732111690923,
          "rotation": 0.7853981633974483,
          "target": "0-1"
        }
	],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
