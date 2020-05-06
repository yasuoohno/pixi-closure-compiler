/** @namespace */
var PIXI = {};
/** @namespace */
PIXI.ENV = {};
/** @type {string} */
PIXI.ENV["0"] = "WEBGL_LEGACY";
/** @type {string} */
PIXI.ENV["1"] = "WEBGL";
/** @type {string} */
PIXI.ENV["2"] = "WEBGL2";
/** @type {number} */
PIXI.ENV.WEBGL_LEGACY = 0;
/** @type {number} */
PIXI.ENV.WEBGL = 1;
/** @type {number} */
PIXI.ENV.WEBGL2 = 2;
/** @namespace */
PIXI.RENDERER_TYPE = {};
/** @type {string} */
PIXI.RENDERER_TYPE["0"] = "UNKNOWN";
/** @type {string} */
PIXI.RENDERER_TYPE["1"] = "WEBGL";
/** @type {string} */
PIXI.RENDERER_TYPE["2"] = "CANVAS";
/** @type {number} */
PIXI.RENDERER_TYPE.UNKNOWN = 0;
/** @type {number} */
PIXI.RENDERER_TYPE.WEBGL = 1;
/** @type {number} */
PIXI.RENDERER_TYPE.CANVAS = 2;
/** @namespace */
PIXI.BLEND_MODES = {};
/** @type {string} */
PIXI.BLEND_MODES["0"] = "SRC_OVER";
/** @type {string} */
PIXI.BLEND_MODES["1"] = "ADD";
/** @type {string} */
PIXI.BLEND_MODES["2"] = "MULTIPLY";
/** @type {string} */
PIXI.BLEND_MODES["3"] = "SCREEN";
/** @type {string} */
PIXI.BLEND_MODES["4"] = "OVERLAY";
/** @type {string} */
PIXI.BLEND_MODES["5"] = "DARKEN";
/** @type {string} */
PIXI.BLEND_MODES["6"] = "LIGHTEN";
/** @type {string} */
PIXI.BLEND_MODES["7"] = "COLOR_DODGE";
/** @type {string} */
PIXI.BLEND_MODES["8"] = "COLOR_BURN";
/** @type {string} */
PIXI.BLEND_MODES["9"] = "HARD_LIGHT";
/** @type {string} */
PIXI.BLEND_MODES["10"] = "SOFT_LIGHT";
/** @type {string} */
PIXI.BLEND_MODES["11"] = "DIFFERENCE";
/** @type {string} */
PIXI.BLEND_MODES["12"] = "EXCLUSION";
/** @type {string} */
PIXI.BLEND_MODES["13"] = "HUE";
/** @type {string} */
PIXI.BLEND_MODES["14"] = "SATURATION";
/** @type {string} */
PIXI.BLEND_MODES["15"] = "COLOR";
/** @type {string} */
PIXI.BLEND_MODES["16"] = "LUMINOSITY";
/** @type {string} */
PIXI.BLEND_MODES["17"] = "NORMAL_NPM";
/** @type {string} */
PIXI.BLEND_MODES["18"] = "ADD_NPM";
/** @type {string} */
PIXI.BLEND_MODES["19"] = "SCREEN_NPM";
/** @type {string} */
PIXI.BLEND_MODES["20"] = "NONE";
/** @type {string} */
PIXI.BLEND_MODES["21"] = "SRC_IN";
/** @type {string} */
PIXI.BLEND_MODES["22"] = "SRC_OUT";
/** @type {string} */
PIXI.BLEND_MODES["23"] = "SRC_ATOP";
/** @type {string} */
PIXI.BLEND_MODES["24"] = "DST_OVER";
/** @type {string} */
PIXI.BLEND_MODES["25"] = "DST_IN";
/** @type {string} */
PIXI.BLEND_MODES["26"] = "ERASE";
/** @type {string} */
PIXI.BLEND_MODES["27"] = "DST_ATOP";
/** @type {string} */
PIXI.BLEND_MODES["28"] = "SUBTRACT";
/** @type {string} */
PIXI.BLEND_MODES["29"] = "XOR";
/** @type {number} */
PIXI.BLEND_MODES.NORMAL = 0;
/** @type {number} */
PIXI.BLEND_MODES.ADD = 1;
/** @type {number} */
PIXI.BLEND_MODES.MULTIPLY = 2;
/** @type {number} */
PIXI.BLEND_MODES.SCREEN = 3;
/** @type {number} */
PIXI.BLEND_MODES.OVERLAY = 4;
/** @type {number} */
PIXI.BLEND_MODES.DARKEN = 5;
/** @type {number} */
PIXI.BLEND_MODES.LIGHTEN = 6;
/** @type {number} */
PIXI.BLEND_MODES.COLOR_DODGE = 7;
/** @type {number} */
PIXI.BLEND_MODES.COLOR_BURN = 8;
/** @type {number} */
PIXI.BLEND_MODES.HARD_LIGHT = 9;
/** @type {number} */
PIXI.BLEND_MODES.SOFT_LIGHT = 10;
/** @type {number} */
PIXI.BLEND_MODES.DIFFERENCE = 11;
/** @type {number} */
PIXI.BLEND_MODES.EXCLUSION = 12;
/** @type {number} */
PIXI.BLEND_MODES.HUE = 13;
/** @type {number} */
PIXI.BLEND_MODES.SATURATION = 14;
/** @type {number} */
PIXI.BLEND_MODES.COLOR = 15;
/** @type {number} */
PIXI.BLEND_MODES.LUMINOSITY = 16;
/** @type {number} */
PIXI.BLEND_MODES.NORMAL_NPM = 17;
/** @type {number} */
PIXI.BLEND_MODES.ADD_NPM = 18;
/** @type {number} */
PIXI.BLEND_MODES.SCREEN_NPM = 19;
/** @type {number} */
PIXI.BLEND_MODES.NONE = 20;
/** @type {number} */
PIXI.BLEND_MODES.SRC_OVER = 0;
/** @type {number} */
PIXI.BLEND_MODES.SRC_IN = 21;
/** @type {number} */
PIXI.BLEND_MODES.SRC_OUT = 22;
/** @type {number} */
PIXI.BLEND_MODES.SRC_ATOP = 23;
/** @type {number} */
PIXI.BLEND_MODES.DST_OVER = 24;
/** @type {number} */
PIXI.BLEND_MODES.DST_IN = 25;
/** @type {number} */
PIXI.BLEND_MODES.DST_OUT = 26;
/** @type {number} */
PIXI.BLEND_MODES.DST_ATOP = 27;
/** @type {number} */
PIXI.BLEND_MODES.ERASE = 26;
/** @type {number} */
PIXI.BLEND_MODES.SUBTRACT = 28;
/** @type {number} */
PIXI.BLEND_MODES.XOR = 29;
/** @namespace */
PIXI.DRAW_MODES = {};
/** @type {string} */
PIXI.DRAW_MODES["0"] = "POINTS";
/** @type {string} */
PIXI.DRAW_MODES["1"] = "LINES";
/** @type {string} */
PIXI.DRAW_MODES["2"] = "LINE_LOOP";
/** @type {string} */
PIXI.DRAW_MODES["3"] = "LINE_STRIP";
/** @type {string} */
PIXI.DRAW_MODES["4"] = "TRIANGLES";
/** @type {string} */
PIXI.DRAW_MODES["5"] = "TRIANGLE_STRIP";
/** @type {string} */
PIXI.DRAW_MODES["6"] = "TRIANGLE_FAN";
/** @type {number} */
PIXI.DRAW_MODES.POINTS = 0;
/** @type {number} */
PIXI.DRAW_MODES.LINES = 1;
/** @type {number} */
PIXI.DRAW_MODES.LINE_LOOP = 2;
/** @type {number} */
PIXI.DRAW_MODES.LINE_STRIP = 3;
/** @type {number} */
PIXI.DRAW_MODES.TRIANGLES = 4;
/** @type {number} */
PIXI.DRAW_MODES.TRIANGLE_STRIP = 5;
/** @type {number} */
PIXI.DRAW_MODES.TRIANGLE_FAN = 6;
/** @namespace */
PIXI.FORMATS = {};
/** @type {string} */
PIXI.FORMATS["6402"] = "DEPTH_COMPONENT";
/** @type {string} */
PIXI.FORMATS["6406"] = "ALPHA";
/** @type {string} */
PIXI.FORMATS["6407"] = "RGB";
/** @type {string} */
PIXI.FORMATS["6408"] = "RGBA";
/** @type {string} */
PIXI.FORMATS["6409"] = "LUMINANCE";
/** @type {string} */
PIXI.FORMATS["6410"] = "LUMINANCE_ALPHA";
/** @type {string} */
PIXI.FORMATS["34041"] = "DEPTH_STENCIL";
/** @type {number} */
PIXI.FORMATS.RGBA = 6408;
/** @type {number} */
PIXI.FORMATS.RGB = 6407;
/** @type {number} */
PIXI.FORMATS.ALPHA = 6406;
/** @type {number} */
PIXI.FORMATS.LUMINANCE = 6409;
/** @type {number} */
PIXI.FORMATS.LUMINANCE_ALPHA = 6410;
/** @type {number} */
PIXI.FORMATS.DEPTH_COMPONENT = 6402;
/** @type {number} */
PIXI.FORMATS.DEPTH_STENCIL = 34041;
/** @namespace */
PIXI.TARGETS = {};
/** @type {string} */
PIXI.TARGETS["3553"] = "TEXTURE_2D";
/** @type {string} */
PIXI.TARGETS["34067"] = "TEXTURE_CUBE_MAP";
/** @type {string} */
PIXI.TARGETS["34069"] = "TEXTURE_CUBE_MAP_POSITIVE_X";
/** @type {string} */
PIXI.TARGETS["34070"] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
/** @type {string} */
PIXI.TARGETS["34071"] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
/** @type {string} */
PIXI.TARGETS["34072"] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
/** @type {string} */
PIXI.TARGETS["34073"] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
/** @type {string} */
PIXI.TARGETS["34074"] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
/** @type {string} */
PIXI.TARGETS["35866"] = "TEXTURE_2D_ARRAY";
/** @type {number} */
PIXI.TARGETS.TEXTURE_2D = 3553;
/** @type {number} */
PIXI.TARGETS.TEXTURE_CUBE_MAP = 34067;
/** @type {number} */
PIXI.TARGETS.TEXTURE_2D_ARRAY = 35866;
/** @type {number} */
PIXI.TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
/** @type {number} */
PIXI.TARGETS.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
/** @type {number} */
PIXI.TARGETS.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
/** @type {number} */
PIXI.TARGETS.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
/** @type {number} */
PIXI.TARGETS.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
/** @type {number} */
PIXI.TARGETS.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
/** @namespace */
PIXI.TYPES = {};
/** @type {string} */
PIXI.TYPES["5121"] = "UNSIGNED_BYTE";
/** @type {string} */
PIXI.TYPES["5123"] = "UNSIGNED_SHORT";
/** @type {string} */
PIXI.TYPES["5126"] = "FLOAT";
/** @type {string} */
PIXI.TYPES["32819"] = "UNSIGNED_SHORT_4_4_4_4";
/** @type {string} */
PIXI.TYPES["32820"] = "UNSIGNED_SHORT_5_5_5_1";
/** @type {string} */
PIXI.TYPES["33635"] = "UNSIGNED_SHORT_5_6_5";
/** @type {string} */
PIXI.TYPES["36193"] = "HALF_FLOAT";
/** @type {number} */
PIXI.TYPES.UNSIGNED_BYTE = 5121;
/** @type {number} */
PIXI.TYPES.UNSIGNED_SHORT = 5123;
/** @type {number} */
PIXI.TYPES.UNSIGNED_SHORT_5_6_5 = 33635;
/** @type {number} */
PIXI.TYPES.UNSIGNED_SHORT_4_4_4_4 = 32819;
/** @type {number} */
PIXI.TYPES.UNSIGNED_SHORT_5_5_5_1 = 32820;
/** @type {number} */
PIXI.TYPES.FLOAT = 5126;
/** @type {number} */
PIXI.TYPES.HALF_FLOAT = 36193;
/** @namespace */
PIXI.SCALE_MODES = {};
/** @type {string} */
PIXI.SCALE_MODES["0"] = "NEAREST";
/** @type {string} */
PIXI.SCALE_MODES["1"] = "LINEAR";
/** @type {number} */
PIXI.SCALE_MODES.NEAREST = 0;
/** @type {number} */
PIXI.SCALE_MODES.LINEAR = 1;
/** @namespace */
PIXI.WRAP_MODES = {};
/** @type {string} */
PIXI.WRAP_MODES["10497"] = "REPEAT";
/** @type {string} */
PIXI.WRAP_MODES["33071"] = "CLAMP";
/** @type {string} */
PIXI.WRAP_MODES["33648"] = "MIRRORED_REPEAT";
/** @type {number} */
PIXI.WRAP_MODES.CLAMP = 33071;
/** @type {number} */
PIXI.WRAP_MODES.REPEAT = 10497;
/** @type {number} */
PIXI.WRAP_MODES.MIRRORED_REPEAT = 33648;
/** @namespace */
PIXI.MIPMAP_MODES = {};
/** @type {string} */
PIXI.MIPMAP_MODES["0"] = "OFF";
/** @type {string} */
PIXI.MIPMAP_MODES["1"] = "POW2";
/** @type {string} */
PIXI.MIPMAP_MODES["2"] = "ON";
/** @type {number} */
PIXI.MIPMAP_MODES.OFF = 0;
/** @type {number} */
PIXI.MIPMAP_MODES.POW2 = 1;
/** @type {number} */
PIXI.MIPMAP_MODES.ON = 2;
/** @namespace */
PIXI.ALPHA_MODES = {};
/** @type {string} */
PIXI.ALPHA_MODES["0"] = "NO_PREMULTIPLIED_ALPHA";
/** @type {string} */
PIXI.ALPHA_MODES["1"] = "PREMULTIPLY_ON_UPLOAD";
/** @type {string} */
PIXI.ALPHA_MODES["2"] = "PREMULTIPLY_ALPHA";
/** @type {number} */
PIXI.ALPHA_MODES.NPM = 0;
/** @type {number} */
PIXI.ALPHA_MODES.UNPACK = 1;
/** @type {number} */
PIXI.ALPHA_MODES.PMA = 2;
/** @type {number} */
PIXI.ALPHA_MODES.NO_PREMULTIPLIED_ALPHA = 0;
/** @type {number} */
PIXI.ALPHA_MODES.PREMULTIPLY_ON_UPLOAD = 1;
/** @type {number} */
PIXI.ALPHA_MODES.PREMULTIPLY_ALPHA = 2;
/** @namespace */
PIXI.GC_MODES = {};
/** @type {string} */
PIXI.GC_MODES["0"] = "AUTO";
/** @type {string} */
PIXI.GC_MODES["1"] = "MANUAL";
/** @type {number} */
PIXI.GC_MODES.AUTO = 0;
/** @type {number} */
PIXI.GC_MODES.MANUAL = 1;
/** @namespace */
PIXI.PRECISION = {};
/** @type {string} */
PIXI.PRECISION.LOW = "lowp";
/** @type {string} */
PIXI.PRECISION.MEDIUM = "mediump";
/** @type {string} */
PIXI.PRECISION.HIGH = "highp";
/** @namespace */
PIXI.MASK_TYPES = {};
/** @type {string} */
PIXI.MASK_TYPES["0"] = "NONE";
/** @type {string} */
PIXI.MASK_TYPES["1"] = "SCISSOR";
/** @type {string} */
PIXI.MASK_TYPES["2"] = "STENCIL";
/** @type {string} */
PIXI.MASK_TYPES["3"] = "SPRITE";
/** @type {number} */
PIXI.MASK_TYPES.NONE = 0;
/** @type {number} */
PIXI.MASK_TYPES.SCISSOR = 1;
/** @type {number} */
PIXI.MASK_TYPES.STENCIL = 2;
/** @type {number} */
PIXI.MASK_TYPES.SPRITE = 3;
/** @namespace */
PIXI.SHAPES = {};
/** @type {string} */
PIXI.SHAPES["0"] = "POLY";
/** @type {string} */
PIXI.SHAPES["1"] = "RECT";
/** @type {string} */
PIXI.SHAPES["2"] = "CIRC";
/** @type {string} */
PIXI.SHAPES["3"] = "ELIP";
/** @type {string} */
PIXI.SHAPES["4"] = "RREC";
/** @type {number} */
PIXI.SHAPES.POLY = 0;
/** @type {number} */
PIXI.SHAPES.RECT = 1;
/** @type {number} */
PIXI.SHAPES.CIRC = 2;
/** @type {number} */
PIXI.SHAPES.ELIP = 3;
/** @type {number} */
PIXI.SHAPES.RREC = 4;
/** @namespace */
PIXI.UPDATE_PRIORITY = {};
/** @type {string} */
PIXI.UPDATE_PRIORITY["0"] = "NORMAL";
/** @type {string} */
PIXI.UPDATE_PRIORITY["25"] = "HIGH";
/** @type {string} */
PIXI.UPDATE_PRIORITY["50"] = "INTERACTION";
/** @type {number} */
PIXI.UPDATE_PRIORITY.INTERACTION = 50;
/** @type {number} */
PIXI.UPDATE_PRIORITY.HIGH = 25;
/** @type {number} */
PIXI.UPDATE_PRIORITY.NORMAL = 0;
/** @type {number} */
PIXI.UPDATE_PRIORITY.LOW = -25;
/** @type {string} */
PIXI.UPDATE_PRIORITY["-25"] = "LOW";
/** @type {number} */
PIXI.UPDATE_PRIORITY.UTILITY = -50;
/** @type {string} */
PIXI.UPDATE_PRIORITY["-50"] = "UTILITY";
/**
 * @constructor
 * @extends PIXI.ObjectRenderer
 */
