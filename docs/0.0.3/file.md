Scripto File Structure :
=====
This is a work in progress of what a `*.scripto` file will look like in version 0.0.3 :

```
{
  &quot;file&quot;: null,
  &quot;meta&quot;: {
    &quot;title&quot;: &quot;LALAlala&quot;,
    &quot;synopsis&quot;: &quot;This is a synopsis&quot;,
    &quot;authors&quot;: &quot;The Duck, ..&quot;
  },
  &quot;global&quot;: {
    &quot;characters&quot;: [
      {
        &quot;name&quot;: &quot;Bridget&quot;,
        &quot;id&quot;: 0,
        &quot;role&quot;: &quot;The link with all characters&quot;,
        &quot;description&quot;: &quot;bla&quot;,
        &quot;hierarchy&quot;: 1
      }
    ],
    &quot;locations&quot;: [
      {
        &quot;name&quot;: &quot;Central Perk&quot;,
        &quot;id&quot;: 1,
        &quot;parent&quot;: null
      }
    ]
  },
  &quot;script&quot;: [
    &quot;&#x2F;* basic values *&#x2F;&quot;,
    &quot;&quot;,
    &quot;§A {&#39;number&#39;:&#39;auto&#39;, &#39;smaple&#39;:0} This is an act&quot;,
    &quot;§S This is a scene&quot;,
    &quot;§C Character&quot;,
    &quot;§CA Character Action (or state&#x2F;attitude)&quot;,
    &quot;§D Dialogue (or just -logue)&quot;,
    &quot;§I Instructions (or detail of a certain location)&quot;,
    &quot;§P Paragraph (describes a setting or an action)&quot;,
    &quot;&quot;,
    &quot;&#x2F;* Generic values : *&#x2F;&quot;,
    &quot;§T Generic title&quot;,
    &quot;§ST Generic subtitle&quot;
  ],
  &quot;filetype&quot;: {
    &quot;version&quot;: &quot;0.0.2&quot;,
    &quot;url&quot;: &quot;https:&#x2F;&#x2F;github.com&#x2F;the-duck&#x2F;scripto&#x2F;&quot;
  }
}
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

    > scenes, titles and all that will automatically be identified to display a 'skeleton' of the story (a table of content, basically). They are identified through `expressions`, of which there is an updated list [there](docs/0.0.3/expressions.md)


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
