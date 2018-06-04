Scripto File Structure :
=====
This is a work in progress of what a `*.scripto` file will look like.

```
{
  "filetype": {
    "version": "0.0.2",
    "url": "https://github.com/the-duck/scripto/"
  },
  "meta": {
    "title": "LALAlala",
    "synopsis": "This is a synopsis",
    "authors": "The Duck, .."
  },
  "global": {
    "characters": [
      {
        "name": "Bridget",
        "id": 0,
        "role": "The link with all characters",
        "description": "bla",
        "hierarchy": 1
      }
    ],
    "locations": [
      {
        "name": "Central Perk",
        "id": 1,
        "parent": null
      }
    ]
  },
  "script": [
    "/* basic values */",
    "",
    "§A {'number':'auto', 'smaple':0} This is an act",
    "§S This is a scene",
    "§C Character",
    "§CA Character Action (or state/attitude)",
    "§D Dialogue (or just -logue)",
    "§I Instructions (or detail of a certain location)",
    "§P Paragraph (describes a setting or an action)",
    "",
    "/* Generic values : */",
    "§T Generic title",
    "§ST Generic subtitle"
  ]
}


```