PIXI.AbstractBatchRenderer = function AbstractBatchRenderer(...args){};
/** @type {Array} */
PIXI.AbstractBatchRenderer._drawCallPool = [];
/** @type {Array} */
PIXI.AbstractBatchRenderer._textureArrayPool = [];
/** @function */
PIXI.AbstractBatchRenderer.prototype.contextChange = function contextChange(...args) {};
/** @function */
PIXI.AbstractBatchRenderer.prototype.initFlushBuffers = function initFlushBuffers(...args) {};
/** @function */
PIXI.AbstractBatchRenderer.prototype.onPrerender = function onPrerender(...args) {};
/** @function */
PIXI.AbstractBatchRenderer.prototype.render = function render(...args) {};
/** @function */
PIXI.AbstractBatchRenderer.prototype.buildTexturesAndDrawCalls = function buildTexturesAndDrawCalls(...args) {};
/** @function */
PIXI.AbstractBatchRenderer.prototype.buildDrawCalls = function buildDrawCalls(...args) {};
/** @function */
PIXI.AbstractBatchRenderer.prototype.bindAndClearTexArray = function bindAndClearTexArray(...args) {};
/** @function */
PIXI.AbstractBatchRenderer.prototype.updateGeometry = function updateGeometry(...args) {};
/** @function */
PIXI.AbstractBatchRenderer.prototype.drawBatches = function drawBatches(...args) {};
/** @function */
PIXI.AbstractBatchRenderer.prototype.flush = function flush(...args) {};
/** @function */
PIXI.AbstractBatchRenderer.prototype.start = function start(...args) {};
/** @function */
PIXI.AbstractBatchRenderer.prototype.stop = function stop(...args) {};
/** @function */
PIXI.AbstractBatchRenderer.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.AbstractBatchRenderer.prototype.getAttributeBuffer = function getAttributeBuffer(...args) {};
/** @function */
PIXI.AbstractBatchRenderer.prototype.getIndexBuffer = function getIndexBuffer(...args) {};
/** @function */
PIXI.AbstractBatchRenderer.prototype.packInterleavedGeometry = function packInterleavedGeometry(...args) {};
/**
 * @constructor
 * @extends PIXI.utils.EventEmitter
 */
PIXI.AbstractRenderer = function AbstractRenderer(...args) {};
/** @function */
PIXI.AbstractRenderer.prototype.initPlugins = function initPlugins(...args) {};
/** @function */
PIXI.AbstractRenderer.prototype.resize = function resize(...args) {};
/** @function */
PIXI.AbstractRenderer.prototype.generateTexture = function generateTexture(...args) {};
/** @function */
PIXI.AbstractRenderer.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.Sprite
 */
PIXI.AnimatedSprite = function AnimatedSprite(...args) {};
/** @function */
PIXI.AnimatedSprite.fromFrames = function fromFrames(...args) {};
/** @function */
PIXI.AnimatedSprite.fromImages = function fromImages(...args) {};
/** @function */
PIXI.AnimatedSprite.prototype.stop = function stop(...args) {};
/** @function */
PIXI.AnimatedSprite.prototype.play = function play(...args) {};
/** @function */
PIXI.AnimatedSprite.prototype.gotoAndStop = function gotoAndStop(...args) {};
/** @function */
PIXI.AnimatedSprite.prototype.gotoAndPlay = function gotoAndPlay(...args) {};
/** @function */
PIXI.AnimatedSprite.prototype.update = function update(...args) {};
/** @function */
PIXI.AnimatedSprite.prototype.updateTexture = function updateTexture(...args) {};
/** @function */
PIXI.AnimatedSprite.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.AppLoaderPlugin = function AppLoaderPlugin(...args) {};
/** @function */
PIXI.AppLoaderPlugin.init = function init(...args) {};
/** @function */
PIXI.AppLoaderPlugin.destroy = function destroy(...args) {};
/**
 * @constructor
 */
PIXI.Application = function Application(...args) {};
/** @function */
PIXI.Application.registerPlugin = function registerPlugin(...args) {};
/** @type {Array} */
PIXI.Application._plugins = [];
/** @function */
PIXI.Application.prototype.render = function render(...args) {};
/** @function */
PIXI.Application.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 */
PIXI.Attribute = function Attribute(...args) {};
/** @function */
PIXI.Attribute.from = function from(...args) {};
/** @function */
PIXI.Attribute.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 */
PIXI.BasePrepare = function BasePrepare(...args) {};
/** @function */
PIXI.BasePrepare.prototype.upload = function upload(...args) {};
/** @function */
PIXI.BasePrepare.prototype.tick = function tick(...args) {};
/** @function */
PIXI.BasePrepare.prototype.prepareItems = function prepareItems(...args) {};
/** @function */
PIXI.BasePrepare.prototype.registerFindHook = function registerFindHook(...args) {};
/** @function */
PIXI.BasePrepare.prototype.registerUploadHook = function registerUploadHook(...args) {};
/** @function */
PIXI.BasePrepare.prototype.add = function add(...args) {};
/** @function */
PIXI.BasePrepare.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.BaseTexture
 */
PIXI.BaseRenderTexture = function BaseRenderTexture(...args) {};
/** @function */
PIXI.BaseRenderTexture.prototype.resize = function resize(...args) {};
/** @function */
PIXI.BaseRenderTexture.prototype.dispose = function dispose(...args) {};
/** @function */
PIXI.BaseRenderTexture.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.utils.EventEmitter
 */
PIXI.BaseTexture = function BaseTexture(...args) {};
/** @function */
PIXI.BaseTexture.from = function from(...args) {};
/** @function */
PIXI.BaseTexture.fromBuffer = function fromBuffer(...args) {};
/** @function */
PIXI.BaseTexture.addToCache = function addToCache(...args) {};
/** @function */
PIXI.BaseTexture.removeFromCache = function removeFromCache(...args) {};
/** @type {number} */
PIXI.BaseTexture._globalBatch = 0;
/** @function */
PIXI.BaseTexture.fromImage = function fromImage(...args) {};
/** @function */
PIXI.BaseTexture.fromCanvas = function fromCanvas(...args) {};
/** @function */
PIXI.BaseTexture.fromSVG = function fromSVG(...args) {};
/** @function */
PIXI.BaseTexture.prototype.setStyle = function setStyle(...args) {};
/** @function */
PIXI.BaseTexture.prototype.setSize = function setSize(...args) {};
/** @function */
PIXI.BaseTexture.prototype.setRealSize = function setRealSize(...args) {};
/** @function */
PIXI.BaseTexture.prototype._refreshPOT = function _refreshPOT(...args) {};
/** @function */
PIXI.BaseTexture.prototype.setResolution = function setResolution(...args) {};
/** @function */
PIXI.BaseTexture.prototype.setResource = function setResource(...args) {};
/** @function */
PIXI.BaseTexture.prototype.update = function update(...args) {};
/** @function */
PIXI.BaseTexture.prototype.onError = function onError(...args) {};
/** @function */
PIXI.BaseTexture.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.BaseTexture.prototype.dispose = function dispose(...args) {};
/** @function */
PIXI.BaseTexture.prototype.loadSource = function loadSource(...args) {};
/** @function */
PIXI.BatchDrawCall = function BatchDrawCall(...args) {};
/**
 * @constructor
 * @extends PIXI.Geometry
 */
PIXI.BatchGeometry = function BatchGeometry(...args) {};
/** @function */
PIXI.BatchPluginFactory = function BatchPluginFactory(...args) {};
/** @function */
PIXI.BatchPluginFactory.create = function create(...args) {};
/**
 * @constructor
 * @extends PIXI.AbstractBatchRenderer
 */
PIXI.BatchRenderer = function BatchRenderer(...args) {};
/**
 * @constructor
 */
PIXI.BatchShaderGenerator = function BatchShaderGenerator(...args) {};
/** @function */
PIXI.BatchShaderGenerator.prototype.generateShader = function generateShader(...args) {};
/** @function */
PIXI.BatchShaderGenerator.prototype.generateSampleSrc = function generateSampleSrc(...args) {};
/**
 * @constructor
 */
PIXI.BatchTextureArray = function BatchTextureArray(...args) {};
/** @function */
PIXI.BatchTextureArray.prototype.clear = function clear(...args) {};
/** @function */
PIXI.BitmapFontLoader = function BitmapFontLoader(...args) {};
/** @function */
PIXI.BitmapFontLoader.parse = function parse(...args) {};
/** @function */
PIXI.BitmapFontLoader.add = function add(...args) {};
/** @function */
PIXI.BitmapFontLoader.dirname = function dirname(...args) {};
/** @function */
PIXI.BitmapFontLoader.use = function use(...args) {};
/**
 * @constructor
 * @extends PIXI.Container
 */
PIXI.BitmapText = function BitmapText(...args) {};
/** @function */
PIXI.BitmapText.registerFont = function registerFont(...args) {};
/** @type {Object} */
PIXI.BitmapText.fonts = {};
/** @function */
PIXI.BitmapText.prototype.updateText = function updateText(...args) {};
/** @function */
PIXI.BitmapText.prototype.updateTransform = function updateTransform(...args) {};
/** @function */
PIXI.BitmapText.prototype.getLocalBounds = function getLocalBounds(...args) {};
/** @function */
PIXI.BitmapText.prototype.validate = function validate(...args) {};
/**
 * @constructor
 */
PIXI.Bounds = function Bounds(...args) {};
/** @function */
PIXI.Bounds.prototype.isEmpty = function isEmpty(...args) {};
/** @function */
PIXI.Bounds.prototype.clear = function clear(...args) {};
/** @function */
PIXI.Bounds.prototype.getRectangle = function getRectangle(...args) {};
/** @function */
PIXI.Bounds.prototype.addPoint = function addPoint(...args) {};
/** @function */
PIXI.Bounds.prototype.addQuad = function addQuad(...args) {};
/** @function */
PIXI.Bounds.prototype.addFrame = function addFrame(...args) {};
/** @function */
PIXI.Bounds.prototype.addFrameMatrix = function addFrameMatrix(...args) {};
/** @function */
PIXI.Bounds.prototype.addVertexData = function addVertexData(...args) {};
/** @function */
PIXI.Bounds.prototype.addVertices = function addVertices(...args) {};
/** @function */
PIXI.Bounds.prototype.addVerticesMatrix = function addVerticesMatrix(...args) {};
/** @function */
PIXI.Bounds.prototype.addBounds = function addBounds(...args) {};
/** @function */
PIXI.Bounds.prototype.addBoundsMask = function addBoundsMask(...args) {};
/** @function */
PIXI.Bounds.prototype.addBoundsMatrix = function addBoundsMatrix(...args) {};
/** @function */
PIXI.Bounds.prototype.addBoundsArea = function addBoundsArea(...args) {};
/** @function */
PIXI.Bounds.prototype.pad = function pad(...args) {};
/** @function */
PIXI.Bounds.prototype.addFramePad = function addFramePad(...args) {};
/**
 * @constructor
 */
PIXI.Buffer = function Buffer(...args) {};
/** @function */
PIXI.Buffer.from = function from(...args) {};
/** @function */
PIXI.Buffer.prototype.update = function update(...args) {};
/** @function */
PIXI.Buffer.prototype.dispose = function dispose(...args) {};
/** @function */
PIXI.Buffer.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 */
PIXI.Circle = function Circle(...args) {};
/** @function */
PIXI.Circle.prototype.clone = function clone(...args) {};
/** @function */
PIXI.Circle.prototype.contains = function contains(...args) {};
/** @function */
PIXI.Circle.prototype.getBounds = function getBounds(...args) {};
/**
 * @constructor
 * @extends PIXI.DisplayObject
 */
PIXI.Container = function Container(...args) {};
/** @function */
PIXI.Container.prototype.onChildrenChange = function onChildrenChange(...args) {};
/** @function */
PIXI.Container.prototype.addChild = function addChild(...args) {};
/** @function */
PIXI.Container.prototype.addChildAt = function addChildAt(...args) {};
/** @function */
PIXI.Container.prototype.swapChildren = function swapChildren(...args) {};
/** @function */
PIXI.Container.prototype.getChildIndex = function getChildIndex(...args) {};
/** @function */
PIXI.Container.prototype.setChildIndex = function setChildIndex(...args) {};
/** @function */
PIXI.Container.prototype.getChildAt = function getChildAt(...args) {};
/** @function */
PIXI.Container.prototype.removeChild = function removeChild(...args) {};
/** @function */
PIXI.Container.prototype.removeChildAt = function removeChildAt(...args) {};
/** @function */
PIXI.Container.prototype.removeChildren = function removeChildren(...args) {};
/** @function */
PIXI.Container.prototype.sortChildren = function sortChildren(...args) {};
/** @function */
PIXI.Container.prototype.updateTransform = function updateTransform(...args) {};
/** @function */
PIXI.Container.prototype.calculateBounds = function calculateBounds(...args) {};
/** @function */
PIXI.Container.prototype._calculateBounds = function _calculateBounds(...args) {};
/** @function */
PIXI.Container.prototype.render = function render(...args) {};
/** @function */
PIXI.Container.prototype.renderAdvanced = function renderAdvanced(...args) {};
/** @function */
PIXI.Container.prototype._render = function _render(...args) {};
/** @function */
PIXI.Container.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.Container.prototype.containerUpdateTransform = function containerUpdateTransform(...args) {};
/** @function */
PIXI.Container.prototype.getChildByName = function getChildByName(...args) {};
/** @function */
PIXI.Container.prototype._renderWebGL = function _renderWebGL(...args) {};
/** @function */
PIXI.Container.prototype.renderWebGL = function renderWebGL(...args) {};
/** @function */
PIXI.Container.prototype.renderAdvancedWebGL = function renderAdvancedWebGL(...args) {};
/**
 * @constructor
 */
PIXI.CountLimiter = function CountLimiter(...args) {};
/** @function */
PIXI.CountLimiter.prototype.beginFrame = function beginFrame(...args) {};
/** @function */
PIXI.CountLimiter.prototype.allowedToUpload = function allowedToUpload(...args) {};
/**
 * @constructor
 * @extends PIXI.BaseTexture
 */
PIXI.CubeTexture = function CubeTexture(...args) {};
/** @function */
PIXI.CubeTexture.from = function from(...args) {};
/** @type {number} */
PIXI.DEG_TO_RAD = 0.017453292519943295;
/**
 * @constructor
 * @extends PIXI.utils.EventEmitter
 */
PIXI.DisplayObject = function DisplayObject(...args) {};
/** @function */
PIXI.DisplayObject.mixin = function mixin(...args) {};
/** @function */
PIXI.DisplayObject.prototype.updateTransform = function updateTransform(...args) {};
/** @function */
PIXI.DisplayObject.prototype.calculateBounds = function calculateBounds(...args) {};
/** @function */
PIXI.DisplayObject.prototype._recursivePostUpdateTransform = function _recursivePostUpdateTransform(...args) {};
/** @function */
PIXI.DisplayObject.prototype.getBounds = function getBounds(...args) {};
/** @function */
PIXI.DisplayObject.prototype.getLocalBounds = function getLocalBounds(...args) {};
/** @function */
PIXI.DisplayObject.prototype.toGlobal = function toGlobal(...args) {};
/** @function */
PIXI.DisplayObject.prototype.toLocal = function toLocal(...args) {};
/** @function */
PIXI.DisplayObject.prototype.render = function render(...args) {};
/** @function */
PIXI.DisplayObject.prototype.setParent = function setParent(...args) {};
/** @function */
PIXI.DisplayObject.prototype.setTransform = function setTransform(...args) {};
/** @function */
PIXI.DisplayObject.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.DisplayObject.prototype.displayObjectUpdateTransform = function displayObjectUpdateTransform(...args) {};
/** @type {boolean} */
PIXI.DisplayObject.prototype.accessible = false;
/** @type {?Object} */
PIXI.DisplayObject.prototype.accessibleTitle = null;
/** @type {?Object} */
PIXI.DisplayObject.prototype.accessibleHint = null;
/** @type {number} */
PIXI.DisplayObject.prototype.tabIndex = 0;
/** @type {boolean} */
PIXI.DisplayObject.prototype._accessibleActive = false;
/** @type {boolean} */
PIXI.DisplayObject.prototype._accessibleDiv = false;
/** @type {string} */
PIXI.DisplayObject.prototype.accessibleType = "button";
/** @type {string} */
PIXI.DisplayObject.prototype.accessiblePointerEvents = "auto";
/** @type {boolean} */
PIXI.DisplayObject.prototype.accessibleChildren = true;
/** @type {boolean} */
PIXI.DisplayObject.prototype.interactive = false;
/** @type {boolean} */
PIXI.DisplayObject.prototype.interactiveChildren = true;
/** @type {?Object} */
PIXI.DisplayObject.prototype.hitArea = null;
/** @type {boolean} */
PIXI.DisplayObject.prototype.buttonMode = false;
/** @type {?Object} */
PIXI.DisplayObject.prototype.cursor = null;
/** @type {Object} */
PIXI.DisplayObject.prototype.trackedPointers = {};
/** @type {Object} */
PIXI.DisplayObject.prototype._trackedPointers = {};
/** @type {boolean} */
PIXI.DisplayObject.prototype._cacheAsBitmap = false;
/** @type {boolean} */
PIXI.DisplayObject.prototype._cacheData = false;
/** @function */
PIXI.DisplayObject.prototype._renderCached = function _renderCached(...args) {};
/** @function */
PIXI.DisplayObject.prototype._initCachedDisplayObject = function _initCachedDisplayObject(...args) {};
/** @function */
PIXI.DisplayObject.prototype._renderCachedCanvas = function _renderCachedCanvas(...args) {};
/** @function */
PIXI.DisplayObject.prototype._initCachedDisplayObjectCanvas = function _initCachedDisplayObjectCanvas(...args) {};
/** @function */
PIXI.DisplayObject.prototype._calculateCachedBounds = function _calculateCachedBounds(...args) {};
/** @function */
PIXI.DisplayObject.prototype._getCachedLocalBounds = function _getCachedLocalBounds(...args) {};
/** @function */
PIXI.DisplayObject.prototype._destroyCachedDisplayObject = function _destroyCachedDisplayObject(...args) {};
/** @function */
PIXI.DisplayObject.prototype._cacheAsBitmapDestroy = function _cacheAsBitmapDestroy(...args) {};
/** @type {?Object} */
PIXI.DisplayObject.prototype.name = null;
/** @function */
PIXI.DisplayObject.prototype.getGlobalPosition = function getGlobalPosition(...args) {};
/** @function */
PIXI.DisplayObject.prototype.renderWebGL = function renderWebGL(...args) {};
/**
 * @constructor
 */
