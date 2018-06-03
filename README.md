Scripto - screenplay files
=====

This is my attempt at making a file format for script writing, this repository is a list of basic items that, in my mind, are needed for generating a good screenplay or script.

File Structure
---

1. Meta data

    Not the actual content, the script, but what's around it, like the author, his info, the title, and other

    > __json__ data
    ```
      {
        title: "The loved ones",
        synopsis: "yeah, never understood the point of synopsises",
        authors:"Jon Doe",
        address:"blabla",
        copyright:""
      }
    ```

2. Global data

    Shared data that's useful accross the whole text, like characters and their descriptions, along with artwork, notes, ..., locations,

    > __json__ data

    ```
      {
        characters: [
          {
            name: "Michael",
            role: "what role he plays, the relationships with others,...",
            description:"red hair, grey nose,..., age...",
            hierarchy:1, // 2,3,... his importance in the story
            id:0, // id system that might or might not be useful
            extra: {
              gender: "male",
              parents: ...
            }
          },
          {
            name:...
            ...
          }
        ],
        locations : [
          {
            name: "Brenda's house",
            id:1,
            parent:0 // Another location where this location is...
          },

        ]
      }
    ```

3. Script

    The actual script, with the least formatting possible to let creative text show through.

    > __plain text__ with elements to identify some type of information, like title, act, scene, character dialog,...

    > scenes, titles and all that will automatically be identified to display a 'skeleton' of the story (a table of content, basically)

    There's a work in progress of what a file should have [there](FILE.md)
