# pixi-closure-compiler

Closure Compiler Externs for PixiJS v5 (v5.2.4)

This is a generated externs file for closure compiler ADVANCED_OPTIMIZATION.

This doesn't include any instance members.
So you have to access instance members with ["name"] to avoid renaming.

## ex) compile with advanced_optimization.

### source file.

```javascript
/**
 * @type {PIXI.Application}
 */
let app = new PIXI.Application({width: 256, height: 256});
document.body.appendChild(app["view"]);

/**
 * @type {PIXI.Texture}
 */
const tankTexture = PIXI.Texture.from("res/sprite.png");

/**
 * @type {PIXI.Sprite}
 */
const tankSprite = new PIXI.Sprite(tankTexture);

tankSprite["anchor"].set(0.5);
tankSprite["x"] = 0;
tankSprite["y"] = 0;

app["stage"].addChild(tankSprite);
```

### compile options.

```json
{
    "js": ["pixitest.js"],
    "js_output_file": "pixitest.min.js",
    "externs": "externs/pixi-5.2.4-externs.js",
    "warning_level": "VERBOSE",
    "language_in": "ECMASCRIPT6",
    "language_out": "ECMASCRIPT5",
    "compilation_level": "ADVANCED"
}
```

### console log.

```console
C:\Users\yasuo\WebstormProjects\pixitest>npm run build

> pixitest@1.0.0 build C:\Users\yasuo\WebstormProjects\pixitest
> node tools/build.js

C:\Users\yasuo\WebstormProjects\pixitest\node_modules\google-closure-compiler-java\compiler.jar
C:\Users\yasuo\WebstormProjects\pixitest\node_modules\google-closure-compiler\contrib



C:\Users\yasuo\WebstormProjects\pixitest>
```

### compiled code.

```javascript
var a=new PIXI.Application({width:256,height:256});document.body.appendChild(a.view);var b=PIXI.Texture.from("res/sprite.png"),c=new PIXI.Sprite(b);c.anchor.set(.5);c.x=0;c.y=0;a.stage.addChild(c);
```