PIXI.Ellipse = function Ellipse(...args) {};
/** @function */
PIXI.Ellipse.prototype.clone = function clone(...args) {};
/** @function */
PIXI.Ellipse.prototype.contains = function contains(...args) {};
/** @function */
PIXI.Ellipse.prototype.getBounds = function getBounds(...args) {};
/**
 * @constructor
 */
PIXI.Extract = function Extract(...args) {};
/** @function */
PIXI.Extract.arrayPostDivide = function arrayPostDivide(...args) {};
/** @function */
PIXI.Extract.prototype.image = function image(...args) {};
/** @function */
PIXI.Extract.prototype.base64 = function base64(...args) {};
/** @function */
PIXI.Extract.prototype.canvas = function canvas(...args) {};
/** @function */
PIXI.Extract.prototype.pixels = function pixels(...args) {};
/** @function */
PIXI.Extract.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 */
PIXI.FillStyle = function FillStyle(...args) {};
/** @function */
PIXI.FillStyle.prototype.clone = function clone(...args) {};
/** @function */
PIXI.FillStyle.prototype.reset = function reset(...args) {};
/** @function */
PIXI.FillStyle.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.Shader
 */
PIXI.Filter = function Filter(...args) {};
/** @type {Object} */
PIXI.Filter.SOURCE_KEY_MAP = {};
/** @function */
PIXI.Filter.prototype.apply = function apply(...args) {};
/**
 * @constructor
 */
PIXI.Framebuffer = function Framebuffer(...args) {};
/** @function */
PIXI.Framebuffer.prototype.addColorTexture = function addColorTexture(...args) {};
/** @function */
PIXI.Framebuffer.prototype.addDepthTexture = function addDepthTexture(...args) {};
/** @function */
PIXI.Framebuffer.prototype.enableDepth = function enableDepth(...args) {};
/** @function */
PIXI.Framebuffer.prototype.enableStencil = function enableStencil(...args) {};
/** @function */
PIXI.Framebuffer.prototype.resize = function resize(...args) {};
/** @function */
PIXI.Framebuffer.prototype.dispose = function dispose(...args) {};
/**
 * @constructor
 */
PIXI.GLProgram = function GLProgram(...args) {};
/** @function */
PIXI.GLProgram.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.GLTexture = function GLTexture(...args) {};
/** @namespace */
PIXI.GRAPHICS_CURVES = {};
/** @type {boolean} */
PIXI.GRAPHICS_CURVES.adaptive = true;
/** @type {number} */
PIXI.GRAPHICS_CURVES.maxLength = 10;
/** @type {number} */
PIXI.GRAPHICS_CURVES.minSegments = 8;
/** @type {number} */
PIXI.GRAPHICS_CURVES.maxSegments = 2048;
/** @function */
PIXI.GRAPHICS_CURVES._segmentsCount = function _segmentsCount(...args) {};
/**
 * @constructor
 */
PIXI.Geometry = function Geometry(...args) {};
/** @function */
PIXI.Geometry.merge = function merge(...args) {};
/** @function */
PIXI.Geometry.prototype.addAttribute = function addAttribute(...args) {};
/** @function */
PIXI.Geometry.prototype.getAttribute = function getAttribute(...args) {};
/** @function */
PIXI.Geometry.prototype.getBuffer = function getBuffer(...args) {};
/** @function */
PIXI.Geometry.prototype.addIndex = function addIndex(...args) {};
/** @function */
PIXI.Geometry.prototype.getIndex = function getIndex(...args) {};
/** @function */
PIXI.Geometry.prototype.interleave = function interleave(...args) {};
/** @function */
PIXI.Geometry.prototype.getSize = function getSize(...args) {};
/** @function */
PIXI.Geometry.prototype.dispose = function dispose(...args) {};
/** @function */
PIXI.Geometry.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.Geometry.prototype.clone = function clone(...args) {};
/**
 * @constructor
 * @extends PIXI.Container
 */
PIXI.Graphics = function Graphics(...args) {};
/** @type {Object} */
PIXI.Graphics._TEMP_POINT = {};
/** @function */
PIXI.Graphics.prototype.clone = function clone(...args) {};
/** @function */
PIXI.Graphics.prototype.lineStyle = function lineStyle(...args) {};
/** @function */
PIXI.Graphics.prototype.lineTextureStyle = function lineTextureStyle(...args) {};
/** @function */
PIXI.Graphics.prototype.startPoly = function startPoly(...args) {};
/** @function */
PIXI.Graphics.prototype.finishPoly = function finishPoly(...args) {};
/** @function */
PIXI.Graphics.prototype.moveTo = function moveTo(...args) {};
/** @function */
PIXI.Graphics.prototype.lineTo = function lineTo(...args) {};
/** @function */
PIXI.Graphics.prototype._initCurve = function _initCurve(...args) {};
/** @function */
PIXI.Graphics.prototype.quadraticCurveTo = function quadraticCurveTo(...args) {};
/** @function */
PIXI.Graphics.prototype.bezierCurveTo = function bezierCurveTo(...args) {};
/** @function */
PIXI.Graphics.prototype.arcTo = function arcTo(...args) {};
/** @function */
PIXI.Graphics.prototype.arc = function arc(...args) {};
/** @function */
PIXI.Graphics.prototype.beginFill = function beginFill(...args) {};
/** @function */
PIXI.Graphics.prototype.beginTextureFill = function beginTextureFill(...args) {};
/** @function */
PIXI.Graphics.prototype.endFill = function endFill(...args) {};
/** @function */
PIXI.Graphics.prototype.drawRect = function drawRect(...args) {};
/** @function */
PIXI.Graphics.prototype.drawRoundedRect = function drawRoundedRect(...args) {};
/** @function */
PIXI.Graphics.prototype.drawCircle = function drawCircle(...args) {};
/** @function */
PIXI.Graphics.prototype.drawEllipse = function drawEllipse(...args) {};
/** @function */
PIXI.Graphics.prototype.drawPolygon = function drawPolygon(...args) {};
/** @function */
PIXI.Graphics.prototype.drawShape = function drawShape(...args) {};
/** @function */
PIXI.Graphics.prototype.drawStar = function drawStar(...args) {};
/** @function */
PIXI.Graphics.prototype.clear = function clear(...args) {};
/** @function */
PIXI.Graphics.prototype.isFastRect = function isFastRect(...args) {};
/** @function */
PIXI.Graphics.prototype._render = function _render(...args) {};
/** @function */
PIXI.Graphics.prototype._populateBatches = function _populateBatches(...args) {};
/** @function */
PIXI.Graphics.prototype._renderBatched = function _renderBatched(...args) {};
/** @function */
PIXI.Graphics.prototype._renderDirect = function _renderDirect(...args) {};
/** @function */
PIXI.Graphics.prototype._renderDrawCallDirect = function _renderDrawCallDirect(...args) {};
/** @function */
PIXI.Graphics.prototype._resolveDirectShader = function _resolveDirectShader(...args) {};
/** @function */
PIXI.Graphics.prototype._calculateBounds = function _calculateBounds(...args) {};
/** @function */
PIXI.Graphics.prototype.containsPoint = function containsPoint(...args) {};
/** @function */
PIXI.Graphics.prototype.calculateTints = function calculateTints(...args) {};
/** @function */
PIXI.Graphics.prototype.calculateVertices = function calculateVertices(...args) {};
/** @function */
PIXI.Graphics.prototype.closePath = function closePath(...args) {};
/** @function */
PIXI.Graphics.prototype.setMatrix = function setMatrix(...args) {};
/** @function */
PIXI.Graphics.prototype.beginHole = function beginHole(...args) {};
/** @function */
PIXI.Graphics.prototype.endHole = function endHole(...args) {};
/** @function */
PIXI.Graphics.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.Graphics.prototype.generateCanvasTexture = function generateCanvasTexture(...args) {};
/**
 * @constructor
 */
PIXI.GraphicsData = function GraphicsData(...args) {};
/** @function */
PIXI.GraphicsData.prototype.clone = function clone(...args) {};
/** @function */
PIXI.GraphicsData.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.BatchGeometry
 */
