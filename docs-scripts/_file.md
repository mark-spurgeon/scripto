Scripto File Structure :
=====
This is a work in progress of what a `*.scripto` file will look like in version {{version}} :

```
{{fileExample}}
```
1. File type

    Basic filetype information.

2. Meta data

    Not the actual content, the script, but what's around it, like the author, his info, the title, and other necessary information.

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

3. Global data

    Shared data that's useful accross the whole project, like characters and their descriptions, along with artwork, notes, ..., locations,

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

4. Script

    The actual script, with the least formatting possible to let creative text show through.

    > __plain text__ with elements to identify some type of information, like title, act, scene, character dialog,...

    > scenes, titles and all that will automatically be identified to display a 'skeleton' of the story (a table of content, basically). They are identified through `expressions`, of which there is an updated list [there](docs/{{version}}/expressions.md)


## Resources
*This is an exercise as to how scripts are made. Hence, there needs to be some resources to take inspiration from and deliver a complete file system that's usable for making scripts.*

[This is a bunch of links that I haven't looked at yet, to they might be crap]
- https://blog.celtx.com/how-to-format-a-script-or-screenplay/
- https://gointothestory.blcklst.com/read-2016-oscar-nominated-best-original-and-adapted-screenplays-41d898daa061
- https://www.wikihow.com/Write-a-Screenplay
- http://www.screenwriting.info/
- https://en.wikipedia.org/wiki/Screenwriting
- https://screenwriting.io/
- https://screencraft.org/
