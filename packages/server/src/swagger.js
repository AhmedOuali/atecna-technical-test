module.exports = {
  'swagger': '2.0',
  'info': {
    'version': '1.0.0',
    'title': 'Atecna - Test Developer Web Fullstack JS',
    'description': 'Api documentation for Atecna test',
    'license': {
      'name': 'MIT',
      'url': 'https://opensource.org/licenses/MIT',
    },
  },
  'host': process.env['APP_URL'],
  'basePath': '/',
  'tags': [
    {
      'name': 'Games',
      'description': 'API for twitch Games',
    },
  ],
  'schemes': [
    process.env['APP_SSL'] ? 'http' : 'https',
  ],
  'consumes': [
    'application/json',
  ],
  'produces': [
    'application/json',
  ],
  'paths': {
    '/games/{id}': {
      'parameters': [
        {
          'name': 'id',
          'required': true,
          'description': 'ID of the game in twitch',
          'type': 'integer',
        },
      ],
      'get': {
        'summary': 'Get game with given id',
        'tags': [
          'Games',
        ],
        procedures: [
          'application/json',
        ],
        'responses': {
          '200': {
            'description': 'Success',
            'schema': {
              '$ref': '#/definitions/Game',
            },
          },
          '400': {
            'description': 'Bad Request',
            'schema': {
              type: 'object',
              "properties": {
                'errorCode': {
                  type: 'string',
                  example: "ER_0004"
                },
                'message': {
                  type: 'string',
                  example: "Must provide id parameter"
                },
              }
            },
          },
          '404': {
            'description': 'Not Found',
            'schema': {
              type: 'object',
              "properties": {
                'errorCode': {
                  type: 'string',
                  example: "ER_0005"
                },
                'message': {
                  type: 'string',
                  example: "Game not found"
                },
              }
            },
          },
          '429': {
            'description': 'Too many requests',
            'schema': {
              type: 'object',
              "properties": {
                'errorCode': {
                  type: 'string',
                  example: "ER_0006"
                },
                'message': {
                  type: 'string',
                  example: "Too many requests, please try again later."
                },
              }
            },
          },
          '500': {
            'description': 'Internal server error',
            'schema': {
              type: 'object',
              "properties": {
                'errorCode': {
                  type: 'string',
                  example: "ER_0001"
                },
                'message': {
                  type: 'string',
                  example: "Technical Error"
                },
              }
            },
          },
        },
      },
    },
  },
  'definitions': {
    'Game': {
      'required': [
        'id',
        'name',
        'box_art_url',
      ],
      'properties': {
        'id': {
          'type': 'integer',
          'uniqueItems': true,
          'enum': [
            743,
            138585,
            30921,
            29595
          ],
        },
        'name': {
          'type': 'string',
          'enum': [
            "Chess"
          ]
        },
        'box_art_url': {
          'type': 'string',
          'enum': [
            "https://static-cdn.jtvnw.net/ttv-boxart/Chess-{width}x{height}.jpg"
          ]
        },
      },
    },
  },
}