PIXI.GraphicsGeometry = function GraphicsGeometry(...args) {};
/** @type {number} */
PIXI.GraphicsGeometry.BATCHABLE_SIZE = 100;
/** @function */
PIXI.GraphicsGeometry.prototype.invalidate = function invalidate(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.clear = function clear(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.drawShape = function drawShape(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.drawHole = function drawHole(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.containsPoint = function containsPoint(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.updateBatches = function updateBatches(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype._compareStyles = function _compareStyles(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.validateBatching = function validateBatching(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.packBatches = function packBatches(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.isBatchable = function isBatchable(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.buildDrawCalls = function buildDrawCalls(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.packAttributes = function packAttributes(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.processFill = function processFill(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.processLine = function processLine(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.processHoles = function processHoles(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.calculateBounds = function calculateBounds(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.transformPoints = function transformPoints(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.addColors = function addColors(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.addTextureIds = function addTextureIds(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.addUvs = function addUvs(...args) {};
/** @function */
PIXI.GraphicsGeometry.prototype.adjustUvs = function adjustUvs(...args) {};
/**
 * @constructor
 * @extends PIXI.FillStyle
 */
PIXI.LineStyle = function LineStyle(...args) {};
/** @function */
PIXI.LineStyle.prototype.clone = function clone(...args) {};
/** @function */
PIXI.LineStyle.prototype.reset = function reset(...args) {};
/**
 * @constructor
 * this class seems extended class of Loader
 */
PIXI.Loader = function Loader(...args) {};
/** @type {Array} */
PIXI.Loader._plugins = [];
/** @function */
PIXI.Loader.registerPlugin = function registerPlugin(...args) {};
/** @function */
PIXI.Loader.addPixiMiddleware = function addPixiMiddleware(...args) {};
/** @function */
PIXI.Loader.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.Loader.prototype.eventNames = function eventNames(...args) {};
/** @function */
PIXI.Loader.prototype.listeners = function listeners(...args) {};
/** @function */
PIXI.Loader.prototype.listenerCount = function listenerCount(...args) {};
/** @function */
PIXI.Loader.prototype.emit = function emit(...args) {};
/** @function */
PIXI.Loader.prototype.on = function on(...args) {};
/** @function */
PIXI.Loader.prototype.once = function once(...args) {};
/** @function */
PIXI.Loader.prototype.removeListener = function removeListener(...args) {};
/** @function */
PIXI.Loader.prototype.removeAllListeners = function removeAllListeners(...args) {};
/** @function */
PIXI.Loader.prototype.off = function off(...args) {};
/** @function */
PIXI.Loader.prototype.addListener = function addListener(...args) {};
/**
 * @constructor
 */
PIXI.LoaderResource = function LoaderResource(...args) {};
/** @function */
PIXI.LoaderResource.setExtensionLoadType = function setExtensionLoadType(...args) {};
/** @function */
PIXI.LoaderResource.setExtensionXhrType = function setExtensionXhrType(...args) {};
/** @type {Object} */
PIXI.LoaderResource.STATUS_FLAGS = {};
/** @type {number} */
PIXI.LoaderResource.STATUS_FLAGS.NONE = 0;
/** @type {number} */
PIXI.LoaderResource.STATUS_FLAGS.DATA_URL = 1;
/** @type {number} */
PIXI.LoaderResource.STATUS_FLAGS.COMPLETE = 2;
/** @type {number} */
PIXI.LoaderResource.STATUS_FLAGS.LOADING = 4;
/** @type {Object} */
PIXI.LoaderResource.TYPE = {};
/** @type {number} */
PIXI.LoaderResource.TYPE.UNKNOWN = 0;
/** @type {number} */
PIXI.LoaderResource.TYPE.JSON = 1;
/** @type {number} */
PIXI.LoaderResource.TYPE.XML = 2;
/** @type {number} */
PIXI.LoaderResource.TYPE.IMAGE = 3;
/** @type {number} */
PIXI.LoaderResource.TYPE.AUDIO = 4;
/** @type {number} */
PIXI.LoaderResource.TYPE.VIDEO = 5;
/** @type {number} */
PIXI.LoaderResource.TYPE.TEXT = 6;
/** @type {Object} */
PIXI.LoaderResource.LOAD_TYPE = {};
/** @type {number} */
PIXI.LoaderResource.LOAD_TYPE.XHR = 1;
/** @type {number} */
PIXI.LoaderResource.LOAD_TYPE.IMAGE = 2;
/** @type {number} */
PIXI.LoaderResource.LOAD_TYPE.AUDIO = 3;
/** @type {number} */
PIXI.LoaderResource.LOAD_TYPE.VIDEO = 4;
/** @type {Object} */
PIXI.LoaderResource.XHR_RESPONSE_TYPE = {};
/** @type {string} */
PIXI.LoaderResource.XHR_RESPONSE_TYPE.DEFAULT = "text";
/** @type {string} */
PIXI.LoaderResource.XHR_RESPONSE_TYPE.BUFFER = "arraybuffer";
/** @type {string} */
PIXI.LoaderResource.XHR_RESPONSE_TYPE.BLOB = "blob";
/** @type {string} */
PIXI.LoaderResource.XHR_RESPONSE_TYPE.DOCUMENT = "document";
/** @type {string} */
PIXI.LoaderResource.XHR_RESPONSE_TYPE.JSON = "json";
/** @type {string} */
PIXI.LoaderResource.XHR_RESPONSE_TYPE.TEXT = "text";
/** @type {Object} */
PIXI.LoaderResource._loadTypeMap = {};
/** @type {number} */
PIXI.LoaderResource._loadTypeMap.gif = 2;
/** @type {number} */
PIXI.LoaderResource._loadTypeMap.png = 2;
/** @type {number} */
PIXI.LoaderResource._loadTypeMap.bmp = 2;
/** @type {number} */
PIXI.LoaderResource._loadTypeMap.jpg = 2;
/** @type {number} */
PIXI.LoaderResource._loadTypeMap.jpeg = 2;
/** @type {number} */
PIXI.LoaderResource._loadTypeMap.tif = 2;
/** @type {number} */
PIXI.LoaderResource._loadTypeMap.tiff = 2;
/** @type {number} */
PIXI.LoaderResource._loadTypeMap.webp = 2;
/** @type {number} */
PIXI.LoaderResource._loadTypeMap.tga = 2;
/** @type {number} */
PIXI.LoaderResource._loadTypeMap.svg = 2;
/** @type {number} */
PIXI.LoaderResource._loadTypeMap["svg+xml"] = 2;
/** @type {number} */
PIXI.LoaderResource._loadTypeMap.mp3 = 3;
/** @type {number} */
PIXI.LoaderResource._loadTypeMap.ogg = 3;
/** @type {number} */
PIXI.LoaderResource._loadTypeMap.wav = 3;
/** @type {number} */
PIXI.LoaderResource._loadTypeMap.mp4 = 4;
/** @type {number} */
PIXI.LoaderResource._loadTypeMap.webm = 4;
/** @type {Object} */
PIXI.LoaderResource._xhrTypeMap = {};
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.xhtml = "document";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.html = "document";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.htm = "document";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.xml = "document";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.tmx = "document";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.svg = "document";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.tsx = "document";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.gif = "blob";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.png = "blob";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.bmp = "blob";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.jpg = "blob";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.jpeg = "blob";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.tif = "blob";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.tiff = "blob";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.webp = "blob";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.tga = "blob";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.json = "json";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.text = "text";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.txt = "text";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.ttf = "arraybuffer";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.otf = "arraybuffer";
/** @type {string} */
PIXI.LoaderResource._xhrTypeMap.fnt = "document";
/** @type {string} */
PIXI.LoaderResource.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
/** @function */
PIXI.LoaderResource.prototype.complete = function complete(...args) {};
/** @function */
PIXI.LoaderResource.prototype.abort = function abort(...args) {};
/** @function */
PIXI.LoaderResource.prototype.load = function load(...args) {};
/** @function */
PIXI.LoaderResource.prototype._hasFlag = function _hasFlag(...args) {};
/** @function */
PIXI.LoaderResource.prototype._setFlag = function _setFlag(...args) {};
/** @function */
PIXI.LoaderResource.prototype._clearEvents = function _clearEvents(...args) {};
/** @function */
PIXI.LoaderResource.prototype._finish = function _finish(...args) {};
/** @function */
PIXI.LoaderResource.prototype._loadElement = function _loadElement(...args) {};
/** @function */
PIXI.LoaderResource.prototype._loadSourceElement = function _loadSourceElement(...args) {};
/** @function */
PIXI.LoaderResource.prototype._loadXhr = function _loadXhr(...args) {};
/** @function */
PIXI.LoaderResource.prototype._loadXdr = function _loadXdr(...args) {};
/** @function */
PIXI.LoaderResource.prototype._createSource = function _createSource(...args) {};
/** @function */
PIXI.LoaderResource.prototype._onError = function _onError(...args) {};
/** @function */
PIXI.LoaderResource.prototype._onProgress = function _onProgress(...args) {};
/** @function */
PIXI.LoaderResource.prototype._onTimeout = function _onTimeout(...args) {};
/** @function */
PIXI.LoaderResource.prototype._xhrOnError = function _xhrOnError(...args) {};
/** @function */
PIXI.LoaderResource.prototype._xhrOnTimeout = function _xhrOnTimeout(...args) {};
/** @function */
PIXI.LoaderResource.prototype._xhrOnAbort = function _xhrOnAbort(...args) {};
/** @function */
PIXI.LoaderResource.prototype._xhrOnLoad = function _xhrOnLoad(...args) {};
/** @function */
PIXI.LoaderResource.prototype._determineCrossOrigin = function _determineCrossOrigin(...args) {};
/** @function */
PIXI.LoaderResource.prototype._determineXhrType = function _determineXhrType(...args) {};
/** @function */
PIXI.LoaderResource.prototype._determineLoadType = function _determineLoadType(...args) {};
/** @function */
PIXI.LoaderResource.prototype._getExtension = function _getExtension(...args) {};
/** @function */
PIXI.LoaderResource.prototype._getMimeFromXhrType = function _getMimeFromXhrType(...args) {};
/**
 * @constructor
 */
PIXI.MaskData = function MaskData(...args) {};
/** @function */
PIXI.MaskData.prototype.reset = function reset(...args) {};
/** @function */
PIXI.MaskData.prototype.copyCountersOrReset = function copyCountersOrReset(...args) {};
/**
 * @constructor
 */
PIXI.Matrix = function Matrix(...args) {};
/** @type {Object} */
PIXI.Matrix.IDENTITY = {};
/** @type {Object} */
PIXI.Matrix.TEMP_MATRIX = {};
/** @function */
PIXI.Matrix.prototype.fromArray = function fromArray(...args) {};
/** @function */
PIXI.Matrix.prototype.set = function set(...args) {};
/** @function */
PIXI.Matrix.prototype.toArray = function toArray(...args) {};
/** @function */
PIXI.Matrix.prototype.apply = function apply(...args) {};
/** @function */
PIXI.Matrix.prototype.applyInverse = function applyInverse(...args) {};
/** @function */
PIXI.Matrix.prototype.translate = function translate(...args) {};
/** @function */
PIXI.Matrix.prototype.scale = function scale(...args) {};
/** @function */
PIXI.Matrix.prototype.rotate = function rotate(...args) {};
/** @function */
PIXI.Matrix.prototype.append = function append(...args) {};
/** @function */
PIXI.Matrix.prototype.setTransform = function setTransform(...args) {};
/** @function */
PIXI.Matrix.prototype.prepend = function prepend(...args) {};
/** @function */
PIXI.Matrix.prototype.decompose = function decompose(...args) {};
/** @function */
PIXI.Matrix.prototype.invert = function invert(...args) {};
/** @function */
PIXI.Matrix.prototype.identity = function identity(...args) {};
/** @function */
PIXI.Matrix.prototype.clone = function clone(...args) {};
/** @function */
PIXI.Matrix.prototype.copyTo = function copyTo(...args) {};
/** @function */
PIXI.Matrix.prototype.copyFrom = function copyFrom(...args) {};
/** @function */
PIXI.Matrix.prototype.copy = function copy(...args) {};
/**
 * @constructor
 * @extends PIXI.Container
 */
PIXI.Mesh = function Mesh(...args) {};
/** @type {number} */
PIXI.Mesh.BATCHABLE_SIZE = 100;
/** @function */
PIXI.Mesh.prototype._render = function _render(...args) {};
/** @function */
PIXI.Mesh.prototype._renderDefault = function _renderDefault(...args) {};
/** @function */
PIXI.Mesh.prototype._renderToBatch = function _renderToBatch(...args) {};
/** @function */
PIXI.Mesh.prototype.calculateVertices = function calculateVertices(...args) {};
/** @function */
PIXI.Mesh.prototype.calculateUvs = function calculateUvs(...args) {};
/** @function */
PIXI.Mesh.prototype._calculateBounds = function _calculateBounds(...args) {};
/** @function */
PIXI.Mesh.prototype.containsPoint = function containsPoint(...args) {};
/** @function */
PIXI.Mesh.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 */
PIXI.MeshBatchUvs = function MeshBatchUvs(...args) {};
/** @function */
PIXI.MeshBatchUvs.prototype.update = function update(...args) {};
/**
 * @constructor
 * @extends PIXI.Geometry
 */
PIXI.MeshGeometry = function MeshGeometry(...args) {};
/**
 * @constructor
 * @extends PIXI.Shader
 */
PIXI.MeshMaterial = function MeshMaterial(...args) {};
/** @function */
PIXI.MeshMaterial.prototype.update = function update(...args) {};
/**
 * @constructor
 * @extends PIXI.SimplePlane
 */
PIXI.NineSlicePlane = function NineSlicePlane(...args) {};
/** @function */
PIXI.NineSlicePlane.prototype.textureUpdated = function textureUpdated(...args) {};
/** @function */
PIXI.NineSlicePlane.prototype.updateHorizontalVertices = function updateHorizontalVertices(...args) {};
/** @function */
PIXI.NineSlicePlane.prototype.updateVerticalVertices = function updateVerticalVertices(...args) {};
/** @function */
PIXI.NineSlicePlane.prototype._getMinScale = function _getMinScale(...args) {};
/** @function */
PIXI.NineSlicePlane.prototype._refresh = function _refresh(...args) {};
/**
 * @constructor
 */
PIXI.ObjectRenderer = function ObjectRenderer(...args) {};
/** @function */
PIXI.ObjectRenderer.prototype.flush = function flush(...args) {};
/** @function */
PIXI.ObjectRenderer.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.ObjectRenderer.prototype.start = function start(...args) {};
/** @function */
PIXI.ObjectRenderer.prototype.stop = function stop(...args) {};
/** @function */
PIXI.ObjectRenderer.prototype.render = function render(...args) {};
/**
 * @constructor
 */
PIXI.ObservablePoint = function ObservablePoint(...args) {};
/** @function */
PIXI.ObservablePoint.prototype.clone = function clone(...args) {};
/** @function */
PIXI.ObservablePoint.prototype.set = function set(...args) {};
/** @function */
PIXI.ObservablePoint.prototype.copyFrom = function copyFrom(...args) {};
/** @function */
PIXI.ObservablePoint.prototype.copyTo = function copyTo(...args) {};
/** @function */
PIXI.ObservablePoint.prototype.equals = function equals(...args) {};
/** @type {?Object} */
PIXI.ObservablePoint.prototype.x = null;
/** @type {?Object} */
PIXI.ObservablePoint.prototype.y = null;
/** @function */
PIXI.ObservablePoint.prototype.copy = function copy(...args) {};
/** @type {number} */
PIXI.PI_2 = 6.283185307179586;
/**
 * @constructor
 * @extends PIXI.Container
 */
PIXI.ParticleContainer = function ParticleContainer(...args) {};
/** @function */
PIXI.ParticleContainer.prototype.setProperties = function setProperties(...args) {};
/** @function */
PIXI.ParticleContainer.prototype.updateTransform = function updateTransform(...args) {};
/** @function */
PIXI.ParticleContainer.prototype.render = function render(...args) {};
/** @function */
PIXI.ParticleContainer.prototype.onChildrenChange = function onChildrenChange(...args) {};
/** @function */
PIXI.ParticleContainer.prototype.dispose = function dispose(...args) {};
/** @function */
PIXI.ParticleContainer.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.ObjectRenderer
 */
PIXI.ParticleRenderer = function ParticleRenderer(...args) {};
/** @function */
PIXI.ParticleRenderer.prototype.render = function render(...args) {};
/** @function */
PIXI.ParticleRenderer.prototype.generateBuffers = function generateBuffers(...args) {};
/** @function */
PIXI.ParticleRenderer.prototype._generateOneMoreBuffer = function _generateOneMoreBuffer(...args) {};
/** @function */
PIXI.ParticleRenderer.prototype.uploadVertices = function uploadVertices(...args) {};
/** @function */
PIXI.ParticleRenderer.prototype.uploadPosition = function uploadPosition(...args) {};
/** @function */
PIXI.ParticleRenderer.prototype.uploadRotation = function uploadRotation(...args) {};
/** @function */
PIXI.ParticleRenderer.prototype.uploadUvs = function uploadUvs(...args) {};
/** @function */
PIXI.ParticleRenderer.prototype.uploadTint = function uploadTint(...args) {};
/** @function */
PIXI.ParticleRenderer.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.MeshGeometry
 */
PIXI.PlaneGeometry = function PlaneGeometry(...args) {};
/** @function */
PIXI.PlaneGeometry.prototype.build = function build(...args) {};
/**
 * @constructor
 */
PIXI.Point = function Point(...args) {};
/** @function */
PIXI.Point.prototype.clone = function clone(...args) {};
/** @function */
PIXI.Point.prototype.copyFrom = function copyFrom(...args) {};
/** @function */
PIXI.Point.prototype.copyTo = function copyTo(...args) {};
/** @function */
PIXI.Point.prototype.equals = function equals(...args) {};
/** @function */
PIXI.Point.prototype.set = function set(...args) {};
/** @function */
PIXI.Point.prototype.copy = function copy(...args) {};
/**
 * @constructor
 */
PIXI.Polygon = function Polygon(...args) {};
/** @function */
PIXI.Polygon.prototype.clone = function clone(...args) {};
/** @function */
PIXI.Polygon.prototype.contains = function contains(...args) {};
/**
 * @constructor
 * @extends PIXI.BasePrepare
 */
PIXI.Prepare = function Prepare(...args) {};
/**
 * @constructor
 */
PIXI.Program = function Program(...args) {};
/** @function */
PIXI.Program.from = function from(...args) {};
/** @function */
PIXI.Program.prototype.extractData = function extractData(...args) {};
/** @function */
PIXI.Program.prototype.getAttributeData = function getAttributeData(...args) {};
/** @function */
PIXI.Program.prototype.getUniformData = function getUniformData(...args) {};
/**
 * @constructor
 * @extends PIXI.Geometry
 */
PIXI.Quad = function Quad(...args) {};
/**
 * @constructor
 * @extends PIXI.Geometry
 */
PIXI.QuadUv = function QuadUv(...args) {};
/** @function */
PIXI.QuadUv.prototype.map = function map(...args) {};
/** @function */
PIXI.QuadUv.prototype.invalidate = function invalidate(...args) {};
/** @type {number} */
PIXI.RAD_TO_DEG = 57.29577951308232;
/**
 * @constructor
 */
PIXI.Rectangle = function Rectangle(...args) {};
/** @type {Object} */
PIXI.Rectangle.EMPTY = {};
/** @type {?Object} */
PIXI.Rectangle.prototype.left = null;
/** @type {number} */
PIXI.Rectangle.prototype.right = NaN;
/** @type {?Object} */
PIXI.Rectangle.prototype.top = null;
/** @type {number} */
PIXI.Rectangle.prototype.bottom = NaN;
/** @function */
PIXI.Rectangle.prototype.clone = function clone(...args) {};
/** @function */
PIXI.Rectangle.prototype.copyFrom = function copyFrom(...args) {};
/** @function */
PIXI.Rectangle.prototype.copyTo = function copyTo(...args) {};
/** @function */
PIXI.Rectangle.prototype.contains = function contains(...args) {};
/** @function */
PIXI.Rectangle.prototype.pad = function pad(...args) {};
/** @function */
PIXI.Rectangle.prototype.fit = function fit(...args) {};
/** @function */
PIXI.Rectangle.prototype.ceil = function ceil(...args) {};
/** @function */
PIXI.Rectangle.prototype.enlarge = function enlarge(...args) {};
/** @function */
PIXI.Rectangle.prototype.copy = function copy(...args) {};
/**
 * @constructor
 * @extends PIXI.Texture
 */
PIXI.RenderTexture = function RenderTexture(...args) {};
/** @function */
PIXI.RenderTexture.create = function create(...args) {};
/** @function */
PIXI.RenderTexture.prototype.resize = function resize(...args) {};
/** @function */
PIXI.RenderTexture.prototype.setResolution = function setResolution(...args) {};
/**
 * @constructor
 */
PIXI.RenderTexturePool = function RenderTexturePool(...args) {};
/** @type {string} */
PIXI.RenderTexturePool.SCREEN_KEY = "screen";
/** @function */
PIXI.RenderTexturePool.prototype.createTexture = function createTexture(...args) {};
/** @function */
PIXI.RenderTexturePool.prototype.getOptimalTexture = function getOptimalTexture(...args) {};
/** @function */
PIXI.RenderTexturePool.prototype.getFilterTexture = function getFilterTexture(...args) {};
/** @function */
PIXI.RenderTexturePool.prototype.returnTexture = function returnTexture(...args) {};
/** @function */
PIXI.RenderTexturePool.prototype.returnFilterTexture = function returnFilterTexture(...args) {};
/** @function */
PIXI.RenderTexturePool.prototype.clear = function clear(...args) {};
/** @function */
PIXI.RenderTexturePool.prototype.setScreenSize = function setScreenSize(...args) {};
/**
 * @constructor
 * @extends PIXI.AbstractRenderer
 */
PIXI.Renderer = function Renderer(...args) {};
/** @function */
PIXI.Renderer.create = function create(...args) {};
/** @function */
PIXI.Renderer.registerPlugin = function registerPlugin(...args) {};
/** @type {Object} */
PIXI.Renderer.__plugins = {};
/**
 * @constructor
 */
PIXI.Renderer.__plugins.accessibility = function accessibility(...args) {};
/** @function */
PIXI.Renderer.__plugins.accessibility.prototype.createTouchHook = function createTouchHook(...args) {};
/** @function */
PIXI.Renderer.__plugins.accessibility.prototype.destroyTouchHook = function destroyTouchHook(...args) {};
/** @function */
PIXI.Renderer.__plugins.accessibility.prototype.activate = function activate(...args) {};
/** @function */
PIXI.Renderer.__plugins.accessibility.prototype.deactivate = function deactivate(...args) {};
/** @function */
PIXI.Renderer.__plugins.accessibility.prototype.updateAccessibleObjects = function updateAccessibleObjects(...args) {};
/** @function */
PIXI.Renderer.__plugins.accessibility.prototype.update = function update(...args) {};
/** @function */
PIXI.Renderer.__plugins.accessibility.prototype.updateDebugHTML = function updateDebugHTML(...args) {};
/** @function */
PIXI.Renderer.__plugins.accessibility.prototype.capHitArea = function capHitArea(...args) {};
/** @function */
PIXI.Renderer.__plugins.accessibility.prototype.addChild = function addChild(...args) {};
/** @function */
PIXI.Renderer.__plugins.accessibility.prototype._onClick = function _onClick(...args) {};
/** @function */
PIXI.Renderer.__plugins.accessibility.prototype._onFocus = function _onFocus(...args) {};
/** @function */
PIXI.Renderer.__plugins.accessibility.prototype._onFocusOut = function _onFocusOut(...args) {};
/** @function */
PIXI.Renderer.__plugins.accessibility.prototype._onKeyDown = function _onKeyDown(...args) {};
/** @function */
PIXI.Renderer.__plugins.accessibility.prototype._onMouseMove = function _onMouseMove(...args) {};
/** @function */
PIXI.Renderer.__plugins.accessibility.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 */
PIXI.Renderer.__plugins.extract = function extract(...args) {};
/** @function */
PIXI.Renderer.__plugins.extract.arrayPostDivide = function arrayPostDivide(...args) {};
/** @function */
PIXI.Renderer.__plugins.extract.prototype.image = function image(...args) {};
/** @function */
PIXI.Renderer.__plugins.extract.prototype.base64 = function base64(...args) {};
/** @function */
PIXI.Renderer.__plugins.extract.prototype.canvas = function canvas(...args) {};
/** @function */
PIXI.Renderer.__plugins.extract.prototype.pixels = function pixels(...args) {};
/** @function */
PIXI.Renderer.__plugins.extract.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.utils.EventEmitter
 */
PIXI.Renderer.__plugins.interaction = function interaction(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.hitTest = function hitTest(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.setTargetElement = function setTargetElement(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.addTickerListener = function addTickerListener(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.removeTickerListener = function removeTickerListener(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.addEvents = function addEvents(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.removeEvents = function removeEvents(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.tickerUpdate = function tickerUpdate(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.update = function update(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.setCursorMode = function setCursorMode(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.dispatchEvent = function dispatchEvent(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.delayDispatchEvent = function delayDispatchEvent(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.mapPositionToPoint = function mapPositionToPoint(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.processInteractive = function processInteractive(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.onPointerDown = function onPointerDown(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.processPointerDown = function processPointerDown(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.onPointerComplete = function onPointerComplete(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.onPointerCancel = function onPointerCancel(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.processPointerCancel = function processPointerCancel(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.onPointerUp = function onPointerUp(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.processPointerUp = function processPointerUp(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.onPointerMove = function onPointerMove(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.processPointerMove = function processPointerMove(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.onPointerOut = function onPointerOut(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.processPointerOverOut = function processPointerOverOut(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.onPointerOver = function onPointerOver(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.getInteractionDataForPointerId = function getInteractionDataForPointerId(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.releaseInteractionDataForPointerId = function releaseInteractionDataForPointerId(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.configureInteractionEventForDOMEvent = function configureInteractionEventForDOMEvent(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.normalizeToPointerData = function normalizeToPointerData(...args) {};
/** @function */
PIXI.Renderer.__plugins.interaction.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.ObjectRenderer
 */
PIXI.Renderer.__plugins.particle = function particle(...args) {};
/** @function */
PIXI.Renderer.__plugins.particle.prototype.render = function render(...args) {};
/** @function */
PIXI.Renderer.__plugins.particle.prototype.generateBuffers = function generateBuffers(...args) {};
/** @function */
PIXI.Renderer.__plugins.particle.prototype._generateOneMoreBuffer = function _generateOneMoreBuffer(...args) {};
/** @function */
PIXI.Renderer.__plugins.particle.prototype.uploadVertices = function uploadVertices(...args) {};
/** @function */
PIXI.Renderer.__plugins.particle.prototype.uploadPosition = function uploadPosition(...args) {};
/** @function */
PIXI.Renderer.__plugins.particle.prototype.uploadRotation = function uploadRotation(...args) {};
/** @function */
PIXI.Renderer.__plugins.particle.prototype.uploadUvs = function uploadUvs(...args) {};
/** @function */
PIXI.Renderer.__plugins.particle.prototype.uploadTint = function uploadTint(...args) {};
/** @function */
PIXI.Renderer.__plugins.particle.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.BasePrepare
 */
PIXI.Renderer.__plugins.prepare = function prepare(...args) {};
/**
 * @constructor
 * @extends PIXI.AbstractBatchRenderer
 */
PIXI.Renderer.__plugins.batch = function batch(...args) {};
/**
 * @constructor
 * @extends PIXI.ObjectRenderer
 */
PIXI.Renderer.__plugins.tilingSprite = function tilingSprite(...args) {};
/** @function */
PIXI.Renderer.__plugins.tilingSprite.prototype.render = function render(...args) {};
/** @function */
PIXI.Renderer.prototype.addSystem = function addSystem(...args) {};
/** @function */
PIXI.Renderer.prototype.render = function render(...args) {};
/** @function */
PIXI.Renderer.prototype.resize = function resize(...args) {};
/** @function */
PIXI.Renderer.prototype.reset = function reset(...args) {};
/** @function */
PIXI.Renderer.prototype.clear = function clear(...args) {};
/** @function */
PIXI.Renderer.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.MeshGeometry
 */
PIXI.RopeGeometry = function RopeGeometry(...args) {};
/** @function */
PIXI.RopeGeometry.prototype.build = function build(...args) {};
/** @function */
PIXI.RopeGeometry.prototype.updateVertices = function updateVertices(...args) {};
/** @function */
PIXI.RopeGeometry.prototype.update = function update(...args) {};
/**
 * @constructor
 */
PIXI.RoundedRectangle = function RoundedRectangle(...args) {};
/** @function */
PIXI.RoundedRectangle.prototype.clone = function clone(...args) {};
/** @function */
PIXI.RoundedRectangle.prototype.contains = function contains(...args) {};
/**
 * @constructor
 */
PIXI.Runner = function Runner(...args) {};
/** @function */
PIXI.Runner.prototype.emit = function emit(...args) {};
/** @function */
PIXI.Runner.prototype.ensureNonAliasedItems = function ensureNonAliasedItems(...args) {};
/** @function */
PIXI.Runner.prototype.add = function add(...args) {};
/** @function */
PIXI.Runner.prototype.remove = function remove(...args) {};
/** @function */
PIXI.Runner.prototype.contains = function contains(...args) {};
/** @function */
PIXI.Runner.prototype.removeAll = function removeAll(...args) {};
/** @function */
PIXI.Runner.prototype.destroy = function destroy(...args) {};
/** @type {?Object} */
PIXI.Runner.prototype.empty = null;
/** @type {?Object} */
PIXI.Runner.prototype.name = null;
/**
 * @constructor
 */
PIXI.Shader = function Shader(...args) {};
/** @function */
PIXI.Shader.from = function from(...args) {};
/** @function */
PIXI.Shader.prototype.checkUniformExists = function checkUniformExists(...args) {};
/** @function */
PIXI.Shader.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.Mesh
 */
PIXI.SimpleMesh = function SimpleMesh(...args) {};
/** @function */
PIXI.SimpleMesh.prototype._render = function _render(...args) {};
/**
 * @constructor
 * @extends PIXI.Mesh
 */
PIXI.SimplePlane = function SimplePlane(...args) {};
/** @function */
PIXI.SimplePlane.prototype.textureUpdated = function textureUpdated(...args) {};
/** @function */
PIXI.SimplePlane.prototype._render = function _render(...args) {};
/**
 * @constructor
 * @extends PIXI.Mesh
 */
PIXI.SimpleRope = function SimpleRope(...args) {};
/** @function */
PIXI.SimpleRope.prototype._render = function _render(...args) {};
/**
 * @constructor
 * @extends PIXI.Container
 */
PIXI.Sprite = function Sprite(...args) {};
/** @function */
PIXI.Sprite.from = function from(...args) {};
/** @function */
PIXI.Sprite.fromImage = function fromImage(...args) {};
/** @function */
PIXI.Sprite.fromSVG = function fromSVG(...args) {};
/** @function */
PIXI.Sprite.fromCanvas = function fromCanvas(...args) {};
/** @function */
PIXI.Sprite.fromVideo = function fromVideo(...args) {};
/** @function */
PIXI.Sprite.fromFrame = function fromFrame(...args) {};
/** @function */
PIXI.Sprite.prototype._onTextureUpdate = function _onTextureUpdate(...args) {};
/** @function */
PIXI.Sprite.prototype._onAnchorUpdate = function _onAnchorUpdate(...args) {};
/** @function */
PIXI.Sprite.prototype.calculateVertices = function calculateVertices(...args) {};
/** @function */
PIXI.Sprite.prototype.calculateTrimmedVertices = function calculateTrimmedVertices(...args) {};
/** @function */
PIXI.Sprite.prototype._render = function _render(...args) {};
/** @function */
PIXI.Sprite.prototype._calculateBounds = function _calculateBounds(...args) {};
/** @function */
PIXI.Sprite.prototype.getLocalBounds = function getLocalBounds(...args) {};
/** @function */
PIXI.Sprite.prototype.containsPoint = function containsPoint(...args) {};
/** @function */
PIXI.Sprite.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.Filter
 */
PIXI.SpriteMaskFilter = function SpriteMaskFilter(...args) {};
/** @function */
PIXI.SpriteMaskFilter.prototype.apply = function apply(...args) {};
/**
 * @constructor
 */
PIXI.Spritesheet = function Spritesheet(...args) {};
/** @function */
PIXI.Spritesheet.prototype._updateResolution = function _updateResolution(...args) {};
/** @function */
PIXI.Spritesheet.prototype.parse = function parse(...args) {};
/** @function */
PIXI.Spritesheet.prototype._processFrames = function _processFrames(...args) {};
/** @function */
PIXI.Spritesheet.prototype._processAnimations = function _processAnimations(...args) {};
/** @function */
PIXI.Spritesheet.prototype._parseComplete = function _parseComplete(...args) {};
/** @function */
PIXI.Spritesheet.prototype._nextBatch = function _nextBatch(...args) {};
/** @function */
PIXI.Spritesheet.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.SpritesheetLoader = function SpritesheetLoader(...args) {};
/** @function */
PIXI.SpritesheetLoader.use = function use(...args) {};
/** @function */
PIXI.SpritesheetLoader.getResourcePath = function getResourcePath(...args) {};
/** @function */
PIXI.State = function State(...args) {};
/** @function */
PIXI.State.for2d = function for2d(...args) {};
/**
 * @constructor
 */
PIXI.System = function System(...args) {};
/** @function */
PIXI.System.prototype.destroy = function destroy(...args) {};
/** @namespace */
PIXI.TEXT_GRADIENT = {};
/** @type {number} */
PIXI.TEXT_GRADIENT.LINEAR_VERTICAL = 0;
/** @type {number} */
PIXI.TEXT_GRADIENT.LINEAR_HORIZONTAL = 1;
/**
 * @constructor
 * @extends PIXI.Sprite
 */
PIXI.Text = function Text(...args) {};
/** @function */
PIXI.Text.prototype.updateText = function updateText(...args) {};
/** @function */
PIXI.Text.prototype.drawLetterSpacing = function drawLetterSpacing(...args) {};
/** @function */
PIXI.Text.prototype.updateTexture = function updateTexture(...args) {};
/** @function */
PIXI.Text.prototype._render = function _render(...args) {};
/** @function */
PIXI.Text.prototype.getLocalBounds = function getLocalBounds(...args) {};
/** @function */
PIXI.Text.prototype._calculateBounds = function _calculateBounds(...args) {};
/** @function */
PIXI.Text.prototype._onStyleChange = function _onStyleChange(...args) {};
/** @function */
PIXI.Text.prototype._generateFillStyle = function _generateFillStyle(...args) {};
/** @function */
PIXI.Text.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.TextMetrics = function TextMetrics(...args) {};
/** @function */
PIXI.TextMetrics.measureText = function measureText(...args) {};
/** @function */
PIXI.TextMetrics.wordWrap = function wordWrap(...args) {};
/** @function */
PIXI.TextMetrics.addLine = function addLine(...args) {};
/** @function */
PIXI.TextMetrics.getFromCache = function getFromCache(...args) {};
/** @function */
PIXI.TextMetrics.collapseSpaces = function collapseSpaces(...args) {};
/** @function */
PIXI.TextMetrics.collapseNewlines = function collapseNewlines(...args) {};
/** @function */
PIXI.TextMetrics.trimRight = function trimRight(...args) {};
/** @function */
PIXI.TextMetrics.isNewline = function isNewline(...args) {};
/** @function */
PIXI.TextMetrics.isBreakingSpace = function isBreakingSpace(...args) {};
/** @function */
PIXI.TextMetrics.tokenize = function tokenize(...args) {};
/** @function */
PIXI.TextMetrics.canBreakWords = function canBreakWords(...args) {};
/** @function */
PIXI.TextMetrics.canBreakChars = function canBreakChars(...args) {};
/** @function */
PIXI.TextMetrics.wordWrapSplit = function wordWrapSplit(...args) {};
/** @function */
PIXI.TextMetrics.measureFont = function measureFont(...args) {};
/** @function */
PIXI.TextMetrics.clearMetrics = function clearMetrics(...args) {};
/** @type {Object} */
PIXI.TextMetrics._canvas = {};
/** @type {Object} */
PIXI.TextMetrics._context = {};
/** @type {Object} */
PIXI.TextMetrics._fonts = {};
/** @type {string} */
PIXI.TextMetrics.METRICS_STRING = "|ÉqÅ";
/** @type {string} */
PIXI.TextMetrics.BASELINE_SYMBOL = "M";
/** @type {number} */
PIXI.TextMetrics.BASELINE_MULTIPLIER = 1.4;
/** @type {Array} */
PIXI.TextMetrics._newlines = [];
/** @type {Array} */
PIXI.TextMetrics._breakingSpaces = [];
/**
 * @constructor
 */
PIXI.TextStyle = function TextStyle(...args) {};
/** @function */
PIXI.TextStyle.prototype.clone = function clone(...args) {};
/** @function */
PIXI.TextStyle.prototype.reset = function reset(...args) {};
/** @function */
PIXI.TextStyle.prototype.toFontString = function toFontString(...args) {};
/**
 * @constructor
 * @extends PIXI.utils.EventEmitter
 */
PIXI.Texture = function Texture(...args) {};
/** @function */
PIXI.Texture.from = function from(...args) {};
/** @function */
PIXI.Texture.fromBuffer = function fromBuffer(...args) {};
/** @function */
PIXI.Texture.fromLoader = function fromLoader(...args) {};
/** @function */
PIXI.Texture.addToCache = function addToCache(...args) {};
/** @function */
PIXI.Texture.removeFromCache = function removeFromCache(...args) {};
/** @type {Object} */
PIXI.Texture.EMPTY = {};
/** @type {Object} */
PIXI.Texture.WHITE = {};
/** @function */
PIXI.Texture.fromImage = function fromImage(...args) {};
/** @function */
PIXI.Texture.fromSVG = function fromSVG(...args) {};
/** @function */
PIXI.Texture.fromCanvas = function fromCanvas(...args) {};
/** @function */
PIXI.Texture.fromVideo = function fromVideo(...args) {};
/** @function */
PIXI.Texture.fromFrame = function fromFrame(...args) {};
/** @function */
PIXI.Texture.prototype.update = function update(...args) {};
/** @function */
PIXI.Texture.prototype.onBaseTextureUpdated = function onBaseTextureUpdated(...args) {};
/** @function */
PIXI.Texture.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.Texture.prototype.clone = function clone(...args) {};
/** @function */
PIXI.Texture.prototype.updateUvs = function updateUvs(...args) {};
/** @function */
PIXI.TextureLoader = function TextureLoader(...args) {};
/** @function */
PIXI.TextureLoader.use = function use(...args) {};
/**
 * @constructor
 */
PIXI.TextureMatrix = function TextureMatrix(...args) {};
/** @function */
PIXI.TextureMatrix.prototype.multiplyUvs = function multiplyUvs(...args) {};
/** @function */
PIXI.TextureMatrix.prototype.update = function update(...args) {};
/**
 * @constructor
 */
PIXI.TextureUvs = function TextureUvs(...args) {};
/** @function */
PIXI.TextureUvs.prototype.set = function set(...args) {};
/**
 * @constructor
 */
PIXI.Ticker = function Ticker(...args) {};
/** @type {Object} */
PIXI.Ticker.shared = {};
/** @type {Object} */
PIXI.Ticker.system = {};
/** @function */
PIXI.Ticker.prototype._requestIfNeeded = function _requestIfNeeded(...args) {};
/** @function */
PIXI.Ticker.prototype._cancelIfNeeded = function _cancelIfNeeded(...args) {};
/** @function */
PIXI.Ticker.prototype._startIfPossible = function _startIfPossible(...args) {};
/** @function */
PIXI.Ticker.prototype.add = function add(...args) {};
/** @function */
PIXI.Ticker.prototype.addOnce = function addOnce(...args) {};
/** @function */
PIXI.Ticker.prototype._addListener = function _addListener(...args) {};
/** @function */
PIXI.Ticker.prototype.remove = function remove(...args) {};
/** @type {number} */
PIXI.Ticker.prototype.count = 0;
/** @function */
PIXI.Ticker.prototype.start = function start(...args) {};
/** @function */
PIXI.Ticker.prototype.stop = function stop(...args) {};
/** @function */
PIXI.Ticker.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.Ticker.prototype.update = function update(...args) {};
/** @type {number} */
PIXI.Ticker.prototype.FPS = NaN;
/** @type {number} */
PIXI.Ticker.prototype.minFPS = NaN;
/** @type {number} */
PIXI.Ticker.prototype.maxFPS = 0;
/** @function */
PIXI.TickerPlugin = function TickerPlugin(...args) {};
/** @function */
PIXI.TickerPlugin.init = function init(...args) {};
/** @function */
PIXI.TickerPlugin.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.Sprite
 */
PIXI.TilingSprite = function TilingSprite(...args) {};
/** @function */
PIXI.TilingSprite.from = function from(...args) {};
/** @function */
PIXI.TilingSprite.fromFrame = function fromFrame(...args) {};
/** @function */
PIXI.TilingSprite.fromImage = function fromImage(...args) {};
/** @function */
PIXI.TilingSprite.prototype._onTextureUpdate = function _onTextureUpdate(...args) {};
/** @function */
PIXI.TilingSprite.prototype._render = function _render(...args) {};
/** @function */
PIXI.TilingSprite.prototype._calculateBounds = function _calculateBounds(...args) {};
/** @function */
PIXI.TilingSprite.prototype.getLocalBounds = function getLocalBounds(...args) {};
/** @function */
PIXI.TilingSprite.prototype.containsPoint = function containsPoint(...args) {};
/** @function */
PIXI.TilingSprite.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.ObjectRenderer
 */
PIXI.TilingSpriteRenderer = function TilingSpriteRenderer(...args) {};
/** @function */
PIXI.TilingSpriteRenderer.prototype.render = function render(...args) {};
/**
 * @constructor
 */
PIXI.TimeLimiter = function TimeLimiter(...args) {};
/** @function */
PIXI.TimeLimiter.prototype.beginFrame = function beginFrame(...args) {};
/** @function */
PIXI.TimeLimiter.prototype.allowedToUpload = function allowedToUpload(...args) {};
/**
 * @constructor
 */
PIXI.Transform = function Transform(...args) {};
/** @type {Object} */
PIXI.Transform.IDENTITY = {};
/** @function */
PIXI.Transform.prototype.onChange = function onChange(...args) {};
/** @function */
PIXI.Transform.prototype.updateSkew = function updateSkew(...args) {};
/** @function */
PIXI.Transform.prototype.updateLocalTransform = function updateLocalTransform(...args) {};
/** @function */
PIXI.Transform.prototype.updateTransform = function updateTransform(...args) {};
/** @function */
PIXI.Transform.prototype.setFromMatrix = function setFromMatrix(...args) {};
/** @type {?Object} */
PIXI.Transform.prototype.rotation = null;
/**
 * @constructor
 */
PIXI.UniformGroup = function UniformGroup(...args) {};
/** @function */
PIXI.UniformGroup.from = function from(...args) {};
/** @function */
PIXI.UniformGroup.prototype.update = function update(...args) {};
/** @function */
PIXI.UniformGroup.prototype.add = function add(...args) {};
/** @type {string} */
PIXI.VERSION = "5.2.4";
/**
 * @constructor
 */
PIXI.ViewableBuffer = function ViewableBuffer(...args) {};
/** @function */
PIXI.ViewableBuffer.sizeOf = function sizeOf(...args) {};
/** @function */
PIXI.ViewableBuffer.prototype.view = function view(...args) {};
/** @function */
PIXI.ViewableBuffer.prototype.destroy = function destroy(...args) {};
/** @namespace */
PIXI.accessibility = {};
/**
 * @constructor
 */
PIXI.accessibility.AccessibilityManager = function AccessibilityManager(...args) {};
/** @function */
PIXI.accessibility.AccessibilityManager.prototype.createTouchHook = function createTouchHook(...args) {};
/** @function */
PIXI.accessibility.AccessibilityManager.prototype.destroyTouchHook = function destroyTouchHook(...args) {};
/** @function */
PIXI.accessibility.AccessibilityManager.prototype.activate = function activate(...args) {};
/** @function */
PIXI.accessibility.AccessibilityManager.prototype.deactivate = function deactivate(...args) {};
/** @function */
PIXI.accessibility.AccessibilityManager.prototype.updateAccessibleObjects = function updateAccessibleObjects(...args) {};
/** @function */
PIXI.accessibility.AccessibilityManager.prototype.update = function update(...args) {};
/** @function */
PIXI.accessibility.AccessibilityManager.prototype.updateDebugHTML = function updateDebugHTML(...args) {};
/** @function */
PIXI.accessibility.AccessibilityManager.prototype.capHitArea = function capHitArea(...args) {};
/** @function */
PIXI.accessibility.AccessibilityManager.prototype.addChild = function addChild(...args) {};
/** @function */
PIXI.accessibility.AccessibilityManager.prototype._onClick = function _onClick(...args) {};
/** @function */
PIXI.accessibility.AccessibilityManager.prototype._onFocus = function _onFocus(...args) {};
/** @function */
PIXI.accessibility.AccessibilityManager.prototype._onFocusOut = function _onFocusOut(...args) {};
/** @function */
PIXI.accessibility.AccessibilityManager.prototype._onKeyDown = function _onKeyDown(...args) {};
/** @function */
PIXI.accessibility.AccessibilityManager.prototype._onMouseMove = function _onMouseMove(...args) {};
/** @function */
PIXI.accessibility.AccessibilityManager.prototype.destroy = function destroy(...args) {};
/** @namespace */
PIXI.accessibility.accessibleTarget = {};
/** @type {boolean} */
PIXI.accessibility.accessibleTarget.accessible = false;
/** @type {?Object} */
PIXI.accessibility.accessibleTarget.accessibleTitle = null;
/** @type {?Object} */
PIXI.accessibility.accessibleTarget.accessibleHint = null;
/** @type {number} */
PIXI.accessibility.accessibleTarget.tabIndex = 0;
/** @type {boolean} */
PIXI.accessibility.accessibleTarget._accessibleActive = false;
/** @type {boolean} */
PIXI.accessibility.accessibleTarget._accessibleDiv = false;
/** @type {string} */
PIXI.accessibility.accessibleTarget.accessibleType = "button";
/** @type {string} */
PIXI.accessibility.accessibleTarget.accessiblePointerEvents = "auto";
/** @type {boolean} */
PIXI.accessibility.accessibleTarget.accessibleChildren = true;
/** @function */
PIXI.autoDetectRenderer = function autoDetectRenderer(...args) {};
/** @function */
PIXI.checkMaxIfStatementsInShader = function checkMaxIfStatementsInShader(...args) {};
/** @type {string} */
PIXI.defaultFilterVertex = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
/** @type {string} */
PIXI.defaultVertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}";
/** @namespace */
PIXI.filters = {};
/**
 * @constructor
 * @extends PIXI.Filter
 */
PIXI.filters.AlphaFilter = function AlphaFilter(...args) {};
/**
 * @constructor
 * @extends PIXI.Filter
 */
PIXI.filters.BlurFilter = function BlurFilter(...args) {};
/** @function */
PIXI.filters.BlurFilter.prototype.apply = function apply(...args) {};
/** @function */
PIXI.filters.BlurFilter.prototype.updatePadding = function updatePadding(...args) {};
/**
 * @constructor
 * @extends PIXI.Filter
 */
PIXI.filters.BlurFilterPass = function BlurFilterPass(...args) {};
/** @function */
PIXI.filters.BlurFilterPass.prototype.apply = function apply(...args) {};
/**
 * @constructor
 * @extends PIXI.Filter
 */
PIXI.filters.ColorMatrixFilter = function ColorMatrixFilter(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype._loadMatrix = function _loadMatrix(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype._multiply = function _multiply(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype._colorMatrix = function _colorMatrix(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.brightness = function brightness(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.greyscale = function greyscale(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.blackAndWhite = function blackAndWhite(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.hue = function hue(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.contrast = function contrast(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.saturate = function saturate(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.desaturate = function desaturate(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.negative = function negative(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.sepia = function sepia(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.technicolor = function technicolor(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.polaroid = function polaroid(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.toBGR = function toBGR(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.kodachrome = function kodachrome(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.browni = function browni(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.vintage = function vintage(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.colorTone = function colorTone(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.night = function night(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.predator = function predator(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.lsd = function lsd(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.reset = function reset(...args) {};
/** @function */
PIXI.filters.ColorMatrixFilter.prototype.grayscale = function grayscale(...args) {};
/**
 * @constructor
 * @extends PIXI.Filter
 */
PIXI.filters.DisplacementFilter = function DisplacementFilter(...args) {};
/** @function */
PIXI.filters.DisplacementFilter.prototype.apply = function apply(...args) {};
/**
 * @constructor
 * @extends PIXI.Filter
 */
PIXI.filters.FXAAFilter = function FXAAFilter(...args) {};
/**
 * @constructor
 * @extends PIXI.Filter
 */
PIXI.filters.NoiseFilter = function NoiseFilter(...args) {};
/**
 * @constructor
 * @extends PIXI.filters.BlurFilterPass
 */
PIXI.filters.BlurXFilter = function BlurXFilter(...args) {};
/**
 * @constructor
 * @extends PIXI.filters.BlurFilterPass
 */
PIXI.filters.BlurYFilter = function BlurYFilter(...args) {};
/** @namespace */
PIXI.graphicsUtils = {};
/** @namespace */
PIXI.graphicsUtils.buildPoly = {};
/** @function */
PIXI.graphicsUtils.buildPoly.build = function build(...args) {};
/** @function */
PIXI.graphicsUtils.buildPoly.triangulate = function triangulate(...args) {};
/** @namespace */
PIXI.graphicsUtils.buildCircle = {};
/** @function */
PIXI.graphicsUtils.buildCircle.build = function build(...args) {};
/** @function */
PIXI.graphicsUtils.buildCircle.triangulate = function triangulate(...args) {};
/** @namespace */
PIXI.graphicsUtils.buildRectangle = {};
/** @function */
PIXI.graphicsUtils.buildRectangle.build = function build(...args) {};
/** @function */
PIXI.graphicsUtils.buildRectangle.triangulate = function triangulate(...args) {};
/** @namespace */
PIXI.graphicsUtils.buildRoundedRectangle = {};
/** @function */
PIXI.graphicsUtils.buildRoundedRectangle.build = function build(...args) {};
/** @function */
PIXI.graphicsUtils.buildRoundedRectangle.triangulate = function triangulate(...args) {};
/** @namespace */
PIXI.graphicsUtils.FILL_COMMANDS = {};
/** @namespace */
PIXI.graphicsUtils.FILL_COMMANDS["0"] = {};
/** @function */
PIXI.graphicsUtils.FILL_COMMANDS["0"].build = function build(...args) {};
/** @function */
PIXI.graphicsUtils.FILL_COMMANDS["0"].triangulate = function triangulate(...args) {};
/** @namespace */
PIXI.graphicsUtils.FILL_COMMANDS["1"] = {};
/** @function */
PIXI.graphicsUtils.FILL_COMMANDS["1"].build = function build(...args) {};
/** @function */
PIXI.graphicsUtils.FILL_COMMANDS["1"].triangulate = function triangulate(...args) {};
/** @namespace */
PIXI.graphicsUtils.FILL_COMMANDS["2"] = {};
/** @function */
PIXI.graphicsUtils.FILL_COMMANDS["2"].build = function build(...args) {};
/** @function */
PIXI.graphicsUtils.FILL_COMMANDS["2"].triangulate = function triangulate(...args) {};
/** @namespace */
PIXI.graphicsUtils.FILL_COMMANDS["3"] = {};
/** @function */
PIXI.graphicsUtils.FILL_COMMANDS["3"].build = function build(...args) {};
/** @function */
PIXI.graphicsUtils.FILL_COMMANDS["3"].triangulate = function triangulate(...args) {};
/** @namespace */
PIXI.graphicsUtils.FILL_COMMANDS["4"] = {};
/** @function */
PIXI.graphicsUtils.FILL_COMMANDS["4"].build = function build(...args) {};
/** @function */
PIXI.graphicsUtils.FILL_COMMANDS["4"].triangulate = function triangulate(...args) {};
/** @type {Array} */
PIXI.graphicsUtils.BATCH_POOL = [];
/** @type {Array} */
PIXI.graphicsUtils.DRAW_CALL_POOL = [];
/** @function */
PIXI.graphicsUtils.buildLine = function buildLine(...args) {};
/** @function */
PIXI.graphicsUtils.buildComplexPoly = function buildComplexPoly(...args) {};
/** @function */
PIXI.graphicsUtils.bezierCurveTo = function bezierCurveTo(...args) {};
/**
 * @constructor
 * @extends PIXI.Polygon
 */
PIXI.graphicsUtils.Star = function Star(...args) {};
/** @function */
PIXI.graphicsUtils.ArcUtils = function ArcUtils(...args) {};
/** @function */
PIXI.graphicsUtils.ArcUtils.curveTo = function curveTo(...args) {};
/** @function */
PIXI.graphicsUtils.ArcUtils.arc = function arc(...args) {};
/** @function */
PIXI.graphicsUtils.BezierUtils = function BezierUtils(...args) {};
/** @function */
PIXI.graphicsUtils.BezierUtils.curveLength = function curveLength(...args) {};
/** @function */
PIXI.graphicsUtils.BezierUtils.curveTo = function curveTo(...args) {};
/** @function */
PIXI.graphicsUtils.QuadraticUtils = function QuadraticUtils(...args) {};
/** @function */
PIXI.graphicsUtils.QuadraticUtils.curveLength = function curveLength(...args) {};
/** @function */
PIXI.graphicsUtils.QuadraticUtils.curveTo = function curveTo(...args) {};
/**
 * @constructor
 */
PIXI.graphicsUtils.BatchPart = function BatchPart(...args) {};
/** @function */
PIXI.graphicsUtils.BatchPart.prototype.begin = function begin(...args) {};
/** @function */
PIXI.graphicsUtils.BatchPart.prototype.end = function end(...args) {};
/** @function */
PIXI.graphicsUtils.BatchPart.prototype.reset = function reset(...args) {};
/** @namespace */
PIXI.groupD8 = {};
/** @type {number} */
PIXI.groupD8.E = 0;
/** @type {number} */
PIXI.groupD8.SE = 1;
/** @type {number} */
PIXI.groupD8.S = 2;
/** @type {number} */
PIXI.groupD8.SW = 3;
/** @type {number} */
PIXI.groupD8.W = 4;
/** @type {number} */
PIXI.groupD8.NW = 5;
/** @type {number} */
PIXI.groupD8.N = 6;
/** @type {number} */
PIXI.groupD8.NE = 7;
/** @type {number} */
PIXI.groupD8.MIRROR_VERTICAL = 8;
/** @type {number} */
PIXI.groupD8.MAIN_DIAGONAL = 10;
/** @type {number} */
PIXI.groupD8.MIRROR_HORIZONTAL = 12;
/** @type {number} */
PIXI.groupD8.REVERSE_DIAGONAL = 14;
/** @function */
PIXI.groupD8.uX = function uX(...args) {};
/** @function */
PIXI.groupD8.uY = function uY(...args) {};
/** @function */
PIXI.groupD8.vX = function vX(...args) {};
/** @function */
PIXI.groupD8.vY = function vY(...args) {};
/** @function */
PIXI.groupD8.inv = function inv(...args) {};
/** @function */
PIXI.groupD8.add = function add(...args) {};
/** @function */
PIXI.groupD8.sub = function sub(...args) {};
/** @function */
PIXI.groupD8.rotate180 = function rotate180(...args) {};
/** @function */
PIXI.groupD8.isVertical = function isVertical(...args) {};
/** @function */
PIXI.groupD8.byDirection = function byDirection(...args) {};
/** @function */
PIXI.groupD8.matrixAppendRotationInv = function matrixAppendRotationInv(...args) {};
/** @namespace */
PIXI.interaction = {};
/**
 * @constructor
 */
PIXI.interaction.InteractionData = function InteractionData(...args) {};
/** @function */
PIXI.interaction.InteractionData.prototype.getLocalPosition = function getLocalPosition(...args) {};
/** @function */
PIXI.interaction.InteractionData.prototype.copyEvent = function copyEvent(...args) {};
/** @function */
PIXI.interaction.InteractionData.prototype.reset = function reset(...args) {};
/**
 * @constructor
 */
PIXI.interaction.InteractionEvent = function InteractionEvent(...args) {};
/** @function */
PIXI.interaction.InteractionEvent.prototype.stopPropagation = function stopPropagation(...args) {};
/** @function */
PIXI.interaction.InteractionEvent.prototype.reset = function reset(...args) {};
/**
 * @constructor
 * @extends PIXI.utils.EventEmitter
 */
PIXI.interaction.InteractionManager = function InteractionManager(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.hitTest = function hitTest(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.setTargetElement = function setTargetElement(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.addTickerListener = function addTickerListener(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.removeTickerListener = function removeTickerListener(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.addEvents = function addEvents(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.removeEvents = function removeEvents(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.tickerUpdate = function tickerUpdate(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.update = function update(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.setCursorMode = function setCursorMode(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.dispatchEvent = function dispatchEvent(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.delayDispatchEvent = function delayDispatchEvent(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.mapPositionToPoint = function mapPositionToPoint(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.processInteractive = function processInteractive(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.onPointerDown = function onPointerDown(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.processPointerDown = function processPointerDown(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.onPointerComplete = function onPointerComplete(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.onPointerCancel = function onPointerCancel(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.processPointerCancel = function processPointerCancel(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.onPointerUp = function onPointerUp(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.processPointerUp = function processPointerUp(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.onPointerMove = function onPointerMove(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.processPointerMove = function processPointerMove(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.onPointerOut = function onPointerOut(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.processPointerOverOut = function processPointerOverOut(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.onPointerOver = function onPointerOver(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.getInteractionDataForPointerId = function getInteractionDataForPointerId(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.releaseInteractionDataForPointerId = function releaseInteractionDataForPointerId(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.configureInteractionEventForDOMEvent = function configureInteractionEventForDOMEvent(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.normalizeToPointerData = function normalizeToPointerData(...args) {};
/** @function */
PIXI.interaction.InteractionManager.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 */
PIXI.interaction.InteractionTrackingData = function InteractionTrackingData(...args) {};
/** @type {Object} */
PIXI.interaction.InteractionTrackingData.FLAGS = {};
/** @type {number} */
PIXI.interaction.InteractionTrackingData.FLAGS.NONE = 0;
/** @type {number} */
PIXI.interaction.InteractionTrackingData.FLAGS.OVER = 1;
/** @type {number} */
PIXI.interaction.InteractionTrackingData.FLAGS.LEFT_DOWN = 2;
/** @type {number} */
PIXI.interaction.InteractionTrackingData.FLAGS.RIGHT_DOWN = 4;
/** @function */
PIXI.interaction.InteractionTrackingData.prototype._doSet = function _doSet(...args) {};
/** @namespace */
PIXI.interaction.interactiveTarget = {};
/** @type {boolean} */
PIXI.interaction.interactiveTarget.interactive = false;
/** @type {boolean} */
PIXI.interaction.interactiveTarget.interactiveChildren = true;
/** @type {?Object} */
PIXI.interaction.interactiveTarget.hitArea = null;
/** @type {boolean} */
PIXI.interaction.interactiveTarget.buttonMode = false;
/** @type {?Object} */
PIXI.interaction.interactiveTarget.cursor = null;
/** @namespace */
PIXI.interaction.interactiveTarget.trackedPointers = {};
/** @namespace */
PIXI.interaction.interactiveTarget._trackedPointers = {};
/** @namespace */
PIXI.isMobile = {};
/** @namespace */
PIXI.isMobile.apple = {};
/** @type {boolean} */
PIXI.isMobile.apple.phone = false;
/** @type {boolean} */
PIXI.isMobile.apple.ipod = false;
/** @type {boolean} */
PIXI.isMobile.apple.tablet = false;
/** @type {boolean} */
PIXI.isMobile.apple.universal = false;
/** @type {boolean} */
PIXI.isMobile.apple.device = false;
/** @namespace */
PIXI.isMobile.amazon = {};
/** @type {boolean} */
PIXI.isMobile.amazon.phone = false;
/** @type {boolean} */
PIXI.isMobile.amazon.tablet = false;
/** @type {boolean} */
PIXI.isMobile.amazon.device = false;
/** @namespace */
PIXI.isMobile.android = {};
/** @type {boolean} */
PIXI.isMobile.android.phone = false;
/** @type {boolean} */
PIXI.isMobile.android.tablet = false;
/** @type {boolean} */
PIXI.isMobile.android.device = false;
/** @namespace */
PIXI.isMobile.windows = {};
/** @type {boolean} */
PIXI.isMobile.windows.phone = false;
/** @type {boolean} */
PIXI.isMobile.windows.tablet = false;
/** @type {boolean} */
PIXI.isMobile.windows.device = false;
/** @namespace */
PIXI.isMobile.other = {};
/** @type {boolean} */
PIXI.isMobile.other.blackberry = false;
/** @type {boolean} */
PIXI.isMobile.other.blackberry10 = false;
/** @type {boolean} */
PIXI.isMobile.other.opera = false;
/** @type {boolean} */
PIXI.isMobile.other.firefox = false;
/** @type {boolean} */
PIXI.isMobile.other.chrome = false;
/** @type {boolean} */
PIXI.isMobile.other.device = false;
/** @type {boolean} */
PIXI.isMobile.any = false;
/** @type {boolean} */
PIXI.isMobile.phone = false;
/** @type {boolean} */
PIXI.isMobile.tablet = false;
/** @namespace */
PIXI.resources = {};
/** @type {Array} */
PIXI.resources.INSTALLED = [];
/** @function */
PIXI.resources.autoDetectResource = function autoDetectResource(...args) {};
/**
 * @constructor
 * @extends PIXI.resources.Resource
 */
PIXI.resources.ArrayResource = function ArrayResource(...args) {};
/** @function */
PIXI.resources.ArrayResource.prototype.dispose = function dispose(...args) {};
/** @function */
PIXI.resources.ArrayResource.prototype.addResourceAt = function addResourceAt(...args) {};
/** @function */
PIXI.resources.ArrayResource.prototype.bind = function bind(...args) {};
/** @function */
PIXI.resources.ArrayResource.prototype.unbind = function unbind(...args) {};
/** @function */
PIXI.resources.ArrayResource.prototype.load = function load(...args) {};
/** @function */
PIXI.resources.ArrayResource.prototype.upload = function upload(...args) {};
/**
 * @constructor
 * @extends PIXI.resources.Resource
 */
PIXI.resources.BufferResource = function BufferResource(...args) {};
/** @function */
PIXI.resources.BufferResource.test = function test(...args) {};
/** @function */
PIXI.resources.BufferResource.prototype.upload = function upload(...args) {};
/** @function */
PIXI.resources.BufferResource.prototype.dispose = function dispose(...args) {};
/**
 * @constructor
 * @extends PIXI.resources.BaseImageResource
 */
PIXI.resources.CanvasResource = function CanvasResource(...args) {};
/** @function */
PIXI.resources.CanvasResource.test = function test(...args) {};
/**
 * @constructor
 * @extends PIXI.resources.ArrayResource
 */
PIXI.resources.CubeResource = function CubeResource(...args) {};
/** @type {number} */
PIXI.resources.CubeResource.SIDES = 6;
/** @function */
PIXI.resources.CubeResource.prototype.bind = function bind(...args) {};
/** @function */
PIXI.resources.CubeResource.prototype.upload = function upload(...args) {};
/**
 * @constructor
 * @extends PIXI.resources.BaseImageResource
 */
PIXI.resources.ImageResource = function ImageResource(...args) {};
/** @function */
PIXI.resources.ImageResource.prototype.load = function load(...args) {};
/** @function */
PIXI.resources.ImageResource.prototype.process = function process(...args) {};
/** @function */
PIXI.resources.ImageResource.prototype.upload = function upload(...args) {};
/** @function */
PIXI.resources.ImageResource.prototype.dispose = function dispose(...args) {};
/**
 * @constructor
 * @extends PIXI.resources.BaseImageResource
 */
PIXI.resources.ImageBitmapResource = function ImageBitmapResource(...args) {};
/** @function */
PIXI.resources.ImageBitmapResource.test = function test(...args) {};
/**
 * @constructor
 * @extends PIXI.resources.BaseImageResource
 */
PIXI.resources.SVGResource = function SVGResource(...args) {};
/** @function */
PIXI.resources.SVGResource.getSize = function getSize(...args) {};
/** @function */
PIXI.resources.SVGResource.test = function test(...args) {};
/** @type {Object} */
PIXI.resources.SVGResource.SVG_SIZE = {};
/** @function */
PIXI.resources.SVGResource.prototype.load = function load(...args) {};
/** @function */
PIXI.resources.SVGResource.prototype._loadSvg = function _loadSvg(...args) {};
/** @function */
PIXI.resources.SVGResource.prototype.dispose = function dispose(...args) {};
/**
 * @constructor
 * @extends PIXI.resources.BaseImageResource
 */
PIXI.resources.VideoResource = function VideoResource(...args) {};
/** @function */
PIXI.resources.VideoResource.test = function test(...args) {};
/** @type {Array} */
PIXI.resources.VideoResource.TYPES = [];
/** @function */
PIXI.resources.VideoResource.prototype.update = function update(...args) {};
/** @function */
PIXI.resources.VideoResource.prototype.load = function load(...args) {};
/** @function */
PIXI.resources.VideoResource.prototype._onError = function _onError(...args) {};
/** @function */
PIXI.resources.VideoResource.prototype._isSourcePlaying = function _isSourcePlaying(...args) {};
/** @function */
PIXI.resources.VideoResource.prototype._isSourceReady = function _isSourceReady(...args) {};
/** @function */
PIXI.resources.VideoResource.prototype._onPlayStart = function _onPlayStart(...args) {};
/** @function */
PIXI.resources.VideoResource.prototype._onPlayStop = function _onPlayStop(...args) {};
/** @function */
PIXI.resources.VideoResource.prototype._onCanPlay = function _onCanPlay(...args) {};
/** @function */
PIXI.resources.VideoResource.prototype.dispose = function dispose(...args) {};
/**
 * @constructor
 */
PIXI.resources.Resource = function Resource(...args) {};
/** @function */
PIXI.resources.Resource.prototype.bind = function bind(...args) {};
/** @function */
PIXI.resources.Resource.prototype.unbind = function unbind(...args) {};
/** @function */
PIXI.resources.Resource.prototype.resize = function resize(...args) {};
/** @function */
PIXI.resources.Resource.prototype.update = function update(...args) {};
/** @function */
PIXI.resources.Resource.prototype.load = function load(...args) {};
/** @function */
PIXI.resources.Resource.prototype.upload = function upload(...args) {};
/** @function */
PIXI.resources.Resource.prototype.style = function style(...args) {};
/** @function */
PIXI.resources.Resource.prototype.dispose = function dispose(...args) {};
/** @function */
PIXI.resources.Resource.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.resources.Resource
 */
PIXI.resources.BaseImageResource = function BaseImageResource(...args) {};
/** @function */
PIXI.resources.BaseImageResource.crossOrigin = function crossOrigin(...args) {};
/** @function */
PIXI.resources.BaseImageResource.prototype.upload = function upload(...args) {};
/** @function */
PIXI.resources.BaseImageResource.prototype.update = function update(...args) {};
/** @function */
PIXI.resources.BaseImageResource.prototype.dispose = function dispose(...args) {};
/** @namespace */
PIXI.settings = {};
/** @type {number} */
PIXI.settings.MIPMAP_TEXTURES = 1;
/** @type {number} */
PIXI.settings.ANISOTROPIC_LEVEL = 0;
/** @type {number} */
PIXI.settings.RESOLUTION = 1;
/** @type {number} */
PIXI.settings.FILTER_RESOLUTION = 1;
/** @type {number} */
PIXI.settings.SPRITE_MAX_TEXTURES = 32;
/** @type {number} */
PIXI.settings.SPRITE_BATCH_SIZE = 4096;
/** @namespace */
PIXI.settings.RENDER_OPTIONS = {};
/** @type {?Object} */
PIXI.settings.RENDER_OPTIONS.view = null;
/** @type {boolean} */
PIXI.settings.RENDER_OPTIONS.antialias = false;
/** @type {boolean} */
PIXI.settings.RENDER_OPTIONS.forceFXAA = false;
/** @type {boolean} */
PIXI.settings.RENDER_OPTIONS.autoDensity = false;
/** @type {boolean} */
PIXI.settings.RENDER_OPTIONS.transparent = false;
/** @type {number} */
PIXI.settings.RENDER_OPTIONS.backgroundColor = 0;
/** @type {boolean} */
PIXI.settings.RENDER_OPTIONS.clearBeforeRender = true;
/** @type {boolean} */
PIXI.settings.RENDER_OPTIONS.preserveDrawingBuffer = false;
/** @type {number} */
PIXI.settings.RENDER_OPTIONS.width = 800;
/** @type {number} */
PIXI.settings.RENDER_OPTIONS.height = 600;
/** @type {boolean} */
PIXI.settings.RENDER_OPTIONS.legacy = false;
/** @type {number} */
PIXI.settings.GC_MODE = 0;
/** @type {number} */
PIXI.settings.GC_MAX_IDLE = 3600;
/** @type {number} */
PIXI.settings.GC_MAX_CHECK_COUNT = 600;
/** @type {number} */
PIXI.settings.WRAP_MODE = 33071;
/** @type {number} */
PIXI.settings.SCALE_MODE = 1;
/** @type {string} */
PIXI.settings.PRECISION_VERTEX = "highp";
/** @type {string} */
PIXI.settings.PRECISION_FRAGMENT = "mediump";
/** @type {boolean} */
PIXI.settings.CAN_UPLOAD_SAME_BUFFER = true;
/** @type {boolean} */
PIXI.settings.CREATE_IMAGE_BITMAP = false;
/** @type {boolean} */
PIXI.settings.ROUND_PIXELS = false;
/** @type {Object} */
PIXI.settings.RETINA_PREFIX = {};
/** @type {boolean} */
PIXI.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = true;
/** @type {boolean} */
PIXI.settings.SORTABLE_CHILDREN = false;
/** @type {number} */
PIXI.settings.TARGET_FPMS = 0.06;
/** @type {number} */
PIXI.settings.PREFER_ENV = 2;
/** @type {boolean} */
PIXI.settings.STRICT_TEXTURE_CACHE = false;
/** @type {number} */
PIXI.settings.UPLOADS_PER_FRAME = 4;
/** @namespace */
PIXI.systems = {};
/**
 * @constructor
 * @extends PIXI.System
 */
PIXI.systems.FilterSystem = function FilterSystem(...args) {};
/** @function */
PIXI.systems.FilterSystem.prototype.push = function push(...args) {};
/** @function */
PIXI.systems.FilterSystem.prototype.pop = function pop(...args) {};
/** @function */
PIXI.systems.FilterSystem.prototype.applyFilter = function applyFilter(...args) {};
/** @function */
PIXI.systems.FilterSystem.prototype.calculateSpriteMatrix = function calculateSpriteMatrix(...args) {};
/** @function */
PIXI.systems.FilterSystem.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.systems.FilterSystem.prototype.getOptimalFilterTexture = function getOptimalFilterTexture(...args) {};
/** @function */
PIXI.systems.FilterSystem.prototype.getFilterTexture = function getFilterTexture(...args) {};
/** @function */
PIXI.systems.FilterSystem.prototype.returnFilterTexture = function returnFilterTexture(...args) {};
/** @function */
PIXI.systems.FilterSystem.prototype.emptyPool = function emptyPool(...args) {};
/** @function */
PIXI.systems.FilterSystem.prototype.resize = function resize(...args) {};
/** @function */
PIXI.systems.FilterSystem.prototype.getRenderTarget = function getRenderTarget(...args) {};
/** @function */
PIXI.systems.FilterSystem.prototype.returnRenderTarget = function returnRenderTarget(...args) {};
/** @function */
PIXI.systems.FilterSystem.prototype.calculateScreenSpaceMatrix = function calculateScreenSpaceMatrix(...args) {};
/** @function */
PIXI.systems.FilterSystem.prototype.calculateNormalizedScreenSpaceMatrix = function calculateNormalizedScreenSpaceMatrix(...args) {};
/**
 * @constructor
 * @extends PIXI.System
 */
PIXI.systems.BatchSystem = function BatchSystem(...args) {};
/** @function */
PIXI.systems.BatchSystem.prototype.setObjectRenderer = function setObjectRenderer(...args) {};
/** @function */
PIXI.systems.BatchSystem.prototype.flush = function flush(...args) {};
/** @function */
PIXI.systems.BatchSystem.prototype.reset = function reset(...args) {};
/** @function */
PIXI.systems.BatchSystem.prototype.copyBoundTextures = function copyBoundTextures(...args) {};
/** @function */
PIXI.systems.BatchSystem.prototype.boundArray = function boundArray(...args) {};
/**
 * @constructor
 * @extends PIXI.System
 */
PIXI.systems.ContextSystem = function ContextSystem(...args) {};
/** @function */
PIXI.systems.ContextSystem.prototype.contextChange = function contextChange(...args) {};
/** @function */
PIXI.systems.ContextSystem.prototype.initFromContext = function initFromContext(...args) {};
/** @function */
PIXI.systems.ContextSystem.prototype.initFromOptions = function initFromOptions(...args) {};
/** @function */
PIXI.systems.ContextSystem.prototype.createContext = function createContext(...args) {};
/** @function */
PIXI.systems.ContextSystem.prototype.getExtensions = function getExtensions(...args) {};
/** @function */
PIXI.systems.ContextSystem.prototype.handleContextLost = function handleContextLost(...args) {};
/** @function */
PIXI.systems.ContextSystem.prototype.handleContextRestored = function handleContextRestored(...args) {};
/** @function */
PIXI.systems.ContextSystem.prototype.destroy = function destroy(...args) {};
/** @function */
PIXI.systems.ContextSystem.prototype.postrender = function postrender(...args) {};
/** @function */
PIXI.systems.ContextSystem.prototype.validateContext = function validateContext(...args) {};
/**
 * @constructor
 * @extends PIXI.System
 */
PIXI.systems.FramebufferSystem = function FramebufferSystem(...args) {};
/** @function */
PIXI.systems.FramebufferSystem.prototype.contextChange = function contextChange(...args) {};
/** @function */
PIXI.systems.FramebufferSystem.prototype.bind = function bind(...args) {};
/** @function */
PIXI.systems.FramebufferSystem.prototype.setViewport = function setViewport(...args) {};
/** @function */
PIXI.systems.FramebufferSystem.prototype.clear = function clear(...args) {};
/** @function */
PIXI.systems.FramebufferSystem.prototype.initFramebuffer = function initFramebuffer(...args) {};
/** @function */
PIXI.systems.FramebufferSystem.prototype.resizeFramebuffer = function resizeFramebuffer(...args) {};
/** @function */
PIXI.systems.FramebufferSystem.prototype.updateFramebuffer = function updateFramebuffer(...args) {};
/** @function */
PIXI.systems.FramebufferSystem.prototype.disposeFramebuffer = function disposeFramebuffer(...args) {};
/** @function */
PIXI.systems.FramebufferSystem.prototype.disposeAll = function disposeAll(...args) {};
/** @function */
PIXI.systems.FramebufferSystem.prototype.forceStencil = function forceStencil(...args) {};
/** @function */
PIXI.systems.FramebufferSystem.prototype.reset = function reset(...args) {};
/**
 * @constructor
 * @extends PIXI.System
 */
PIXI.systems.GeometrySystem = function GeometrySystem(...args) {};
/** @function */
PIXI.systems.GeometrySystem.prototype.contextChange = function contextChange(...args) {};
/** @function */
PIXI.systems.GeometrySystem.prototype.bind = function bind(...args) {};
/** @function */
PIXI.systems.GeometrySystem.prototype.reset = function reset(...args) {};
/** @function */
PIXI.systems.GeometrySystem.prototype.updateBuffers = function updateBuffers(...args) {};
/** @function */
PIXI.systems.GeometrySystem.prototype.checkCompatibility = function checkCompatibility(...args) {};
/** @function */
PIXI.systems.GeometrySystem.prototype.getSignature = function getSignature(...args) {};
/** @function */
PIXI.systems.GeometrySystem.prototype.initGeometryVao = function initGeometryVao(...args) {};
/** @function */
PIXI.systems.GeometrySystem.prototype.disposeBuffer = function disposeBuffer(...args) {};
/** @function */
PIXI.systems.GeometrySystem.prototype.disposeGeometry = function disposeGeometry(...args) {};
/** @function */
PIXI.systems.GeometrySystem.prototype.disposeAll = function disposeAll(...args) {};
/** @function */
PIXI.systems.GeometrySystem.prototype.activateVao = function activateVao(...args) {};
/** @function */
PIXI.systems.GeometrySystem.prototype.draw = function draw(...args) {};
/** @function */
PIXI.systems.GeometrySystem.prototype.unbind = function unbind(...args) {};
/**
 * @constructor
 * @extends PIXI.System
 */
PIXI.systems.MaskSystem = function MaskSystem(...args) {};
/** @function */
PIXI.systems.MaskSystem.prototype.setMaskStack = function setMaskStack(...args) {};
/** @function */
PIXI.systems.MaskSystem.prototype.push = function push(...args) {};
/** @function */
PIXI.systems.MaskSystem.prototype.pop = function pop(...args) {};
/** @function */
PIXI.systems.MaskSystem.prototype.detect = function detect(...args) {};
/** @function */
PIXI.systems.MaskSystem.prototype.pushSpriteMask = function pushSpriteMask(...args) {};
/** @function */
PIXI.systems.MaskSystem.prototype.popSpriteMask = function popSpriteMask(...args) {};
/**
 * @constructor
 * this class seems extended class of AbstractMaskSystem
 */
PIXI.systems.ScissorSystem = function ScissorSystem(...args) {};
/** @function */
PIXI.systems.ScissorSystem.prototype.getStackLength = function getStackLength(...args) {};
/** @function */
PIXI.systems.ScissorSystem.prototype.push = function push(...args) {};
/** @function */
PIXI.systems.ScissorSystem.prototype.pop = function pop(...args) {};
/** @function */
PIXI.systems.ScissorSystem.prototype._useCurrent = function _useCurrent(...args) {};
/**
 * @constructor
 * this class seems extended class of AbstractMaskSystem
 */
PIXI.systems.StencilSystem = function StencilSystem(...args) {};
/** @function */
PIXI.systems.StencilSystem.prototype.getStackLength = function getStackLength(...args) {};
/** @function */
PIXI.systems.StencilSystem.prototype.push = function push(...args) {};
/** @function */
PIXI.systems.StencilSystem.prototype.pop = function pop(...args) {};
/** @function */
PIXI.systems.StencilSystem.prototype._useCurrent = function _useCurrent(...args) {};
/** @function */
PIXI.systems.StencilSystem.prototype._getBitwiseMask = function _getBitwiseMask(...args) {};
/**
 * @constructor
 * @extends PIXI.System
 */
PIXI.systems.ProjectionSystem = function ProjectionSystem(...args) {};
/** @function */
PIXI.systems.ProjectionSystem.prototype.update = function update(...args) {};
/** @function */
PIXI.systems.ProjectionSystem.prototype.calculateProjection = function calculateProjection(...args) {};
/** @function */
PIXI.systems.ProjectionSystem.prototype.setTransform = function setTransform(...args) {};
/**
 * @constructor
 * @extends PIXI.System
 */
PIXI.systems.RenderTextureSystem = function RenderTextureSystem(...args) {};
/** @function */
PIXI.systems.RenderTextureSystem.prototype.bind = function bind(...args) {};
/** @function */
PIXI.systems.RenderTextureSystem.prototype.clear = function clear(...args) {};
/** @function */
PIXI.systems.RenderTextureSystem.prototype.resize = function resize(...args) {};
/** @function */
PIXI.systems.RenderTextureSystem.prototype.reset = function reset(...args) {};
/**
 * @constructor
 * @extends PIXI.System
 */
PIXI.systems.ShaderSystem = function ShaderSystem(...args) {};
/** @function */
PIXI.systems.ShaderSystem.prototype.systemCheck = function systemCheck(...args) {};
/** @function */
PIXI.systems.ShaderSystem.prototype.contextChange = function contextChange(...args) {};
/** @function */
PIXI.systems.ShaderSystem.prototype.bind = function bind(...args) {};
/** @function */
PIXI.systems.ShaderSystem.prototype.setUniforms = function setUniforms(...args) {};
/** @function */
PIXI.systems.ShaderSystem.prototype.syncUniformGroup = function syncUniformGroup(...args) {};
/** @function */
PIXI.systems.ShaderSystem.prototype.syncUniforms = function syncUniforms(...args) {};
/** @function */
PIXI.systems.ShaderSystem.prototype.createSyncGroups = function createSyncGroups(...args) {};
/** @function */
PIXI.systems.ShaderSystem.prototype.getSignature = function getSignature(...args) {};
/** @function */
PIXI.systems.ShaderSystem.prototype.getglProgram = function getglProgram(...args) {};
/** @function */
PIXI.systems.ShaderSystem.prototype.generateShader = function generateShader(...args) {};
/** @function */
PIXI.systems.ShaderSystem.prototype.reset = function reset(...args) {};
/** @function */
PIXI.systems.ShaderSystem.prototype.destroy = function destroy(...args) {};
/**
 * @constructor
 * @extends PIXI.System
 */
PIXI.systems.StateSystem = function StateSystem(...args) {};
/** @function */
PIXI.systems.StateSystem.checkBlendMode = function checkBlendMode(...args) {};
/** @function */
PIXI.systems.StateSystem.checkPolygonOffset = function checkPolygonOffset(...args) {};
/** @function */
PIXI.systems.StateSystem.prototype.contextChange = function contextChange(...args) {};
/** @function */
PIXI.systems.StateSystem.prototype.set = function set(...args) {};
/** @function */
PIXI.systems.StateSystem.prototype.forceState = function forceState(...args) {};
/** @function */
PIXI.systems.StateSystem.prototype.setBlend = function setBlend(...args) {};
/** @function */
PIXI.systems.StateSystem.prototype.setOffset = function setOffset(...args) {};
/** @function */
PIXI.systems.StateSystem.prototype.setDepthTest = function setDepthTest(...args) {};
/** @function */
PIXI.systems.StateSystem.prototype.setCullFace = function setCullFace(...args) {};
/** @function */
PIXI.systems.StateSystem.prototype.setFrontFace = function setFrontFace(...args) {};
/** @function */
PIXI.systems.StateSystem.prototype.setBlendMode = function setBlendMode(...args) {};
/** @function */
PIXI.systems.StateSystem.prototype.setPolygonOffset = function setPolygonOffset(...args) {};
/** @function */
PIXI.systems.StateSystem.prototype.reset = function reset(...args) {};
/** @function */
PIXI.systems.StateSystem.prototype.updateCheck = function updateCheck(...args) {};
/** @function */
PIXI.systems.StateSystem.prototype.setState = function setState(...args) {};
/**
 * @constructor
 * @extends PIXI.System
 */
PIXI.systems.TextureGCSystem = function TextureGCSystem(...args) {};
/** @function */
PIXI.systems.TextureGCSystem.prototype.postrender = function postrender(...args) {};
/** @function */
PIXI.systems.TextureGCSystem.prototype.run = function run(...args) {};
/** @function */
PIXI.systems.TextureGCSystem.prototype.unload = function unload(...args) {};
/**
 * @constructor
 * @extends PIXI.System
 */
PIXI.systems.TextureSystem = function TextureSystem(...args) {};
/** @function */
PIXI.systems.TextureSystem.prototype.contextChange = function contextChange(...args) {};
/** @function */
PIXI.systems.TextureSystem.prototype.bind = function bind(...args) {};
/** @function */
PIXI.systems.TextureSystem.prototype.reset = function reset(...args) {};
/** @function */
PIXI.systems.TextureSystem.prototype.unbind = function unbind(...args) {};
/** @function */
PIXI.systems.TextureSystem.prototype.initTexture = function initTexture(...args) {};
/** @function */
PIXI.systems.TextureSystem.prototype.initTextureType = function initTextureType(...args) {};
/** @function */
PIXI.systems.TextureSystem.prototype.updateTexture = function updateTexture(...args) {};
/** @function */
PIXI.systems.TextureSystem.prototype.destroyTexture = function destroyTexture(...args) {};
/** @function */
PIXI.systems.TextureSystem.prototype.updateTextureStyle = function updateTextureStyle(...args) {};
/** @function */
PIXI.systems.TextureSystem.prototype.setStyle = function setStyle(...args) {};
/** @function */
PIXI.useDeprecated = function useDeprecated(...args) {};
/** @namespace */
PIXI.utils = {};
/** @namespace */
PIXI.utils.BaseTextureCache = {};
/**
 * @constructor
 */
PIXI.utils.CanvasRenderTarget = function CanvasRenderTarget(...args) {};
/** @function */
PIXI.utils.CanvasRenderTarget.prototype.clear = function clear(...args) {};
/** @function */
PIXI.utils.CanvasRenderTarget.prototype.resize = function resize(...args) {};
/** @function */
PIXI.utils.CanvasRenderTarget.prototype.destroy = function destroy(...args) {};
/** @type {?Object} */
PIXI.utils.CanvasRenderTarget.prototype.width = null;
/** @type {?Object} */
PIXI.utils.CanvasRenderTarget.prototype.height = null;
/** @type {Object} */
PIXI.utils.DATA_URI = {};
/** @namespace */
PIXI.utils.ProgramCache = {};
/** @namespace */
PIXI.utils.TextureCache = {};
/** @function */
PIXI.utils.clearTextureCache = function clearTextureCache(...args) {};
/** @function */
PIXI.utils.correctBlendMode = function correctBlendMode(...args) {};
/** @function */
PIXI.utils.createIndicesForQuads = function createIndicesForQuads(...args) {};
/** @function */
PIXI.utils.decomposeDataUri = function decomposeDataUri(...args) {};
/** @function */
PIXI.utils.deprecation = function deprecation(...args) {};
/** @function */
PIXI.utils.destroyTextureCache = function destroyTextureCache(...args) {};
/** @function */
PIXI.utils.determineCrossOrigin = function determineCrossOrigin(...args) {};
/** @function */
PIXI.utils.getBufferType = function getBufferType(...args) {};
/** @function */
PIXI.utils.getResolutionOfUrl = function getResolutionOfUrl(...args) {};
/** @function */
PIXI.utils.hex2rgb = function hex2rgb(...args) {};
/** @function */
PIXI.utils.hex2string = function hex2string(...args) {};
/** @function */
PIXI.utils.interleaveTypedArrays = function interleaveTypedArrays(...args) {};
/** @function */
PIXI.utils.isPow2 = function isPow2(...args) {};
/** @function */
PIXI.utils.isWebGLSupported = function isWebGLSupported(...args) {};
/** @function */
PIXI.utils.log2 = function log2(...args) {};
/** @function */
PIXI.utils.nextPow2 = function nextPow2(...args) {};
/** @type {Array} */
PIXI.utils.premultiplyBlendMode = [];
/** @function */
PIXI.utils.premultiplyRgba = function premultiplyRgba(...args) {};
/** @function */
PIXI.utils.premultiplyTint = function premultiplyTint(...args) {};
/** @function */
PIXI.utils.premultiplyTintToRgba = function premultiplyTintToRgba(...args) {};
/** @function */
PIXI.utils.removeItems = function removeItems(...args) {};
/** @function */
PIXI.utils.rgb2hex = function rgb2hex(...args) {};
/** @function */
PIXI.utils.sayHello = function sayHello(...args) {};
/** @function */
PIXI.utils.sign = function sign(...args) {};
/** @function */
PIXI.utils.skipHello = function skipHello(...args) {};
/** @function */
PIXI.utils.string2hex = function string2hex(...args) {};
/** @function */
PIXI.utils.trimCanvas = function trimCanvas(...args) {};
/** @function */
PIXI.utils.uid = function uid(...args) {};
/** @namespace */
PIXI.utils.isMobile = {};
/** @namespace */
PIXI.utils.isMobile.apple = {};
/** @type {boolean} */
PIXI.utils.isMobile.apple.phone = false;
/** @type {boolean} */
PIXI.utils.isMobile.apple.ipod = false;
/** @type {boolean} */
PIXI.utils.isMobile.apple.tablet = false;
/** @type {boolean} */
PIXI.utils.isMobile.apple.universal = false;
/** @type {boolean} */
PIXI.utils.isMobile.apple.device = false;
/** @namespace */
PIXI.utils.isMobile.amazon = {};
/** @type {boolean} */
PIXI.utils.isMobile.amazon.phone = false;
/** @type {boolean} */
PIXI.utils.isMobile.amazon.tablet = false;
/** @type {boolean} */
PIXI.utils.isMobile.amazon.device = false;
/** @namespace */
PIXI.utils.isMobile.android = {};
/** @type {boolean} */
PIXI.utils.isMobile.android.phone = false;
/** @type {boolean} */
PIXI.utils.isMobile.android.tablet = false;
/** @type {boolean} */
PIXI.utils.isMobile.android.device = false;
/** @namespace */
PIXI.utils.isMobile.windows = {};
/** @type {boolean} */
PIXI.utils.isMobile.windows.phone = false;
/** @type {boolean} */
PIXI.utils.isMobile.windows.tablet = false;
/** @type {boolean} */
PIXI.utils.isMobile.windows.device = false;
/** @namespace */
PIXI.utils.isMobile.other = {};
/** @type {boolean} */
PIXI.utils.isMobile.other.blackberry = false;
/** @type {boolean} */
PIXI.utils.isMobile.other.blackberry10 = false;
/** @type {boolean} */
PIXI.utils.isMobile.other.opera = false;
/** @type {boolean} */
PIXI.utils.isMobile.other.firefox = false;
/** @type {boolean} */
PIXI.utils.isMobile.other.chrome = false;
/** @type {boolean} */
PIXI.utils.isMobile.other.device = false;
/** @type {boolean} */
PIXI.utils.isMobile.any = false;
/** @type {boolean} */
PIXI.utils.isMobile.phone = false;
/** @type {boolean} */
PIXI.utils.isMobile.tablet = false;
/**
 * @constructor
 */
PIXI.utils.EventEmitter = function EventEmitter(...args) {};
/** @type {boolean} */
PIXI.utils.EventEmitter.prefixed = false;
/** @function */
PIXI.utils.EventEmitter.prototype.eventNames = function eventNames(...args) {};
/** @function */
PIXI.utils.EventEmitter.prototype.listeners = function listeners(...args) {};
/** @function */
PIXI.utils.EventEmitter.prototype.listenerCount = function listenerCount(...args) {};
/** @function */
PIXI.utils.EventEmitter.prototype.emit = function emit(...args) {};
/** @function */
PIXI.utils.EventEmitter.prototype.on = function on(...args) {};
/** @function */
PIXI.utils.EventEmitter.prototype.once = function once(...args) {};
/** @function */
PIXI.utils.EventEmitter.prototype.removeListener = function removeListener(...args) {};
/** @function */
PIXI.utils.EventEmitter.prototype.removeAllListeners = function removeAllListeners(...args) {};
/** @function */
PIXI.utils.EventEmitter.prototype.off = function off(...args) {};
/** @function */
PIXI.utils.EventEmitter.prototype.addListener = function addListener(...args) {};
/** @function */
PIXI.utils.earcut = function earcut(...args) {};
/** @function */
PIXI.utils.earcut.deviation = function deviation(...args) {};
/** @function */
PIXI.utils.earcut.flatten = function flatten(...args) {};
/** @namespace */
PIXI.utils.url = {};
/** @function */
PIXI.utils.url.parse = function parse(...args) {};
/** @function */
PIXI.utils.url.resolve = function resolve(...args) {};
/** @function */
PIXI.utils.url.resolveObject = function resolveObject(...args) {};
/** @function */
PIXI.utils.url.format = function format(...args) {};
/**
 * @constructor
 */
PIXI.utils.url.Url = function Url(...args) {};
/** @function */
PIXI.utils.url.Url.prototype.parse = function parse(...args) {};
/** @function */
PIXI.utils.url.Url.prototype.format = function format(...args) {};
/** @function */
PIXI.utils.url.Url.prototype.resolve = function resolve(...args) {};
/** @function */
PIXI.utils.url.Url.prototype.resolveObject = function resolveObject(...args) {};
/** @function */
PIXI.utils.url.Url.prototype.parseHost = function parseHost(...args) {};
/** @namespace */
PIXI.utils.mixins = {};
/** @function */
PIXI.utils.mixins.mixin = function mixin(...args) {};
/** @function */
PIXI.utils.mixins.delayMixin = function delayMixin(...args) {};
/** @function */
PIXI.utils.mixins.performMixins = function performMixins(...args) {};
/** @namespace */
PIXI.prepare = {};
/** @namespace */
PIXI.extract = {};
/** @namespace */
PIXI.extras = {};
/** @namespace */
PIXI.mesh = {};
/** @namespace */
PIXI.particles = {};
/** @namespace */
PIXI.ticker = {};
/** @namespace */
PIXI.loaders = {};
