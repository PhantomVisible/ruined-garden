import { i as __require, n as onDestroy, r as tick } from "../../chunks/index-server.js";
import { A as get, D as escape_html, E as attr, M as writable, a as ensure_array_like, b as setContext, c as rest_props, ct as invalid_default_snippet, d as store_get, f as stringify, j as readable, k as derived, l as sanitize_props, n as attr_style, o as head, p as unsubscribe_stores, pt as fallback, r as bind_props, t as attr_class, u as slot, v as getContext } from "../../chunks/server.js";
import "../../chunks/index-server2.js";
import sync, { cancelSync, flushSync, getFrameData } from "framesync";
import { animate, anticipate, backIn, backInOut, backOut, bounceIn, bounceInOut, bounceOut, circIn, circInOut, circOut, clamp, cubicBezier, distance, easeIn, easeInOut, easeOut, inertia, interpolate, linear, mix, pipe, progress, velocityPerSecond } from "popmotion";
import { __read, __rest, __spreadArray } from "tslib";
import { alpha, color, complex, degrees, filter, number, percent, progressPercentage, px, scale, vh, vw } from "style-value-types";
import { invariant, warning } from "hey-listen";
//#region node_modules/gsap/gsap-core.js
function _assertThisInitialized(self) {
	if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return self;
}
function _inheritsLoose(subClass, superClass) {
	subClass.prototype = Object.create(superClass.prototype);
	subClass.prototype.constructor = subClass;
	subClass.__proto__ = superClass;
}
/*!
* GSAP 3.14.2
* https://gsap.com
*
* @license Copyright 2008-2025, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
var _config = {
	autoSleep: 120,
	force3D: "auto",
	nullTargetWarn: 1,
	units: { lineHeight: "" }
}, _defaults = {
	duration: .5,
	overwrite: false,
	delay: 0
}, _suppressOverwrites, _reverting$1, _context, _bigNum$1 = 1e8, _tinyNum = 1 / _bigNum$1, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
	return typeof value === "string";
}, _isFunction = function _isFunction(value) {
	return typeof value === "function";
}, _isNumber = function _isNumber(value) {
	return typeof value === "number";
}, _isUndefined = function _isUndefined(value) {
	return typeof value === "undefined";
}, _isObject = function _isObject(value) {
	return typeof value === "object";
}, _isNotFalse = function _isNotFalse(value) {
	return value !== false;
}, _windowExists$1 = function _windowExists() {
	return typeof window !== "undefined";
}, _isFuncOrString = function _isFuncOrString(value) {
	return _isFunction(value) || _isString(value);
}, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {}, _isArray = Array.isArray, _randomExp = /random\([^)]+\)/g, _commaDelimExp = /,\s*/g, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globalTimeline, _win$1, _coreInitted, _doc$1, _globals = {}, _installScope = {}, _coreReady, _install = function _install(scope) {
	return (_installScope = _merge(scope, _globals)) && gsap;
}, _missingPlugin = function _missingPlugin(property, value) {
	return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
}, _warn = function _warn(message, suppress) {
	return !suppress && console.warn(message);
}, _addGlobal = function _addGlobal(name, obj) {
	return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
}, _emptyFunc = function _emptyFunc() {
	return 0;
}, _startAtRevertConfig = {
	suppressEvents: true,
	isStart: true,
	kill: false
}, _revertConfigNoKill = {
	suppressEvents: true,
	kill: false
}, _revertConfig = { suppressEvents: true }, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
	var target = targets[0], harnessPlugin, i;
	_isObject(target) || _isFunction(target) || (targets = [targets]);
	if (!(harnessPlugin = (target._gsap || {}).harness)) {
		i = _harnessPlugins.length;
		while (i-- && !_harnessPlugins[i].targetTest(target));
		harnessPlugin = _harnessPlugins[i];
	}
	i = targets.length;
	while (i--) targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
	return targets;
}, _getCache = function _getCache(target) {
	return target._gsap || _harness(toArray(target))[0]._gsap;
}, _getProperty = function _getProperty(target, property, v) {
	return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
}, _forEachName = function _forEachName(names, func) {
	return (names = names.split(",")).forEach(func) || names;
}, _round = function _round(value) {
	return Math.round(value * 1e5) / 1e5 || 0;
}, _roundPrecise = function _roundPrecise(value) {
	return Math.round(value * 1e7) / 1e7 || 0;
}, _parseRelative = function _parseRelative(start, value) {
	var operator = value.charAt(0), end = parseFloat(value.substr(2));
	start = parseFloat(start);
	return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
}, _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
	var l = toFind.length, i = 0;
	for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;);
	return i < l;
}, _lazyRender = function _lazyRender() {
	var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
	_lazyLookup = {};
	_lazyTweens.length = 0;
	for (i = 0; i < l; i++) {
		tween = a[i];
		tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
	}
}, _isRevertWorthy = function _isRevertWorthy(animation) {
	return !!(animation._initted || animation._startAt || animation.add);
}, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
	_lazyTweens.length && !_reverting$1 && _lazyRender();
	animation.render(time, suppressEvents, force || !!(_reverting$1 && time < 0 && _isRevertWorthy(animation)));
	_lazyTweens.length && !_reverting$1 && _lazyRender();
}, _numericIfPossible = function _numericIfPossible(value) {
	var n = parseFloat(value);
	return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
}, _passThrough = function _passThrough(p) {
	return p;
}, _setDefaults = function _setDefaults(obj, defaults) {
	for (var p in defaults) p in obj || (obj[p] = defaults[p]);
	return obj;
}, _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
	return function(obj, defaults) {
		for (var p in defaults) p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
	};
}, _merge = function _merge(base, toMerge) {
	for (var p in toMerge) base[p] = toMerge[p];
	return base;
}, _mergeDeep = function _mergeDeep(base, toMerge) {
	for (var p in toMerge) p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
	return base;
}, _copyExcluding = function _copyExcluding(obj, excluding) {
	var copy = {}, p;
	for (p in obj) p in excluding || (copy[p] = obj[p]);
	return copy;
}, _inheritDefaults = function _inheritDefaults(vars) {
	var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
	if (_isNotFalse(vars.inherit)) while (parent) {
		func(vars, parent.vars.defaults);
		parent = parent.parent || parent._dp;
	}
	return vars;
}, _arraysMatch = function _arraysMatch(a1, a2) {
	var i = a1.length, match = i === a2.length;
	while (match && i-- && a1[i] === a2[i]);
	return i < 0;
}, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
	if (firstProp === void 0) firstProp = "_first";
	if (lastProp === void 0) lastProp = "_last";
	var prev = parent[lastProp], t;
	if (sortBy) {
		t = child[sortBy];
		while (prev && prev[sortBy] > t) prev = prev._prev;
	}
	if (prev) {
		child._next = prev._next;
		prev._next = child;
	} else {
		child._next = parent[firstProp];
		parent[firstProp] = child;
	}
	if (child._next) child._next._prev = child;
	else parent[lastProp] = child;
	child._prev = prev;
	child.parent = child._dp = parent;
	return child;
}, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
	if (firstProp === void 0) firstProp = "_first";
	if (lastProp === void 0) lastProp = "_last";
	var prev = child._prev, next = child._next;
	if (prev) prev._next = next;
	else if (parent[firstProp] === child) parent[firstProp] = next;
	if (next) next._prev = prev;
	else if (parent[lastProp] === child) parent[lastProp] = prev;
	child._next = child._prev = child.parent = null;
}, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
	child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
	child._act = 0;
}, _uncache = function _uncache(animation, child) {
	if (animation && (!child || child._end > animation._dur || child._start < 0)) {
		var a = animation;
		while (a) {
			a._dirty = 1;
			a = a.parent;
		}
	}
	return animation;
}, _recacheAncestors = function _recacheAncestors(animation) {
	var parent = animation.parent;
	while (parent && parent.parent) {
		parent._dirty = 1;
		parent.totalDuration();
		parent = parent.parent;
	}
	return animation;
}, _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
	return tween._startAt && (_reverting$1 ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
}, _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
	return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
}, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
	return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
}, _animationCycle = function _animationCycle(tTime, cycleDuration) {
	var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
	return tTime && whole === tTime ? whole - 1 : whole;
}, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
	return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
}, _setEnd = function _setEnd(animation) {
	return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
}, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
	var parent = animation._dp;
	if (parent && parent.smoothChildTiming && animation._ts) {
		animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
		_setEnd(animation);
		parent._dirty || _uncache(parent, animation);
	}
	return animation;
}, _postAddChecks = function _postAddChecks(timeline, child) {
	var t;
	if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
		t = _parentToChildTotalTime(timeline.rawTime(), child);
		if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) child.render(t, true);
	}
	if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
		if (timeline._dur < timeline.duration()) {
			t = timeline;
			while (t._dp) {
				t.rawTime() >= 0 && t.totalTime(t._tTime);
				t = t._dp;
			}
		}
		timeline._zTime = -_tinyNum;
	}
}, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
	child.parent && _removeFromParent(child);
	child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
	child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
	_addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
	_isFromOrFromStart(child) || (timeline._recent = child);
	skipChecks || _postAddChecks(timeline, child);
	timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
	return timeline;
}, _scrollTrigger = function _scrollTrigger(animation, trigger) {
	return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
}, _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
	_initTween(tween, time, tTime);
	if (!tween._initted) return 1;
	if (!force && tween._pt && !_reverting$1 && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
		_lazyTweens.push(tween);
		tween._lazy = [tTime, suppressEvents];
		return 1;
	}
}, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
	var parent = _ref.parent;
	return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
}, _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
	var data = _ref2.data;
	return data === "isFromStart" || data === "isStart";
}, _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
	var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
	if (repeatDelay && tween._repeat) {
		tTime = _clamp(0, tween._tDur, totalTime);
		iteration = _animationCycle(tTime, repeatDelay);
		tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
		if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
			prevRatio = 1 - ratio;
			tween.vars.repeatRefresh && tween._initted && tween.invalidate();
		}
	}
	if (ratio !== prevRatio || _reverting$1 || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
		if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) return;
		prevIteration = tween._zTime;
		tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
		suppressEvents || (suppressEvents = totalTime && !prevIteration);
		tween.ratio = ratio;
		tween._from && (ratio = 1 - ratio);
		tween._time = 0;
		tween._tTime = tTime;
		pt = tween._pt;
		while (pt) {
			pt.r(ratio, pt.d);
			pt = pt._next;
		}
		totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
		tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
		tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
		if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
			ratio && _removeFromParent(tween, 1);
			if (!suppressEvents && !_reverting$1) {
				_callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
				tween._prom && tween._prom();
			}
		}
	} else if (!tween._zTime) tween._zTime = totalTime;
}, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
	var child;
	if (time > prevTime) {
		child = animation._first;
		while (child && child._start <= time) {
			if (child.data === "isPause" && child._start > prevTime) return child;
			child = child._next;
		}
	} else {
		child = animation._last;
		while (child && child._start >= time) {
			if (child.data === "isPause" && child._start < prevTime) return child;
			child = child._prev;
		}
	}
}, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
	var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
	totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
	animation._dur = dur;
	animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
	totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
	animation.parent && _setEnd(animation);
	skipUncache || _uncache(animation.parent, animation);
	return animation;
}, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
	return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
}, _zeroPosition = {
	_start: 0,
	endTime: _emptyFunc,
	totalDuration: _emptyFunc
}, _parsePosition = function _parsePosition(animation, position, percentAnimation) {
	var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum$1 ? recent.endTime(false) : animation._dur, i, offset, isPercent;
	if (_isString(position) && (isNaN(position) || position in labels)) {
		offset = position.charAt(0);
		isPercent = position.substr(-1) === "%";
		i = position.indexOf("=");
		if (offset === "<" || offset === ">") {
			i >= 0 && (position = position.replace(/=/, ""));
			return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
		}
		if (i < 0) {
			position in labels || (labels[position] = clippedDuration);
			return labels[position];
		}
		offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
		if (isPercent && percentAnimation) offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
		return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
	}
	return position == null ? clippedDuration : +position;
}, _createTweenType = function _createTweenType(type, params, timeline) {
	var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
	isLegacy && (vars.duration = params[1]);
	vars.parent = timeline;
	if (type) {
		irVars = vars;
		parent = timeline;
		while (parent && !("immediateRender" in irVars)) {
			irVars = parent.vars.defaults || {};
			parent = _isNotFalse(parent.vars.inherit) && parent.parent;
		}
		vars.immediateRender = _isNotFalse(irVars.immediateRender);
		type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
	}
	return new Tween(params[0], vars, params[varsIndex + 1]);
}, _conditionalReturn = function _conditionalReturn(value, func) {
	return value || value === 0 ? func(value) : func;
}, _clamp = function _clamp(min, max, value) {
	return value < min ? min : value > max ? max : value;
}, getUnit = function getUnit(value, v) {
	return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
}, clamp$1 = function clamp(min, max, value) {
	return _conditionalReturn(value, function(v) {
		return _clamp(min, max, v);
	});
}, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
	return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win$1;
}, _flatten = function _flatten(ar, leaveStrings, accumulator) {
	if (accumulator === void 0) accumulator = [];
	return ar.forEach(function(value) {
		var _accumulator;
		return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
	}) || accumulator;
}, toArray = function toArray(value, scope, leaveStrings) {
	return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc$1).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
}, selector = function selector(value) {
	value = toArray(value)[0] || _warn("Invalid scope") || {};
	return function(v) {
		var el = value.current || value.nativeElement || value;
		return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc$1.createElement("div") : value);
	};
}, shuffle = function shuffle(a) {
	return a.sort(function() {
		return .5 - Math.random();
	});
}, distribute = function distribute(v) {
	if (_isFunction(v)) return v;
	var vars = _isObject(v) ? v : { each: v }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
	if (_isString(from)) ratioX = ratioY = {
		center: .5,
		edges: .5,
		end: 1
	}[from] || 0;
	else if (!isDecimal && ratios) {
		ratioX = from[0];
		ratioY = from[1];
	}
	return function(i, target, a) {
		var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
		if (!distances) {
			wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum$1])[1];
			if (!wrapAt) {
				max = -_bigNum$1;
				while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l);
				wrapAt < l && wrapAt--;
			}
			distances = cache[l] = [];
			originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
			originY = wrapAt === _bigNum$1 ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
			max = 0;
			min = _bigNum$1;
			for (j = 0; j < l; j++) {
				x = j % wrapAt - originX;
				y = originY - (j / wrapAt | 0);
				distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
				d > max && (max = d);
				d < min && (min = d);
			}
			from === "random" && shuffle(distances);
			distances.max = max - min;
			distances.min = min;
			distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
			distances.b = l < 0 ? base - l : base;
			distances.u = getUnit(vars.amount || vars.each) || 0;
			ease = ease && l < 0 ? _invertEase(ease) : ease;
		}
		l = (distances[i] - distances.min) / distances.max || 0;
		return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
	};
}, _roundModifier = function _roundModifier(v) {
	var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
	return function(raw) {
		var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
		return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
	};
}, snap = function snap(snapTo, value) {
	var isArray = _isArray(snapTo), radius, is2D;
	if (!isArray && _isObject(snapTo)) {
		radius = isArray = snapTo.radius || _bigNum$1;
		if (snapTo.values) {
			snapTo = toArray(snapTo.values);
			if (is2D = !_isNumber(snapTo[0])) radius *= radius;
		} else snapTo = _roundModifier(snapTo.increment);
	}
	return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
		is2D = snapTo(raw);
		return Math.abs(is2D - raw) <= radius ? is2D : raw;
	} : function(raw) {
		var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum$1, closest = 0, i = snapTo.length, dx, dy;
		while (i--) {
			if (is2D) {
				dx = snapTo[i].x - x;
				dy = snapTo[i].y - y;
				dx = dx * dx + dy * dy;
			} else dx = Math.abs(snapTo[i] - x);
			if (dx < min) {
				min = dx;
				closest = i;
			}
		}
		closest = !radius || min <= radius ? snapTo[closest] : raw;
		return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
	});
}, random = function random(min, max, roundingIncrement, returnFunction) {
	return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
		return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
	});
}, pipe$1 = function pipe() {
	for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) functions[_key] = arguments[_key];
	return function(value) {
		return functions.reduce(function(v, f) {
			return f(v);
		}, value);
	};
}, unitize = function unitize(func, unit) {
	return function(value) {
		return func(parseFloat(value)) + (unit || getUnit(value));
	};
}, normalize = function normalize(min, max, value) {
	return mapRange(min, max, 0, 1, value);
}, _wrapArray = function _wrapArray(a, wrapper, value) {
	return _conditionalReturn(value, function(index) {
		return a[~~wrapper(index)];
	});
}, wrap = function wrap(min, max, value) {
	var range = max - min;
	return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function(value) {
		return (range + (value - min) % range) % range + min;
	});
}, wrapYoyo = function wrapYoyo(min, max, value) {
	var range = max - min, total = range * 2;
	return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function(value) {
		value = (total + (value - min) % total) % total || 0;
		return min + (value > range ? total - value : value);
	});
}, _replaceRandom = function _replaceRandom(s) {
	return s.replace(_randomExp, function(match) {
		var arIndex = match.indexOf("[") + 1, values = match.substring(arIndex || 7, arIndex ? match.indexOf("]") : match.length - 1).split(_commaDelimExp);
		return random(arIndex ? values : +values[0], arIndex ? 0 : +values[1], +values[2] || 1e-5);
	});
}, mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
	var inRange = inMax - inMin, outRange = outMax - outMin;
	return _conditionalReturn(value, function(value) {
		return outMin + ((value - inMin) / inRange * outRange || 0);
	});
}, interpolate$1 = function interpolate(start, end, progress, mutate) {
	var func = isNaN(start + end) ? 0 : function(p) {
		return (1 - p) * start + p * end;
	};
	if (!func) {
		var isString = _isString(start), master = {}, p, i, interpolators, l, il;
		progress === true && (mutate = 1) && (progress = null);
		if (isString) {
			start = { p: start };
			end = { p: end };
		} else if (_isArray(start) && !_isArray(end)) {
			interpolators = [];
			l = start.length;
			il = l - 2;
			for (i = 1; i < l; i++) interpolators.push(interpolate(start[i - 1], start[i]));
			l--;
			func = function func(p) {
				p *= l;
				var i = Math.min(il, ~~p);
				return interpolators[i](p - i);
			};
			progress = end;
		} else if (!mutate) start = _merge(_isArray(start) ? [] : {}, start);
		if (!interpolators) {
			for (p in end) _addPropTween.call(master, start, p, "get", end[p]);
			func = function func(p) {
				return _renderPropTweens(p, master) || (isString ? start.p : start);
			};
		}
	}
	return _conditionalReturn(progress, func);
}, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
	var labels = timeline.labels, min = _bigNum$1, p, distance, label;
	for (p in labels) {
		distance = labels[p] - fromTime;
		if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
			label = p;
			min = distance;
		}
	}
	return label;
}, _callback = function _callback(animation, type, executeLazyFirst) {
	var v = animation.vars, callback = v[type], prevContext = _context, context = animation._ctx, params, scope, result;
	if (!callback) return;
	params = v[type + "Params"];
	scope = v.callbackScope || animation;
	executeLazyFirst && _lazyTweens.length && _lazyRender();
	context && (_context = context);
	result = params ? callback.apply(scope, params) : callback.call(scope);
	_context = prevContext;
	return result;
}, _interrupt = function _interrupt(animation) {
	_removeFromParent(animation);
	animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting$1);
	animation.progress() < 1 && _callback(animation, "onInterrupt");
	return animation;
}, _quickTween, _registerPluginQueue = [], _createPlugin = function _createPlugin(config) {
	if (!config) return;
	config = !config.name && config["default"] || config;
	if (_windowExists$1() || config.headless) {
		var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
			this._props = [];
		} : config, instanceDefaults = {
			init: _emptyFunc,
			render: _renderPropTweens,
			add: _addPropTween,
			kill: _killPropTweensOf,
			modifier: _addPluginModifier,
			rawVars: 0
		}, statics = {
			targetTest: 0,
			get: 0,
			getSetter: _getSetter,
			aliases: {},
			register: 0
		};
		_wake();
		if (config !== Plugin) {
			if (_plugins[name]) return;
			_setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));
			_merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
			_plugins[Plugin.prop = name] = Plugin;
			if (config.targetTest) {
				_harnessPlugins.push(Plugin);
				_reservedProps[name] = 1;
			}
			name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
		}
		_addGlobal(name, Plugin);
		config.register && config.register(gsap, Plugin, PropTween);
	} else _registerPluginQueue.push(config);
}, _255 = 255, _colorLookup = {
	aqua: [
		0,
		_255,
		_255
	],
	lime: [
		0,
		_255,
		0
	],
	silver: [
		192,
		192,
		192
	],
	black: [
		0,
		0,
		0
	],
	maroon: [
		128,
		0,
		0
	],
	teal: [
		0,
		128,
		128
	],
	blue: [
		0,
		0,
		_255
	],
	navy: [
		0,
		0,
		128
	],
	white: [
		_255,
		_255,
		_255
	],
	olive: [
		128,
		128,
		0
	],
	yellow: [
		_255,
		_255,
		0
	],
	orange: [
		_255,
		165,
		0
	],
	gray: [
		128,
		128,
		128
	],
	purple: [
		128,
		0,
		128
	],
	green: [
		0,
		128,
		0
	],
	red: [
		_255,
		0,
		0
	],
	pink: [
		_255,
		192,
		203
	],
	cyan: [
		0,
		_255,
		_255
	],
	transparent: [
		_255,
		_255,
		_255,
		0
	]
}, _hue = function _hue(h, m1, m2) {
	h += h < 0 ? 1 : h > 1 ? -1 : 0;
	return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
}, splitColor = function splitColor(v, toHSL, forceAlpha) {
	var a = !v ? _colorLookup.black : _isNumber(v) ? [
		v >> 16,
		v >> 8 & _255,
		v & _255
	] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
	if (!a) {
		if (v.substr(-1) === ",") v = v.substr(0, v.length - 1);
		if (_colorLookup[v]) a = _colorLookup[v];
		else if (v.charAt(0) === "#") {
			if (v.length < 6) {
				r = v.charAt(1);
				g = v.charAt(2);
				b = v.charAt(3);
				v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
			}
			if (v.length === 9) {
				a = parseInt(v.substr(1, 6), 16);
				return [
					a >> 16,
					a >> 8 & _255,
					a & _255,
					parseInt(v.substr(7), 16) / 255
				];
			}
			v = parseInt(v.substr(1), 16);
			a = [
				v >> 16,
				v >> 8 & _255,
				v & _255
			];
		} else if (v.substr(0, 3) === "hsl") {
			a = wasHSL = v.match(_strictNumExp);
			if (!toHSL) {
				h = +a[0] % 360 / 360;
				s = +a[1] / 100;
				l = +a[2] / 100;
				g = l <= .5 ? l * (s + 1) : l + s - l * s;
				r = l * 2 - g;
				a.length > 3 && (a[3] *= 1);
				a[0] = _hue(h + 1 / 3, r, g);
				a[1] = _hue(h, r, g);
				a[2] = _hue(h - 1 / 3, r, g);
			} else if (~v.indexOf("=")) {
				a = v.match(_numExp);
				forceAlpha && a.length < 4 && (a[3] = 1);
				return a;
			}
		} else a = v.match(_strictNumExp) || _colorLookup.transparent;
		a = a.map(Number);
	}
	if (toHSL && !wasHSL) {
		r = a[0] / _255;
		g = a[1] / _255;
		b = a[2] / _255;
		max = Math.max(r, g, b);
		min = Math.min(r, g, b);
		l = (max + min) / 2;
		if (max === min) h = s = 0;
		else {
			d = max - min;
			s = l > .5 ? d / (2 - max - min) : d / (max + min);
			h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
			h *= 60;
		}
		a[0] = ~~(h + .5);
		a[1] = ~~(s * 100 + .5);
		a[2] = ~~(l * 100 + .5);
	}
	forceAlpha && a.length < 4 && (a[3] = 1);
	return a;
}, _colorOrderData = function _colorOrderData(v) {
	var values = [], c = [], i = -1;
	v.split(_colorExp).forEach(function(v) {
		var a = v.match(_numWithUnitExp) || [];
		values.push.apply(values, a);
		c.push(i += a.length + 1);
	});
	values.c = c;
	return values;
}, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
	var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
	if (!colors) return s;
	colors = colors.map(function(color) {
		return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
	});
	if (orderMatchData) {
		d = _colorOrderData(s);
		c = orderMatchData.c;
		if (c.join(result) !== d.c.join(result)) {
			shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
			l = shell.length - 1;
			for (; i < l; i++) result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
		}
	}
	if (!shell) {
		shell = s.split(_colorExp);
		l = shell.length - 1;
		for (; i < l; i++) result += shell[i] + colors[i];
	}
	return result + shell[l];
}, _colorExp = function() {
	var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
	for (p in _colorLookup) s += "|" + p + "\\b";
	return new RegExp(s + ")", "gi");
}(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
	var combined = a.join(" "), toHSL;
	_colorExp.lastIndex = 0;
	if (_colorExp.test(combined)) {
		toHSL = _hslExp.test(combined);
		a[1] = _formatColors(a[1], toHSL);
		a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
		return true;
	}
}, _tickerActive, _ticker = function() {
	var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
		var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
		(elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
		_lastUpdate += elapsed;
		time = _lastUpdate - _startTime;
		overlap = time - _nextTime;
		if (overlap > 0 || manual) {
			frame = ++_self.frame;
			_delta = time - _self.time * 1e3;
			_self.time = time = time / 1e3;
			_nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
			dispatch = 1;
		}
		manual || (_id = _req(_tick));
		if (dispatch) for (_i = 0; _i < _listeners.length; _i++) _listeners[_i](time, _delta, frame, v);
	};
	_self = {
		time: 0,
		frame: 0,
		tick: function tick() {
			_tick(true);
		},
		deltaRatio: function deltaRatio(fps) {
			return _delta / (1e3 / (fps || 60));
		},
		wake: function wake() {
			if (_coreReady) {
				if (!_coreInitted && _windowExists$1()) {
					_win$1 = _coreInitted = window;
					_doc$1 = _win$1.document || {};
					_globals.gsap = gsap;
					(_win$1.gsapVersions || (_win$1.gsapVersions = [])).push(gsap.version);
					_install(_installScope || _win$1.GreenSockGlobals || !_win$1.gsap && _win$1 || {});
					_registerPluginQueue.forEach(_createPlugin);
				}
				_raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
				_id && _self.sleep();
				_req = _raf || function(f) {
					return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
				};
				_tickerActive = 1;
				_tick(2);
			}
		},
		sleep: function sleep() {
			(_raf ? cancelAnimationFrame : clearTimeout)(_id);
			_tickerActive = 0;
			_req = _emptyFunc;
		},
		lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
			_lagThreshold = threshold || Infinity;
			_adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
		},
		fps: function fps(_fps) {
			_gap = 1e3 / (_fps || 240);
			_nextTime = _self.time * 1e3 + _gap;
		},
		add: function add(callback, once, prioritize) {
			var func = once ? function(t, d, f, v) {
				callback(t, d, f, v);
				_self.remove(func);
			} : callback;
			_self.remove(callback);
			_listeners[prioritize ? "unshift" : "push"](func);
			_wake();
			return func;
		},
		remove: function remove(callback, i) {
			~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
		},
		_listeners
	};
	return _self;
}(), _wake = function _wake() {
	return !_tickerActive && _ticker.wake();
}, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
	var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
	for (; i < l; i++) {
		val = split[i];
		index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
		parsedVal = val.substr(0, index);
		obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
		key = val.substr(index + 1).trim();
	}
	return obj;
}, _valueInParentheses = function _valueInParentheses(value) {
	var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
	return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
}, _configEaseFromString = function _configEaseFromString(name) {
	var split = (name + "").split("("), ease = _easeMap[split[0]];
	return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
}, _invertEase = function _invertEase(ease) {
	return function(p) {
		return 1 - ease(1 - p);
	};
}, _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
	var child = timeline._first, ease;
	while (child) {
		if (child instanceof Timeline) _propagateYoyoEase(child, isYoyo);
		else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) if (child.timeline) _propagateYoyoEase(child.timeline, isYoyo);
		else {
			ease = child._ease;
			child._ease = child._yEase;
			child._yEase = ease;
			child._yoyo = isYoyo;
		}
		child = child._next;
	}
}, _parseEase = function _parseEase(ease, defaultEase) {
	return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
}, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
	if (easeOut === void 0) easeOut = function easeOut(p) {
		return 1 - easeIn(1 - p);
	};
	if (easeInOut === void 0) easeInOut = function easeInOut(p) {
		return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
	};
	var ease = {
		easeIn,
		easeOut,
		easeInOut
	}, lowercaseName;
	_forEachName(names, function(name) {
		_easeMap[name] = _globals[name] = ease;
		_easeMap[lowercaseName = name.toLowerCase()] = easeOut;
		for (var p in ease) _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
	});
	return ease;
}, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
	return function(p) {
		return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
	};
}, _configElastic = function _configElastic(type, amplitude, period) {
	var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
		return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
	}, ease = type === "out" ? easeOut : type === "in" ? function(p) {
		return 1 - easeOut(1 - p);
	} : _easeInOutFromOut(easeOut);
	p2 = _2PI / p2;
	ease.config = function(amplitude, period) {
		return _configElastic(type, amplitude, period);
	};
	return ease;
}, _configBack = function _configBack(type, overshoot) {
	if (overshoot === void 0) overshoot = 1.70158;
	var easeOut = function easeOut(p) {
		return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
	}, ease = type === "out" ? easeOut : type === "in" ? function(p) {
		return 1 - easeOut(1 - p);
	} : _easeInOutFromOut(easeOut);
	ease.config = function(overshoot) {
		return _configBack(type, overshoot);
	};
	return ease;
};
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
	var power = i < 5 ? i + 1 : i;
	_insertEase(name + ",Power" + (power - 1), i ? function(p) {
		return Math.pow(p, power);
	} : function(p) {
		return p;
	}, function(p) {
		return 1 - Math.pow(1 - p, power);
	}, function(p) {
		return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
	});
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
	var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
		return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
	};
	_insertEase("Bounce", function(p) {
		return 1 - easeOut(1 - p);
	}, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
	return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
});
_insertEase("Circ", function(p) {
	return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
	return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = { config: function config(steps, immediateStart) {
	if (steps === void 0) steps = 1;
	var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
	return function(p) {
		return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
	};
} };
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
	return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function GSCache(target, harness) {
	this.id = _gsID++;
	target._gsap = this;
	this.target = target;
	this.harness = harness;
	this.get = harness ? harness.get : _getProperty;
	this.set = harness ? harness.getSetter : _getSetter;
};
var Animation = /* @__PURE__ */ function() {
	function Animation(vars) {
		this.vars = vars;
		this._delay = +vars.delay || 0;
		if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
			this._rDelay = vars.repeatDelay || 0;
			this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
		}
		this._ts = 1;
		_setDuration(this, +vars.duration, 1, 1);
		this.data = vars.data;
		if (_context) {
			this._ctx = _context;
			_context.data.push(this);
		}
		_tickerActive || _ticker.wake();
	}
	var _proto = Animation.prototype;
	_proto.delay = function delay(value) {
		if (value || value === 0) {
			this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
			this._delay = value;
			return this;
		}
		return this._delay;
	};
	_proto.duration = function duration(value) {
		return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
	};
	_proto.totalDuration = function totalDuration(value) {
		if (!arguments.length) return this._tDur;
		this._dirty = 0;
		return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
	};
	_proto.totalTime = function totalTime(_totalTime, suppressEvents) {
		_wake();
		if (!arguments.length) return this._tTime;
		var parent = this._dp;
		if (parent && parent.smoothChildTiming && this._ts) {
			_alignPlayhead(this, _totalTime);
			!parent._dp || parent.parent || _postAddChecks(parent, this);
			while (parent && parent.parent) {
				if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
				parent = parent.parent;
			}
			if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) _addToTimeline(this._dp, this, this._start - this._delay);
		}
		if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !this._initted && this._dur && _totalTime || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
			this._ts || (this._pTime = _totalTime);
			_lazySafeRender(this, _totalTime, suppressEvents);
		}
		return this;
	};
	_proto.time = function time(value, suppressEvents) {
		return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
	};
	_proto.totalProgress = function totalProgress(value, suppressEvents) {
		return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
	};
	_proto.progress = function progress(value, suppressEvents) {
		return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
	};
	_proto.iteration = function iteration(value, suppressEvents) {
		var cycleDuration = this.duration() + this._rDelay;
		return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
	};
	_proto.timeScale = function timeScale(value, suppressEvents) {
		if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts;
		if (this._rts === value) return this;
		var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
		this._rts = +value || 0;
		this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
		this.totalTime(_clamp(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);
		_setEnd(this);
		return _recacheAncestors(this);
	};
	_proto.paused = function paused(value) {
		if (!arguments.length) return this._ps;
		if (this._ps !== value) {
			this._ps = value;
			if (value) {
				this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
				this._ts = this._act = 0;
			} else {
				_wake();
				this._ts = this._rts;
				this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
			}
		}
		return this;
	};
	_proto.startTime = function startTime(value) {
		if (arguments.length) {
			this._start = _roundPrecise(value);
			var parent = this.parent || this._dp;
			parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, this._start - this._delay);
			return this;
		}
		return this._start;
	};
	_proto.endTime = function endTime(includeRepeats) {
		return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
	};
	_proto.rawTime = function rawTime(wrapRepeats) {
		var parent = this.parent || this._dp;
		return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
	};
	_proto.revert = function revert(config) {
		if (config === void 0) config = _revertConfig;
		var prevIsReverting = _reverting$1;
		_reverting$1 = config;
		if (_isRevertWorthy(this)) {
			this.timeline && this.timeline.revert(config);
			this.totalTime(-.01, config.suppressEvents);
		}
		this.data !== "nested" && config.kill !== false && this.kill();
		_reverting$1 = prevIsReverting;
		return this;
	};
	_proto.globalTime = function globalTime(rawTime) {
		var animation = this, time = arguments.length ? rawTime : animation.rawTime();
		while (animation) {
			time = animation._start + time / (Math.abs(animation._ts) || 1);
			animation = animation._dp;
		}
		return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
	};
	_proto.repeat = function repeat(value) {
		if (arguments.length) {
			this._repeat = value === Infinity ? -2 : value;
			return _onUpdateTotalDuration(this);
		}
		return this._repeat === -2 ? Infinity : this._repeat;
	};
	_proto.repeatDelay = function repeatDelay(value) {
		if (arguments.length) {
			var time = this._time;
			this._rDelay = value;
			_onUpdateTotalDuration(this);
			return time ? this.time(time) : this;
		}
		return this._rDelay;
	};
	_proto.yoyo = function yoyo(value) {
		if (arguments.length) {
			this._yoyo = value;
			return this;
		}
		return this._yoyo;
	};
	_proto.seek = function seek(position, suppressEvents) {
		return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
	};
	_proto.restart = function restart(includeDelay, suppressEvents) {
		this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
		this._dur || (this._zTime = -_tinyNum);
		return this;
	};
	_proto.play = function play(from, suppressEvents) {
		from != null && this.seek(from, suppressEvents);
		return this.reversed(false).paused(false);
	};
	_proto.reverse = function reverse(from, suppressEvents) {
		from != null && this.seek(from || this.totalDuration(), suppressEvents);
		return this.reversed(true).paused(false);
	};
	_proto.pause = function pause(atTime, suppressEvents) {
		atTime != null && this.seek(atTime, suppressEvents);
		return this.paused(true);
	};
	_proto.resume = function resume() {
		return this.paused(false);
	};
	_proto.reversed = function reversed(value) {
		if (arguments.length) {
			!!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
			return this;
		}
		return this._rts < 0;
	};
	_proto.invalidate = function invalidate() {
		this._initted = this._act = 0;
		this._zTime = -_tinyNum;
		return this;
	};
	_proto.isActive = function isActive() {
		var parent = this.parent || this._dp, start = this._start, rawTime;
		return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
	};
	_proto.eventCallback = function eventCallback(type, callback, params) {
		var vars = this.vars;
		if (arguments.length > 1) {
			if (!callback) delete vars[type];
			else {
				vars[type] = callback;
				params && (vars[type + "Params"] = params);
				type === "onUpdate" && (this._onUpdate = callback);
			}
			return this;
		}
		return vars[type];
	};
	_proto.then = function then(onFulfilled) {
		var self = this, prevProm = self._prom;
		return new Promise(function(resolve) {
			var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
				var _then = self.then;
				self.then = null;
				prevProm && prevProm();
				_isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
				resolve(f);
				self.then = _then;
			};
			if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve();
			else self._prom = _resolve;
		});
	};
	_proto.kill = function kill() {
		_interrupt(this);
	};
	return Animation;
}();
_setDefaults(Animation.prototype, {
	_time: 0,
	_start: 0,
	_end: 0,
	_tTime: 0,
	_tDur: 0,
	_dirty: 0,
	_repeat: 0,
	_yoyo: false,
	parent: null,
	_initted: false,
	_rDelay: 0,
	_ts: 1,
	_dp: 0,
	ratio: 0,
	_zTime: -_tinyNum,
	_prom: 0,
	_ps: false,
	_rts: 1
});
var Timeline = /* @__PURE__ */ function(_Animation) {
	_inheritsLoose(Timeline, _Animation);
	function Timeline(vars, position) {
		var _this;
		if (vars === void 0) vars = {};
		_this = _Animation.call(this, vars) || this;
		_this.labels = {};
		_this.smoothChildTiming = !!vars.smoothChildTiming;
		_this.autoRemoveChildren = !!vars.autoRemoveChildren;
		_this._sort = _isNotFalse(vars.sortChildren);
		_globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
		vars.reversed && _this.reverse();
		vars.paused && _this.paused(true);
		vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
		return _this;
	}
	var _proto2 = Timeline.prototype;
	_proto2.to = function to(targets, vars, position) {
		_createTweenType(0, arguments, this);
		return this;
	};
	_proto2.from = function from(targets, vars, position) {
		_createTweenType(1, arguments, this);
		return this;
	};
	_proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
		_createTweenType(2, arguments, this);
		return this;
	};
	_proto2.set = function set(targets, vars, position) {
		vars.duration = 0;
		vars.parent = this;
		_inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
		vars.immediateRender = !!vars.immediateRender;
		new Tween(targets, vars, _parsePosition(this, position), 1);
		return this;
	};
	_proto2.call = function call(callback, params, position) {
		return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
	};
	_proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
		vars.duration = duration;
		vars.stagger = vars.stagger || stagger;
		vars.onComplete = onCompleteAll;
		vars.onCompleteParams = onCompleteAllParams;
		vars.parent = this;
		new Tween(targets, vars, _parsePosition(this, position));
		return this;
	};
	_proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
		vars.runBackwards = 1;
		_inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
		return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
	};
	_proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
		toVars.startAt = fromVars;
		_inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
		return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
	};
	_proto2.render = function render(totalTime, suppressEvents, force) {
		var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
		this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
		if (tTime !== this._tTime || force || crossingStart) {
			if (prevTime !== this._time && dur) {
				tTime += this._time - prevTime;
				totalTime += this._time - prevTime;
			}
			time = tTime;
			prevStart = this._start;
			timeScale = this._ts;
			prevPaused = !timeScale;
			if (crossingStart) {
				dur || (prevTime = this._zTime);
				(totalTime || !suppressEvents) && (this._zTime = totalTime);
			}
			if (this._repeat) {
				yoyo = this._yoyo;
				cycleDuration = dur + this._rDelay;
				if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
				time = _roundPrecise(tTime % cycleDuration);
				if (tTime === tDur) {
					iteration = this._repeat;
					time = dur;
				} else {
					prevIteration = _roundPrecise(tTime / cycleDuration);
					iteration = ~~prevIteration;
					if (iteration && iteration === prevIteration) {
						time = dur;
						iteration--;
					}
					time > dur && (time = dur);
				}
				prevIteration = _animationCycle(this._tTime, cycleDuration);
				!prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
				if (yoyo && iteration & 1) {
					time = dur - time;
					isYoyo = 1;
				}
				if (iteration !== prevIteration && !this._lock) {
					var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
					iteration < prevIteration && (rewinding = !rewinding);
					prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
					this._lock = 1;
					this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
					this._tTime = tTime;
					!suppressEvents && this.parent && _callback(this, "onRepeat");
					if (this.vars.repeatRefresh && !isYoyo) {
						this.invalidate()._lock = 1;
						prevIteration = iteration;
					}
					if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
					dur = this._dur;
					tDur = this._tDur;
					if (doesWrap) {
						this._lock = 2;
						prevTime = rewinding ? dur : -1e-4;
						this.render(prevTime, true);
						this.vars.repeatRefresh && !isYoyo && this.invalidate();
					}
					this._lock = 0;
					if (!this._ts && !prevPaused) return this;
					_propagateYoyoEase(this, isYoyo);
				}
			}
			if (this._hasPause && !this._forcing && this._lock < 2) {
				pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
				if (pauseTween) tTime -= time - (time = pauseTween._start);
			}
			this._tTime = tTime;
			this._time = time;
			this._act = !timeScale;
			if (!this._initted) {
				this._onUpdate = this.vars.onUpdate;
				this._initted = 1;
				this._zTime = totalTime;
				prevTime = 0;
			}
			if (!prevTime && tTime && dur && !suppressEvents && !prevIteration) {
				_callback(this, "onStart");
				if (this._tTime !== tTime) return this;
			}
			if (time >= prevTime && totalTime >= 0) {
				child = this._first;
				while (child) {
					next = child._next;
					if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
						if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
						child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
						if (time !== this._time || !this._ts && !prevPaused) {
							pauseTween = 0;
							next && (tTime += this._zTime = -_tinyNum);
							break;
						}
					}
					child = next;
				}
			} else {
				child = this._last;
				var adjustedTime = totalTime < 0 ? totalTime : time;
				while (child) {
					next = child._prev;
					if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
						if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
						child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting$1 && _isRevertWorthy(child));
						if (time !== this._time || !this._ts && !prevPaused) {
							pauseTween = 0;
							next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
							break;
						}
					}
					child = next;
				}
			}
			if (pauseTween && !suppressEvents) {
				this.pause();
				pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
				if (this._ts) {
					this._start = prevStart;
					_setEnd(this);
					return this.render(totalTime, suppressEvents, force);
				}
			}
			this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
			if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
				if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
					if (!this._lock) {
						(totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
						if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
							_callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
							this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
						}
					}
				}
			}
		}
		return this;
	};
	_proto2.add = function add(child, position) {
		var _this2 = this;
		_isNumber(position) || (position = _parsePosition(this, position, child));
		if (!(child instanceof Animation)) {
			if (_isArray(child)) {
				child.forEach(function(obj) {
					return _this2.add(obj, position);
				});
				return this;
			}
			if (_isString(child)) return this.addLabel(child, position);
			if (_isFunction(child)) child = Tween.delayedCall(0, child);
			else return this;
		}
		return this !== child ? _addToTimeline(this, child, position) : this;
	};
	_proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
		if (nested === void 0) nested = true;
		if (tweens === void 0) tweens = true;
		if (timelines === void 0) timelines = true;
		if (ignoreBeforeTime === void 0) ignoreBeforeTime = -_bigNum$1;
		var a = [], child = this._first;
		while (child) {
			if (child._start >= ignoreBeforeTime) if (child instanceof Tween) tweens && a.push(child);
			else {
				timelines && a.push(child);
				nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
			}
			child = child._next;
		}
		return a;
	};
	_proto2.getById = function getById(id) {
		var animations = this.getChildren(1, 1, 1), i = animations.length;
		while (i--) if (animations[i].vars.id === id) return animations[i];
	};
	_proto2.remove = function remove(child) {
		if (_isString(child)) return this.removeLabel(child);
		if (_isFunction(child)) return this.killTweensOf(child);
		child.parent === this && _removeLinkedListItem(this, child);
		if (child === this._recent) this._recent = this._last;
		return _uncache(this);
	};
	_proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
		if (!arguments.length) return this._tTime;
		this._forcing = 1;
		if (!this._dp && this._ts) this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
		_Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
		this._forcing = 0;
		return this;
	};
	_proto2.addLabel = function addLabel(label, position) {
		this.labels[label] = _parsePosition(this, position);
		return this;
	};
	_proto2.removeLabel = function removeLabel(label) {
		delete this.labels[label];
		return this;
	};
	_proto2.addPause = function addPause(position, callback, params) {
		var t = Tween.delayedCall(0, callback || _emptyFunc, params);
		t.data = "isPause";
		this._hasPause = 1;
		return _addToTimeline(this, t, _parsePosition(this, position));
	};
	_proto2.removePause = function removePause(position) {
		var child = this._first;
		position = _parsePosition(this, position);
		while (child) {
			if (child._start === position && child.data === "isPause") _removeFromParent(child);
			child = child._next;
		}
	};
	_proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
		var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
		while (i--) _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
		return this;
	};
	_proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
		var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
		while (child) {
			if (child instanceof Tween) {
				if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) a.push(child);
			} else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
			child = child._next;
		}
		return a;
	};
	_proto2.tweenTo = function tweenTo(position, vars) {
		vars = vars || {};
		var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
			ease: vars.ease || "none",
			lazy: false,
			immediateRender: false,
			time: endTime,
			overwrite: "auto",
			duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
			onStart: function onStart() {
				tl.pause();
				if (!initted) {
					var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
					tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
					initted = 1;
				}
				_onStart && _onStart.apply(tween, onStartParams || []);
			}
		}, vars));
		return immediateRender ? tween.render(0) : tween;
	};
	_proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
		return this.tweenTo(toPosition, _setDefaults({ startAt: { time: _parsePosition(this, fromPosition) } }, vars));
	};
	_proto2.recent = function recent() {
		return this._recent;
	};
	_proto2.nextLabel = function nextLabel(afterTime) {
		if (afterTime === void 0) afterTime = this._time;
		return _getLabelInDirection(this, _parsePosition(this, afterTime));
	};
	_proto2.previousLabel = function previousLabel(beforeTime) {
		if (beforeTime === void 0) beforeTime = this._time;
		return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
	};
	_proto2.currentLabel = function currentLabel(value) {
		return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
	};
	_proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
		if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
		var child = this._first, labels = this.labels, p;
		amount = _roundPrecise(amount);
		while (child) {
			if (child._start >= ignoreBeforeTime) {
				child._start += amount;
				child._end += amount;
			}
			child = child._next;
		}
		if (adjustLabels) {
			for (p in labels) if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
		}
		return _uncache(this);
	};
	_proto2.invalidate = function invalidate(soft) {
		var child = this._first;
		this._lock = 0;
		while (child) {
			child.invalidate(soft);
			child = child._next;
		}
		return _Animation.prototype.invalidate.call(this, soft);
	};
	_proto2.clear = function clear(includeLabels) {
		if (includeLabels === void 0) includeLabels = true;
		var child = this._first, next;
		while (child) {
			next = child._next;
			this.remove(child);
			child = next;
		}
		this._dp && (this._time = this._tTime = this._pTime = 0);
		includeLabels && (this.labels = {});
		return _uncache(this);
	};
	_proto2.totalDuration = function totalDuration(value) {
		var max = 0, self = this, child = self._last, prevStart = _bigNum$1, prev, start, parent;
		if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
		if (self._dirty) {
			parent = self.parent;
			while (child) {
				prev = child._prev;
				child._dirty && child.totalDuration();
				start = child._start;
				if (start > prevStart && self._sort && child._ts && !self._lock) {
					self._lock = 1;
					_addToTimeline(self, child, start - child._delay, 1)._lock = 0;
				} else prevStart = start;
				if (start < 0 && child._ts) {
					max -= start;
					if (!parent && !self._dp || parent && parent.smoothChildTiming) {
						self._start += _roundPrecise(start / self._ts);
						self._time -= start;
						self._tTime -= start;
					}
					self.shiftChildren(-start, false, -Infinity);
					prevStart = 0;
				}
				child._end > max && child._ts && (max = child._end);
				child = prev;
			}
			_setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
			self._dirty = 0;
		}
		return self._tDur;
	};
	Timeline.updateRoot = function updateRoot(time) {
		if (_globalTimeline._ts) {
			_lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
			_lastRenderedFrame = _ticker.frame;
		}
		if (_ticker.frame >= _nextGCFrame) {
			_nextGCFrame += _config.autoSleep || 120;
			var child = _globalTimeline._first;
			if (!child || !child._ts) {
				if (_config.autoSleep && _ticker._listeners.length < 2) {
					while (child && !child._ts) child = child._next;
					child || _ticker.sleep();
				}
			}
		}
	};
	return Timeline;
}(Animation);
_setDefaults(Timeline.prototype, {
	_lock: 0,
	_hasPause: 0,
	_forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
	var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
	pt.b = start;
	pt.e = end;
	start += "";
	end += "";
	if (hasRandom = ~end.indexOf("random(")) end = _replaceRandom(end);
	if (stringFilter) {
		a = [start, end];
		stringFilter(a, target, prop);
		start = a[0];
		end = a[1];
	}
	startNums = start.match(_complexStringNumExp) || [];
	while (result = _complexStringNumExp.exec(end)) {
		endNum = result[0];
		chunk = end.substring(index, result.index);
		if (color) color = (color + 1) % 5;
		else if (chunk.substr(-5) === "rgba(") color = 1;
		if (endNum !== startNums[matchIndex++]) {
			startNum = parseFloat(startNums[matchIndex - 1]) || 0;
			pt._pt = {
				_next: pt._pt,
				p: chunk || matchIndex === 1 ? chunk : ",",
				s: startNum,
				c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
				m: color && color < 4 ? Math.round : 0
			};
			index = _complexStringNumExp.lastIndex;
		}
	}
	pt.c = index < end.length ? end.substring(index, end.length) : "";
	pt.fp = funcParam;
	if (_relExp.test(end) || hasRandom) pt.e = 0;
	this._pt = pt;
	return pt;
}, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
	_isFunction(end) && (end = end(index || 0, target, targets));
	var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
	if (_isString(end)) {
		if (~end.indexOf("random(")) end = _replaceRandom(end);
		if (end.charAt(1) === "=") {
			pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
			if (pt || pt === 0) end = pt;
		}
	}
	if (!optional || parsedStart !== end || _forceAllPropTweens) {
		if (!isNaN(parsedStart * end) && end !== "") {
			pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
			funcParam && (pt.fp = funcParam);
			modifier && pt.modifier(modifier, this, target);
			return this._pt = pt;
		}
		!currentValue && !(prop in target) && _missingPlugin(prop, end);
		return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
	}
}, _processVars = function _processVars(vars, index, target, targets, tween) {
	_isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
	if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
	var copy = {}, p;
	for (p in vars) copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
	return copy;
}, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
	var plugin, pt, ptLookup, i;
	if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
		tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
		if (tween !== _quickTween) {
			ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
			i = plugin._props.length;
			while (i--) ptLookup[plugin._props[i]] = pt;
		}
	}
	return plugin;
}, _overwritingTween, _forceAllPropTweens, _initTween = function _initTween(tween, time, tTime) {
	var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
	tl && (!keyframes || !ease) && (ease = "none");
	tween._ease = _parseEase(ease, _defaults.ease);
	tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
	if (yoyoEase && tween._yoyo && !tween._repeat) {
		yoyoEase = tween._yEase;
		tween._yEase = tween._ease;
		tween._ease = yoyoEase;
	}
	tween._from = !tl && !!vars.runBackwards;
	if (!tl || keyframes && !vars.stagger) {
		harness = targets[0] ? _getCache(targets[0]).harness : 0;
		harnessVars = harness && vars[harness.prop];
		cleanVars = _copyExcluding(vars, _reservedProps);
		if (prevStartAt) {
			prevStartAt._zTime < 0 && prevStartAt.progress(1);
			time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
			prevStartAt._lazy = 0;
		}
		if (startAt) {
			_removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
				data: "isStart",
				overwrite: false,
				parent,
				immediateRender: true,
				lazy: !prevStartAt && _isNotFalse(lazy),
				startAt: null,
				delay: 0,
				onUpdate: onUpdate && function() {
					return _callback(tween, "onUpdate");
				},
				stagger: 0
			}, startAt)));
			tween._startAt._dp = 0;
			tween._startAt._sat = tween;
			time < 0 && (_reverting$1 || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
			if (immediateRender) {
				if (dur && time <= 0 && tTime <= 0) {
					time && (tween._zTime = time);
					return;
				}
			}
		} else if (runBackwards && dur) {
			if (!prevStartAt) {
				time && (immediateRender = false);
				p = _setDefaults({
					overwrite: false,
					data: "isFromStart",
					lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
					immediateRender,
					stagger: 0,
					parent
				}, cleanVars);
				harnessVars && (p[harness.prop] = harnessVars);
				_removeFromParent(tween._startAt = Tween.set(targets, p));
				tween._startAt._dp = 0;
				tween._startAt._sat = tween;
				time < 0 && (_reverting$1 ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
				tween._zTime = time;
				if (!immediateRender) _initTween(tween._startAt, _tinyNum, _tinyNum);
				else if (!time) return;
			}
		}
		tween._pt = tween._ptCache = 0;
		lazy = dur && _isNotFalse(lazy) || lazy && !dur;
		for (i = 0; i < targets.length; i++) {
			target = targets[i];
			gsData = target._gsap || _harness(targets)[i]._gsap;
			tween._ptLookup[i] = ptLookup = {};
			_lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
			index = fullTargets === targets ? i : fullTargets.indexOf(target);
			if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
				tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
				plugin._props.forEach(function(name) {
					ptLookup[name] = pt;
				});
				plugin.priority && (hasPriority = 1);
			}
			if (!harness || harnessVars) for (p in cleanVars) if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1);
			else ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
			tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
			if (autoOverwrite && tween._pt) {
				_overwritingTween = tween;
				_globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
				overwritten = !tween.parent;
				_overwritingTween = 0;
			}
			tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
		}
		hasPriority && _sortPropTweensByPriority(tween);
		tween._onInit && tween._onInit(tween);
	}
	tween._onUpdate = onUpdate;
	tween._initted = (!tween._op || tween._pt) && !overwritten;
	keyframes && time <= 0 && tl.render(_bigNum$1, true, true);
}, _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
	var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
	if (!ptCache) {
		ptCache = tween._ptCache[property] = [];
		lookup = tween._ptLookup;
		i = tween._targets.length;
		while (i--) {
			pt = lookup[i][property];
			if (pt && pt.d && pt.d._pt) {
				pt = pt.d._pt;
				while (pt && pt.p !== property && pt.fp !== property) pt = pt._next;
			}
			if (!pt) {
				_forceAllPropTweens = 1;
				tween.vars[property] = "+=0";
				_initTween(tween, time);
				_forceAllPropTweens = 0;
				return skipRecursion ? _warn(property + " not eligible for reset") : 1;
			}
			ptCache.push(pt);
		}
	}
	i = ptCache.length;
	while (i--) {
		rootPT = ptCache[i];
		pt = rootPT._pt || rootPT;
		pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
		pt.c = value - pt.s;
		rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
		rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
	}
}, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
	var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
	if (!propertyAliases) return vars;
	copy = _merge({}, vars);
	for (p in propertyAliases) if (p in copy) {
		aliases = propertyAliases[p].split(",");
		i = aliases.length;
		while (i--) copy[aliases[i]] = copy[p];
	}
	return copy;
}, _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
	var ease = obj.ease || easeEach || "power1.inOut", p, a;
	if (_isArray(obj)) {
		a = allProps[prop] || (allProps[prop] = []);
		obj.forEach(function(value, i) {
			return a.push({
				t: i / (obj.length - 1) * 100,
				v: value,
				e: ease
			});
		});
	} else for (p in obj) {
		a = allProps[p] || (allProps[p] = []);
		p === "ease" || a.push({
			t: parseFloat(prop),
			v: obj[p],
			e: ease
		});
	}
}, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
	return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
}, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
	return _staggerPropsToSkip[name] = 1;
});
var Tween = /* @__PURE__ */ function(_Animation2) {
	_inheritsLoose(Tween, _Animation2);
	function Tween(targets, vars, position, skipInherit) {
		var _this3;
		if (typeof vars === "number") {
			position.duration = vars;
			vars = position;
			position = null;
		}
		_this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
		var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
		_this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
		_this3._ptLookup = [];
		_this3._overwrite = overwrite;
		if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
			vars = _this3.vars;
			tl = _this3.timeline = new Timeline({
				data: "nested",
				defaults: defaults || {},
				targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
			});
			tl.kill();
			tl.parent = tl._dp = _assertThisInitialized(_this3);
			tl._start = 0;
			if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
				l = parsedTargets.length;
				staggerFunc = stagger && distribute(stagger);
				if (_isObject(stagger)) {
					for (p in stagger) if (~_staggerTweenProps.indexOf(p)) {
						staggerVarsToMerge || (staggerVarsToMerge = {});
						staggerVarsToMerge[p] = stagger[p];
					}
				}
				for (i = 0; i < l; i++) {
					copy = _copyExcluding(vars, _staggerPropsToSkip);
					copy.stagger = 0;
					yoyoEase && (copy.yoyoEase = yoyoEase);
					staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
					curTarget = parsedTargets[i];
					copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
					copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
					if (!stagger && l === 1 && copy.delay) {
						_this3._delay = delay = copy.delay;
						_this3._start += delay;
						copy.delay = 0;
					}
					tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
					tl._ease = _easeMap.none;
				}
				tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
			} else if (keyframes) {
				_inheritDefaults(_setDefaults(tl.vars.defaults, { ease: "none" }));
				tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
				var time = 0, a, kf, v;
				if (_isArray(keyframes)) {
					keyframes.forEach(function(frame) {
						return tl.to(parsedTargets, frame, ">");
					});
					tl.duration();
				} else {
					copy = {};
					for (p in keyframes) p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
					for (p in copy) {
						a = copy[p].sort(function(a, b) {
							return a.t - b.t;
						});
						time = 0;
						for (i = 0; i < a.length; i++) {
							kf = a[i];
							v = {
								ease: kf.e,
								duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
							};
							v[p] = kf.v;
							tl.to(parsedTargets, v, time);
							time += v.duration;
						}
					}
					tl.duration() < duration && tl.to({}, { duration: duration - tl.duration() });
				}
			}
			duration || _this3.duration(duration = tl.duration());
		} else _this3.timeline = 0;
		if (overwrite === true && !_suppressOverwrites) {
			_overwritingTween = _assertThisInitialized(_this3);
			_globalTimeline.killTweensOf(parsedTargets);
			_overwritingTween = 0;
		}
		_addToTimeline(parent, _assertThisInitialized(_this3), position);
		vars.reversed && _this3.reverse();
		vars.paused && _this3.paused(true);
		if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
			_this3._tTime = -_tinyNum;
			_this3.render(Math.max(0, -delay) || 0);
		}
		scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
		return _this3;
	}
	var _proto3 = Tween.prototype;
	_proto3.render = function render(totalTime, suppressEvents, force) {
		var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
		if (!dur) _renderZeroDurationTween(this, totalTime, suppressEvents, force);
		else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
			time = tTime;
			timeline = this.timeline;
			if (this._repeat) {
				cycleDuration = dur + this._rDelay;
				if (this._repeat < -1 && isNegative) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
				time = _roundPrecise(tTime % cycleDuration);
				if (tTime === tDur) {
					iteration = this._repeat;
					time = dur;
				} else {
					prevIteration = _roundPrecise(tTime / cycleDuration);
					iteration = ~~prevIteration;
					if (iteration && iteration === prevIteration) {
						time = dur;
						iteration--;
					} else if (time > dur) time = dur;
				}
				isYoyo = this._yoyo && iteration & 1;
				if (isYoyo) {
					yoyoEase = this._yEase;
					time = dur - time;
				}
				prevIteration = _animationCycle(this._tTime, cycleDuration);
				if (time === prevTime && !force && this._initted && iteration === prevIteration) {
					this._tTime = tTime;
					return this;
				}
				if (iteration !== prevIteration) {
					timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
					if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
						this._lock = force = 1;
						this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
					}
				}
			}
			if (!this._initted) {
				if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
					this._tTime = 0;
					return this;
				}
				if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) return this;
				if (dur !== this._dur) return this.render(totalTime, suppressEvents, force);
			}
			this._tTime = tTime;
			this._time = time;
			if (!this._act && this._ts) {
				this._act = 1;
				this._lazy = 0;
			}
			this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
			if (this._from) this.ratio = ratio = 1 - ratio;
			if (!prevTime && tTime && !suppressEvents && !prevIteration) {
				_callback(this, "onStart");
				if (this._tTime !== tTime) return this;
			}
			pt = this._pt;
			while (pt) {
				pt.r(ratio, pt.d);
				pt = pt._next;
			}
			timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
			if (this._onUpdate && !suppressEvents) {
				isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
				_callback(this, "onUpdate");
			}
			this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
			if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
				isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
				(totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
				if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
					_callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
					this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
				}
			}
		}
		return this;
	};
	_proto3.targets = function targets() {
		return this._targets;
	};
	_proto3.invalidate = function invalidate(soft) {
		(!soft || !this.vars.runBackwards) && (this._startAt = 0);
		this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
		this._ptLookup = [];
		this.timeline && this.timeline.invalidate(soft);
		return _Animation2.prototype.invalidate.call(this, soft);
	};
	_proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
		_tickerActive || _ticker.wake();
		this._ts || this.play();
		var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
		this._initted || _initTween(this, time);
		ratio = this._ease(time / this._dur);
		if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) return this.resetTo(property, value, start, startIsRelative, 1);
		_alignPlayhead(this, 0);
		this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
		return this.render(0);
	};
	_proto3.kill = function kill(targets, vars) {
		if (vars === void 0) vars = "all";
		if (!targets && (!vars || vars === "all")) {
			this._lazy = this._pt = 0;
			this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting$1);
			return this;
		}
		if (this.timeline) {
			var tDur = this.timeline.totalDuration();
			this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
			this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
			return this;
		}
		var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
		if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
			vars === "all" && (this._pt = 0);
			return _interrupt(this);
		}
		overwrittenProps = this._op = this._op || [];
		if (vars !== "all") {
			if (_isString(vars)) {
				p = {};
				_forEachName(vars, function(name) {
					return p[name] = 1;
				});
				vars = p;
			}
			vars = _addAliasesToVars(parsedTargets, vars);
		}
		i = parsedTargets.length;
		while (i--) if (~killingTargets.indexOf(parsedTargets[i])) {
			curLookup = propTweenLookup[i];
			if (vars === "all") {
				overwrittenProps[i] = vars;
				props = curLookup;
				curOverwriteProps = {};
			} else {
				curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
				props = vars;
			}
			for (p in props) {
				pt = curLookup && curLookup[p];
				if (pt) {
					if (!("kill" in pt.d) || pt.d.kill(p) === true) _removeLinkedListItem(this, pt, "_pt");
					delete curLookup[p];
				}
				if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
			}
		}
		this._initted && !this._pt && firstPT && _interrupt(this);
		return this;
	};
	Tween.to = function to(targets, vars) {
		return new Tween(targets, vars, arguments[2]);
	};
	Tween.from = function from(targets, vars) {
		return _createTweenType(1, arguments);
	};
	Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
		return new Tween(callback, 0, {
			immediateRender: false,
			lazy: false,
			overwrite: false,
			delay,
			onComplete: callback,
			onReverseComplete: callback,
			onCompleteParams: params,
			onReverseCompleteParams: params,
			callbackScope: scope
		});
	};
	Tween.fromTo = function fromTo(targets, fromVars, toVars) {
		return _createTweenType(2, arguments);
	};
	Tween.set = function set(targets, vars) {
		vars.duration = 0;
		vars.repeatDelay || (vars.repeat = 0);
		return new Tween(targets, vars);
	};
	Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
		return _globalTimeline.killTweensOf(targets, props, onlyActive);
	};
	return Tween;
}(Animation);
_setDefaults(Tween.prototype, {
	_targets: [],
	_lazy: 0,
	_startAt: 0,
	_op: 0,
	_onInit: 0
});
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
	Tween[name] = function() {
		var tl = new Timeline(), params = _slice.call(arguments, 0);
		params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
		return tl[name].apply(tl, params);
	};
});
var _setterPlain = function _setterPlain(target, property, value) {
	return target[property] = value;
}, _setterFunc = function _setterFunc(target, property, value) {
	return target[property](value);
}, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
	return target[property](data.fp, value);
}, _setterAttribute = function _setterAttribute(target, property, value) {
	return target.setAttribute(property, value);
}, _getSetter = function _getSetter(target, property) {
	return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
}, _renderPlain = function _renderPlain(ratio, data) {
	return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
}, _renderBoolean = function _renderBoolean(ratio, data) {
	return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
}, _renderComplexString = function _renderComplexString(ratio, data) {
	var pt = data._pt, s = "";
	if (!ratio && data.b) s = data.b;
	else if (ratio === 1 && data.e) s = data.e;
	else {
		while (pt) {
			s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
			pt = pt._next;
		}
		s += data.c;
	}
	data.set(data.t, data.p, s, data);
}, _renderPropTweens = function _renderPropTweens(ratio, data) {
	var pt = data._pt;
	while (pt) {
		pt.r(ratio, pt.d);
		pt = pt._next;
	}
}, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
	var pt = this._pt, next;
	while (pt) {
		next = pt._next;
		pt.p === property && pt.modifier(modifier, tween, target);
		pt = next;
	}
}, _killPropTweensOf = function _killPropTweensOf(property) {
	var pt = this._pt, hasNonDependentRemaining, next;
	while (pt) {
		next = pt._next;
		if (pt.p === property && !pt.op || pt.op === property) _removeLinkedListItem(this, pt, "_pt");
		else if (!pt.dep) hasNonDependentRemaining = 1;
		pt = next;
	}
	return !hasNonDependentRemaining;
}, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
	data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
}, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
	var pt = parent._pt, next, pt2, first, last;
	while (pt) {
		next = pt._next;
		pt2 = first;
		while (pt2 && pt2.pr > pt.pr) pt2 = pt2._next;
		if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt;
		else first = pt;
		if (pt._next = pt2) pt2._prev = pt;
		else last = pt;
		pt = next;
	}
	parent._pt = first;
};
var PropTween = /* @__PURE__ */ function() {
	function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
		this.t = target;
		this.s = start;
		this.c = change;
		this.p = prop;
		this.r = renderer || _renderPlain;
		this.d = data || this;
		this.set = setter || _setterPlain;
		this.pr = priority || 0;
		this._next = next;
		if (next) next._prev = this;
	}
	var _proto4 = PropTween.prototype;
	_proto4.modifier = function modifier(func, tween, target) {
		this.mSet = this.mSet || this.set;
		this.set = _setterWithModifier;
		this.m = func;
		this.mt = target;
		this.tween = tween;
	};
	return PropTween;
}();
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
	return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
	sortChildren: false,
	defaults: _defaults,
	autoRemoveChildren: true,
	id: "root",
	smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
var _media = [], _listeners = {}, _emptyArray = [], _lastMediaTime = 0, _contextID = 0, _dispatch = function _dispatch(type) {
	return (_listeners[type] || _emptyArray).map(function(f) {
		return f();
	});
}, _onMediaChange = function _onMediaChange() {
	var time = Date.now(), matches = [];
	if (time - _lastMediaTime > 2) {
		_dispatch("matchMediaInit");
		_media.forEach(function(c) {
			var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
			for (p in queries) {
				match = _win$1.matchMedia(queries[p]).matches;
				match && (anyMatch = 1);
				if (match !== conditions[p]) {
					conditions[p] = match;
					toggled = 1;
				}
			}
			if (toggled) {
				c.revert();
				anyMatch && matches.push(c);
			}
		});
		_dispatch("matchMediaRevert");
		matches.forEach(function(c) {
			return c.onMatch(c, function(func) {
				return c.add(null, func);
			});
		});
		_lastMediaTime = time;
		_dispatch("matchMedia");
	}
};
var Context = /* @__PURE__ */ function() {
	function Context(func, scope) {
		this.selector = scope && selector(scope);
		this.data = [];
		this._r = [];
		this.isReverted = false;
		this.id = _contextID++;
		func && this.add(func);
	}
	var _proto5 = Context.prototype;
	_proto5.add = function add(name, func, scope) {
		if (_isFunction(name)) {
			scope = func;
			func = name;
			name = _isFunction;
		}
		var self = this, f = function f() {
			var prev = _context, prevSelector = self.selector, result;
			prev && prev !== self && prev.data.push(self);
			scope && (self.selector = selector(scope));
			_context = self;
			result = func.apply(self, arguments);
			_isFunction(result) && self._r.push(result);
			_context = prev;
			self.selector = prevSelector;
			self.isReverted = false;
			return result;
		};
		self.last = f;
		return name === _isFunction ? f(self, function(func) {
			return self.add(null, func);
		}) : name ? self[name] = f : f;
	};
	_proto5.ignore = function ignore(func) {
		var prev = _context;
		_context = null;
		func(this);
		_context = prev;
	};
	_proto5.getTweens = function getTweens() {
		var a = [];
		this.data.forEach(function(e) {
			return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
		});
		return a;
	};
	_proto5.clear = function clear() {
		this._r.length = this.data.length = 0;
	};
	_proto5.kill = function kill(revert, matchMedia) {
		var _this4 = this;
		if (revert) (function() {
			var tweens = _this4.getTweens(), i = _this4.data.length, t;
			while (i--) {
				t = _this4.data[i];
				if (t.data === "isFlip") {
					t.revert();
					t.getChildren(true, true, false).forEach(function(tween) {
						return tweens.splice(tweens.indexOf(tween), 1);
					});
				}
			}
			tweens.map(function(t) {
				return {
					g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
					t
				};
			}).sort(function(a, b) {
				return b.g - a.g || -Infinity;
			}).forEach(function(o) {
				return o.t.revert(revert);
			});
			i = _this4.data.length;
			while (i--) {
				t = _this4.data[i];
				if (t instanceof Timeline) {
					if (t.data !== "nested") {
						t.scrollTrigger && t.scrollTrigger.revert();
						t.kill();
					}
				} else !(t instanceof Tween) && t.revert && t.revert(revert);
			}
			_this4._r.forEach(function(f) {
				return f(revert, _this4);
			});
			_this4.isReverted = true;
		})();
		else this.data.forEach(function(e) {
			return e.kill && e.kill();
		});
		this.clear();
		if (matchMedia) {
			var i = _media.length;
			while (i--) _media[i].id === this.id && _media.splice(i, 1);
		}
	};
	_proto5.revert = function revert(config) {
		this.kill(config || {});
	};
	return Context;
}();
var MatchMedia = /* @__PURE__ */ function() {
	function MatchMedia(scope) {
		this.contexts = [];
		this.scope = scope;
		_context && _context.data.push(this);
	}
	var _proto6 = MatchMedia.prototype;
	_proto6.add = function add(conditions, func, scope) {
		_isObject(conditions) || (conditions = { matches: conditions });
		var context = new Context(0, scope || this.scope), cond = context.conditions = {}, mq, p, active;
		_context && !context.selector && (context.selector = _context.selector);
		this.contexts.push(context);
		func = context.add("onMatch", func);
		context.queries = conditions;
		for (p in conditions) if (p === "all") active = 1;
		else {
			mq = _win$1.matchMedia(conditions[p]);
			if (mq) {
				_media.indexOf(context) < 0 && _media.push(context);
				(cond[p] = mq.matches) && (active = 1);
				mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
			}
		}
		active && func(context, function(f) {
			return context.add(null, f);
		});
		return this;
	};
	_proto6.revert = function revert(config) {
		this.kill(config || {});
	};
	_proto6.kill = function kill(revert) {
		this.contexts.forEach(function(c) {
			return c.kill(revert, true);
		});
	};
	return MatchMedia;
}();
var _gsap = {
	registerPlugin: function registerPlugin() {
		for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
		args.forEach(function(config) {
			return _createPlugin(config);
		});
	},
	timeline: function timeline(vars) {
		return new Timeline(vars);
	},
	getTweensOf: function getTweensOf(targets, onlyActive) {
		return _globalTimeline.getTweensOf(targets, onlyActive);
	},
	getProperty: function getProperty(target, property, unit, uncache) {
		_isString(target) && (target = toArray(target)[0]);
		var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
		unit === "native" && (unit = "");
		return !target ? target : !property ? function(property, unit, uncache) {
			return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
		} : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
	},
	quickSetter: function quickSetter(target, property, unit) {
		target = toArray(target);
		if (target.length > 1) {
			var setters = target.map(function(t) {
				return gsap.quickSetter(t, property, unit);
			}), l = setters.length;
			return function(value) {
				var i = l;
				while (i--) setters[i](value);
			};
		}
		target = target[0] || {};
		var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
			var p = new Plugin();
			_quickTween._pt = 0;
			p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
			p.render(1, p);
			_quickTween._pt && _renderPropTweens(1, _quickTween);
		} : cache.set(target, p);
		return Plugin ? setter : function(value) {
			return setter(target, p, unit ? value + unit : value, cache, 1);
		};
	},
	quickTo: function quickTo(target, property, vars) {
		var _setDefaults2;
		var tween = gsap.to(target, _setDefaults((_setDefaults2 = {}, _setDefaults2[property] = "+=0.1", _setDefaults2.paused = true, _setDefaults2.stagger = 0, _setDefaults2), vars || {})), func = function func(value, start, startIsRelative) {
			return tween.resetTo(property, value, start, startIsRelative);
		};
		func.tween = tween;
		return func;
	},
	isTweening: function isTweening(targets) {
		return _globalTimeline.getTweensOf(targets, true).length > 0;
	},
	defaults: function defaults(value) {
		value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
		return _mergeDeep(_defaults, value || {});
	},
	config: function config(value) {
		return _mergeDeep(_config, value || {});
	},
	registerEffect: function registerEffect(_ref3) {
		var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
		(plugins || "").split(",").forEach(function(pluginName) {
			return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
		});
		_effects[name] = function(targets, vars, tl) {
			return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
		};
		if (extendTimeline) Timeline.prototype[name] = function(targets, vars, position) {
			return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
		};
	},
	registerEase: function registerEase(name, ease) {
		_easeMap[name] = _parseEase(ease);
	},
	parseEase: function parseEase(ease, defaultEase) {
		return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
	},
	getById: function getById(id) {
		return _globalTimeline.getById(id);
	},
	exportRoot: function exportRoot(vars, includeDelayedCalls) {
		if (vars === void 0) vars = {};
		var tl = new Timeline(vars), child, next;
		tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
		_globalTimeline.remove(tl);
		tl._dp = 0;
		tl._time = tl._tTime = _globalTimeline._time;
		child = _globalTimeline._first;
		while (child) {
			next = child._next;
			if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) _addToTimeline(tl, child, child._start - child._delay);
			child = next;
		}
		_addToTimeline(_globalTimeline, tl, 0);
		return tl;
	},
	context: function context(func, scope) {
		return func ? new Context(func, scope) : _context;
	},
	matchMedia: function matchMedia(scope) {
		return new MatchMedia(scope);
	},
	matchMediaRefresh: function matchMediaRefresh() {
		return _media.forEach(function(c) {
			var cond = c.conditions, found, p;
			for (p in cond) if (cond[p]) {
				cond[p] = false;
				found = 1;
			}
			found && c.revert();
		}) || _onMediaChange();
	},
	addEventListener: function addEventListener(type, callback) {
		var a = _listeners[type] || (_listeners[type] = []);
		~a.indexOf(callback) || a.push(callback);
	},
	removeEventListener: function removeEventListener(type, callback) {
		var a = _listeners[type], i = a && a.indexOf(callback);
		i >= 0 && a.splice(i, 1);
	},
	utils: {
		wrap,
		wrapYoyo,
		distribute,
		random,
		snap,
		normalize,
		getUnit,
		clamp: clamp$1,
		splitColor,
		toArray,
		selector,
		mapRange,
		pipe: pipe$1,
		unitize,
		interpolate: interpolate$1,
		shuffle
	},
	install: _install,
	effects: _effects,
	ticker: _ticker,
	updateRoot: Timeline.updateRoot,
	plugins: _plugins,
	globalTimeline: _globalTimeline,
	core: {
		PropTween,
		globals: _addGlobal,
		Tween,
		Timeline,
		Animation,
		getCache: _getCache,
		_removeLinkedListItem,
		reverting: function reverting() {
			return _reverting$1;
		},
		context: function context(toAdd) {
			if (toAdd && _context) {
				_context.data.push(toAdd);
				toAdd._ctx = _context;
			}
			return _context;
		},
		suppressOverwrites: function suppressOverwrites(value) {
			return _suppressOverwrites = value;
		}
	}
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
	return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, { duration: 0 });
var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
	var pt = plugin._pt;
	while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) pt = pt._next;
	return pt;
}, _addModifiers = function _addModifiers(tween, modifiers) {
	var targets = tween._targets, p, i, pt;
	for (p in modifiers) {
		i = targets.length;
		while (i--) {
			pt = tween._ptLookup[i][p];
			if (pt && (pt = pt.d)) {
				if (pt._pt) pt = _getPluginPropTween(pt, p);
				pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
			}
		}
	}
}, _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
	return {
		name,
		headless: 1,
		rawVars: 1,
		init: function init(target, vars, tween) {
			tween._onInit = function(tween) {
				var temp, p;
				if (_isString(vars)) {
					temp = {};
					_forEachName(vars, function(name) {
						return temp[name] = 1;
					});
					vars = temp;
				}
				if (modifier) {
					temp = {};
					for (p in vars) temp[p] = modifier(vars[p]);
					vars = temp;
				}
				_addModifiers(tween, vars);
			};
		}
	};
};
var gsap = _gsap.registerPlugin({
	name: "attr",
	init: function init(target, vars, tween, index, targets) {
		var p, pt, v;
		this.tween = tween;
		for (p in vars) {
			v = target.getAttribute(p) || "";
			pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
			pt.op = p;
			pt.b = v;
			this._props.push(p);
		}
	},
	render: function render(ratio, data) {
		var pt = data._pt;
		while (pt) {
			_reverting$1 ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
			pt = pt._next;
		}
	}
}, {
	name: "endArray",
	headless: 1,
	init: function init(target, value) {
		var i = value.length;
		while (i--) this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
	}
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
Tween.version = Timeline.version = gsap.version = "3.14.2";
_coreReady = 1;
_windowExists$1() && _wake();
_easeMap.Power0;
_easeMap.Power1;
_easeMap.Power2;
_easeMap.Power3;
_easeMap.Power4;
_easeMap.Linear;
_easeMap.Quad;
_easeMap.Cubic;
_easeMap.Quart;
_easeMap.Quint;
_easeMap.Strong;
_easeMap.Elastic;
_easeMap.Back;
_easeMap.SteppedEase;
_easeMap.Bounce;
_easeMap.Sine;
_easeMap.Expo;
_easeMap.Circ;
//#endregion
//#region node_modules/gsap/CSSPlugin.js
/*!
* CSSPlugin 3.14.2
* https://gsap.com
*
* Copyright 2008-2025, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
var _win, _doc, _docElement, _pluginInitted, _tempDiv, _recentSetterPlugin, _reverting, _windowExists = function _windowExists() {
	return typeof window !== "undefined";
}, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
	autoAlpha: "opacity,visibility",
	scale: "scaleX,scaleY",
	alpha: "opacity"
}, _renderCSSProp = function _renderCSSProp(ratio, data) {
	return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
}, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
	return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
}, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
	return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
}, _renderCSSPropWithBeginningAndEnd = function _renderCSSPropWithBeginningAndEnd(ratio, data) {
	return data.set(data.t, data.p, ratio === 1 ? data.e : ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
}, _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
	var value = data.s + data.c * ratio;
	data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
}, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
	return data.set(data.t, data.p, ratio ? data.e : data.b, data);
}, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
	return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
}, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
	return target.style[property] = value;
}, _setterCSSProp = function _setterCSSProp(target, property, value) {
	return target.style.setProperty(property, value);
}, _setterTransform = function _setterTransform(target, property, value) {
	return target._gsap[property] = value;
}, _setterScale = function _setterScale(target, property, value) {
	return target._gsap.scaleX = target._gsap.scaleY = value;
}, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
	var cache = target._gsap;
	cache.scaleX = cache.scaleY = value;
	cache.renderTransform(ratio, cache);
}, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
	var cache = target._gsap;
	cache[property] = value;
	cache.renderTransform(ratio, cache);
}, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _saveStyle = function _saveStyle(property, isNotCSS) {
	var _this = this;
	var target = this.target, style = target.style, cache = target._gsap;
	if (property in _transformProps && style) {
		this.tfm = this.tfm || {};
		if (property !== "transform") {
			property = _propertyAliases[property] || property;
			~property.indexOf(",") ? property.split(",").forEach(function(a) {
				return _this.tfm[a] = _get(target, a);
			}) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
			property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
		} else return _propertyAliases.transform.split(",").forEach(function(p) {
			return _saveStyle.call(_this, p, isNotCSS);
		});
		if (this.props.indexOf(_transformProp) >= 0) return;
		if (cache.svg) {
			this.svgo = target.getAttribute("data-svg-origin");
			this.props.push(_transformOriginProp, isNotCSS, "");
		}
		property = _transformProp;
	}
	(style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
}, _removeIndependentTransforms = function _removeIndependentTransforms(style) {
	if (style.translate) {
		style.removeProperty("translate");
		style.removeProperty("scale");
		style.removeProperty("rotate");
	}
}, _revertStyle = function _revertStyle() {
	var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
	for (i = 0; i < props.length; i += 3) if (!props[i + 1]) props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
	else if (props[i + 1] === 2) target[props[i]](props[i + 2]);
	else target[props[i]] = props[i + 2];
	if (this.tfm) {
		for (p in this.tfm) cache[p] = this.tfm[p];
		if (cache.svg) {
			cache.renderTransform();
			target.setAttribute("data-svg-origin", this.svgo || "");
		}
		i = _reverting();
		if ((!i || !i.isStart) && !style[_transformProp]) {
			_removeIndependentTransforms(style);
			if (cache.zOrigin && style[_transformOriginProp]) {
				style[_transformOriginProp] += " " + cache.zOrigin + "px";
				cache.zOrigin = 0;
				cache.renderTransform();
			}
			cache.uncache = 1;
		}
	}
}, _getStyleSaver = function _getStyleSaver(target, properties) {
	var saver = {
		target,
		props: [],
		revert: _revertStyle,
		save: _saveStyle
	};
	target._gsap || gsap.core.getCache(target);
	properties && target.style && target.nodeType && properties.split(",").forEach(function(p) {
		return saver.save(p);
	});
	return saver;
}, _supports3D, _createElement = function _createElement(type, ns) {
	var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type);
	return e && e.style ? e : _doc.createElement(type);
}, _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
	var cs = getComputedStyle(target);
	return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
}, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
	var s = (element || _tempDiv).style, i = 5;
	if (property in s && !preferPrefix) return property;
	property = property.charAt(0).toUpperCase() + property.substr(1);
	while (i-- && !(_prefixes[i] + property in s));
	return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
}, _initCore = function _initCore() {
	if (_windowExists() && window.document) {
		_win = window;
		_doc = _win.document;
		_docElement = _doc.documentElement;
		_tempDiv = _createElement("div") || { style: {} };
		_createElement("div");
		_transformProp = _checkPropPrefix(_transformProp);
		_transformOriginProp = _transformProp + "Origin";
		_tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
		_supports3D = !!_checkPropPrefix("perspective");
		_reverting = gsap.core.reverting;
		_pluginInitted = 1;
	}
}, _getReparentedCloneBBox = function _getReparentedCloneBBox(target) {
	var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
	clone.style.display = "block";
	svg.appendChild(clone);
	_docElement.appendChild(svg);
	try {
		bbox = clone.getBBox();
	} catch (e) {}
	svg.removeChild(clone);
	_docElement.removeChild(svg);
	return bbox;
}, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
	var i = attributesArray.length;
	while (i--) if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
}, _getBBox = function _getBBox(target) {
	var bounds, cloned;
	try {
		bounds = target.getBBox();
	} catch (error) {
		bounds = _getReparentedCloneBBox(target);
		cloned = 1;
	}
	bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target));
	return bounds && !bounds.width && !bounds.x && !bounds.y ? {
		x: +_getAttributeFallbacks(target, [
			"x",
			"cx",
			"x1"
		]) || 0,
		y: +_getAttributeFallbacks(target, [
			"y",
			"cy",
			"y1"
		]) || 0,
		width: 0,
		height: 0
	} : bounds;
}, _isSVG = function _isSVG(e) {
	return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
}, _removeProperty = function _removeProperty(target, property) {
	if (property) {
		var style = target.style, first2Chars;
		if (property in _transformProps && property !== _transformOriginProp) property = _transformProp;
		if (style.removeProperty) {
			first2Chars = property.substr(0, 2);
			if (first2Chars === "ms" || property.substr(0, 6) === "webkit") property = "-" + property;
			style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
		} else style.removeAttribute(property);
	}
}, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
	var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
	plugin._pt = pt;
	pt.b = beginning;
	pt.e = end;
	plugin._props.push(property);
	return pt;
}, _nonConvertibleUnits = {
	deg: 1,
	rad: 1,
	turn: 1
}, _nonStandardLayouts = {
	grid: 1,
	flex: 1
}, _convertToUnit = function _convertToUnit(target, property, value, unit) {
	var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
	if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) return curValue;
	curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
	isSVG = target.getCTM && _isSVG(target);
	if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
		px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
		return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
	}
	style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
	parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
	if (isSVG) parent = (target.ownerSVGElement || {}).parentNode;
	if (!parent || parent === _doc || !parent.appendChild) parent = _doc.body;
	cache = parent._gsap;
	if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) return _round(curValue / cache.width * amount);
	else {
		if (toPercent && (property === "height" || property === "width")) {
			var v = target.style[property];
			target.style[property] = amount + unit;
			px = target[measureProperty];
			v ? target.style[property] = v : _removeProperty(target, property);
		} else {
			(toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
			parent === target && (style.position = "static");
			parent.appendChild(_tempDiv);
			px = _tempDiv[measureProperty];
			parent.removeChild(_tempDiv);
			style.position = "absolute";
		}
		if (horizontal && toPercent) {
			cache = _getCache(parent);
			cache.time = _ticker.time;
			cache.width = parent[measureProperty];
		}
	}
	return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
}, _get = function _get(target, property, unit, uncache) {
	var value;
	_pluginInitted || _initCore();
	if (property in _propertyAliases && property !== "transform") {
		property = _propertyAliases[property];
		if (~property.indexOf(",")) property = property.split(",")[0];
	}
	if (_transformProps[property] && property !== "transform") {
		value = _parseTransform(target, uncache);
		value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
	} else {
		value = target.style[property];
		if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
	}
	return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
}, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
	if (!start || start === "none") {
		var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
		if (s && s !== start) {
			prop = p;
			start = s;
		} else if (prop === "borderColor") start = _getComputedProperty(target, "borderTopColor");
	}
	var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
	pt.b = start;
	pt.e = end;
	start += "";
	end += "";
	if (end.substring(0, 6) === "var(--") end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
	if (end === "auto") {
		startValue = target.style[prop];
		target.style[prop] = end;
		end = _getComputedProperty(target, prop) || end;
		startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
	}
	a = [start, end];
	_colorStringFilter(a);
	start = a[0];
	end = a[1];
	startValues = start.match(_numWithUnitExp) || [];
	endValues = end.match(_numWithUnitExp) || [];
	if (endValues.length) {
		while (result = _numWithUnitExp.exec(end)) {
			endValue = result[0];
			chunk = end.substring(index, result.index);
			if (color) color = (color + 1) % 5;
			else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
			if (endValue !== (startValue = startValues[matchIndex++] || "")) {
				startNum = parseFloat(startValue) || 0;
				startUnit = startValue.substr((startNum + "").length);
				endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
				endNum = parseFloat(endValue);
				endUnit = endValue.substr((endNum + "").length);
				index = _numWithUnitExp.lastIndex - endUnit.length;
				if (!endUnit) {
					endUnit = endUnit || _config.units[prop] || startUnit;
					if (index === end.length) {
						end += endUnit;
						pt.e += endUnit;
					}
				}
				if (startUnit !== endUnit) startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
				pt._pt = {
					_next: pt._pt,
					p: chunk || matchIndex === 1 ? chunk : ",",
					s: startNum,
					c: endNum - startNum,
					m: color && color < 4 || prop === "zIndex" ? Math.round : 0
				};
			}
		}
		pt.c = index < end.length ? end.substring(index, end.length) : "";
	} else pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
	_relExp.test(end) && (pt.e = 0);
	this._pt = pt;
	return pt;
}, _keywordToPercent = {
	top: "0%",
	bottom: "100%",
	left: "0%",
	right: "100%",
	center: "50%"
}, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
	var split = value.split(" "), x = split[0], y = split[1] || "50%";
	if (x === "top" || x === "bottom" || y === "left" || y === "right") {
		value = x;
		x = y;
		y = value;
	}
	split[0] = _keywordToPercent[x] || x;
	split[1] = _keywordToPercent[y] || y;
	return split.join(" ");
}, _renderClearProps = function _renderClearProps(ratio, data) {
	if (data.tween && data.tween._time === data.tween._dur) {
		var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
		if (props === "all" || props === true) {
			style.cssText = "";
			clearTransforms = 1;
		} else {
			props = props.split(",");
			i = props.length;
			while (--i > -1) {
				prop = props[i];
				if (_transformProps[prop]) {
					clearTransforms = 1;
					prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
				}
				_removeProperty(target, prop);
			}
		}
		if (clearTransforms) {
			_removeProperty(target, _transformProp);
			if (cache) {
				cache.svg && target.removeAttribute("transform");
				style.scale = style.rotate = style.translate = "none";
				_parseTransform(target, 1);
				cache.uncache = 1;
				_removeIndependentTransforms(style);
			}
		}
	}
}, _specialProps = { clearProps: function clearProps(plugin, target, property, endValue, tween) {
	if (tween.data !== "isFromStart") {
		var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
		pt.u = endValue;
		pt.pr = -10;
		pt.tween = tween;
		plugin._props.push(property);
		return 1;
	}
} }, _identity2DMatrix = [
	1,
	0,
	0,
	1,
	0,
	0
], _rotationalProperties = {}, _isNullTransform = function _isNullTransform(value) {
	return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
}, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
	var matrixString = _getComputedProperty(target, _transformProp);
	return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
}, _getMatrix = function _getMatrix(target, force2D) {
	var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
	if (cache.svg && target.getAttribute("transform")) {
		temp = target.transform.baseVal.consolidate().matrix;
		matrix = [
			temp.a,
			temp.b,
			temp.c,
			temp.d,
			temp.e,
			temp.f
		];
		return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
	} else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
		temp = style.display;
		style.display = "block";
		parent = target.parentNode;
		if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
			addedToDOM = 1;
			nextSibling = target.nextElementSibling;
			_docElement.appendChild(target);
		}
		matrix = _getComputedTransformMatrixAsArray(target);
		temp ? style.display = temp : _removeProperty(target, "display");
		if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
	}
	return force2D && matrix.length > 6 ? [
		matrix[0],
		matrix[1],
		matrix[4],
		matrix[5],
		matrix[12],
		matrix[13]
	] : matrix;
}, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
	var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
	if (!originIsAbsolute) {
		bounds = _getBBox(target);
		xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
		yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
	} else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
		x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
		y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
		xOrigin = x;
		yOrigin = y;
	}
	if (smooth || smooth !== false && cache.smooth) {
		tx = xOrigin - xOriginOld;
		ty = yOrigin - yOriginOld;
		cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
		cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
	} else cache.xOffset = cache.yOffset = 0;
	cache.xOrigin = xOrigin;
	cache.yOrigin = yOrigin;
	cache.smooth = !!smooth;
	cache.origin = origin;
	cache.originIsAbsolute = !!originIsAbsolute;
	target.style[_transformOriginProp] = "0px 0px";
	if (pluginToAddPropTweensTo) {
		_addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
		_addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
		_addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
		_addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
	}
	target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
}, _parseTransform = function _parseTransform(target, uncache) {
	var cache = target._gsap || new GSCache(target);
	if ("x" in cache && !uncache && !cache.uncache) return cache;
	var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0, y, z, scaleX = scaleY = 1, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
	cache.svg = !!(target.getCTM && _isSVG(target));
	if (cs.translate) {
		if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
		style.scale = style.rotate = style.translate = "none";
	}
	matrix = _getMatrix(target, cache.svg);
	if (cache.svg) {
		if (cache.uncache) {
			t2 = target.getBBox();
			origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
			t1 = "";
		} else t1 = !uncache && target.getAttribute("data-svg-origin");
		_applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
	}
	xOrigin = cache.xOrigin || 0;
	yOrigin = cache.yOrigin || 0;
	if (matrix !== _identity2DMatrix) {
		a = matrix[0];
		b = matrix[1];
		c = matrix[2];
		d = matrix[3];
		x = a12 = matrix[4];
		y = a22 = matrix[5];
		if (matrix.length === 6) {
			scaleX = Math.sqrt(a * a + b * b);
			scaleY = Math.sqrt(d * d + c * c);
			rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
			skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
			skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
			if (cache.svg) {
				x -= xOrigin - (xOrigin * a + yOrigin * c);
				y -= yOrigin - (xOrigin * b + yOrigin * d);
			}
		} else {
			a32 = matrix[6];
			a42 = matrix[7];
			a13 = matrix[8];
			a23 = matrix[9];
			a33 = matrix[10];
			a43 = matrix[11];
			x = matrix[12];
			y = matrix[13];
			z = matrix[14];
			angle = _atan2(a32, a33);
			rotationX = angle * _RAD2DEG;
			if (angle) {
				cos = Math.cos(-angle);
				sin = Math.sin(-angle);
				t1 = a12 * cos + a13 * sin;
				t2 = a22 * cos + a23 * sin;
				t3 = a32 * cos + a33 * sin;
				a13 = a12 * -sin + a13 * cos;
				a23 = a22 * -sin + a23 * cos;
				a33 = a32 * -sin + a33 * cos;
				a43 = a42 * -sin + a43 * cos;
				a12 = t1;
				a22 = t2;
				a32 = t3;
			}
			angle = _atan2(-c, a33);
			rotationY = angle * _RAD2DEG;
			if (angle) {
				cos = Math.cos(-angle);
				sin = Math.sin(-angle);
				t1 = a * cos - a13 * sin;
				t2 = b * cos - a23 * sin;
				t3 = c * cos - a33 * sin;
				a43 = d * sin + a43 * cos;
				a = t1;
				b = t2;
				c = t3;
			}
			angle = _atan2(b, a);
			rotation = angle * _RAD2DEG;
			if (angle) {
				cos = Math.cos(angle);
				sin = Math.sin(angle);
				t1 = a * cos + b * sin;
				t2 = a12 * cos + a22 * sin;
				b = b * cos - a * sin;
				a22 = a22 * cos - a12 * sin;
				a = t1;
				a12 = t2;
			}
			if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
				rotationX = rotation = 0;
				rotationY = 180 - rotationY;
			}
			scaleX = _round(Math.sqrt(a * a + b * b + c * c));
			scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
			angle = _atan2(a12, a22);
			skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
			perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
		}
		if (cache.svg) {
			t1 = target.getAttribute("transform");
			cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
			t1 && target.setAttribute("transform", t1);
		}
	}
	if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) if (invertedScaleX) {
		scaleX *= -1;
		skewX += rotation <= 0 ? 180 : -180;
		rotation += rotation <= 0 ? 180 : -180;
	} else {
		scaleY *= -1;
		skewX += skewX <= 0 ? 180 : -180;
	}
	uncache = uncache || cache.uncache;
	cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
	cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
	cache.z = z + px;
	cache.scaleX = _round(scaleX);
	cache.scaleY = _round(scaleY);
	cache.rotation = _round(rotation) + deg;
	cache.rotationX = _round(rotationX) + deg;
	cache.rotationY = _round(rotationY) + deg;
	cache.skewX = skewX + deg;
	cache.skewY = skewY + deg;
	cache.transformPerspective = perspective + px;
	if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) style[_transformOriginProp] = _firstTwoOnly(origin);
	cache.xOffset = cache.yOffset = 0;
	cache.force3D = _config.force3D;
	cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
	cache.uncache = 0;
	return cache;
}, _firstTwoOnly = function _firstTwoOnly(value) {
	return (value = value.split(" "))[0] + " " + value[1];
}, _addPxTranslate = function _addPxTranslate(target, start, value) {
	var unit = getUnit(start);
	return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
}, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
	cache.z = "0px";
	cache.rotationY = cache.rotationX = "0deg";
	cache.force3D = 0;
	_renderCSSTransforms(ratio, cache);
}, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
	var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
	if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
		var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
		angle = parseFloat(rotationX) * _DEG2RAD;
		cos = Math.cos(angle);
		x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
		y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
		z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
	}
	if (transformPerspective !== _zeroPx) transforms += "perspective(" + transformPerspective + _endParenthesis;
	if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
	if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
	if (rotation !== _zeroDeg) transforms += "rotate(" + rotation + _endParenthesis;
	if (rotationY !== _zeroDeg) transforms += "rotateY(" + rotationY + _endParenthesis;
	if (rotationX !== _zeroDeg) transforms += "rotateX(" + rotationX + _endParenthesis;
	if (skewX !== _zeroDeg || skewY !== _zeroDeg) transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
	if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
	target.style[_transformProp] = transforms || "translate(0, 0)";
}, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
	var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
	rotation = parseFloat(rotation);
	skewX = parseFloat(skewX);
	skewY = parseFloat(skewY);
	if (skewY) {
		skewY = parseFloat(skewY);
		skewX += skewY;
		rotation += skewY;
	}
	if (rotation || skewX) {
		rotation *= _DEG2RAD;
		skewX *= _DEG2RAD;
		a11 = Math.cos(rotation) * scaleX;
		a21 = Math.sin(rotation) * scaleX;
		a12 = Math.sin(rotation - skewX) * -scaleY;
		a22 = Math.cos(rotation - skewX) * scaleY;
		if (skewX) {
			skewY *= _DEG2RAD;
			temp = Math.tan(skewX - skewY);
			temp = Math.sqrt(1 + temp * temp);
			a12 *= temp;
			a22 *= temp;
			if (skewY) {
				temp = Math.tan(skewY);
				temp = Math.sqrt(1 + temp * temp);
				a11 *= temp;
				a21 *= temp;
			}
		}
		a11 = _round(a11);
		a21 = _round(a21);
		a12 = _round(a12);
		a22 = _round(a22);
	} else {
		a11 = scaleX;
		a22 = scaleY;
		a21 = a12 = 0;
	}
	if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
		tx = _convertToUnit(target, "x", x, "px");
		ty = _convertToUnit(target, "y", y, "px");
	}
	if (xOrigin || yOrigin || xOffset || yOffset) {
		tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
		ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
	}
	if (xPercent || yPercent) {
		temp = target.getBBox();
		tx = _round(tx + xPercent / 100 * temp.width);
		ty = _round(ty + yPercent / 100 * temp.height);
	}
	temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
	target.setAttribute("transform", temp);
	forceCSS && (target.style[_transformProp] = temp);
}, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
	var cap = 360, isString = _isString(endValue), change = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1) - startNum, finalValue = startNum + change + "deg", direction, pt;
	if (isString) {
		direction = endValue.split("_")[1];
		if (direction === "short") {
			change %= cap;
			if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
		}
		if (direction === "cw" && change < 0) change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
		else if (direction === "ccw" && change > 0) change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
	}
	plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
	pt.e = finalValue;
	pt.u = "deg";
	plugin._props.push(property);
	return pt;
}, _assign = function _assign(target, source) {
	for (var p in source) target[p] = source[p];
	return target;
}, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
	var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
	if (startCache.svg) {
		startValue = target.getAttribute("transform");
		target.setAttribute("transform", "");
		style[_transformProp] = transforms;
		endCache = _parseTransform(target, 1);
		_removeProperty(target, _transformProp);
		target.setAttribute("transform", startValue);
	} else {
		startValue = getComputedStyle(target)[_transformProp];
		style[_transformProp] = transforms;
		endCache = _parseTransform(target, 1);
		style[_transformProp] = startValue;
	}
	for (p in _transformProps) {
		startValue = startCache[p];
		endValue = endCache[p];
		if (startValue !== endValue && exclude.indexOf(p) < 0) {
			startUnit = getUnit(startValue);
			endUnit = getUnit(endValue);
			startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
			endNum = parseFloat(endValue);
			plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
			plugin._pt.u = endUnit || 0;
			plugin._props.push(p);
		}
	}
	_assign(endCache, startCache);
};
_forEachName("padding,margin,Width,Radius", function(name, index) {
	var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
		t,
		r,
		b,
		l
	] : [
		t + l,
		t + r,
		b + r,
		b + l
	]).map(function(side) {
		return index < 2 ? name + side : "border" + side + name;
	});
	_specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
		var a, vars;
		if (arguments.length < 4) {
			a = props.map(function(prop) {
				return _get(plugin, prop, property);
			});
			vars = a.join(" ");
			return vars.split(a[0]).length === 5 ? a[0] : vars;
		}
		a = (endValue + "").split(" ");
		vars = {};
		props.forEach(function(prop, i) {
			return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
		});
		plugin.init(target, vars, tween);
	};
});
var CSSPlugin = {
	name: "css",
	register: _initCore,
	targetTest: function targetTest(target) {
		return target.style && target.nodeType;
	},
	init: function init(target, vars, tween, index, targets) {
		var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps, finalTransformValue;
		_pluginInitted || _initCore();
		this.styles = this.styles || _getStyleSaver(target);
		inlineProps = this.styles.props;
		this.tween = tween;
		for (p in vars) {
			if (p === "autoRound") continue;
			endValue = vars[p];
			if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) continue;
			type = typeof endValue;
			specialProp = _specialProps[p];
			if (type === "function") {
				endValue = endValue.call(tween, index, target, targets);
				type = typeof endValue;
			}
			if (type === "string" && ~endValue.indexOf("random(")) endValue = _replaceRandom(endValue);
			if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
			else if (p.substr(0, 2) === "--") {
				startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
				endValue += "";
				_colorExp.lastIndex = 0;
				if (!_colorExp.test(startValue)) {
					startUnit = getUnit(startValue);
					endUnit = getUnit(endValue);
					endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
				}
				this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
				props.push(p);
				inlineProps.push(p, 0, style[p]);
			} else if (type !== "undefined") {
				if (startAt && p in startAt) {
					startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
					_isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
					getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
					(startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
				} else startValue = _get(target, p);
				startNum = parseFloat(startValue);
				relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
				relative && (endValue = endValue.substr(2));
				endNum = parseFloat(endValue);
				if (p in _propertyAliases) {
					if (p === "autoAlpha") {
						if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) startNum = 0;
						inlineProps.push("visibility", 0, style.visibility);
						_addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
					}
					if (p !== "scale" && p !== "transform") {
						p = _propertyAliases[p];
						~p.indexOf(",") && (p = p.split(",")[0]);
					}
				}
				isTransformRelated = p in _transformProps;
				if (isTransformRelated) {
					this.styles.save(p);
					finalTransformValue = endValue;
					if (type === "string" && endValue.substring(0, 6) === "var(--") {
						endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
						if (endValue.substring(0, 5) === "calc(") {
							var origPerspective = target.style.perspective;
							target.style.perspective = endValue;
							endValue = _getComputedProperty(target, "perspective");
							origPerspective ? target.style.perspective = origPerspective : _removeProperty(target, "perspective");
						}
						endNum = parseFloat(endValue);
					}
					if (!transformPropTween) {
						cache = target._gsap;
						cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
						smooth = vars.smoothOrigin !== false && cache.smooth;
						transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
						transformPropTween.dep = 1;
					}
					if (p === "scale") {
						this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
						this._pt.u = 0;
						props.push("scaleY", p);
						p += "X";
					} else if (p === "transformOrigin") {
						inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
						endValue = _convertKeywordsToPercentages(endValue);
						if (cache.svg) _applySVGOrigin(target, endValue, 0, smooth, 0, this);
						else {
							endUnit = parseFloat(endValue.split(" ")[2]) || 0;
							endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
							_addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
						}
						continue;
					} else if (p === "svgOrigin") {
						_applySVGOrigin(target, endValue, 1, smooth, 0, this);
						continue;
					} else if (p in _rotationalProperties) {
						_addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
						continue;
					} else if (p === "smoothOrigin") {
						_addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
						continue;
					} else if (p === "force3D") {
						cache[p] = endValue;
						continue;
					} else if (p === "transform") {
						_addRawTransformPTs(this, endValue, target);
						continue;
					}
				} else if (!(p in style)) p = _checkPropPrefix(p) || p;
				if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
					startUnit = (startValue + "").substr((startNum + "").length);
					endNum || (endNum = 0);
					endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
					startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
					this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
					this._pt.u = endUnit || 0;
					if (isTransformRelated && finalTransformValue !== endValue) {
						this._pt.b = startValue;
						this._pt.e = finalTransformValue;
						this._pt.r = _renderCSSPropWithBeginningAndEnd;
					} else if (startUnit !== endUnit && endUnit !== "%") {
						this._pt.b = startValue;
						this._pt.r = _renderCSSPropWithBeginning;
					}
				} else if (!(p in style)) {
					if (p in target) this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
					else if (p !== "parseTransform") {
						_missingPlugin(p, endValue);
						continue;
					}
				} else _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
				isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
				props.push(p);
			}
		}
		hasPriority && _sortPropTweensByPriority(this);
	},
	render: function render(ratio, data) {
		if (data.tween._time || !_reverting()) {
			var pt = data._pt;
			while (pt) {
				pt.r(ratio, pt.d);
				pt = pt._next;
			}
		} else data.styles.revert();
	},
	get: _get,
	aliases: _propertyAliases,
	getSetter: function getSetter(target, property, plugin) {
		var p = _propertyAliases[property];
		p && p.indexOf(",") < 0 && (property = p);
		return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
	},
	core: {
		_removeProperty,
		_getMatrix
	}
};
gsap.utils.checkPrefix = _checkPropPrefix;
gsap.core.getStyleSaver = _getStyleSaver;
(function(positionAndScale, rotation, others, aliases) {
	var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
		_transformProps[name] = 1;
	});
	_forEachName(rotation, function(name) {
		_config.units[name] = "deg";
		_rotationalProperties[name] = 1;
	});
	_propertyAliases[all[13]] = positionAndScale + "," + rotation;
	_forEachName(aliases, function(name) {
		var split = name.split(":");
		_propertyAliases[split[1]] = all[split[0]];
	});
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
	_config.units[name] = "px";
});
gsap.registerPlugin(CSSPlugin);
(gsap.registerPlugin(CSSPlugin) || gsap).core.Tween;
//#endregion
//#region src/lib/components/GrowingIvy.svelte
function GrowingIvy($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		onDestroy(() => {});
		$$renderer.push(`<div class="fixed top-0 left-0 lg:left-8 w-16 h-screen pointer-events-none z-50 mix-blend-multiply" aria-hidden="true"><svg width="100%" height="100%" viewBox="0 0 100 1000" preserveAspectRatio="none"><path d="M50,0 Q80,100 50,200 T50,400 T50,600 T50,800 T50,1000" stroke="#1B3A24" stroke-width="4" fill="none" stroke-linecap="round" style="will-change: stroke-dashoffset;"></path><path d="M50,150 Q70,140 80,160 Q60,170 50,150" fill="#2a4a3f"></path><path d="M50,250 Q30,240 20,260 Q40,270 50,250" fill="#3a5f52"></path><path d="M50,350 Q75,340 85,360 Q65,370 50,350" fill="#1B3A24"></path><path d="M50,450 Q25,440 15,460 Q35,470 50,450" fill="#2a4a3f"></path><path d="M50,550 Q70,540 80,560 Q60,570 50,550" fill="#3a5f52"></path><path d="M50,700 Q30,690 20,710 Q40,720 50,700" fill="#1B3A24"></path><path d="M50,850 Q70,840 80,860 Q60,870 50,850" fill="#2a4a3f"></path></svg></div>`);
	});
}
//#endregion
//#region src/lib/components/ui/ExperienceQuestionnaire.svelte
function ExperienceQuestionnaire($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let isOpen = fallback($$props["isOpen"], false);
		const questions = [
			{
				question: "How are you travelling?",
				options: [
					"Just the two of us",
					"Honeymoon",
					"Small group (4–8)",
					"Solo but sociable",
					"Family"
				]
			},
			{
				question: "How long do you have?",
				options: [
					"4–5 nights",
					"7 nights",
					"10–12 nights",
					"Two weeks+",
					"Flexible"
				]
			},
			{
				question: "What pulls you most?",
				options: [
					"Ancient medinas & culture",
					"Desert silence",
					"Atlantic coast & surf",
					"Mountains & villages",
					"All of it"
				]
			}
		];
		let currentStep = 0;
		let selectedOption = null;
		let isCurating = true;
		let isSubmitting = false;
		let isSubmitted = false;
		let prevOpen = false;
		onDestroy(() => {
			if (typeof window !== "undefined" && document.body) document.body.style.overflow = "";
		});
		$: if (isOpen !== prevOpen) {
			prevOpen = isOpen;
			if (isOpen && typeof window !== "undefined") {
				document.body.style.overflow = "hidden";
				currentStep = 0;
				isCurating = true;
				selectedOption = null;
				isSubmitting = false;
				isSubmitted = false;
				requestAnimationFrame(() => {});
			} else if (!isOpen && typeof window !== "undefined") {
				if (document.body) document.body.style.overflow = "";
			}
		}
		if (isOpen) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="fixed inset-0 z-[60] bg-[#0f1f18]/95 backdrop-blur-md overflow-y-auto flex items-center justify-center p-4" role="dialog" aria-modal="true"><button class="fixed top-6 right-6 z-[70] w-12 h-12 flex items-center justify-center rounded-full border border-stone-400 text-stone-200 hover:border-gold-300 hover:text-gold-300 hover:bg-gold-300/10 transition-all duration-300 text-2xl leading-none" aria-label="Close modal">✕</button> <div class="w-full max-w-lg mx-auto bg-stone-100/95 backdrop-blur-sm rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-8 lg:p-10 relative z-10">`);
			if (currentStep < questions.length) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="flex flex-col items-center mb-10"><div class="flex space-x-2 w-full max-w-[200px] mb-4"><!--[-->`);
				const each_array = ensure_array_like(questions);
				for (let i = 0, $$length = each_array.length; i < $$length; i++) {
					each_array[i];
					$$renderer.push(`<div${attr_class(`h-[3px] flex-1 rounded-full transition-colors duration-500 ${stringify(i <= currentStep ? "bg-[#A65E46]" : "bg-gray-300")}`)}></div>`);
				}
				$$renderer.push(`<!--]--></div> <p class="font-sans text-[0.65rem] tracking-[0.2em] text-gray-500 uppercase">Question ${escape_html(currentStep + 1)} of ${escape_html(questions.length)}</p></div> <div class="anim-container"><h2 class="font-serif text-3xl md:text-3xl text-center text-gray-900 mb-8 leading-tight">${escape_html(questions[currentStep].question)}</h2> <div class="flex flex-col space-y-3"><!--[-->`);
				const each_array_1 = ensure_array_like(questions[currentStep].options);
				for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
					let option = each_array_1[$$index_1];
					$$renderer.push(`<button type="button"${attr_class(`group w-full px-6 py-4 text-left border rounded-lg transition-all duration-300 font-sans text-sm md:text-base text-gray-700 ${stringify(selectedOption === option ? "border-[#A65E46] bg-[#A65E46]/5 text-gray-900 shadow-sm" : "border-gray-300/80 hover:border-[#A65E46]/60 hover:bg-[#A65E46]/5 hover:text-gray-900")}`)}>${escape_html(option)}</button>`);
				}
				$$renderer.push(`<!--]--></div></div>`);
			} else {
				$$renderer.push("<!--[-1-->");
				if (isCurating) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<div class="anim-loading flex flex-col items-center justify-center py-16"><div class="relative w-12 h-12 mb-8"><div class="absolute inset-0 rounded-full border-4 border-gray-200"></div> <div class="absolute inset-0 rounded-full border-4 border-[#A65E46] border-t-transparent animate-spin"></div></div> <h2 class="font-serif text-2xl md:text-3xl text-gray-900 text-center">Curating your journey...</h2></div>`);
				} else if (!isSubmitted) {
					$$renderer.push("<!--[1-->");
					$$renderer.push(`<div class="anim-form"><div class="text-center mb-8"><h2 class="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Your Journey Awaits</h2> <p class="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">Based on your preferences, we have shaped a bespoke itinerary. Connect with our concierge to refine the details.</p></div> <div class="space-y-4"><input type="text" placeholder="Your Name" class="w-full px-6 py-4 rounded-lg border border-gray-300/80 font-sans text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#A65E46] focus:ring-1 focus:ring-[#A65E46] transition-all bg-transparent disabled:opacity-50"${attr("disabled", isSubmitting, true)}/> <input type="email" placeholder="Your Email" class="w-full px-6 py-4 rounded-lg border border-gray-300/80 font-sans text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#A65E46] focus:ring-1 focus:ring-[#A65E46] transition-all bg-transparent disabled:opacity-50"${attr("disabled", isSubmitting, true)}/> <button type="button"${attr("disabled", isSubmitting, true)} class="relative overflow-hidden w-full bg-[#A65E46] text-white py-4 mt-2 rounded-lg font-sans tracking-widest uppercase text-[0.75rem] font-medium hover:bg-[#8F513C] transition-colors shadow-lg shadow-[#A65E46]/20 disabled:opacity-80 disabled:cursor-wait">`);
					if (isSubmitting) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<span class="inline-block animate-pulse">Sending...</span>`);
					} else {
						$$renderer.push("<!--[-1-->");
						$$renderer.push(`Request Itinerary`);
					}
					$$renderer.push(`<!--]--></button> <p class="text-center font-sans text-xs text-gray-500 mt-4">Prefer to write directly? <a href="mailto:concierge@theruinedgarden.com" class="text-[#A65E46] hover:underline transition-all">concierge@theruinedgarden.com</a></p></div></div>`);
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<div class="anim-success flex flex-col items-center justify-center py-10 text-center"><div class="w-16 h-16 rounded-full bg-[#A65E46]/10 flex items-center justify-center mb-6 text-[#A65E46]"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" class="animate-[bounce_1s_ease-out]"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div> <h2 class="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Request Sent</h2> <p class="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">Our concierge will review your preferences and reach out shortly to finalize your bespoke experience.</p></div>`);
				}
				$$renderer.push(`<!--]-->`);
			}
			$$renderer.push(`<!--]--></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { isOpen });
	});
}
//#endregion
//#region src/lib/components/ui/MenuModal.svelte
function MenuModal($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let isOpen = fallback($$props["isOpen"], false);
		const menuData = [
			{
				category: "Starters",
				items: [
					{
						name: "Smoked Eggplants And Cheese",
						price: "80,00 dh"
					},
					{
						name: "Moroccan Trio Salade",
						price: "80,00 dh"
					},
					{
						name: "Moroccan Green Salade",
						price: "30,00 dh"
					},
					{
						name: "Sardines With Fresh Salade",
						price: "90,00 dh"
					},
					{
						name: "Briwat Trio — Chicken / Veg / Beef",
						price: "80,00 dh"
					}
				]
			},
			{
				category: "Soups",
				items: [
					{
						name: "Harira",
						price: "50,00 dh"
					},
					{
						name: "Besara",
						price: "50,00 dh"
					},
					{
						name: "Soup Of The Day",
						price: "50,00 dh"
					}
				]
			},
			{
				category: "Stews",
				items: [
					{
						name: "Seffa With Caramelized Onions And Raisins",
						price: "60,00 dh"
					},
					{
						name: "White Beans Stew",
						price: "50,00 dh"
					},
					{
						name: "Lentils Stew",
						price: "50,00 dh"
					},
					{
						name: "+ Add Egg",
						price: "10,00 dh"
					}
				]
			},
			{
				category: "Main Courses",
				items: [
					{
						name: "Chicken Pastilla",
						price: "160,00 dh"
					},
					{
						name: "Vegetarian Pastilla",
						price: "130,00 dh"
					},
					{
						name: "Vegetarian Tajine",
						price: "100,00 dh"
					},
					{
						name: "Lamb Tajine",
						price: "150,00 dh",
						description: "Lamb with caramelized onions, prunes, and apricots"
					},
					{
						name: "Chicken Refissa",
						price: "150,00 dh",
						description: "Steamed pastry with lentils, chicken, eggs, and fenugreek"
					},
					{
						name: "Chicken Daghmira",
						price: "150,00 dh",
						description: "Chicken with caramelized onions, preserved lemon, and olives"
					},
					{
						name: "Sardines Tajine",
						price: "130,00 dh",
						description: "Cooked sardines with tomato sauce and bell pepper"
					},
					{
						name: "Kefta Tajine",
						price: "130,00 dh",
						description: "Beef meatballs with tomato sauce and eggs"
					}
				]
			},
			{
				category: "Special Dishes — Pre-Order",
				items: [
					{
						name: "Pigeon Pastilla",
						price: "350,00 dh"
					},
					{
						name: "Saphardic Chicken",
						price: "400,00 dh",
						description: "Poached with beef stuffing, saffron, eggs, and chickpeas"
					},
					{
						name: "7 Hours Lamb Mechoui",
						price: "500,00 dh",
						description: "1 kg fresh lamb with vegetarian tajine — each additional kilo 250 dh"
					}
				]
			},
			{
				category: "Water",
				items: [{
					name: "Still Mineral Water",
					price: "10,00 dh",
					description: "0,5 l | 1,5 l"
				}, {
					name: "Sparkling Water",
					price: "15,00 dh",
					description: "0,5 l | 1 l"
				}]
			},
			{
				category: "Infusions",
				items: [
					{
						name: "Iced Mint Tea",
						price: "30,00 dh"
					},
					{
						name: "Lemon Verbena",
						price: "30,00 dh"
					},
					{
						name: "Moroccan Mint Tea",
						price: "30,00 dh"
					},
					{
						name: "Lipton / Earl Grey / English Breakfast",
						price: "30,00 dh"
					}
				]
			},
			{
				category: "Juice",
				items: [
					{
						name: "Lemonade Sour With Mint",
						price: "30,00 dh"
					},
					{
						name: "Fresh Orange Juice",
						price: "30,00 dh"
					},
					{
						name: "Dates & Orange Blossom Milk",
						price: "40,00 dh"
					},
					{
						name: "Juice Of The Day",
						price: "40,00 dh"
					}
				]
			},
			{
				category: "Soda",
				items: [{
					name: "Coca Cola / Sprite / Tonic / Coca Cola Zero / Salty Preserved Lemon With Sprite",
					price: "30,00 dh"
				}]
			},
			{
				category: "Coffee & Chocolate",
				items: [
					{
						name: "Espresso",
						price: "30,00 dh"
					},
					{
						name: "Macchiato",
						price: "30,00 dh"
					},
					{
						name: "Americano",
						price: "30,00 dh"
					},
					{
						name: "Cappuccino",
						price: "30,00 dh"
					},
					{
						name: "Nus Nus",
						price: "30,00 dh"
					},
					{
						name: "Hot Chocolate",
						price: "30,00 dh"
					},
					{
						name: "Iced Coffee",
						price: "30,00 dh"
					},
					{
						name: "Iced Latte",
						price: "30,00 dh"
					}
				]
			},
			{
				category: "Desserts",
				items: [
					{
						name: "Fig & Dates Cake",
						price: "60,00 dh"
					},
					{
						name: "Crème Brûlée With Saffron And Dates",
						price: "70,00 dh"
					},
					{
						name: "Chocolate Cake With Prunes And Apricots",
						price: "60,00 dh"
					},
					{
						name: "Dark Chocolate Mousse With Ras El Hanout",
						price: "70,00 dh"
					}
				]
			}
		];
		onDestroy(() => {
			if (typeof window !== "undefined" && document.body) document.body.style.overflow = "";
		});
		$: if (isOpen && typeof window !== "undefined") {
			document.body.style.overflow = "hidden";
			requestAnimationFrame(() => {});
		}
		$: if (!isOpen && typeof window !== "undefined") {
			if (document.body) document.body.style.overflow = "";
		}
		if (isOpen) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="fixed inset-0 z-50 bg-[#0f1f18]/95 backdrop-blur-md overflow-y-auto" role="dialog" aria-modal="true" aria-label="Restaurant Menu"><button class="fixed top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-[#C0B283]/40 text-[#C0B283] hover:border-[#C0B283] hover:bg-[#C0B283]/10 transition-all duration-300 text-2xl leading-none" aria-label="Close menu">✕</button> <div class="max-w-3xl mx-auto px-6 py-24 md:px-8 md:py-32"><div class="text-center mb-16 md:mb-20"><p class="font-sans text-[0.65rem] tracking-[0.25em] text-[#C0B283]/60 uppercase mb-3">The Ruined Garden · Fes</p> <h2 class="font-serif text-5xl md:text-7xl text-[#C0B283] leading-tight">The Menu</h2> <div class="w-16 h-px bg-gradient-to-r from-transparent via-[#C0B283]/50 to-transparent mx-auto mt-6"></div></div> <div class="space-y-14 md:space-y-20"><!--[-->`);
			const each_array = ensure_array_like(menuData);
			for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
				let section = each_array[$$index_1];
				$$renderer.push(`<div class="menu-category"><div class="mb-6 pb-3 border-b border-[#C0B283]/20 text-center"><h3 class="font-serif text-2xl md:text-3xl text-[#C0B283] tracking-wide">${escape_html(section.category)}</h3></div> <ul class="space-y-4"><!--[-->`);
				const each_array_1 = ensure_array_like(section.items);
				for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
					let item = each_array_1[$$index];
					$$renderer.push(`<li class="flex items-start gap-4"><div class="flex-1 min-w-0"><span class="font-serif text-lg md:text-xl text-stone-200 leading-snug">${escape_html(item.name)}</span> `);
					if (item.description) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<p class="font-sans text-xs text-stone-400 italic mt-0.5 leading-relaxed">${escape_html(item.description)}</p>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div> <div class="flex-shrink-0 flex items-center pt-[0.4rem]"><span class="hidden sm:block w-16 border-b border-dotted border-[#C0B283]/25 mx-2"></span></div> <span class="font-sans text-sm text-[#C0B283] whitespace-nowrap pt-0.5 flex-shrink-0">${escape_html(item.price)}</span></li>`);
				}
				$$renderer.push(`<!--]--></ul></div>`);
			}
			$$renderer.push(`<!--]--></div> <div class="mt-20 text-center"><div class="w-16 h-px bg-gradient-to-r from-transparent via-[#C0B283]/30 to-transparent mx-auto mb-6"></div> <p class="font-sans text-xs text-stone-500 tracking-widest uppercase">All prices include taxes · Special dishes require pre-order</p></div></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { isOpen });
	});
}
//#endregion
//#region src/lib/components/ui/ReviewMarquee.svelte
function ReviewMarquee($$renderer) {
	const reviews = [
		{
			text: "Sooo... I needed a bit of peace and quiet on my own on a rainy day – met the loveliest people, had excellent, hearty food and drinks – had time to journal and enjoyed the amazing food",
			author: "Ujammiugaq M",
			location: "Odense, Danemark"
		},
		{
			text: "A family-friendly restaurant with exceptional food and a relaxed setting for dining al fresco or indoors. The service is outstanding",
			author: "MJWT123",
			location: "San Diego, Californie"
		},
		{
			text: "A cool spot in a ‘not-so-run-down garden’. Book a table in a prime spot. The staff are really friendly and accommodating! The chicken pastilla is delicious and they serve rice :)",
			author: "Brian D",
			location: "New York, USA"
		},
		{
			text: "a timeless spot. I highly recommend it. I came here three times in a row for a drink because I’d booked a lovely place to stay at Khadouge, which is just a minute’s walk away\n\nI loved it",
			author: "Glamy C",
			location: "Paris, France"
		},
		{
			text: "An absolutely incredible experience. The riad we’d booked didn’t have our reservation. I turned up at The Ruined Garden and they went out of their way to accommodate us for two nights. The staff were so friendly, the atmosphere in the restaurant and the rooms were lovely, and the food was incredible! What started as a couple of stressful days in Fez was completely turned around by the hospitality of the owner and staff.",
			author: "chelsie e",
			location: "Melbourne, Australie"
		}
	];
	$$renderer.push(`<div class="relative flex w-full overflow-hidden bg-forest-900 py-20" style="mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);"><div class="flex w-max animate-marquee hover:[animation-play-state:paused]"><!--[-->`);
	const each_array = ensure_array_like([...reviews, ...reviews]);
	for (let i = 0, $$length = each_array.length; i < $$length; i++) {
		let review = each_array[i];
		$$renderer.push(`<div class="w-80 md:w-96 p-6 md:p-8 rounded-2xl bg-stone-900/40 border border-stone-500/20 backdrop-blur-[6px] flex-shrink-0 mx-4 flex flex-col justify-between shadow-2xl transition-all duration-300"><div><div class="flex space-x-[2px] mb-6 text-gold-600"><!--[-->`);
		const each_array_1 = ensure_array_like(Array(5));
		for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
			each_array_1[$$index];
			$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>`);
		}
		$$renderer.push(`<!--]--></div> <p class="font-display text-stone-200 italic text-lg md:text-xl leading-relaxed mb-8 whitespace-pre-wrap">"${escape_html(review.text)}"</p></div> <div><div class="w-8 h-px bg-gold-600/30 mb-4"></div> <p class="font-sans text-gold-600 uppercase text-xs tracking-[0.2em] font-semibold">${escape_html(review.author)}</p> <p class="font-sans text-stone-400 text-xs tracking-wider mt-1.5">${escape_html(review.location)}</p></div></div>`);
	}
	$$renderer.push(`<!--]--></div></div>`);
}
//#endregion
//#region node_modules/svelte-motion/src/components/AnimateSharedLayout/types.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* @public
*/
var Presence;
(function(Presence) {
	Presence[Presence["Entering"] = 0] = "Entering";
	Presence[Presence["Present"] = 1] = "Present";
	Presence[Presence["Exiting"] = 2] = "Exiting";
})(Presence || (Presence = {}));
/**
* @public
*/
var VisibilityAction$1;
(function(VisibilityAction) {
	VisibilityAction[VisibilityAction["Hide"] = 0] = "Hide";
	VisibilityAction[VisibilityAction["Show"] = 1] = "Show";
})(VisibilityAction$1 || (VisibilityAction$1 = {}));
//#endregion
//#region node_modules/svelte-motion/src/utils/array.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function addUniqueItem(arr, item) {
	arr.indexOf(item) === -1 && arr.push(item);
}
function removeItem(arr, item) {
	var index = arr.indexOf(item);
	index > -1 && arr.splice(index, 1);
}
//#endregion
//#region node_modules/svelte-motion/src/utils/subscription-manager.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var SubscriptionManager = function() {
	function SubscriptionManager() {
		this.subscriptions = [];
	}
	SubscriptionManager.prototype.add = function(handler) {
		var _this = this;
		addUniqueItem(this.subscriptions, handler);
		return function() {
			return removeItem(_this.subscriptions, handler);
		};
	};
	SubscriptionManager.prototype.notify = function(a, b, c) {
		var numSubscriptions = this.subscriptions.length;
		if (!numSubscriptions) return;
		if (numSubscriptions === 1)
 /**
		* If there's only a single handler we can just call it without invoking a loop.
		*/
		this.subscriptions[0](a, b, c);
		else for (var i = 0; i < numSubscriptions; i++) {
			/**
			* Check whether the handler exists before firing as it's possible
			* the subscriptions were modified during this loop running.
			*/
			var handler = this.subscriptions[i];
			handler && handler(a, b, c);
		}
	};
	SubscriptionManager.prototype.getSize = function() {
		return this.subscriptions.length;
	};
	SubscriptionManager.prototype.clear = function() {
		this.subscriptions.length = 0;
	};
	return SubscriptionManager;
}();
//#endregion
//#region node_modules/svelte-motion/src/value/index.js
var isFloat = function(value) {
	return !isNaN(parseFloat(value));
};
/**
* `MotionValue` is used to track the state and velocity of motion values.
*
* @public
*/
var MotionValue = function() {
	/**
	* @param init - The initiating value
	* @param config - Optional configuration options
	*
	* -  `transformer`: A function to transform incoming values with.
	*
	* @internal
	*/
	function MotionValue(init, startStopNotifier) {
		var _this = this;
		/**
		* Duration, in milliseconds, since last updating frame.
		*
		* @internal
		*/
		this.timeDelta = 0;
		/**
		* Timestamp of the last time this `MotionValue` was updated.
		*
		* @internal
		*/
		this.lastUpdated = 0;
		/**
		* Functions to notify when the `MotionValue` updates.
		*
		* @internal
		*/
		this.updateSubscribers = new SubscriptionManager();
		/**
		* Functions to notify when the velocity updates.
		*
		* @internal
		*/
		this.velocityUpdateSubscribers = new SubscriptionManager();
		/**
		* Functions to notify when the `MotionValue` updates and `render` is set to `true`.
		*
		* @internal
		*/
		this.renderSubscribers = new SubscriptionManager();
		/**
		* Tracks whether this value can output a velocity. Currently this is only true
		* if the value is numerical, but we might be able to widen the scope here and support
		* other value types.
		*
		* @internal
		*/
		this.canTrackVelocity = false;
		this.updateAndNotify = function(v, render) {
			if (render === void 0) render = true;
			_this.prev = _this.current;
			_this.current = v;
			var _a = getFrameData(), delta = _a.delta, timestamp = _a.timestamp;
			if (_this.lastUpdated !== timestamp) {
				_this.timeDelta = delta;
				_this.lastUpdated = timestamp;
				sync.postRender(_this.scheduleVelocityCheck);
			}
			if (_this.prev !== _this.current) _this.updateSubscribers.notify(_this.current);
			if (_this.velocityUpdateSubscribers.getSize()) _this.velocityUpdateSubscribers.notify(_this.getVelocity());
			if (render) _this.renderSubscribers.notify(_this.current);
		};
		/**
		* Schedule a velocity check for the next frame.
		*
		* This is an instanced and bound function to prevent generating a new
		* function once per frame.
		*
		* @internal
		*/
		this.scheduleVelocityCheck = function() {
			return sync.postRender(_this.velocityCheck);
		};
		/**
		* Updates `prev` with `current` if the value hasn't been updated this frame.
		* This ensures velocity calculations return `0`.
		*
		* This is an instanced and bound function to prevent generating a new
		* function once per frame.
		*
		* @internal
		*/
		this.velocityCheck = function(_a) {
			if (_a.timestamp !== _this.lastUpdated) {
				_this.prev = _this.current;
				_this.velocityUpdateSubscribers.notify(_this.getVelocity());
			}
		};
		this.hasAnimated = false;
		this.prev = this.current = init;
		this.canTrackVelocity = isFloat(this.current);
		this.onSubscription = () => {};
		this.onUnsubscription = () => {};
		if (startStopNotifier) this.onSubscription = () => {
			if (this.updateSubscribers.getSize() + this.velocityUpdateSubscribers.getSize() + this.renderSubscribers.getSize() === 0) {
				const unsub = startStopNotifier();
				this.onUnsubscription = () => {};
				if (unsub) this.onUnsubscription = () => {
					if (this.updateSubscribers.getSize() + this.velocityUpdateSubscribers.getSize() + this.renderSubscribers.getSize() === 0) unsub();
				};
			}
		};
	}
	/**
	* Adds a function that will be notified when the `MotionValue` is updated.
	*
	* It returns a function that, when called, will cancel the subscription.
	*
	* When calling `onChange` inside a React component, it should be wrapped with the
	* `useEffect` hook. As it returns an unsubscribe function, this should be returned
	* from the `useEffect` function to ensure you don't add duplicate subscribers..
	*
	* @motion
	*
	* ```jsx
	* export const MyComponent = () => {
	*   const x = useMotionValue(0)
	*   const y = useMotionValue(0)
	*   const opacity = useMotionValue(1)
	*
	*   useEffect(() => {
	*     function updateOpacity() {
	*       const maxXY = Math.max(x.get(), y.get())
	*       const newOpacity = transform(maxXY, [0, 100], [1, 0])
	*       opacity.set(newOpacity)
	*     }
	*
	*     const unsubscribeX = x.onChange(updateOpacity)
	*     const unsubscribeY = y.onChange(updateOpacity)
	*
	*     return () => {
	*       unsubscribeX()
	*       unsubscribeY()
	*     }
	*   }, [])
	*
	*   return <MotionDiv style={{ x }} />
	* }
	* ```
	*
	* @internalremarks
	*
	* We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
	*
	* ```jsx
	* useOnChange(x, () => {})
	* ```
	*
	* @param subscriber - A function that receives the latest value.
	* @returns A function that, when called, will cancel this subscription.
	*
	* @public
	*/
	MotionValue.prototype.onChange = function(subscription) {
		this.onSubscription();
		const unsub = this.updateSubscribers.add(subscription);
		return () => {
			unsub();
			this.onUnsubscription();
		};
	};
	/** Add subscribe method for Svelte store interface */
	MotionValue.prototype.subscribe = function(subscription) {
		return this.onChange(subscription);
	};
	MotionValue.prototype.clearListeners = function() {
		this.updateSubscribers.clear();
		this.onUnsubscription();
	};
	/**
	* Adds a function that will be notified when the `MotionValue` requests a render.
	*
	* @param subscriber - A function that's provided the latest value.
	* @returns A function that, when called, will cancel this subscription.
	*
	* @internal
	*/
	MotionValue.prototype.onRenderRequest = function(subscription) {
		this.onSubscription();
		subscription(this.get());
		const unsub = this.renderSubscribers.add(subscription);
		return () => {
			unsub();
			this.onUnsubscription();
		};
	};
	/**
	* Attaches a passive effect to the `MotionValue`.
	*
	* @internal
	*/
	MotionValue.prototype.attach = function(passiveEffect) {
		this.passiveEffect = passiveEffect;
	};
	/**
	* Sets the state of the `MotionValue`.
	*
	* @remarks
	*
	* ```jsx
	* const x = useMotionValue(0)
	* x.set(10)
	* ```
	*
	* @param latest - Latest value to set.
	* @param render - Whether to notify render subscribers. Defaults to `true`
	*
	* @public
	*/
	MotionValue.prototype.set = function(v, render) {
		if (render === void 0) render = true;
		if (!render || !this.passiveEffect) this.updateAndNotify(v, render);
		else this.passiveEffect(v, this.updateAndNotify);
	};
	/** Add update method for Svelte Store behavior */
	MotionValue.prototype.update = function(v) {
		this.set(v(this.get()));
	};
	/**
	* Returns the latest state of `MotionValue`
	*
	* @returns - The latest state of `MotionValue`
	*
	* @public
	*/
	MotionValue.prototype.get = function() {
		this.onSubscription();
		const curr = this.current;
		this.onUnsubscription();
		return curr;
	};
	/**
	* @public
	*/
	MotionValue.prototype.getPrevious = function() {
		return this.prev;
	};
	/**
	* Returns the latest velocity of `MotionValue`
	*
	* @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
	*
	* @public
	*/
	MotionValue.prototype.getVelocity = function() {
		this.onSubscription();
		const vel = this.canTrackVelocity ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
		this.onUnsubscription();
		return vel;
	};
	/**
	* Registers a new animation to control this `MotionValue`. Only one
	* animation can drive a `MotionValue` at one time.
	*
	* ```jsx
	* value.start()
	* ```
	*
	* @param animation - A function that starts the provided animation
	*
	* @internal
	*/
	MotionValue.prototype.start = function(animation) {
		var _this = this;
		this.stop();
		return new Promise(function(resolve) {
			_this.hasAnimated = true;
			_this.stopAnimation = animation(resolve);
		}).then(function() {
			return _this.clearAnimation();
		});
	};
	/**
	* Stop the currently active animation.
	*
	* @public
	*/
	MotionValue.prototype.stop = function() {
		if (this.stopAnimation) this.stopAnimation();
		this.clearAnimation();
	};
	/**
	* Returns `true` if this value is currently animating.
	*
	* @public
	*/
	MotionValue.prototype.isAnimating = function() {
		return !!this.stopAnimation;
	};
	MotionValue.prototype.clearAnimation = function() {
		this.stopAnimation = null;
	};
	/**
	* Destroy and clean up subscribers to this `MotionValue`.
	*
	* The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
	* handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
	* created a `MotionValue` via the `motionValue` function.
	*
	* @public
	*/
	MotionValue.prototype.destroy = function() {
		this.updateSubscribers.clear();
		this.renderSubscribers.clear();
		this.stop();
		this.onUnsubscription();
	};
	return MotionValue;
}();
/**
* @internal
*/
function motionValue(init, startStopNotifier) {
	return new MotionValue(init, startStopNotifier);
}
//#endregion
//#region node_modules/svelte-motion/src/context/DOMcontext.js
var getDomContext = (name, el) => {
	if (!el || !window) return;
	let par = el;
	while (par = par.parentNode) if (par.motionDomContext && par.motionDomContext.has(name)) return par.motionDomContext.get(name);
};
var setDomContext = (name, el, value) => {
	if (el && window) {
		if (!el.motionDomContext) el.motionDomContext = /* @__PURE__ */ new Map();
		el.motionDomContext.set(name, value);
	}
};
//#endregion
//#region node_modules/svelte-motion/src/context/MotionConfigContext.js
/**
* @public
*/
var MotionConfigContext = (c) => getDomContext("MotionConfig", c) || writable({
	transformPagePoint: function(p) {
		return p;
	},
	isStatic: false
});
//#endregion
//#region node_modules/svelte-motion/src/context/ScaleCorrectionProvider.svelte
var ScaleCorrectionContext = (isCustom) => getDomContext("ScaleCorrection", isCustom) || writable([]);
var ScaleCorrectionParentContext = () => writable([]);
var provideScaleCorrection = (isCustom) => {
	const fromParent = getContext(ScaleCorrectionContext) || ScaleCorrectionContext(isCustom);
	const ctx = ScaleCorrectionContext();
	setContext(ScaleCorrectionContext, ctx);
	setDomContext("ScaleCorrection", isCustom, ctx);
	setContext(ScaleCorrectionParentContext, fromParent);
};
function ScaleCorrectionProvider($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let isCustom = $$props["isCustom"];
		provideScaleCorrection(isCustom);
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { isCustom });
	});
}
//#endregion
//#region node_modules/svelte-motion/src/utils/time-conversion.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Converts seconds to milliseconds
*
* @param seconds - Time in seconds.
* @return milliseconds - Converted time in milliseconds.
*/
var secondsToMilliseconds = function(seconds) {
	return seconds * 1e3;
};
//#endregion
//#region node_modules/svelte-motion/src/animation/utils/easing.js
var easingLookup = {
	linear,
	easeIn,
	easeInOut,
	easeOut,
	circIn,
	circInOut,
	circOut,
	backIn,
	backInOut,
	backOut,
	anticipate,
	bounceIn,
	bounceInOut,
	bounceOut
};
var easingDefinitionToFunction = function(definition) {
	if (Array.isArray(definition)) {
		var _a = __read(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
		return cubicBezier(x1, y1, x2, y2);
	} else if (typeof definition === "string") return easingLookup[definition];
	return definition;
};
var isEasingArray = function(ease) {
	return Array.isArray(ease) && typeof ease[0] !== "number";
};
//#endregion
//#region node_modules/svelte-motion/src/animation/utils/is-animatable.js
/**
* Check if a value is animatable. Examples:
*
* ✅: 100, "100px", "#fff"
* ❌: "block", "url(2.jpg)"
* @param value
*
* @internal
*/
var isAnimatable = function(key, value) {
	if (key === "zIndex") return false;
	if (typeof value === "number" || Array.isArray(value)) return true;
	if (typeof value === "string" && complex.test(value) && !value.startsWith("url(")) return true;
	return false;
};
//#endregion
//#region node_modules/svelte-motion/src/animation/utils/is-keyframes-target.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var isKeyframesTarget = function(v) {
	return Array.isArray(v);
};
//#endregion
//#region node_modules/svelte-motion/src/animation/utils/default-transitions.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var underDampedSpring = function() {
	return {
		type: "spring",
		stiffness: 500,
		damping: 25,
		restDelta: .5,
		restSpeed: 10
	};
};
var criticallyDampedSpring = function(to) {
	return {
		type: "spring",
		stiffness: 550,
		damping: to === 0 ? 2 * Math.sqrt(550) : 30,
		restDelta: .01,
		restSpeed: 10
	};
};
var linearTween = function() {
	return {
		type: "keyframes",
		ease: "linear",
		duration: .3
	};
};
var keyframes = function(values) {
	return {
		type: "keyframes",
		duration: .8,
		values
	};
};
var defaultTransitions = {
	x: underDampedSpring,
	y: underDampedSpring,
	z: underDampedSpring,
	rotate: underDampedSpring,
	rotateX: underDampedSpring,
	rotateY: underDampedSpring,
	rotateZ: underDampedSpring,
	scaleX: criticallyDampedSpring,
	scaleY: criticallyDampedSpring,
	scale: criticallyDampedSpring,
	opacity: linearTween,
	backgroundColor: linearTween,
	color: linearTween,
	default: criticallyDampedSpring
};
var getDefaultTransition = function(valueKey, to) {
	var transitionFactory;
	if (isKeyframesTarget(to)) transitionFactory = keyframes;
	else transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
	return Object.assign({ to }, transitionFactory(to));
};
//#endregion
//#region node_modules/svelte-motion/src/render/dom/value-types/type-int.js
var int = Object.assign(Object.assign({}, number), { transform: Math.round });
//#endregion
//#region node_modules/svelte-motion/src/render/dom/value-types/number.js
var numberValueTypes = {
	borderWidth: px,
	borderTopWidth: px,
	borderRightWidth: px,
	borderBottomWidth: px,
	borderLeftWidth: px,
	borderRadius: px,
	radius: px,
	borderTopLeftRadius: px,
	borderTopRightRadius: px,
	borderBottomRightRadius: px,
	borderBottomLeftRadius: px,
	width: px,
	maxWidth: px,
	height: px,
	maxHeight: px,
	size: px,
	top: px,
	right: px,
	bottom: px,
	left: px,
	padding: px,
	paddingTop: px,
	paddingRight: px,
	paddingBottom: px,
	paddingLeft: px,
	margin: px,
	marginTop: px,
	marginRight: px,
	marginBottom: px,
	marginLeft: px,
	rotate: degrees,
	rotateX: degrees,
	rotateY: degrees,
	rotateZ: degrees,
	scale,
	scaleX: scale,
	scaleY: scale,
	scaleZ: scale,
	skew: degrees,
	skewX: degrees,
	skewY: degrees,
	distance: px,
	translateX: px,
	translateY: px,
	translateZ: px,
	x: px,
	y: px,
	z: px,
	perspective: px,
	transformPerspective: px,
	opacity: alpha,
	originX: progressPercentage,
	originY: progressPercentage,
	originZ: px,
	zIndex: int,
	fillOpacity: alpha,
	strokeOpacity: alpha,
	numOctaves: int
};
//#endregion
//#region node_modules/svelte-motion/src/render/dom/value-types/defaults.js
/**
* A map of default value types for common values
*/
var defaultValueTypes = Object.assign(Object.assign({}, numberValueTypes), {
	color,
	backgroundColor: color,
	outlineColor: color,
	fill: color,
	stroke: color,
	borderColor: color,
	borderTopColor: color,
	borderRightColor: color,
	borderBottomColor: color,
	borderLeftColor: color,
	filter,
	WebkitFilter: filter
});
/**
* Gets the default ValueType for the provided value key
*/
var getDefaultValueType = function(key) {
	return defaultValueTypes[key];
};
//#endregion
//#region node_modules/svelte-motion/src/render/dom/value-types/animatable-none.js
function getAnimatableNone(key, value) {
	var _a;
	var defaultValueType = getDefaultValueType(key);
	if (defaultValueType !== filter) defaultValueType = complex;
	return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}
//#endregion
//#region node_modules/svelte-motion/src/animation/utils/transitions.js
/**
* Decide whether a transition is defined on a given Transition.
* This filters out orchestration options and returns true
* if any options are left.
*/
function isTransitionDefined(_a) {
	_a.when;
	_a.delay;
	_a.delayChildren;
	_a.staggerChildren;
	_a.staggerDirection;
	_a.repeat;
	_a.repeatType;
	_a.repeatDelay;
	_a.from;
	var transition = __rest(_a, [
		"when",
		"delay",
		"delayChildren",
		"staggerChildren",
		"staggerDirection",
		"repeat",
		"repeatType",
		"repeatDelay",
		"from"
	]);
	return !!Object.keys(transition).length;
}
var legacyRepeatWarning = false;
/**
* Convert Framer Motion's Transition type into Popmotion-compatible options.
*/
function convertTransitionToAnimationOptions(_a) {
	var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = __rest(_a, [
		"ease",
		"times",
		"yoyo",
		"flip",
		"loop"
	]);
	var options = Object.assign({}, transition);
	if (times) options["offset"] = times;
	/**
	* Convert any existing durations from seconds to milliseconds
	*/
	if (transition.duration) options["duration"] = secondsToMilliseconds(transition.duration);
	if (transition.repeatDelay) options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
	/**
	* Map easing names to Popmotion's easing functions
	*/
	if (ease) options["ease"] = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
	/**
	* Support legacy transition API
	*/
	if (transition.type === "tween") options.type = "keyframes";
	/**
	* TODO: These options are officially removed from the API.
	*/
	if (yoyo || loop || flip) {
		warning(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
		legacyRepeatWarning = true;
		if (yoyo) options.repeatType = "reverse";
		else if (loop) options.repeatType = "loop";
		else if (flip) options.repeatType = "mirror";
		options.repeat = loop || yoyo || flip || transition.repeat;
	}
	/**
	* TODO: Popmotion 9 has the ability to automatically detect whether to use
	* a keyframes or spring animation, but does so by detecting velocity and other spring options.
	* It'd be good to introduce a similar thing here.
	*/
	if (transition.type !== "spring") options.type = "keyframes";
	return options;
}
/**
* Get the delay for a value by checking Transition with decreasing specificity.
*/
function getDelayFromTransition(transition, key) {
	var _a;
	return (_a = (getValueTransition(transition, key) || {}).delay) !== null && _a !== void 0 ? _a : 0;
}
function hydrateKeyframes(options) {
	if (Array.isArray(options.to) && options.to[0] === null) {
		options.to = __spreadArray([], __read(options.to));
		options.to[0] = options.from;
	}
	return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
	var _a;
	if (Array.isArray(options.to)) (_a = transition.duration) !== null && _a !== void 0 || (transition.duration = .8);
	hydrateKeyframes(options);
	/**
	* Get a default transition if none is determined to be defined.
	*/
	if (!isTransitionDefined(transition)) transition = Object.assign(Object.assign({}, transition), getDefaultTransition(key, options.to));
	return Object.assign(Object.assign({}, options), convertTransitionToAnimationOptions(transition));
}
/**
*
*/
function getAnimation(key, value, target, transition, onComplete) {
	var _a;
	var valueTransition = getValueTransition(transition, key);
	var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
	var isTargetAnimatable = isAnimatable(key, target);
	if (origin === "none" && isTargetAnimatable && typeof target === "string")
 /**
	* If we're trying to animate from "none", try and get an animatable version
	* of the target. This could be improved to work both ways.
	*/
	origin = getAnimatableNone(key, target);
	else if (isZero(origin) && typeof target === "string") origin = getZeroUnit(target);
	else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") target = getZeroUnit(origin);
	var isOriginAnimatable = isAnimatable(key, origin);
	warning(isOriginAnimatable === isTargetAnimatable, "You are trying to animate " + key + " from \"" + origin + "\" to \"" + target + "\". " + origin + " is not an animatable value - to enable this animation set " + origin + " to a value animatable to " + target + " via the `style` property.");
	function start() {
		var options = {
			from: origin,
			to: target,
			velocity: value.getVelocity(),
			onComplete,
			onUpdate: function(v) {
				return value.set(v);
			}
		};
		return valueTransition.type === "inertia" || valueTransition.type === "decay" ? inertia(Object.assign(Object.assign({}, options), valueTransition)) : animate(Object.assign(Object.assign({}, getPopmotionAnimationOptions(valueTransition, options, key)), {
			onUpdate: function(v) {
				var _a;
				options.onUpdate(v);
				(_a = valueTransition.onUpdate) === null || _a === void 0 || _a.call(valueTransition, v);
			},
			onComplete: function() {
				var _a;
				options.onComplete();
				(_a = valueTransition.onComplete) === null || _a === void 0 || _a.call(valueTransition);
			}
		}));
	}
	function set() {
		var _a;
		value.set(target);
		onComplete();
		(_a = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _a === void 0 || _a.call(valueTransition);
		return { stop: function() {} };
	}
	return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
}
function isZero(value) {
	return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
}
function getZeroUnit(potentialUnitType) {
	return typeof potentialUnitType === "number" ? 0 : getAnimatableNone("", potentialUnitType);
}
function getValueTransition(transition, key) {
	return transition[key] || transition["default"] || transition;
}
/**
* Start animation on a MotionValue. This function is an interface between
* Framer Motion and Popmotion
*
* @internal
*/
function startAnimation(key, value, target, transition) {
	if (transition === void 0) transition = {};
	return value.start(function(onComplete) {
		var delayTimer;
		var controls;
		var animation = getAnimation(key, value, target, transition, onComplete);
		var delay = getDelayFromTransition(transition, key);
		var start = function() {
			return controls = animation();
		};
		if (delay) delayTimer = setTimeout(start, secondsToMilliseconds(delay));
		else start();
		return function() {
			clearTimeout(delayTimer);
			controls === null || controls === void 0 || controls.stop();
		};
	});
}
//#endregion
//#region node_modules/svelte-motion/src/utils/is-numerical-string.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
*/
var isNumericalString = function(v) {
	return /^\-?\d*\.?\d+$/.test(v);
};
//#endregion
//#region node_modules/svelte-motion/src/utils/resolve-value.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var isCustomValue = function(v) {
	return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function(v) {
	return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};
//#endregion
//#region node_modules/svelte-motion/src/render/dom/value-types/test.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Tests a provided value against a ValueType
*/
var testValueType = function(v) {
	return function(type) {
		return type.test(v);
	};
};
//#endregion
//#region node_modules/svelte-motion/src/render/dom/value-types/dimensions.js
/**
* A list of value types commonly used for dimensions
*/
var dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	{
		test: function(v) {
			return v === "auto";
		},
		parse: function(v) {
			return v;
		}
	}
];
/**
* Tests a dimensional value against the list of dimension ValueTypes
*/
var findDimensionValueType = function(v) {
	return dimensionValueTypes.find(testValueType(v));
};
//#endregion
//#region node_modules/svelte-motion/src/render/dom/value-types/find.js
/**
* A list of all ValueTypes
*/
var valueTypes = __spreadArray(__spreadArray([], __read(dimensionValueTypes)), [color, complex]);
/**
* Tests a value against the list of ValueTypes
*/
var findValueType = function(v) {
	return valueTypes.find(testValueType(v));
};
//#endregion
//#region node_modules/svelte-motion/src/render/utils/variants.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Decides if the supplied variable is an array of variant labels
*/
function isVariantLabels(v) {
	return Array.isArray(v);
}
/**
* Decides if the supplied variable is variant label
*/
function isVariantLabel(v) {
	return typeof v === "string" || isVariantLabels(v);
}
/**
* Creates an object containing the latest state of every MotionValue on a VisualElement
*/
function getCurrent(visualElement) {
	var current = {};
	visualElement.forEachValue(function(value, key) {
		return current[key] = value.get();
	});
	return current;
}
/**
* Creates an object containing the latest velocity of every MotionValue on a VisualElement
*/
function getVelocity$1(visualElement) {
	var velocity = {};
	visualElement.forEachValue(function(value, key) {
		return velocity[key] = value.getVelocity();
	});
	return velocity;
}
function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
	var _a;
	if (currentValues === void 0) currentValues = {};
	if (currentVelocity === void 0) currentVelocity = {};
	if (typeof definition === "string") definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
	return typeof definition === "function" ? definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity) : definition;
}
function resolveVariant(visualElement, definition, custom) {
	var props = visualElement.getProps();
	return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity$1(visualElement));
}
function checkIfControllingVariants(props) {
	var _a;
	return typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" || isVariantLabel(props.initial) || isVariantLabel(props.animate) || isVariantLabel(props.whileHover) || isVariantLabel(props.whileDrag) || isVariantLabel(props.whileTap) || isVariantLabel(props.whileFocus) || isVariantLabel(props.exit);
}
function checkIfVariantNode(props) {
	return Boolean(checkIfControllingVariants(props) || props.variants);
}
//#endregion
//#region node_modules/svelte-motion/src/render/utils/setters.js
/**
* Set VisualElement's MotionValue, creating a new MotionValue for it if
* it doesn't exist.
*/
function setMotionValue(visualElement, key, value) {
	if (visualElement.hasValue(key)) visualElement.getValue(key).set(value);
	else visualElement.addValue(key, motionValue(value));
}
function setTarget(visualElement, definition) {
	var resolved = resolveVariant(visualElement, definition);
	var _a = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b;
	_a.transition;
	var target = __rest(_a, ["transitionEnd", "transition"]);
	target = Object.assign(Object.assign({}, target), transitionEnd);
	for (var key in target) setMotionValue(visualElement, key, resolveFinalValueInKeyframes(target[key]));
}
function checkTargetForNewValues(visualElement, target, origin) {
	var _a, _b, _c;
	var _d;
	var newValueKeys = Object.keys(target).filter(function(key) {
		return !visualElement.hasValue(key);
	});
	var numNewValues = newValueKeys.length;
	if (!numNewValues) return;
	for (var i = 0; i < numNewValues; i++) {
		var key = newValueKeys[i];
		var targetValue = target[key];
		var value = null;
		/**
		* If the target is a series of keyframes, we can use the first value
		* in the array. If this first value is null, we'll still need to read from the DOM.
		*/
		if (Array.isArray(targetValue)) value = targetValue[0];
		/**
		* If the target isn't keyframes, or the first keyframe was null, we need to
		* first check if an origin value was explicitly defined in the transition as "from",
		* if not read the value from the DOM. As an absolute fallback, take the defined target value.
		*/
		if (value === null) value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
		/**
		* If value is still undefined or null, ignore it. Preferably this would throw,
		* but this was causing issues in Framer.
		*/
		if (value === void 0 || value === null) continue;
		if (typeof value === "string" && isNumericalString(value)) value = parseFloat(value);
		else if (!findValueType(value) && complex.test(targetValue)) value = getAnimatableNone(key, targetValue);
		visualElement.addValue(key, motionValue(value));
		(_c = (_d = origin)[key]) !== null && _c !== void 0 || (_d[key] = value);
		visualElement.setBaseTarget(key, value);
	}
}
function getOriginFromTransition(key, transition) {
	if (!transition) return;
	return (transition[key] || transition["default"] || transition).from;
}
function getOrigin(target, transition, visualElement) {
	var _a, _b;
	var origin = {};
	for (var key in target) origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
	return origin;
}
//#endregion
//#region node_modules/svelte-motion/src/render/utils/animation.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* @internal
*/
function animateVisualElement(visualElement, definition, options) {
	if (options === void 0) options = {};
	visualElement.notifyAnimationStart();
	var animation;
	if (Array.isArray(definition)) {
		var animations = definition.map(function(variant) {
			return animateVariant(visualElement, variant, options);
		});
		animation = Promise.all(animations);
	} else if (typeof definition === "string") animation = animateVariant(visualElement, definition, options);
	else animation = animateTarget(visualElement, typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition, options);
	return animation.then(function() {
		return visualElement.notifyAnimationComplete(definition);
	});
}
function animateVariant(visualElement, variant, options) {
	var _a;
	if (options === void 0) options = {};
	var resolved = resolveVariant(visualElement, variant, options.custom);
	var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement.getDefaultTransition() || {} : _b;
	if (options.transitionOverride) transition = options.transitionOverride;
	/**
	* If we have a variant, create a callback that runs it as an animation.
	* Otherwise, we resolve a Promise immediately for a composable no-op.
	*/
	var getAnimation = resolved ? function() {
		return animateTarget(visualElement, resolved, options);
	} : function() {
		return Promise.resolve();
	};
	/**
	* If we have children, create a callback that runs all their animations.
	* Otherwise, we resolve a Promise immediately for a composable no-op.
	*/
	var getChildAnimations = ((_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? function(forwardDelay) {
		if (forwardDelay === void 0) forwardDelay = 0;
		var _a = transition.delayChildren, delayChildren = _a === void 0 ? 0 : _a, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
		return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
	} : function() {
		return Promise.resolve();
	};
	/**
	* If the transition explicitly defines a "when" option, we need to resolve either
	* this animation or all children animations before playing the other.
	*/
	var when = transition.when;
	if (when) {
		var _c = __read(when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation], 2), first = _c[0], last = _c[1];
		return first().then(last);
	} else return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
}
/**
* @internal
*/
function animateTarget(visualElement, definition, _a) {
	var _b;
	var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
	var _e = visualElement.makeTargetAnimatable(definition), _f = _e.transition, transition = _f === void 0 ? visualElement.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = __rest(_e, ["transition", "transitionEnd"]);
	if (transitionOverride) transition = transitionOverride;
	var animations = [];
	var animationTypeState = type && ((_b = visualElement.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
	for (var key in target) {
		var value = visualElement.getValue(key);
		var valueTarget = target[key];
		if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) continue;
		var animation = startAnimation(key, value, valueTarget, Object.assign({ delay }, transition));
		animations.push(animation);
	}
	return Promise.all(animations).then(function() {
		transitionEnd && setTarget(visualElement, transitionEnd);
	});
}
function animateChildren(visualElement, variant, delayChildren, staggerChildren, staggerDirection, options) {
	if (delayChildren === void 0) delayChildren = 0;
	if (staggerChildren === void 0) staggerChildren = 0;
	if (staggerDirection === void 0) staggerDirection = 1;
	var animations = [];
	var maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
	var generateStaggerDuration = staggerDirection === 1 ? function(i) {
		if (i === void 0) i = 0;
		return i * staggerChildren;
	} : function(i) {
		if (i === void 0) i = 0;
		return maxStaggerDuration - i * staggerChildren;
	};
	Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach(function(child, i) {
		animations.push(animateVariant(child, variant, Object.assign(Object.assign({}, options), { delay: delayChildren + generateStaggerDuration(i) })).then(function() {
			return child.notifyAnimationComplete(variant);
		}));
	});
	return Promise.all(animations);
}
function sortByTreeOrder(a, b) {
	return a.sortNodePosition(b);
}
/**
* Decide whether we should block this animation. Previously, we achieved this
* just by checking whether the key was listed in protectedKeys, but this
* posed problems if an animation was triggered by afterChildren and protectedKeys
* had been set to true in the meantime.
*/
function shouldBlockAnimation(_a, key) {
	var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
	var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
	needsAnimating[key] = false;
	return shouldBlock;
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/projection/scale-correction.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var valueScaleCorrection = {};
//#endregion
//#region node_modules/svelte-motion/src/utils/each-axis.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function eachAxis(handler) {
	return [handler("x"), handler("y")];
}
//#endregion
//#region node_modules/svelte-motion/src/utils/noop.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function noop(any) {
	return any;
}
//#endregion
//#region node_modules/svelte-motion/src/utils/geometry/index.js
/** 
based on framer-motion@4.1.15,
Copyright (c) 2018 Framer B.V.
*/
/**
* Bounding boxes tend to be defined as top, left, right, bottom. For various operations
* it's easier to consider each axis individually. This function returns a bounding box
* as a map of single-axis min/max values.
*/
function convertBoundingBoxToAxisBox(_a) {
	var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
	return {
		x: {
			min: left,
			max: right
		},
		y: {
			min: top,
			max: bottom
		}
	};
}
function convertAxisBoxToBoundingBox(_a) {
	var x = _a.x, y = _a.y;
	return {
		top: y.min,
		bottom: y.max,
		left: x.min,
		right: x.max
	};
}
/**
* Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
* provided by Framer to allow measured points to be corrected for device scaling. This is used
* when measuring DOM elements and DOM event points.
*/
function transformBoundingBox(_a, transformPoint) {
	var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
	if (transformPoint === void 0) transformPoint = noop;
	var topLeft = transformPoint({
		x: left,
		y: top
	});
	var bottomRight = transformPoint({
		x: right,
		y: bottom
	});
	return {
		top: topLeft.y,
		left: topLeft.x,
		bottom: bottomRight.y,
		right: bottomRight.x
	};
}
/**
* Create an empty axis box of zero size
*/
function axisBox() {
	return {
		x: {
			min: 0,
			max: 1
		},
		y: {
			min: 0,
			max: 1
		}
	};
}
function copyAxisBox(box) {
	return {
		x: Object.assign({}, box.x),
		y: Object.assign({}, box.y)
	};
}
/**
* Create an empty box delta
*/
var zeroDelta = {
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
};
function delta() {
	return {
		x: Object.assign({}, zeroDelta),
		y: Object.assign({}, zeroDelta)
	};
}
//#endregion
//#region node_modules/svelte-motion/src/render/utils/is-draggable.js
/** 
based on framer-motion@4.1.11,
Copyright (c) 2018 Framer B.V.
*/
function isDraggable(visualElement) {
	var _a = visualElement.getProps(), drag = _a.drag, _dragX = _a._dragX;
	return drag && !_dragX;
}
//#endregion
//#region node_modules/svelte-motion/src/utils/geometry/delta-apply.js
/**
* Reset an axis to the provided origin box.
*
* This is a mutative operation.
*/
function resetAxis(axis, originAxis) {
	axis.min = originAxis.min;
	axis.max = originAxis.max;
}
/**
* Reset a box to the provided origin box.
*
* This is a mutative operation.
*/
function resetBox(box, originBox) {
	resetAxis(box.x, originBox.x);
	resetAxis(box.y, originBox.y);
}
/**
* Scales a point based on a factor and an originPoint
*/
function scalePoint(point, scale, originPoint) {
	return originPoint + scale * (point - originPoint);
}
/**
* Applies a translate/scale delta to a point
*/
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
	if (boxScale !== void 0) point = scalePoint(point, boxScale, originPoint);
	return scalePoint(point, scale, originPoint) + translate;
}
/**
* Applies a translate/scale delta to an axis
*/
function applyAxisDelta(axis, translate, scale, originPoint, boxScale) {
	if (translate === void 0) translate = 0;
	if (scale === void 0) scale = 1;
	axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
	axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
* Applies a translate/scale delta to a box
*/
function applyBoxDelta(box, _a) {
	var x = _a.x, y = _a.y;
	applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
	applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
* Apply a transform to an axis from the latest resolved motion values.
* This function basically acts as a bridge between a flat motion value map
* and applyAxisDelta
*/
function applyAxisTransforms(final, axis, transforms, _a) {
	var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
	final.min = axis.min;
	final.max = axis.max;
	var axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : .5;
	var originPoint = mix(axis.min, axis.max, axisOrigin);
	applyAxisDelta(final, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
* The names of the motion values we want to apply as translation, scale and origin.
*/
var xKeys = [
	"x",
	"scaleX",
	"originX"
];
var yKeys = [
	"y",
	"scaleY",
	"originY"
];
/**
* Apply a transform to a box from the latest resolved motion values.
*/
function applyBoxTransforms(finalBox, box, transforms) {
	applyAxisTransforms(finalBox.x, box.x, transforms, xKeys);
	applyAxisTransforms(finalBox.y, box.y, transforms, yKeys);
}
/**
* Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
*/
function removePointDelta(point, translate, scale, originPoint, boxScale) {
	point -= translate;
	point = scalePoint(point, 1 / scale, originPoint);
	if (boxScale !== void 0) point = scalePoint(point, 1 / boxScale, originPoint);
	return point;
}
/**
* Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
*/
function removeAxisDelta(axis, translate, scale, origin, boxScale) {
	if (translate === void 0) translate = 0;
	if (scale === void 0) scale = 1;
	if (origin === void 0) origin = .5;
	var originPoint = mix(axis.min, axis.max, origin) - translate;
	axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
	axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
* Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
* and acts as a bridge between motion values and removeAxisDelta
*/
function removeAxisTransforms(axis, transforms, _a) {
	var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
	removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale);
}
/**
* Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
* and acts as a bridge between motion values and removeAxisDelta
*/
function removeBoxTransforms(box, transforms) {
	removeAxisTransforms(box.x, transforms, xKeys);
	removeAxisTransforms(box.y, transforms, yKeys);
}
/**
* Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
* in a tree upon our box before then calculating how to project it into our desired viewport-relative box
*
* This is the final nested loop within updateLayoutDelta for future refactoring
*/
function applyTreeDeltas(box, treeScale, treePath) {
	var treeLength = treePath.length;
	if (!treeLength) return;
	treeScale.x = treeScale.y = 1;
	var node;
	var delta;
	for (var i = 0; i < treeLength; i++) {
		node = treePath[i];
		delta = node.getLayoutState().delta;
		treeScale.x *= delta.x.scale;
		treeScale.y *= delta.y.scale;
		applyBoxDelta(box, delta);
		if (isDraggable(node)) applyBoxTransforms(box, box, node.getLatestValues());
	}
}
//#endregion
//#region node_modules/svelte-motion/src/utils/geometry/delta-calc.js
var clampProgress = function(v) {
	return clamp(0, 1, v);
};
/**
* Returns true if the provided value is within maxDistance of the provided target
*/
function isNear(value, target, maxDistance) {
	if (target === void 0) target = 0;
	if (maxDistance === void 0) maxDistance = .01;
	return distance(value, target) < maxDistance;
}
function calcLength(axis) {
	return axis.max - axis.min;
}
/**
* Calculate a transform origin relative to the source axis, between 0-1, that results
* in an asthetically pleasing scale/transform needed to project from source to target.
*/
function calcOrigin$1(source, target) {
	var origin = .5;
	var sourceLength = calcLength(source);
	var targetLength = calcLength(target);
	if (targetLength > sourceLength) origin = progress(target.min, target.max - sourceLength, source.min);
	else if (sourceLength > targetLength) origin = progress(source.min, source.max - targetLength, target.min);
	return clampProgress(origin);
}
/**
* Update the AxisDelta with a transform that projects source into target.
*
* The transform `origin` is optional. If not provided, it'll be automatically
* calculated based on the relative positions of the two bounding boxes.
*/
function updateAxisDelta(delta, source, target, origin) {
	if (origin === void 0) origin = .5;
	delta.origin = origin;
	delta.originPoint = mix(source.min, source.max, delta.origin);
	delta.scale = calcLength(target) / calcLength(source);
	if (isNear(delta.scale, 1, 1e-4)) delta.scale = 1;
	delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
	if (isNear(delta.translate)) delta.translate = 0;
}
/**
* Update the BoxDelta with a transform that projects the source into the target.
*
* The transform `origin` is optional. If not provided, it'll be automatically
* calculated based on the relative positions of the two bounding boxes.
*/
function updateBoxDelta(delta, source, target, origin) {
	updateAxisDelta(delta.x, source.x, target.x, defaultOrigin(origin.originX));
	updateAxisDelta(delta.y, source.y, target.y, defaultOrigin(origin.originY));
}
/**
* Currently this only accepts numerical origins, measured as 0-1, but could
* accept pixel values by comparing to the target axis.
*/
function defaultOrigin(origin) {
	return typeof origin === "number" ? origin : .5;
}
function calcRelativeAxis(target, relative, parent) {
	target.min = parent.min + relative.min;
	target.max = target.min + calcLength(relative);
}
function calcRelativeBox(projection, parentProjection) {
	calcRelativeAxis(projection.target.x, projection.relativeTarget.x, parentProjection.target.x);
	calcRelativeAxis(projection.target.y, projection.relativeTarget.y, parentProjection.target.y);
}
//#endregion
//#region node_modules/svelte-motion/src/value/utils/is-motion-value.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var isMotionValue = function(value) {
	return value !== null && typeof value === "object" && value.getVelocity;
};
//#endregion
//#region node_modules/svelte-motion/src/render/utils/state.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var createProjectionState = function() {
	return {
		isEnabled: false,
		isTargetLocked: false,
		target: axisBox(),
		targetFinal: axisBox()
	};
};
function createLayoutState() {
	return {
		isHydrated: false,
		layout: axisBox(),
		layoutCorrected: axisBox(),
		treeScale: {
			x: 1,
			y: 1
		},
		delta: delta(),
		deltaFinal: delta(),
		deltaTransform: ""
	};
}
var zeroLayout = createLayoutState();
//#endregion
//#region node_modules/svelte-motion/src/render/html/utils/build-projection-transform.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Build a transform style that takes a calculated delta between the element's current
* space on screen and projects it into the desired space.
*/
function buildLayoutProjectionTransform(_a, treeScale, latestTransform) {
	var x = _a.x, y = _a.y;
	/**
	* The translations we use to calculate are always relative to the viewport coordinate space.
	* But when we apply scales, we also scale the coordinate space of an element and its children.
	* For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
	* to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
	*/
	var xTranslate = x.translate / treeScale.x;
	var yTranslate = y.translate / treeScale.y;
	var transform = "translate3d(" + xTranslate + "px, " + yTranslate + "px, 0) ";
	if (latestTransform) {
		var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
		if (rotate) transform += "rotate(" + rotate + ") ";
		if (rotateX) transform += "rotateX(" + rotateX + ") ";
		if (rotateY) transform += "rotateY(" + rotateY + ") ";
	}
	transform += "scale(" + x.scale + ", " + y.scale + ")";
	return !latestTransform && transform === identityProjection ? "" : transform;
}
/**
* Take the calculated delta origin and apply it as a transform string.
*/
function buildLayoutProjectionTransformOrigin(_a) {
	var deltaFinal = _a.deltaFinal;
	return deltaFinal.x.origin * 100 + "% " + deltaFinal.y.origin * 100 + "% 0";
}
var identityProjection = buildLayoutProjectionTransform(zeroLayout.delta, zeroLayout.treeScale, {
	x: 1,
	y: 1
});
//#endregion
//#region node_modules/svelte-motion/src/animation/utils/is-animation-controls.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var isAnimationControls = function(v) {
	return typeof v === "object" && typeof v.start === "function";
};
//#endregion
//#region node_modules/svelte-motion/src/utils/shallow-compare.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function shallowCompare(next, prev) {
	if (!Array.isArray(prev)) return false;
	var prevLength = prev.length;
	if (prevLength !== next.length) return false;
	for (var i = 0; i < prevLength; i++) if (prev[i] !== next[i]) return false;
	return true;
}
//#endregion
//#region node_modules/svelte-motion/src/render/utils/types.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var AnimationType;
(function(AnimationType) {
	AnimationType["Animate"] = "animate";
	AnimationType["Hover"] = "whileHover";
	AnimationType["Tap"] = "whileTap";
	AnimationType["Drag"] = "whileDrag";
	AnimationType["Focus"] = "whileFocus";
	AnimationType["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));
//#endregion
//#region node_modules/svelte-motion/src/render/utils/animation-state.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var variantPriorityOrder = [
	AnimationType.Animate,
	AnimationType.Hover,
	AnimationType.Tap,
	AnimationType.Drag,
	AnimationType.Focus,
	AnimationType.Exit
];
var reversePriorityOrder = __spreadArray([], __read(variantPriorityOrder)).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
	return function(animations) {
		return Promise.all(animations.map(function(_a) {
			var animation = _a.animation, options = _a.options;
			return animateVisualElement(visualElement, animation, options);
		}));
	};
}
function createAnimationState(visualElement) {
	var animate = animateList(visualElement);
	var state = createState();
	var allAnimatedKeys = {};
	var isInitialRender = true;
	/**
	* This function will be used to reduce the animation definitions for
	* each active animation type into an object of resolved values for it.
	*/
	var buildResolvedTypeValues = function(acc, definition) {
		var resolved = resolveVariant(visualElement, definition);
		if (resolved) {
			resolved.transition;
			var transitionEnd = resolved.transitionEnd, target = __rest(resolved, ["transition", "transitionEnd"]);
			acc = Object.assign(Object.assign(Object.assign({}, acc), target), transitionEnd);
		}
		return acc;
	};
	function isAnimated(key) {
		return allAnimatedKeys[key] !== void 0;
	}
	/**
	* This just allows us to inject mocked animation functions
	* @internal
	*/
	function setAnimateFunction(makeAnimator) {
		animate = makeAnimator(visualElement);
	}
	/**
	* When we receive new props, we need to:
	* 1. Create a list of protected keys for each type. This is a directory of
	*    value keys that are currently being "handled" by types of a higher priority
	*    so that whenever an animation is played of a given type, these values are
	*    protected from being animated.
	* 2. Determine if an animation type needs animating.
	* 3. Determine if any values have been removed from a type and figure out
	*    what to animate those to.
	*/
	function animateChanges(options, changedActiveType) {
		var _a;
		var props = visualElement.getProps();
		var context = visualElement.getVariantContext(true) || {};
		/**
		* A list of animations that we'll build into as we iterate through the animation
		* types. This will get executed at the end of the function.
		*/
		var animations = [];
		/**
		* Keep track of which values have been removed. Then, as we hit lower priority
		* animation types, we can check if they contain removed values and animate to that.
		*/
		var removedKeys = /* @__PURE__ */ new Set();
		/**
		* A dictionary of all encountered keys. This is an object to let us build into and
		* copy it without iteration. Each time we hit an animation type we set its protected
		* keys - the keys its not allowed to animate - to the latest version of this object.
		*/
		var encounteredKeys = {};
		/**
		* If a variant has been removed at a given index, and this component is controlling
		* variant animations, we want to ensure lower-priority variants are forced to animate.
		*/
		var removedVariantIndex = Infinity;
		var _loop_1 = function(i) {
			var type = reversePriorityOrder[i];
			var typeState = state[type];
			var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
			var propIsVariant = isVariantLabel(prop);
			/**
			* If this type has *just* changed isActive status, set activeDelta
			* to that status. Otherwise set to null.
			*/
			var activeDelta = type === changedActiveType ? typeState.isActive : null;
			if (activeDelta === false) removedVariantIndex = i;
			/**
			* If this prop is an inherited variant, rather than been set directly on the
			* component itself, we want to make sure we allow the parent to trigger animations.
			*
			* TODO: Can probably change this to a !isControllingVariants check
			*/
			var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
			/**
			*
			*/
			if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) isInherited = false;
			/**
			* Set all encountered keys so far as the protected keys for this type. This will
			* be any key that has been animated or otherwise handled by active, higher-priortiy types.
			*/
			typeState.protectedKeys = Object.assign({}, encounteredKeys);
			if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") return "continue";
			/**
			* As we go look through the values defined on this type, if we detect
			* a changed value or a value that was removed in a higher priority, we set
			* this to true and add this prop to the animation list.
			*/
			var shouldAnimateType = variantsHaveChanged(typeState.prevProp, prop) || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i > removedVariantIndex && propIsVariant;
			/**
			* As animations can be set as variant lists, variants or target objects, we
			* coerce everything to an array if it isn't one already
			*/
			var definitionList = Array.isArray(prop) ? prop : [prop];
			/**
			* Build an object of all the resolved values. We'll use this in the subsequent
			* animateChanges calls to determine whether a value has changed.
			*/
			var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
			if (activeDelta === false) resolvedValues = {};
			/**
			* Now we need to loop through all the keys in the prev prop and this prop,
			* and decide:
			* 1. If the value has changed, and needs animating
			* 2. If it has been removed, and needs adding to the removedKeys set
			* 3. If it has been removed in a higher priority type and needs animating
			* 4. If it hasn't been removed in a higher priority but hasn't changed, and
			*    needs adding to the type's protectedKeys list.
			*/
			var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
			var allKeys = Object.assign(Object.assign({}, prevResolvedValues), resolvedValues);
			var markToAnimate = function(key) {
				shouldAnimateType = true;
				removedKeys.delete(key);
				typeState.needsAnimating[key] = true;
			};
			for (var key in allKeys) {
				var next = resolvedValues[key];
				var prev = prevResolvedValues[key];
				if (encounteredKeys.hasOwnProperty(key)) continue;
				/**
				* If the value has changed, we probably want to animate it.
				*/
				if (next !== prev)
 /**
				* If both values are keyframes, we need to shallow compare them to
				* detect whether any value has changed. If it has, we animate it.
				*/
				if (isKeyframesTarget(next) && isKeyframesTarget(prev)) if (!shallowCompare(next, prev)) markToAnimate(key);
				else
 /**
				* If it hasn't changed, we want to ensure it doesn't animate by
				* adding it to the list of protected keys.
				*/
				typeState.protectedKeys[key] = true;
				else if (next !== void 0) markToAnimate(key);
				else removedKeys.add(key);
				else if (next !== void 0 && removedKeys.has(key))
 /**
				* If next hasn't changed and it isn't undefined, we want to check if it's
				* been removed by a higher priority
				*/
				markToAnimate(key);
				else
 /**
				* If it hasn't changed, we add it to the list of protected values
				* to ensure it doesn't get animated.
				*/
				typeState.protectedKeys[key] = true;
			}
			/**
			* Update the typeState so next time animateChanges is called we can compare the
			* latest prop and resolvedValues to these.
			*/
			typeState.prevProp = prop;
			typeState.prevResolvedValues = resolvedValues;
			/**
			*
			*/
			if (typeState.isActive) encounteredKeys = Object.assign(Object.assign({}, encounteredKeys), resolvedValues);
			if (isInitialRender && visualElement.blockInitialAnimation) shouldAnimateType = false;
			/**
			* If this is an inherited prop we want to hard-block animations
			* TODO: Test as this should probably still handle animations triggered
			* by removed values?
			*/
			if (shouldAnimateType && !isInherited) animations.push.apply(animations, __spreadArray([], __read(definitionList.map(function(animation) {
				return {
					animation,
					options: Object.assign({ type }, options)
				};
			}))));
		};
		/**
		* Iterate through all animation types in reverse priority order. For each, we want to
		* detect which values it's handling and whether or not they've changed (and therefore
		* need to be animated). If any values have been removed, we want to detect those in
		* lower priority props and flag for animation.
		*/
		for (var i = 0; i < numAnimationTypes; i++) _loop_1(i);
		allAnimatedKeys = Object.assign({}, encounteredKeys);
		/**
		* If there are some removed value that haven't been dealt with,
		* we need to create a new animation that falls back either to the value
		* defined in the style prop, or the last read value.
		*/
		if (removedKeys.size) {
			var fallbackAnimation_1 = {};
			removedKeys.forEach(function(key) {
				var fallbackTarget = visualElement.getBaseTarget(key);
				if (fallbackTarget !== void 0) fallbackAnimation_1[key] = fallbackTarget;
			});
			animations.push({ animation: fallbackAnimation_1 });
		}
		var shouldAnimate = Boolean(animations.length);
		if (isInitialRender && props.initial === false && !visualElement.manuallyAnimateOnMount) shouldAnimate = false;
		isInitialRender = false;
		return shouldAnimate ? animate(animations) : Promise.resolve();
	}
	/**
	* Change whether a certain animation type is active.
	*/
	function setActive(type, isActive, options) {
		var _a;
		if (state[type].isActive === isActive) return Promise.resolve();
		(_a = visualElement.variantChildren) === null || _a === void 0 || _a.forEach(function(child) {
			var _a;
			return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive);
		});
		state[type].isActive = isActive;
		return animateChanges(options, type);
	}
	return {
		isAnimated,
		animateChanges,
		setActive,
		setAnimateFunction,
		getState: function() {
			return state;
		}
	};
}
function variantsHaveChanged(prev, next) {
	if (typeof next === "string") return next !== prev;
	else if (isVariantLabels(next)) return !shallowCompare(next, prev);
	return false;
}
function createTypeState(isActive) {
	if (isActive === void 0) isActive = false;
	return {
		isActive,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function createState() {
	var _a;
	return _a = {}, _a[AnimationType.Animate] = createTypeState(true), _a[AnimationType.Hover] = createTypeState(), _a[AnimationType.Tap] = createTypeState(), _a[AnimationType.Drag] = createTypeState(), _a[AnimationType.Focus] = createTypeState(), _a[AnimationType.Exit] = createTypeState(), _a;
}
//#endregion
//#region node_modules/svelte-motion/src/render/utils/lifecycles.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var names = [
	"LayoutMeasure",
	"BeforeLayoutMeasure",
	"LayoutUpdate",
	"ViewportBoxUpdate",
	"Update",
	"Render",
	"AnimationComplete",
	"LayoutAnimationComplete",
	"AnimationStart",
	"SetAxisTarget",
	"Unmount"
];
function createLifecycles() {
	var managers = names.map(function() {
		return new SubscriptionManager();
	});
	var propSubscriptions = {};
	var lifecycles = {
		clearAllListeners: function() {
			return managers.forEach(function(manager) {
				return manager.clear();
			});
		},
		updatePropListeners: function(props) {
			return names.forEach(function(name) {
				var _a;
				(_a = propSubscriptions[name]) === null || _a === void 0 || _a.call(propSubscriptions);
				var on = "on" + name;
				var propListener = props[on];
				if (propListener) propSubscriptions[name] = lifecycles[on](propListener);
			});
		}
	};
	managers.forEach(function(manager, i) {
		lifecycles["on" + names[i]] = function(handler) {
			return manager.add(handler);
		};
		lifecycles["notify" + names[i]] = function() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			return manager.notify.apply(manager, __spreadArray([], __read(args)));
		};
	});
	return lifecycles;
}
//#endregion
//#region node_modules/svelte-motion/src/render/utils/motion-values.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function updateMotionValuesFromProps(element, next, prev) {
	var _a;
	for (var key in next) {
		var nextValue = next[key];
		var prevValue = prev[key];
		if (isMotionValue(nextValue))
 /**
		* If this is a motion value found in props or style, we want to add it
		* to our visual element's motion value map.
		*/
		element.addValue(key, nextValue);
		else if (isMotionValue(prevValue))
 /**
		* If we're swapping to a new motion value, create a new motion value
		* from that
		*/
		element.addValue(key, motionValue(nextValue));
		else if (prevValue !== nextValue)
 /**
		* If this is a flat value that has changed, update the motion value
		* or create one if it doesn't exist. We only want to do this if we're
		* not handling the value with our animation state.
		*/
		if (element.hasValue(key)) {
			var existingValue = element.getValue(key);
			!existingValue.hasAnimated && existingValue.set(nextValue);
		} else element.addValue(key, motionValue((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
	}
	for (var key in prev) if (next[key] === void 0) element.removeValue(key);
	return next;
}
//#endregion
//#region node_modules/svelte-motion/src/render/utils/projection.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function updateLayoutDeltas(_a, _b, treePath, transformOrigin) {
	var delta = _a.delta, layout = _a.layout, layoutCorrected = _a.layoutCorrected, treeScale = _a.treeScale;
	var target = _b.target;
	/**
	* Reset the corrected box with the latest values from box, as we're then going
	* to perform mutative operations on it.
	*/
	resetBox(layoutCorrected, layout);
	/**
	* Apply all the parent deltas to this box to produce the corrected box. This
	* is the layout box, as it will appear on screen as a result of the transforms of its parents.
	*/
	applyTreeDeltas(layoutCorrected, treeScale, treePath);
	/**
	* Update the delta between the corrected box and the target box before user-set transforms were applied.
	* This will allow us to calculate the corrected borderRadius and boxShadow to compensate
	* for our layout reprojection, but still allow them to be scaled correctly by the user.
	* It might be that to simplify this we may want to accept that user-set scale1 is also corrected
	* and we wouldn't have to keep and calc both deltas, OR we could support a user setting
	* to allow people to choose whether these styles are corrected based on just the
	* layout reprojection or the final bounding box.
	*/
	updateBoxDelta(delta, layoutCorrected, target, transformOrigin);
}
//#endregion
//#region node_modules/svelte-motion/src/render/utils/compare-by-depth.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var compareByDepth = function(a, b) {
	return a.depth - b.depth;
};
//#endregion
//#region node_modules/svelte-motion/src/render/utils/flat-tree.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var FlatTree = function() {
	function FlatTree() {
		this.children = [];
		this.isDirty = false;
	}
	FlatTree.prototype.add = function(child) {
		addUniqueItem(this.children, child);
		this.isDirty = true;
	};
	FlatTree.prototype.remove = function(child) {
		removeItem(this.children, child);
		this.isDirty = true;
	};
	FlatTree.prototype.forEach = function(callback) {
		this.isDirty && this.children.sort(compareByDepth);
		var numChildren = this.children.length;
		for (var i = 0; i < numChildren; i++) callback(this.children[i]);
	};
	return FlatTree;
}();
function calcRelativeOffsetAxis(parent, child) {
	return {
		min: child.min - parent.min,
		max: child.max - parent.min
	};
}
function calcRelativeOffset(parent, child) {
	return {
		x: calcRelativeOffsetAxis(parent.x, child.x),
		y: calcRelativeOffsetAxis(parent.y, child.y)
	};
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/projection/relative-set.js
/** 
based on framer-motion@4.1.11,
Copyright (c) 2018 Framer B.V.
*/
function setCurrentViewportBox(visualElement) {
	var projectionParent = visualElement.getProjectionParent();
	if (!projectionParent) {
		visualElement.rebaseProjectionTarget();
		return;
	}
	var relativeOffset = calcRelativeOffset(projectionParent.getLayoutState().layout, visualElement.getLayoutState().layout);
	eachAxis(function(axis) {
		visualElement.setProjectionTargetAxis(axis, relativeOffset[axis].min, relativeOffset[axis].max, true);
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/index.js
var visualElement = function(_a) {
	var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, resetTransform = _a.resetTransform, restoreTransform = _a.restoreTransform, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps = _a.scrapeMotionValuesFromProps;
	return function(_a, options) {
		var parent = _a.parent, props = _a.props, presenceId = _a.presenceId, blockInitialAnimation = _a.blockInitialAnimation, visualState = _a.visualState;
		if (options === void 0) options = {};
		var latestValues = visualState.latestValues, renderState = visualState.renderState;
		/**
		* The instance of the render-specific node that will be hydrated by the
		* exposed React ref. So for example, this visual element can host a
		* HTMLElement, plain object, or Three.js object. The functions provided
		* in VisualElementConfig allow us to interface with this instance.
		*/
		var instance;
		/**
		* Manages the subscriptions for a visual element's lifecycle, for instance
		* onRender and onViewportBoxUpdate.
		*/
		var lifecycles = createLifecycles();
		/**
		*
		*/
		var projection = createProjectionState();
		/**
		* A reference to the nearest projecting parent. This is either
		* undefined if we haven't looked for the nearest projecting parent,
		* false if there is no parent performing layout projection, or a reference
		* to the projecting parent.
		*/
		var projectionParent;
		/**
		* This is a reference to the visual state of the "lead" visual element.
		* Usually, this will be this visual element. But if it shares a layoutId
		* with other visual elements, only one of them will be designated lead by
		* AnimateSharedLayout. All the other visual elements will take on the visual
		* appearance of the lead while they crossfade to it.
		*/
		var leadProjection = projection;
		var leadLatestValues = latestValues;
		var unsubscribeFromLeadVisualElement;
		/**
		* The latest layout measurements and calculated projections. This
		* is seperate from the target projection data in visualState as
		* many visual elements might point to the same piece of visualState as
		* a target, whereas they might each have different layouts and thus
		* projection calculations needed to project into the same viewport box.
		*/
		var layoutState = createLayoutState();
		/**
		*
		*/
		var crossfader;
		/**
		* Keep track of whether the viewport box has been updated since the
		* last time the layout projection was re-calculated.
		*/
		var hasViewportBoxUpdated = false;
		/**
		* A map of all motion values attached to this visual element. Motion
		* values are source of truth for any given animated value. A motion
		* value might be provided externally by the component via props.
		*/
		var values = /* @__PURE__ */ new Map();
		/**
		* A map of every subscription that binds the provided or generated
		* motion values onChange listeners to this visual element.
		*/
		var valueSubscriptions = /* @__PURE__ */ new Map();
		/**
		* A reference to the previously-provided motion values as returned
		* from scrapeMotionValuesFromProps. We use the keys in here to determine
		* if any motion values need to be removed after props are updated.
		*/
		var prevMotionValues = {};
		/**
		* x/y motion values that track the progress of initiated layout
		* animations.
		*
		* TODO: Target for removal
		*/
		var projectionTargetProgress;
		/**
		* When values are removed from all animation props we need to search
		* for a fallback value to animate to. These values are tracked in baseTarget.
		*/
		var baseTarget = Object.assign({}, latestValues);
		/**
		* On mount, this will be hydrated with a callback to disconnect
		* this visual element from its parent on unmount.
		*/
		var removeFromVariantTree;
		/**
		*
		*/
		function render() {
			if (!instance) return;
			if (element.isProjectionReady()) {
				/**
				* Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
				* This is the final box that we will then project into by calculating a transform delta and
				* applying it to the corrected box.
				*/
				applyBoxTransforms(leadProjection.targetFinal, leadProjection.target, leadLatestValues);
				/**
				* Update the delta between the corrected box and the final target box, after
				* user-set transforms are applied to it. This will be used by the renderer to
				* create a transform style that will reproject the element from its actual layout
				* into the desired bounding box.
				*/
				updateBoxDelta(layoutState.deltaFinal, layoutState.layoutCorrected, leadProjection.targetFinal, latestValues);
			}
			triggerBuild();
			renderInstance(instance, renderState);
		}
		function triggerBuild() {
			var valuesToRender = latestValues;
			if (crossfader && crossfader.isActive()) {
				var crossfadedValues = crossfader.getCrossfadeState(element);
				if (crossfadedValues) valuesToRender = crossfadedValues;
			}
			build(element, renderState, valuesToRender, leadProjection, layoutState, options, props);
		}
		function update() {
			lifecycles.notifyUpdate(latestValues);
		}
		function updateLayoutProjection() {
			if (!element.isProjectionReady()) return;
			var delta = layoutState.delta, treeScale = layoutState.treeScale;
			var prevTreeScaleX = treeScale.x;
			var prevTreeScaleY = treeScale.y;
			var prevDeltaTransform = layoutState.deltaTransform;
			updateLayoutDeltas(layoutState, leadProjection, element.path, latestValues);
			hasViewportBoxUpdated && element.notifyViewportBoxUpdate(leadProjection.target, delta);
			hasViewportBoxUpdated = false;
			var deltaTransform = buildLayoutProjectionTransform(delta, treeScale);
			if (deltaTransform !== prevDeltaTransform || prevTreeScaleX !== treeScale.x || prevTreeScaleY !== treeScale.y) element.scheduleRender();
			layoutState.deltaTransform = deltaTransform;
		}
		function updateTreeLayoutProjection() {
			element.layoutTree.forEach(fireUpdateLayoutProjection);
		}
		/**
		*
		*/
		function bindToMotionValue(key, value) {
			var removeOnChange = value.onChange(function(latestValue) {
				latestValues[key] = latestValue;
				props.onUpdate && sync.update(update, false, true);
			});
			var removeOnRenderRequest = value.onRenderRequest(element.scheduleRender);
			valueSubscriptions.set(key, function() {
				removeOnChange();
				removeOnRenderRequest();
			});
		}
		/**
		* Any motion values that are provided to the element when created
		* aren't yet bound to the element, as this would technically be impure.
		* However, we iterate through the motion values and set them to the
		* initial values for this component.
		*
		* TODO: This is impure and we should look at changing this to run on mount.
		* Doing so will break some tests but this isn't neccessarily a breaking change,
		* more a reflection of the test.
		*/
		var initialMotionValues = scrapeMotionValuesFromProps(props);
		for (var key in initialMotionValues) {
			var value = initialMotionValues[key];
			if (latestValues[key] !== void 0 && isMotionValue(value)) value.set(latestValues[key], false);
		}
		/**
		* Determine what role this visual element should take in the variant tree.
		*/
		var isControllingVariants = checkIfControllingVariants(props);
		var isVariantNode = checkIfVariantNode(props);
		var element = Object.assign(Object.assign({
			treeType,
			current: null,
			depth: parent ? parent.depth + 1 : 0,
			parent,
			children: /* @__PURE__ */ new Set(),
			path: parent ? __spreadArray(__spreadArray([], __read(parent.path)), [parent]) : [],
			layoutTree: parent ? parent.layoutTree : new FlatTree(),
			presenceId,
			projection,
			variantChildren: isVariantNode ? /* @__PURE__ */ new Set() : void 0,
			isVisible: void 0,
			manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()),
			blockInitialAnimation,
			isMounted: function() {
				return Boolean(instance);
			},
			mount: function(newInstance) {
				instance = element.current = newInstance;
				element.pointTo(element);
				if (isVariantNode && parent && !isControllingVariants) removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
				parent === null || parent === void 0 || parent.children.add(element);
			},
			unmount: function() {
				cancelSync.update(update);
				cancelSync.render(render);
				cancelSync.preRender(element.updateLayoutProjection);
				valueSubscriptions.forEach(function(remove) {
					return remove();
				});
				element.stopLayoutAnimation();
				element.layoutTree.remove(element);
				removeFromVariantTree === null || removeFromVariantTree === void 0 || removeFromVariantTree();
				parent === null || parent === void 0 || parent.children.delete(element);
				unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 || unsubscribeFromLeadVisualElement();
				lifecycles.clearAllListeners();
			},
			addVariantChild: function(child) {
				var _a;
				var closestVariantNode = element.getClosestVariantNode();
				if (closestVariantNode) {
					(_a = closestVariantNode.variantChildren) === null || _a === void 0 || _a.add(child);
					return function() {
						return closestVariantNode.variantChildren.delete(child);
					};
				}
			},
			sortNodePosition: function(other) {
				/**
				* If these nodes aren't even of the same type we can't compare their depth.
				*/
				if (!sortNodePosition || treeType !== other.treeType) return 0;
				return sortNodePosition(element.getInstance(), other.getInstance());
			},
			getClosestVariantNode: function() {
				return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
			},
			scheduleUpdateLayoutProjection: parent ? parent.scheduleUpdateLayoutProjection : function() {
				return sync.preRender(element.updateTreeLayoutProjection, false, true);
			},
			getLayoutId: function() {
				return props.layoutId;
			},
			getInstance: function() {
				return instance;
			},
			getStaticValue: function(key) {
				return latestValues[key];
			},
			setStaticValue: function(key, value) {
				return latestValues[key] = value;
			},
			getLatestValues: function() {
				return latestValues;
			},
			setVisibility: function(visibility) {
				if (element.isVisible === visibility) return;
				element.isVisible = visibility;
				element.scheduleRender();
			},
			makeTargetAnimatable: function(target, canMutate) {
				if (canMutate === void 0) canMutate = true;
				return makeTargetAnimatable(element, target, props, canMutate);
			},
			addValue: function(key, value) {
				if (element.hasValue(key)) element.removeValue(key);
				values.set(key, value);
				latestValues[key] = value.get();
				bindToMotionValue(key, value);
			},
			removeValue: function(key) {
				var _a;
				values.delete(key);
				(_a = valueSubscriptions.get(key)) === null || _a === void 0 || _a();
				valueSubscriptions.delete(key);
				delete latestValues[key];
				removeValueFromRenderState(key, renderState);
			},
			hasValue: function(key) {
				return values.has(key);
			},
			getValue: function(key, defaultValue) {
				var value = values.get(key);
				if (value === void 0 && defaultValue !== void 0) {
					value = motionValue(defaultValue);
					element.addValue(key, value);
				}
				return value;
			},
			forEachValue: function(callback) {
				return values.forEach(callback);
			},
			readValue: function(key) {
				var _a;
				return (_a = latestValues[key]) !== null && _a !== void 0 ? _a : readValueFromInstance(instance, key, options);
			},
			setBaseTarget: function(key, value) {
				baseTarget[key] = value;
			},
			getBaseTarget: function(key) {
				if (getBaseTarget) {
					var target = getBaseTarget(props, key);
					if (target !== void 0 && !isMotionValue(target)) return target;
				}
				return baseTarget[key];
			}
		}, lifecycles), {
			build: function() {
				triggerBuild();
				return renderState;
			},
			scheduleRender: function() {
				sync.render(render, false, true);
			},
			syncRender: render,
			setProps: function(newProps) {
				props = newProps;
				lifecycles.updatePropListeners(newProps);
				prevMotionValues = updateMotionValuesFromProps(element, scrapeMotionValuesFromProps(props), prevMotionValues);
			},
			getProps: function() {
				return props;
			},
			getVariant: function(name) {
				var _a;
				return (_a = props.variants) === null || _a === void 0 ? void 0 : _a[name];
			},
			getDefaultTransition: function() {
				return props.transition;
			},
			getVariantContext: function(startAtParent) {
				if (startAtParent === void 0) startAtParent = false;
				if (startAtParent) return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
				if (!isControllingVariants) {
					var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
					if (props.initial !== void 0) context_1.initial = props.initial;
					return context_1;
				}
				var context = {};
				for (var i = 0; i < numVariantProps; i++) {
					var name_1 = variantProps[i];
					var prop = props[name_1];
					if (isVariantLabel(prop) || prop === false) context[name_1] = prop;
				}
				return context;
			},
			enableLayoutProjection: function() {
				projection.isEnabled = true;
				element.layoutTree.add(element);
			},
			lockProjectionTarget: function() {
				projection.isTargetLocked = true;
			},
			unlockProjectionTarget: function() {
				element.stopLayoutAnimation();
				projection.isTargetLocked = false;
			},
			getLayoutState: function() {
				return layoutState;
			},
			setCrossfader: function(newCrossfader) {
				crossfader = newCrossfader;
			},
			isProjectionReady: function() {
				return projection.isEnabled && projection.isHydrated && layoutState.isHydrated;
			},
			startLayoutAnimation: function(axis, transition, isRelative) {
				if (isRelative === void 0) isRelative = false;
				var progress = element.getProjectionAnimationProgress()[axis];
				var _a = isRelative ? projection.relativeTarget[axis] : projection.target[axis], min = _a.min;
				var length = _a.max - min;
				progress.clearListeners();
				progress.set(min);
				progress.set(min);
				progress.onChange(function(v) {
					element.setProjectionTargetAxis(axis, v, v + length, isRelative);
				});
				return element.animateMotionValue(axis, progress, 0, transition);
			},
			stopLayoutAnimation: function() {
				eachAxis(function(axis) {
					return element.getProjectionAnimationProgress()[axis].stop();
				});
			},
			measureViewportBox: function(withTransform) {
				if (withTransform === void 0) withTransform = true;
				var viewportBox = measureViewportBox(instance, options);
				if (!withTransform) removeBoxTransforms(viewportBox, latestValues);
				return viewportBox;
			},
			getProjectionAnimationProgress: function() {
				projectionTargetProgress || (projectionTargetProgress = {
					x: motionValue(0),
					y: motionValue(0)
				});
				return projectionTargetProgress;
			},
			setProjectionTargetAxis: function(axis, min, max, isRelative) {
				if (isRelative === void 0) isRelative = false;
				var target;
				if (isRelative) {
					if (!projection.relativeTarget) projection.relativeTarget = axisBox();
					target = projection.relativeTarget[axis];
				} else {
					projection.relativeTarget = void 0;
					target = projection.target[axis];
				}
				projection.isHydrated = true;
				target.min = min;
				target.max = max;
				hasViewportBoxUpdated = true;
				lifecycles.notifySetAxisTarget();
			},
			rebaseProjectionTarget: function(force, box) {
				if (box === void 0) box = layoutState.layout;
				var _a = element.getProjectionAnimationProgress(), x = _a.x, y = _a.y;
				var shouldRebase = !projection.relativeTarget && !projection.isTargetLocked && !x.isAnimating() && !y.isAnimating();
				if (force || shouldRebase) eachAxis(function(axis) {
					var _a = box[axis], min = _a.min, max = _a.max;
					element.setProjectionTargetAxis(axis, min, max);
				});
			},
			notifyLayoutReady: function(config) {
				setCurrentViewportBox(element);
				element.notifyLayoutUpdate(layoutState.layout, element.prevViewportBox || layoutState.layout, config);
			},
			resetTransform: function() {
				return resetTransform(element, instance, props);
			},
			restoreTransform: function() {
				return restoreTransform(instance, renderState);
			},
			updateLayoutProjection,
			updateTreeLayoutProjection: function() {
				element.layoutTree.forEach(fireResolveRelativeTargetBox);
				/**
				* Schedule the projection updates at the end of the current preRender
				* step. This will ensure that all layout trees will first resolve
				* relative projection boxes into viewport boxes, and *then*
				* update projections.
				*/
				sync.preRender(updateTreeLayoutProjection, false, true);
			},
			getProjectionParent: function() {
				if (projectionParent === void 0) {
					var foundParent = false;
					for (var i = element.path.length - 1; i >= 0; i--) {
						var ancestor = element.path[i];
						if (ancestor.projection.isEnabled) {
							foundParent = ancestor;
							break;
						}
					}
					projectionParent = foundParent;
				}
				return projectionParent;
			},
			resolveRelativeTargetBox: function() {
				var relativeParent = element.getProjectionParent();
				if (!projection.relativeTarget || !relativeParent) return;
				calcRelativeBox(projection, relativeParent.projection);
				if (isDraggable(relativeParent)) {
					var target = projection.target;
					applyBoxTransforms(target, target, relativeParent.getLatestValues());
				}
			},
			shouldResetTransform: function() {
				return Boolean(props._layoutResetTransform);
			},
			pointTo: function(newLead) {
				leadProjection = newLead.projection;
				leadLatestValues = newLead.getLatestValues();
				/**
				* Subscribe to lead component's layout animations
				*/
				unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 || unsubscribeFromLeadVisualElement();
				unsubscribeFromLeadVisualElement = pipe(newLead.onSetAxisTarget(element.scheduleUpdateLayoutProjection), newLead.onLayoutAnimationComplete(function() {
					var _a;
					if (element.isPresent) element.presence = Presence.Present;
					else (_a = element.layoutSafeToRemove) === null || _a === void 0 || _a.call(element);
				}));
			},
			isPresent: true,
			presence: Presence.Entering
		});
		return element;
	};
};
function fireResolveRelativeTargetBox(child) {
	child.resolveRelativeTargetBox();
}
function fireUpdateLayoutProjection(child) {
	child.updateLayoutProjection();
}
var variantProps = __spreadArray(["initial"], __read(variantPriorityOrder));
var numVariantProps = variantProps.length;
//#endregion
//#region node_modules/svelte-motion/src/motion/utils/valid-prop.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* A list of all valid MotionProps.
*
* @internalremarks
* This doesn't throw if a `MotionProp` name is missing - it should.
*/
var validMotionProps = new Set([
	"initial",
	"animate",
	"exit",
	"style",
	"variants",
	"transition",
	"transformTemplate",
	"transformValues",
	"custom",
	"inherit",
	"layout",
	"layoutId",
	"onLayoutAnimationComplete",
	"onViewportBoxUpdate",
	"onLayoutMeasure",
	"onBeforeLayoutMeasure",
	"onAnimationStart",
	"onAnimationComplete",
	"onUpdate",
	"onDragStart",
	"onDrag",
	"onDragEnd",
	"onMeasureDragConstraints",
	"onDirectionLock",
	"onDragTransitionEnd",
	"drag",
	"dragControls",
	"dragListener",
	"dragConstraints",
	"dragDirectionLock",
	"_dragX",
	"_dragY",
	"dragElastic",
	"dragMomentum",
	"dragPropagation",
	"dragTransition",
	"whileDrag",
	"onPan",
	"onPanStart",
	"onPanEnd",
	"onPanSessionStart",
	"onTap",
	"onTapStart",
	"onTapCancel",
	"onHoverStart",
	"onHoverEnd",
	"whileFocus",
	"whileTap",
	"whileHover"
]);
/**
* Check whether a prop name is a valid `MotionProp` key.
*
* @param key - Name of the property to check
* @returns `true` is key is a valid `MotionProp`.
*
* @public
*/
function isValidMotionProp(key) {
	return validMotionProps.has(key);
}
//#endregion
//#region node_modules/svelte-motion/src/context/PresenceContext.js
/**
* @public
*/
var PresenceContext = (c) => getDomContext("Presence", c) || writable(null);
//#endregion
//#region node_modules/svelte-motion/src/components/AnimatePresence/use-presence.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var counter = 0;
var incrementId = () => counter++;
function isPresent(context) {
	return context === null ? true : context.isPresent;
}
var usePresence = (isCustom = false) => {
	const context = getContext(PresenceContext) || PresenceContext(isCustom);
	const id = get(context) === null ? void 0 : incrementId();
	if (get(context) === null) return readable([true, null]);
	return derived(context, ($v) => !$v.isPresent && $v.onExitComplete ? [false, () => $v.onExitComplete?.(id)] : [true]);
};
//#endregion
//#region node_modules/svelte-motion/src/context/LayoutGroupContext.js
/**
* @internal
*/
var LayoutGroupContext = (c) => getDomContext("LayoutGroup", c) || writable(null);
//#endregion
//#region node_modules/svelte-motion/src/render/dom/projection/utils.js
/** 
based on framer-motion@4.1.11,
Copyright (c) 2018 Framer B.V.
*/
function isProjecting(visualElement) {
	return visualElement.projection.isEnabled || visualElement.shouldResetTransform();
}
function collectProjectingAncestors(visualElement, ancestors) {
	if (ancestors === void 0) ancestors = [];
	var parent = visualElement.parent;
	if (parent) collectProjectingAncestors(parent, ancestors);
	if (isProjecting(visualElement)) ancestors.push(visualElement);
	return ancestors;
}
function collectProjectingChildren(visualElement) {
	var children = [];
	var addChild = function(child) {
		if (isProjecting(child)) children.push(child);
		child.children.forEach(addChild);
	};
	visualElement.children.forEach(addChild);
	return children.sort(compareByDepth);
}
/**
* Update the layoutState by measuring the DOM layout. This
* should be called after resetting any layout-affecting transforms.
*/
function updateLayoutMeasurement(visualElement) {
	if (visualElement.shouldResetTransform()) return;
	var layoutState = visualElement.getLayoutState();
	visualElement.notifyBeforeLayoutMeasure(layoutState.layout);
	layoutState.isHydrated = true;
	layoutState.layout = visualElement.measureViewportBox();
	layoutState.layoutCorrected = copyAxisBox(layoutState.layout);
	visualElement.notifyLayoutMeasure(layoutState.layout, visualElement.prevViewportBox || layoutState.layout);
	sync.update(function() {
		return visualElement.rebaseProjectionTarget();
	});
}
/**
* Record the viewport box as it was before an expected mutation/re-render
*/
function snapshotViewportBox(visualElement, nc) {
	if (visualElement.shouldResetTransform()) return;
	if (!nc) visualElement.prevViewportBox = visualElement.measureViewportBox(false);
	/**
	* Update targetBox to match the prevViewportBox. This is just to ensure
	* that targetBox is affected by scroll in the same way as the measured box
	*/
	visualElement.rebaseProjectionTarget(false, visualElement.prevViewportBox);
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/utils/batch-layout.js
/** 
based on framer-motion@4.1.15,
Copyright (c) 2018 Framer B.V.
*/
var unresolvedJobs = /* @__PURE__ */ new Set();
var layoutState = { isMeasuringLayout: false };
function pushJob(stack, job, pointer) {
	if (!stack[pointer]) stack[pointer] = [];
	stack[pointer].push(job);
}
function batchLayout(callback) {
	unresolvedJobs.add(callback);
	return function() {
		return unresolvedJobs.delete(callback);
	};
}
function flushLayout() {
	if (!unresolvedJobs.size) return;
	var pointer = 0;
	var reads = [[]];
	var writes = [];
	var setRead = function(job) {
		return pushJob(reads, job, pointer);
	};
	var setWrite = function(job) {
		pushJob(writes, job, pointer);
		pointer++;
	};
	/**
	* Resolve jobs into their array stacks
	*/
	unresolvedJobs.forEach(function(callback) {
		callback(setRead, setWrite);
		pointer = 0;
	});
	unresolvedJobs.clear();
	/**
	* Mark that we're currently measuring layouts. This allows us to, for instance, ignore
	* hover events that might be triggered as a result of resetting transforms.
	*
	* The postRender/setTimeout combo seems like an odd bit of scheduling but what it's saying
	* is *after* the next render, wait 10ms before re-enabling hover events. Waiting until the
	* next frame completely will result in missed, valid hover events. But events seem to
	* be fired async from their actual action, so setting this to false too soon can still
	* trigger events from layout measurements.
	*
	* Note: If we figure out a way of measuring layout while transforms remain applied, this can be removed.
	* I have attempted unregistering event listeners and setting CSS to pointer-events: none
	* but neither seem to work as expected.
	*/
	layoutState.isMeasuringLayout = true;
	sync.postRender(function() {
		setTimeout(function() {
			return layoutState.isMeasuringLayout = false;
		}, 10);
	});
	/**
	* Execute jobs
	*/
	var numStacks = writes.length;
	for (var i = 0; i <= numStacks; i++) {
		reads[i] && reads[i].forEach(executeJob);
		writes[i] && writes[i].forEach(executeJob);
	}
}
var executeJob = function(job) {
	return job();
};
//#endregion
//#region node_modules/svelte-motion/src/components/AnimateSharedLayout/utils/batcher.js
/** 
based on framer-motion@4.1.15,
Copyright (c) 2018 Framer B.V.
*/
/**
* Default handlers for batching VisualElements
*/
var defaultHandler = { layoutReady: function(child) {
	return child.notifyLayoutReady();
} };
/**
* Create a batcher to process VisualElements
*/
function createBatcher() {
	var queue = /* @__PURE__ */ new Set();
	return {
		add: function(child) {
			return queue.add(child);
		},
		flush: function(_a) {
			var _b = _a === void 0 ? defaultHandler : _a, layoutReady = _b.layoutReady, parent = _b.parent;
			batchLayout(function(read, write) {
				var order = Array.from(queue).sort(compareByDepth);
				var ancestors = parent ? collectProjectingAncestors(parent) : [];
				write(function() {
					__spreadArray(__spreadArray([], __read(ancestors)), __read(order)).forEach(function(element) {
						return element.resetTransform();
					});
				});
				read(function() {
					order.forEach(updateLayoutMeasurement);
				});
				write(function() {
					ancestors.forEach(function(element) {
						return element.restoreTransform();
					});
					order.forEach(layoutReady);
				});
				read(function() {
					/**
					* After all children have started animating, ensure any Entering components are set to Present.
					* If we add deferred animations (set up all animations and then start them in two loops) this
					* could be moved to the start loop. But it needs to happen after all the animations configs
					* are generated in AnimateSharedLayout as this relies on presence data
					*/
					order.forEach(function(child) {
						if (child.isPresent) child.presence = Presence.Present;
					});
				});
				write(function() {
					/**
					* Starting these animations will have queued jobs on the frame loop. In some situations,
					* like when removing an element, these will be processed too late after the DOM is manipulated,
					* leaving a flash of incorrectly-projected content. By manually flushing these jobs
					* we ensure there's no flash.
					*/
					flushSync.preRender();
					flushSync.render();
				});
				read(function() {
					/**
					* Schedule a callback at the end of the following frame to assign the latest projection
					* box to the prevViewportBox snapshot. Once global batching is in place this could be run
					* synchronously. But for now it ensures that if any nested `AnimateSharedLayout` top-level
					* child attempts to calculate its previous relative position against a prevViewportBox
					* it will be against its latest projection box instead, as the snapshot is useless beyond this
					* render.
					*/
					sync.postRender(function() {
						return order.forEach(assignProjectionToSnapshot);
					});
					queue.clear();
				});
			});
			flushLayout();
		}
	};
}
function assignProjectionToSnapshot(child) {
	child.prevViewportBox = child.projection.target;
}
//#endregion
//#region node_modules/svelte-motion/src/context/SharedLayoutContext.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var SharedLayoutContext = (custom) => getDomContext("SharedLayout", custom) || writable(createBatcher());
/**
* @internal
*/
var FramerTreeLayoutContext = () => writable(createBatcher());
function isSharedLayout(context) {
	return !!context.forceUpdate;
}
//#endregion
//#region node_modules/svelte-motion/src/context/LazyContext.js
var LazyContext = (c) => getDomContext("Lazy", c) || writable({ strict: false });
//#endregion
//#region node_modules/svelte-motion/src/context/MotionContext/MotionContext.svelte
var MotionContext = (c) => getDomContext("Motion", c) || writable({});
//#endregion
//#region node_modules/svelte-motion/src/motion/utils/UseVisualElement.svelte
function UseVisualElement($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let createVisualElement = fallback($$props["createVisualElement"], void 0);
		let props = $$props["props"];
		let Component = $$props["Component"];
		let visualState = $$props["visualState"];
		let isCustom = $$props["isCustom"];
		const config = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
		const presenceContext = getContext(PresenceContext) || PresenceContext(isCustom);
		const lazyContext = getContext(LazyContext) || LazyContext(isCustom);
		const mc = getContext(MotionContext) || MotionContext(isCustom);
		let parent = get(mc).visualElement;
		const layoutGroupId = getContext(LayoutGroupContext) || LayoutGroupContext(isCustom);
		let layoutId = store_get($$store_subs ??= {}, "$layoutGroupId", layoutGroupId) && props.layoutId !== void 0 ? store_get($$store_subs ??= {}, "$layoutGroupId", layoutGroupId) + "-" + props.layoutId : props.layoutId;
		let visualElementRef = void 0;
		/**
		* If we haven't preloaded a renderer, check to see if we have one lazy-loaded
		*/
		if (!createVisualElement) createVisualElement = store_get($$store_subs ??= {}, "$lazyContext", lazyContext).renderer;
		let visualElement = visualElementRef;
		onDestroy(() => {
			visualElement?.notifyUnmount();
		});
		$: parent = store_get($$store_subs ??= {}, "$mc", mc).visualElement;
		$: layoutId = store_get($$store_subs ??= {}, "$layoutGroupId", layoutGroupId) && props.layoutId !== void 0 ? store_get($$store_subs ??= {}, "$layoutGroupId", layoutGroupId) + "-" + props.layoutId : props.layoutId;
		$: if (!visualElementRef && createVisualElement) visualElementRef = createVisualElement(Component, {
			visualState,
			parent,
			props: {
				...props,
				layoutId
			},
			presenceId: store_get($$store_subs ??= {}, "$presenceContext", presenceContext)?.id,
			blockInitialAnimation: store_get($$store_subs ??= {}, "$presenceContext", presenceContext)?.initial === false
		});
		$: visualElement = visualElementRef;
		$: if (visualElement) {
			visualElement.setProps({
				...store_get($$store_subs ??= {}, "$config", config),
				...props,
				layoutId
			});
			visualElement.isPresent = isPresent(store_get($$store_subs ??= {}, "$presenceContext", presenceContext));
			visualElement.isPresenceRoot = !parent || parent.presenceId !== store_get($$store_subs ??= {}, "$presenceContext", presenceContext)?.id;
			/**
			* Fire a render to ensure the latest state is reflected on-screen.
			*/
			visualElement.syncRender();
		}
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", { visualElement }, null);
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			createVisualElement,
			props,
			Component,
			visualState,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/motion/features/definitions.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var createDefinition = function(propNames) {
	return { isEnabled: function(props) {
		return propNames.some(function(name) {
			return !!props[name];
		});
	} };
};
var featureDefinitions = {
	measureLayout: createDefinition([
		"layout",
		"layoutId",
		"drag"
	]),
	animation: createDefinition([
		"animate",
		"exit",
		"variants",
		"whileHover",
		"whileTap",
		"whileFocus",
		"whileDrag"
	]),
	exit: createDefinition(["exit"]),
	drag: createDefinition(["drag", "dragControls"]),
	focus: createDefinition(["whileFocus"]),
	hover: createDefinition([
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	]),
	tap: createDefinition([
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	]),
	pan: createDefinition([
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	]),
	layoutAnimation: createDefinition(["layout", "layoutId"])
};
function loadFeatures(features) {
	for (var key in features) {
		var Component = features[key];
		if (Component !== null) featureDefinitions[key].Component = Component;
	}
}
//#endregion
//#region node_modules/svelte-motion/src/motion/features/UseFeatures.svelte
function UseFeatures($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		/** 
		based on framer-motion@4.0.3,
		Copyright (c) 2018 Framer B.V.
		*/
		const featureNames = Object.keys(featureDefinitions);
		const numFeatures = featureNames.length;
		let visualElement = $$props["visualElement"];
		let props = $$props["props"];
		let features = [];
		$: {
			features = [];
			for (let i = 0; i < numFeatures; i++) {
				const name = featureNames[i];
				const { isEnabled, Component } = featureDefinitions[name];
				/**
				* It might be possible in the future to use this moment to
				* dynamically request functionality. In initial tests this
				* was producing a lot of duplication amongst bundles.
				*/
				if (isEnabled(props) && Component) features.push({
					Component,
					key: name,
					props,
					visualElement
				});
			}
		}
		if (visualElement) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<!--[-->`);
			slot($$renderer, $$props, "default", { features }, null);
			$$renderer.push(`<!--]-->`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			visualElement,
			props
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/context/MotionContext/MotionContextProvider.svelte
function MotionContextProvider($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let value = $$props["value"];
		let isCustom = $$props["isCustom"];
		let store = writable(value);
		setContext(MotionContext, store);
		setDomContext("Motion", isCustom, store);
		onDestroy(() => {
			value?.visualElement?.unmount();
		});
		$: store.set(value);
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			value,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/html/utils/create-render-state.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var createHtmlRenderState = function() {
	return {
		style: {},
		transform: {},
		transformKeys: [],
		transformOrigin: {},
		vars: {}
	};
};
//#endregion
//#region node_modules/svelte-motion/src/render/svg/utils/create-render-state.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var createSvgRenderState = function() {
	return Object.assign(Object.assign({}, createHtmlRenderState()), { attrs: {} });
};
//#endregion
//#region node_modules/svelte-motion/src/render/html/utils/transform.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* A list of all transformable axes. We'll use this list to generated a version
* of each axes for each transform.
*/
var transformAxes = [
	"",
	"X",
	"Y",
	"Z"
];
/**
* An ordered array of each transformable value. By default, transform values
* will be sorted to this order.
*/
var order = [
	"translate",
	"scale",
	"rotate",
	"skew"
];
/**
* Generate a list of every possible transform key.
*/
var transformProps = [
	"transformPerspective",
	"x",
	"y",
	"z"
];
order.forEach(function(operationKey) {
	return transformAxes.forEach(function(axesKey) {
		return transformProps.push(operationKey + axesKey);
	});
});
/**
* A function to use with Array.sort to sort transform keys by their default order.
*/
function sortTransformProps(a, b) {
	return transformProps.indexOf(a) - transformProps.indexOf(b);
}
/**
* A quick lookup for transform props.
*/
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
	return transformPropSet.has(key);
}
/**
* A quick lookup for transform origin props
*/
var transformOriginProps = new Set([
	"originX",
	"originY",
	"originZ"
]);
function isTransformOriginProp(key) {
	return transformOriginProps.has(key);
}
//#endregion
//#region node_modules/svelte-motion/src/motion/utils/is-forced-motion-value.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function isForcedMotionValue(key, _a) {
	var layout = _a.layout, layoutId = _a.layoutId;
	return isTransformProp(key) || isTransformOriginProp(key) || (layout || layoutId !== void 0) && !!valueScaleCorrection[key];
}
//#endregion
//#region node_modules/svelte-motion/src/render/html/utils/build-transform.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
};
/**
* Build a CSS transform style from individual x/y/scale etc properties.
*
* This outputs with a default order of transforms/scales/rotations, this can be customised by
* providing a transformTemplate function.
*/
function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
	var transform = _a.transform, transformKeys = _a.transformKeys;
	var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
	var transformString = "";
	transformKeys.sort(sortTransformProps);
	var transformHasZ = false;
	var numTransformKeys = transformKeys.length;
	for (var i = 0; i < numTransformKeys; i++) {
		var key = transformKeys[i];
		transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
		if (key === "z") transformHasZ = true;
	}
	if (!transformHasZ && enableHardwareAcceleration) transformString += "translateZ(0)";
	else transformString = transformString.trim();
	if (transformTemplate) transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
	else if (allowTransformNone && transformIsDefault) transformString = "none";
	return transformString;
}
/**
* Build a transformOrigin style. Uses the same defaults as the browser for
* undefined origins.
*/
function buildTransformOrigin(_a) {
	var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
	return originX + " " + originY + " " + originZ;
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/utils/is-css-variable.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Returns true if the provided key is a CSS variable
*/
function isCSSVariable$1(key) {
	return key.startsWith("--");
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/value-types/get-as-type.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Provided a value and a ValueType, returns the value as that value type.
*/
var getValueAsType = function(value, type) {
	return type && typeof value === "number" ? type.transform(value) : value;
};
//#endregion
//#region node_modules/svelte-motion/src/render/html/utils/build-styles.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function buildHTMLStyles(state, latestValues, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
	var _a;
	var style = state.style, vars = state.vars, transform = state.transform, transformKeys = state.transformKeys, transformOrigin = state.transformOrigin;
	transformKeys.length = 0;
	var hasTransform = false;
	var hasTransformOrigin = false;
	var transformIsNone = true;
	/**
	* Loop over all our latest animated values and decide whether to handle them
	* as a style or CSS variable.
	*
	* Transforms and transform origins are kept seperately for further processing.
	*/
	for (var key in latestValues) {
		var value = latestValues[key];
		/**
		* If this is a CSS variable we don't do any further processing.
		*/
		if (isCSSVariable$1(key)) {
			vars[key] = value;
			continue;
		}
		var valueType = numberValueTypes[key];
		var valueAsType = getValueAsType(value, valueType);
		if (isTransformProp(key)) {
			hasTransform = true;
			transform[key] = valueAsType;
			transformKeys.push(key);
			if (!transformIsNone) continue;
			if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0)) transformIsNone = false;
		} else if (isTransformOriginProp(key)) {
			transformOrigin[key] = valueAsType;
			hasTransformOrigin = true;
		} else if (layoutState && projection && layoutState.isHydrated && valueScaleCorrection[key]) {
			var correctedValue = valueScaleCorrection[key].process(value, layoutState, projection);
			/**
			* Scale-correctable values can define a number of other values to break
			* down into. For instance borderRadius needs applying to borderBottomLeftRadius etc
			*/
			var applyTo = valueScaleCorrection[key].applyTo;
			if (applyTo) {
				var num = applyTo.length;
				for (var i = 0; i < num; i++) style[applyTo[i]] = correctedValue;
			} else style[key] = correctedValue;
		} else style[key] = valueAsType;
	}
	if (layoutState && projection && buildProjectionTransform && buildProjectionTransformOrigin) {
		style.transform = buildProjectionTransform(layoutState.deltaFinal, layoutState.treeScale, hasTransform ? transform : void 0);
		if (transformTemplate) style.transform = transformTemplate(transform, style.transform);
		style.transformOrigin = buildProjectionTransformOrigin(layoutState);
	} else {
		if (hasTransform) style.transform = buildTransform(state, options, transformIsNone, transformTemplate);
		if (hasTransformOrigin) style.transformOrigin = buildTransformOrigin(transformOrigin);
	}
}
//#endregion
//#region node_modules/svelte-motion/src/render/html/UseInitialMotionValues.svelte
function UseInitialMotionValues($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let styles;
		let visualState = $$props["visualState"];
		let isStatic = $$props["isStatic"];
		let props = $$props["props"];
		const memo = () => {
			let state = createHtmlRenderState();
			buildHTMLStyles(state, visualState, void 0, void 0, { enableHardwareAcceleration: !isStatic }, props.transformTemplate);
			const { vars, style } = state;
			return {
				...vars,
				...style
			};
		};
		$: styles = memo(visualState);
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", { styles }, null);
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			visualState,
			isStatic,
			props
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/html/UseStyle.svelte
function copyRawValuesOnly(target, source, props) {
	for (const key in source) if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) target[key] = source[key];
}
function UseStyle($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let styleProp;
		let visualState = $$props["visualState"];
		let props = $$props["props"];
		let isStatic = $$props["isStatic"];
		let style = {};
		/**
		* Copy non-Motion Values straight into style
		*/
		const cRVO = copyRawValuesOnly;
		const toStyle = (s1) => {
			Object.assign(style, s1);
			if (props.transformValues) style = props.transformValues(style);
			return style;
		};
		$: styleProp = props.style || {};
		$: cRVO(style, styleProp, props);
		UseInitialMotionValues($$renderer, {
			props,
			visualState,
			isStatic,
			children: invalid_default_snippet,
			$$slots: { default: ($$renderer, { styles: s1 }) => {
				$$renderer.push(`<!--[-->`);
				slot($$renderer, $$props, "default", { styles: toStyle(s1, props, style) }, null);
				$$renderer.push(`<!--]-->`);
			} }
		});
		bind_props($$props, {
			visualState,
			props,
			isStatic
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/html/UseHTMLProps.svelte
function UseHTMLProps($$renderer, $$props) {
	let props = $$props["props"];
	let visualState = $$props["visualState"];
	let isStatic = $$props["isStatic"];
	const getHTMLProps = (style, props) => {
		let htmlProps = {};
		if (Boolean(props.drag)) {
			htmlProps.draggable = false;
			style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
			style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
		}
		htmlProps.style = style;
		return htmlProps;
	};
	UseStyle($$renderer, {
		visualState,
		props,
		isStatic,
		children: invalid_default_snippet,
		$$slots: { default: ($$renderer, { styles }) => {
			$$renderer.push(`<!--[-->`);
			slot($$renderer, $$props, "default", { visualProps: getHTMLProps(styles, props) }, null);
			$$renderer.push(`<!--]-->`);
		} }
	});
	bind_props($$props, {
		props,
		visualState,
		isStatic
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/svg/utils/transform-origin.js
function calcOrigin(origin, offset, size) {
	return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
/**
* The SVG transform origin defaults are different to CSS and is less intuitive,
* so we use the measured dimensions of the SVG to reconcile these.
*/
function calcSVGTransformOrigin(dimensions, originX, originY) {
	var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
	var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
	return pxOriginX + " " + pxOriginY;
}
//#endregion
//#region node_modules/svelte-motion/src/render/svg/utils/path.js
var progressToPixels = function(progress, length) {
	return px.transform(progress * length);
};
var dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
};
var camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
/**
* Build SVG path properties. Uses the path's measured length to convert
* our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
* and stroke-dasharray attributes.
*
* This function is mutative to reduce per-frame GC.
*/
function buildSVGPath(attrs, totalLength, length, spacing, offset, useDashCase) {
	if (spacing === void 0) spacing = 1;
	if (offset === void 0) offset = 0;
	if (useDashCase === void 0) useDashCase = true;
	var keys = useDashCase ? dashKeys : camelKeys;
	attrs[keys.offset] = progressToPixels(-offset, totalLength);
	var pathLength = progressToPixels(length, totalLength);
	var pathSpacing = progressToPixels(spacing, totalLength);
	attrs[keys.array] = pathLength + " " + pathSpacing;
}
//#endregion
//#region node_modules/svelte-motion/src/render/svg/utils/build-attrs.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Build SVG visual attrbutes, like cx and style.transform
*/
function buildSVGAttrs(state, _a, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
	var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c;
	buildHTMLStyles(state, __rest(_a, [
		"attrX",
		"attrY",
		"originX",
		"originY",
		"pathLength",
		"pathSpacing",
		"pathOffset"
	]), projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin);
	state.attrs = state.style;
	state.style = {};
	var attrs = state.attrs, style = state.style, dimensions = state.dimensions, totalPathLength = state.totalPathLength;
	/**
	* However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
	* and copy it into style.
	*/
	if (attrs.transform) {
		if (dimensions) style.transform = attrs.transform;
		delete attrs.transform;
	}
	if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : .5, originY !== void 0 ? originY : .5);
	if (attrX !== void 0) attrs.x = attrX;
	if (attrY !== void 0) attrs.y = attrY;
	if (totalPathLength !== void 0 && pathLength !== void 0) buildSVGPath(attrs, totalPathLength, pathLength, pathSpacing, pathOffset, false);
}
//#endregion
//#region node_modules/svelte-motion/src/render/svg/UseSVGProps.svelte
function UseSVGProps($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let visualProps;
		let visualState = $$props["visualState"];
		let props = $$props["props"];
		let memo = () => {
			const state = createSvgRenderState();
			buildSVGAttrs(state, visualState, void 0, void 0, { enableHardwareAcceleration: false }, props.transformTemplate);
			return {
				...state.attrs,
				style: { ...state.style }
			};
		};
		$: visualProps = memo(visualState);
		$: if (props.style) {
			const rawStyles = {};
			copyRawValuesOnly(rawStyles, props.style, props);
			visualProps.style = {
				...rawStyles,
				...visualProps.style
			};
		}
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", { visualProps }, null);
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			visualState,
			props
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/utils/filter-props.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var shouldForward = function(key) {
	return !isValidMotionProp(key);
};
/**
* Emotion and Styled Components both allow users to pass through arbitrary props to their components
* to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
* of these should be passed to the underlying DOM node.
*
* However, when styling a Motion component `styled(MotionDiv)`, both packages pass through *all* props
* as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
* passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
* `@emotion/is-prop-valid`, however to fix this problem we need to use it.
*
* By making it an optionalDependency we can offer this functionality only in the situations where it's
* actually required.
*/
try {
	var emotionIsPropValid_1 = __require("@emotion/is-prop-valid").default;
	shouldForward = function(key) {
		if (key.startsWith("on")) return !isValidMotionProp(key);
		else return emotionIsPropValid_1(key);
	};
} catch (_a) {}
function filterProps(props, isDom, forwardMotionProps) {
	var filteredProps = {};
	for (var key in props) if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key)) filteredProps[key] = props[key];
	return filteredProps;
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/UseRender.svelte
function UseRender($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let filteredProps;
		let props = $$props["props"];
		let visualState = $$props["visualState"];
		let Component = $$props["Component"];
		let forwardMotionProps = fallback($$props["forwardMotionProps"], false);
		let isStatic = $$props["isStatic"];
		let ref = $$props["ref"];
		let targetEl = fallback($$props["targetEl"], void 0);
		const motion = (node) => {
			ref(node);
		};
		$: filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
		$: if (targetEl) motion(targetEl);
		if (Component === "SVG" ? UseSVGProps : UseHTMLProps) {
			$$renderer.push("<!--[-->");
			(Component === "SVG" ? UseSVGProps : UseHTMLProps)($$renderer, {
				visualState,
				isStatic,
				props,
				children: invalid_default_snippet,
				$$slots: { default: ($$renderer, { visualProps }) => {
					$$renderer.push(`<!--[-->`);
					slot($$renderer, $$props, "default", {
						motion,
						props: {
							...filteredProps,
							...visualProps
						}
					}, null);
					$$renderer.push(`<!--]-->`);
				} }
			});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
		bind_props($$props, {
			props,
			visualState,
			Component,
			forwardMotionProps,
			isStatic,
			ref,
			targetEl
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/projection/measure.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Measure and return the element bounding box.
*
* We convert the box into an AxisBox2D to make it easier to work with each axis
* individually and programmatically.
*
* This function optionally accepts a transformPagePoint function which allows us to compensate
* for, for instance, measuring the element within a scaled plane like a Framer devivce preview component.
*/
function getBoundingBox(element, transformPagePoint) {
	return convertBoundingBoxToAxisBox(transformBoundingBox(element.getBoundingClientRect(), transformPagePoint));
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/utils/css-variables-conversion.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function isCSSVariable(value) {
	return typeof value === "string" && value.startsWith("var(--");
}
/**
* Parse Framer's special CSS variable format into a CSS token and a fallback.
*
* ```
* `var(--foo, #fff)` => [`--foo`, '#fff']
* ```
*
* @param current
*/
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
	var match = cssVariableRegex.exec(current);
	if (!match) return [,];
	var _a = __read(match, 3);
	return [_a[1], _a[2]];
}
function getVariableValue(current, element, depth) {
	if (depth === void 0) depth = 1;
	var _a = __read(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
	if (!token) return;
	var resolved = window.getComputedStyle(element).getPropertyValue(token);
	if (resolved) return resolved.trim();
	else if (isCSSVariable(fallback)) return getVariableValue(fallback, element, depth + 1);
	else return fallback;
}
/**
* Resolve CSS variables from
*
* @internal
*/
function resolveCSSVariables(visualElement, _a, transitionEnd) {
	var _b;
	var target = __rest(_a, []);
	var element = visualElement.getInstance();
	if (!(element instanceof HTMLElement)) return {
		target,
		transitionEnd
	};
	if (transitionEnd) transitionEnd = Object.assign({}, transitionEnd);
	visualElement.forEachValue(function(value) {
		var current = value.get();
		if (!isCSSVariable(current)) return;
		var resolved = getVariableValue(current, element);
		if (resolved) value.set(resolved);
	});
	for (var key in target) {
		var current = target[key];
		if (!isCSSVariable(current)) continue;
		var resolved = getVariableValue(current, element);
		if (!resolved) continue;
		target[key] = resolved;
		if (transitionEnd) (_b = transitionEnd[key]) !== null && _b !== void 0 || (transitionEnd[key] = current);
	}
	return {
		target,
		transitionEnd
	};
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/utils/unit-conversion.js
var positionalKeys = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	"x",
	"y"
]);
var isPositionalKey = function(key) {
	return positionalKeys.has(key);
};
var hasPositionalKey = function(target) {
	return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function(value, to) {
	value.set(to, false);
	value.set(to);
};
var isNumOrPxType = function(v) {
	return v === number || v === px;
};
var BoundingBoxDimension;
(function(BoundingBoxDimension) {
	BoundingBoxDimension["width"] = "width";
	BoundingBoxDimension["height"] = "height";
	BoundingBoxDimension["left"] = "left";
	BoundingBoxDimension["right"] = "right";
	BoundingBoxDimension["top"] = "top";
	BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function(matrix, pos) {
	return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function(pos2, pos3) {
	return function(_bbox, _a) {
		var transform = _a.transform;
		if (transform === "none" || !transform) return 0;
		var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
		if (matrix3d) return getPosFromMatrix(matrix3d[1], pos3);
		else {
			var matrix = transform.match(/^matrix\((.+)\)$/);
			if (matrix) return getPosFromMatrix(matrix[1], pos2);
			else return 0;
		}
	};
};
var transformKeys = new Set([
	"x",
	"y",
	"z"
]);
var nonTranslationalTransformKeys = transformProps.filter(function(key) {
	return !transformKeys.has(key);
});
function removeNonTranslationalTransform(visualElement) {
	var removedTransforms = [];
	nonTranslationalTransformKeys.forEach(function(key) {
		var value = visualElement.getValue(key);
		if (value !== void 0) {
			removedTransforms.push([key, value.get()]);
			value.set(key.startsWith("scale") ? 1 : 0);
		}
	});
	if (removedTransforms.length) visualElement.syncRender();
	return removedTransforms;
}
var positionalValues = {
	width: function(_a) {
		var x = _a.x;
		return x.max - x.min;
	},
	height: function(_a) {
		var y = _a.y;
		return y.max - y.min;
	},
	top: function(_bbox, _a) {
		var top = _a.top;
		return parseFloat(top);
	},
	left: function(_bbox, _a) {
		var left = _a.left;
		return parseFloat(left);
	},
	bottom: function(_a, _b) {
		var y = _a.y;
		var top = _b.top;
		return parseFloat(top) + (y.max - y.min);
	},
	right: function(_a, _b) {
		var x = _a.x;
		var left = _b.left;
		return parseFloat(left) + (x.max - x.min);
	},
	x: getTranslateFromMatrix(4, 13),
	y: getTranslateFromMatrix(5, 14)
};
var convertChangedValueTypes = function(target, visualElement, changedKeys) {
	var originBbox = visualElement.measureViewportBox();
	var element = visualElement.getInstance();
	var elementComputedStyle = getComputedStyle(element);
	var display = elementComputedStyle.display;
	var originComputedStyle = {
		top: elementComputedStyle.top,
		left: elementComputedStyle.left,
		bottom: elementComputedStyle.bottom,
		right: elementComputedStyle.right,
		transform: elementComputedStyle.transform
	};
	if (display === "none") visualElement.setStaticValue("display", target.display || "block");
	visualElement.syncRender();
	var targetBbox = visualElement.measureViewportBox();
	changedKeys.forEach(function(key) {
		setAndResetVelocity(visualElement.getValue(key), positionalValues[key](originBbox, originComputedStyle));
		target[key] = positionalValues[key](targetBbox, elementComputedStyle);
	});
	return target;
};
var checkAndConvertChangedValueTypes = function(visualElement, target, origin, transitionEnd) {
	if (origin === void 0) origin = {};
	if (transitionEnd === void 0) transitionEnd = {};
	target = Object.assign({}, target);
	transitionEnd = Object.assign({}, transitionEnd);
	var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
	var removedTransformValues = [];
	var hasAttemptedToRemoveTransformValues = false;
	var changedValueTypeKeys = [];
	targetPositionalKeys.forEach(function(key) {
		var value = visualElement.getValue(key);
		if (!visualElement.hasValue(key)) return;
		var from = origin[key];
		var to = target[key];
		var fromType = findDimensionValueType(from);
		var toType;
		if (isKeyframesTarget(to)) {
			var numKeyframes = to.length;
			for (var i = to[0] === null ? 1 : 0; i < numKeyframes; i++) if (!toType) toType = findDimensionValueType(to[i]);
		} else toType = findDimensionValueType(to);
		if (fromType !== toType) if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
			var current = value.get();
			if (typeof current === "string") value.set(parseFloat(current));
			if (typeof to === "string") target[key] = parseFloat(to);
			else if (Array.isArray(to) && toType === px) target[key] = to.map(parseFloat);
		} else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) if (from === 0) value.set(toType.transform(from));
		else target[key] = fromType.transform(to);
		else {
			if (!hasAttemptedToRemoveTransformValues) {
				removedTransformValues = removeNonTranslationalTransform(visualElement);
				hasAttemptedToRemoveTransformValues = true;
			}
			changedValueTypeKeys.push(key);
			transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
			setAndResetVelocity(value, to);
		}
	});
	if (changedValueTypeKeys.length) {
		var convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
		if (removedTransformValues.length) removedTransformValues.forEach(function(_a) {
			var _b = __read(_a, 2), key = _b[0], value = _b[1];
			visualElement.getValue(key).set(value);
		});
		visualElement.syncRender();
		return {
			target: convertedTarget,
			transitionEnd
		};
	} else return {
		target,
		transitionEnd
	};
};
/**
* Convert value types for x/y/width/height/top/left/bottom/right
*
* Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
*
* @internal
*/
function unitConversion(visualElement, target, origin, transitionEnd) {
	return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd) : {
		target,
		transitionEnd
	};
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/utils/parse-dom-variant.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Parse a DOM variant to make it animatable. This involves resolving CSS variables
* and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
*/
var parseDomVariant = function(visualElement, target, origin, transitionEnd) {
	var resolved = resolveCSSVariables(visualElement, target, transitionEnd);
	target = resolved.target;
	transitionEnd = resolved.transitionEnd;
	return unitConversion(visualElement, target, origin, transitionEnd);
};
//#endregion
//#region node_modules/svelte-motion/src/render/html/utils/scrape-motion-values.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function scrapeMotionValuesFromProps$1(props) {
	var style = props.style;
	var newValues = {};
	for (var key in style) if (isMotionValue(style[key]) || isForcedMotionValue(key, props)) newValues[key] = style[key];
	return newValues;
}
//#endregion
//#region node_modules/svelte-motion/src/render/html/utils/render.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function renderHTML(element, _a) {
	var style = _a.style, vars = _a.vars;
	Object.assign(element.style, style);
	for (var key in vars) element.style.setProperty(key, vars[key]);
}
//#endregion
//#region node_modules/svelte-motion/src/render/html/visual-element.js
/** 
based on framer-motion@4.1.15,
Copyright (c) 2018 Framer B.V.
*/
function getComputedStyle$1(element) {
	return window.getComputedStyle(element);
}
var htmlConfig = {
	treeType: "dom",
	readValueFromInstance: function(domElement, key) {
		if (isTransformProp(key)) {
			var defaultType = getDefaultValueType(key);
			return defaultType ? defaultType.default || 0 : 0;
		} else {
			var computedStyle = getComputedStyle$1(domElement);
			return (isCSSVariable$1(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
		}
	},
	sortNodePosition: function(a, b) {
		/**
		* compareDocumentPosition returns a bitmask, by using the bitwise &
		* we're returning true if 2 in that bitmask is set to true. 2 is set
		* to true if b preceeds a.
		*/
		return a.compareDocumentPosition(b) & 2 ? 1 : -1;
	},
	getBaseTarget: function(props, key) {
		var _a;
		return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
	},
	measureViewportBox: function(element, _a) {
		var transformPagePoint = _a.transformPagePoint;
		return getBoundingBox(element, transformPagePoint);
	},
	resetTransform: function(element, domElement, props) {
		var transformTemplate = props.transformTemplate;
		domElement.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
		element.scheduleRender();
	},
	restoreTransform: function(instance, mutableState) {
		instance.style.transform = mutableState.style.transform;
	},
	removeValueFromRenderState: function(key, _a) {
		var vars = _a.vars, style = _a.style;
		delete vars[key];
		delete style[key];
	},
	makeTargetAnimatable: function(element, _a, _b, isMounted) {
		var transformValues = _b.transformValues;
		if (isMounted === void 0) isMounted = true;
		var transition = _a.transition, transitionEnd = _a.transitionEnd, target = __rest(_a, ["transition", "transitionEnd"]);
		var origin = getOrigin(target, transition || {}, element);
		/**
		* If Framer has provided a function to convert `Color` etc value types, convert them
		*/
		if (transformValues) {
			if (transitionEnd) transitionEnd = transformValues(transitionEnd);
			if (target) target = transformValues(target);
			if (origin) origin = transformValues(origin);
		}
		if (isMounted) {
			checkTargetForNewValues(element, target, origin);
			var parsed = parseDomVariant(element, target, origin, transitionEnd);
			transitionEnd = parsed.transitionEnd;
			target = parsed.target;
		}
		return Object.assign({
			transition,
			transitionEnd
		}, target);
	},
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	build: function(element, renderState, latestValues, projection, layoutState, options, props) {
		if (element.isVisible !== void 0) renderState.style.visibility = element.isVisible ? "visible" : "hidden";
		var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
		buildHTMLStyles(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? buildLayoutProjectionTransform : void 0, isProjectionTranform ? buildLayoutProjectionTransformOrigin : void 0);
	},
	render: renderHTML
};
var htmlVisualElement = visualElement(htmlConfig);
//#endregion
//#region node_modules/svelte-motion/src/render/svg/utils/scrape-motion-values.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function scrapeMotionValuesFromProps(props) {
	var newValues = scrapeMotionValuesFromProps$1(props);
	for (var key in props) if (isMotionValue(props[key])) {
		var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
		newValues[targetKey] = props[key];
	}
	return newValues;
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/utils/camel-to-dash.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
/**
* Convert camelCase to dash-case properties.
*/
var camelToDash = function(str) {
	return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};
//#endregion
//#region node_modules/svelte-motion/src/render/svg/utils/camel-case-attrs.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* A set of attribute names that are always read/written as camel case.
*/
var camelCaseAttributes = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox"
]);
//#endregion
//#region node_modules/svelte-motion/src/render/svg/utils/render.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function renderSVG(element, renderState) {
	renderHTML(element, renderState);
	for (var key in renderState.attrs) element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
}
//#endregion
//#region node_modules/svelte-motion/src/render/svg/visual-element.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var svgVisualElement = visualElement(Object.assign(Object.assign({}, htmlConfig), {
	getBaseTarget: function(props, key) {
		return props[key];
	},
	readValueFromInstance: function(domElement, key) {
		var _a;
		if (isTransformProp(key)) return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
		key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
		return domElement.getAttribute(key);
	},
	scrapeMotionValuesFromProps,
	build: function(_element, renderState, latestValues, projection, layoutState, options, props) {
		var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
		buildSVGAttrs(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? buildLayoutProjectionTransform : void 0, isProjectionTranform ? buildLayoutProjectionTransformOrigin : void 0);
	},
	render: renderSVG
}));
//#endregion
//#region node_modules/svelte-motion/src/render/dom/create-visual-element.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var createDomVisualElement = function(Component, options) {
	return Component === "SVG" ? svgVisualElement(options, { enableHardwareAcceleration: false }) : htmlVisualElement(options, { enableHardwareAcceleration: true });
};
//#endregion
//#region node_modules/svelte-motion/src/render/svg/config-motion.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var svgMotionConfig = {
	scrapeMotionValuesFromProps,
	createRenderState: createSvgRenderState,
	onMount: function(props, instance, _a) {
		var renderState = _a.renderState, latestValues = _a.latestValues;
		try {
			renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
		} catch (e) {
			renderState.dimensions = {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			};
		}
		if (isPath(instance)) renderState.totalPathLength = instance.getTotalLength();
		buildSVGAttrs(renderState, latestValues, void 0, void 0, { enableHardwareAcceleration: false }, props.transformTemplate);
		renderSVG(instance, renderState);
	}
};
function isPath(element) {
	return element.tagName === "path";
}
//#endregion
//#region node_modules/svelte-motion/src/render/html/config-motion.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var htmlMotionConfig = {
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
};
//#endregion
//#region node_modules/svelte-motion/src/context/MotionContext/utils.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function getCurrentTreeVariants(props, context) {
	if (checkIfControllingVariants(props)) {
		var initial = props.initial, animate = props.animate;
		return {
			initial: initial === false || isVariantLabel(initial) ? initial : void 0,
			animate: isVariantLabel(animate) ? animate : void 0
		};
	}
	return props.inherit !== false ? context || {} : {};
}
//#endregion
//#region node_modules/svelte-motion/src/context/MotionContext/UseCreateMotionContext.svelte
function UseCreateMotionContext($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let props = $$props["props"];
		let isStatic = $$props["isStatic"];
		let isCustom = $$props["isCustom"];
		let mc = getContext(MotionContext) || MotionContext(isCustom);
		let tmp = getCurrentTreeVariants(props, get(mc)), initial = tmp.initial, animate = tmp.animate;
		const variantLabelsAsDependency = (prop) => {
			return Array.isArray(prop) ? prop.join(" ") : prop;
		};
		const memo = () => {
			return {
				initial,
				animate
			};
		};
		/**
		* Only break memoisation in static mode
		*/
		let value = memo();
		$: ({initial, animate} = getCurrentTreeVariants(props, store_get($$store_subs ??= {}, "$mc", mc)));
		$: if (isStatic) value = memo(variantLabelsAsDependency(initial), variantLabelsAsDependency(animate));
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", { value }, null);
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			props,
			isStatic,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/value/utils/resolve-motion-value.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
*
* TODO: Remove and move to library
*
* @internal
*/
function resolveMotionValue(value) {
	var unwrappedValue = isMotionValue(value) ? value.get() : value;
	return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}
//#endregion
//#region node_modules/svelte-motion/src/motion/utils/UseVisualState.svelte
var makeState = ({ scrapeMotionValuesFromProps, createRenderState, onMount }, props, context, presenceContext) => {
	const state = {
		latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
		renderState: createRenderState()
	};
	if (onMount) state.mount = (instance) => onMount(props, instance, state);
	return state;
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
	const values = {};
	const blockInitialAnimation = presenceContext?.initial === false;
	const motionValues = scrapeMotionValues(props);
	for (const key in motionValues) values[key] = resolveMotionValue(motionValues[key]);
	let { initial, animate } = props;
	const isControllingVariants = checkIfControllingVariants(props);
	const isVariantNode = checkIfVariantNode(props);
	if (context && isVariantNode && !isControllingVariants && props.inherit !== false) {
		initial !== null && initial !== void 0 || (initial = context.initial);
		animate !== null && animate !== void 0 || (animate = context.animate);
	}
	const variantToSet = blockInitialAnimation || initial === false ? animate : initial;
	if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) (Array.isArray(variantToSet) ? variantToSet : [variantToSet]).forEach((definition) => {
		const resolved = resolveVariantFromProps(props, definition);
		if (!resolved) return;
		const { transitionEnd, transition, ...target } = resolved;
		for (const key in target) values[key] = target[key];
		for (const key in transitionEnd) values[key] = transitionEnd[key];
	});
	return values;
}
function UseVisualState($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let config = $$props["config"];
		let props = $$props["props"];
		let isStatic = $$props["isStatic"];
		let isCustom = $$props["isCustom"];
		const context = getContext(MotionContext) || MotionContext(isCustom);
		const presenceContext = getContext(PresenceContext) || PresenceContext(isCustom);
		let state = makeState(config, props, get(context), get(presenceContext));
		const ms = makeState;
		$: if (isStatic) state = ms(config, props, store_get($$store_subs ??= {}, "$context", context), store_get($$store_subs ??= {}, "$presenceContext", presenceContext));
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", { state }, null);
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			config,
			props,
			isStatic,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/utils/is-ref-object.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function isRefObject(ref) {
	return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
//#endregion
//#region node_modules/svelte-motion/src/motion/utils/use-motion-ref.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Creates a ref function that, when called, hydrates the provided
* external ref and VisualElement.
*/
function useMotionRef(visualState, visualElement, externalRef) {
	return function(instance) {
		var _a;
		instance && ((_a = visualState.mount) === null || _a === void 0 || _a.call(visualState, instance));
		if (visualElement) instance ? visualElement.mount(instance) : visualElement.unmount();
		if (externalRef) {
			if (typeof externalRef === "function") externalRef(instance);
			else if (isRefObject(externalRef)) externalRef.current = instance;
		}
	};
}
//#endregion
//#region node_modules/svelte-motion/src/motion/Motion.svelte
function Motion($$renderer, $$props) {
	const $$restProps = rest_props(sanitize_props($$props), [
		"isSVG",
		"forwardMotionProps",
		"externalRef",
		"targetEl"
	]);
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let motionProps, isStatic;
		let isSVG = fallback($$props["isSVG"], false);
		let forwardMotionProps = fallback($$props["forwardMotionProps"], false);
		let externalRef = fallback($$props["externalRef"], void 0);
		let targetEl = fallback($$props["targetEl"], void 0);
		const isCustom = targetEl;
		let Component = isSVG ? "SVG" : "DOM";
		let createVisualElement = createDomVisualElement;
		let visualStateConfig = isSVG ? svgMotionConfig : htmlMotionConfig;
		const a = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
		const setContext = (c, v) => {
			c.visualElement = v;
			return v;
		};
		$: motionProps = $$restProps;
		$: ({isStatic} = store_get($$store_subs ??= {}, "$a", a) || {});
		ScaleCorrectionProvider($$renderer, {
			isCustom,
			children: ($$renderer) => {
				UseCreateMotionContext($$renderer, {
					props: motionProps,
					isStatic,
					isCustom,
					children: invalid_default_snippet,
					$$slots: { default: ($$renderer, { value: context }) => {
						UseVisualState($$renderer, {
							config: visualStateConfig,
							props: motionProps,
							isStatic,
							isCustom,
							children: invalid_default_snippet,
							$$slots: { default: ($$renderer, { state: visualState }) => {
								UseVisualElement($$renderer, {
									Component,
									visualState,
									createVisualElement,
									props: motionProps,
									isCustom,
									children: invalid_default_snippet,
									$$slots: { default: ($$renderer, { visualElement }) => {
										UseFeatures($$renderer, {
											visualElement: setContext(context, visualElement),
											props: motionProps,
											children: invalid_default_snippet,
											$$slots: { default: ($$renderer, { features: _features }) => {
												MotionContextProvider($$renderer, {
													value: context,
													isCustom,
													children: ($$renderer) => {
														UseRender($$renderer, {
															Component,
															props: motionProps,
															ref: useMotionRef(visualState, context.visualElement, externalRef),
															visualState,
															isStatic,
															forwardMotionProps,
															children: invalid_default_snippet,
															$$slots: { default: ($$renderer, { motion, props: renderProps }) => {
																$$renderer.push(`<!--[-->`);
																slot($$renderer, $$props, "default", {
																	motion,
																	props: renderProps
																}, null);
																$$renderer.push(`<!--]-->`);
															} }
														});
													},
													$$slots: { default: true }
												});
												$$renderer.push(`<!----> `);
												$$renderer.push("<!--[-1-->");
												$$renderer.push(`<!--]-->`);
											} }
										});
									} }
								});
							} }
						});
					} }
				});
			},
			$$slots: { default: true }
		});
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			isSVG,
			forwardMotionProps,
			externalRef,
			targetEl
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/events/UseDomEvent.svelte
function addDomEvent(target, eventName, handler, options) {
	target.addEventListener(eventName, handler, options);
	return function() {
		return target.removeEventListener(eventName, handler, options);
	};
}
function UseDomEvent($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let ref = $$props["ref"];
		let eventName = $$props["eventName"];
		let handler = fallback($$props["handler"], void 0);
		let options = fallback($$props["options"], void 0);
		let cleanup = () => {};
		const effect = () => {
			cleanup();
			if (!ref) return () => {};
			const element = ref.current;
			if (handler && element) return addDomEvent(element, eventName, handler, options);
			return () => {};
		};
		onDestroy(cleanup);
		$: cleanup = effect(ref, eventName, handler, options);
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			ref,
			eventName,
			handler,
			options
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/utils/event-type.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
function isMouseEvent(event) {
	if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) return !!(event.pointerType === "mouse");
	return event instanceof MouseEvent;
}
function isTouchEvent(event) {
	return !!event.touches;
}
//#endregion
//#region node_modules/svelte-motion/src/events/event-info.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Filters out events not attached to the primary pointer (currently left mouse button)
* @param eventHandler
*/
function filterPrimaryPointer(eventHandler) {
	return function(event) {
		var isMouseEvent = event instanceof MouseEvent;
		if (!isMouseEvent || isMouseEvent && event.button === 0) eventHandler(event);
	};
}
var defaultPagePoint = {
	pageX: 0,
	pageY: 0
};
function pointFromTouch(e, pointType) {
	if (pointType === void 0) pointType = "page";
	var point = e.touches[0] || e.changedTouches[0] || defaultPagePoint;
	return {
		x: point[pointType + "X"],
		y: point[pointType + "Y"]
	};
}
function pointFromMouse(point, pointType) {
	if (pointType === void 0) pointType = "page";
	return {
		x: point[pointType + "X"],
		y: point[pointType + "Y"]
	};
}
function extractEventInfo(event, pointType) {
	if (pointType === void 0) pointType = "page";
	return { point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType) };
}
function getViewportPointFromEvent(event) {
	return extractEventInfo(event, "client");
}
var wrapHandler = function(handler, shouldFilterPrimaryPointer) {
	if (shouldFilterPrimaryPointer === void 0) shouldFilterPrimaryPointer = false;
	var listener = function(event) {
		return handler(event, extractEventInfo(event));
	};
	return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
};
//#endregion
//#region node_modules/svelte-motion/src/utils/is-browser.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var isBrowser = typeof window !== "undefined";
//#endregion
//#region node_modules/svelte-motion/src/events/utils.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var supportsPointerEvents = function() {
	return isBrowser && window.onpointerdown === null;
};
var supportsTouchEvents = function() {
	return isBrowser && window.ontouchstart === null;
};
var supportsMouseEvents = function() {
	return isBrowser && window.onmousedown === null;
};
//#endregion
//#region node_modules/svelte-motion/src/events/UsePointerEvent.svelte
var mouseEventNames = {
	pointerdown: "mousedown",
	pointermove: "mousemove",
	pointerup: "mouseup",
	pointercancel: "mousecancel",
	pointerover: "mouseover",
	pointerout: "mouseout",
	pointerenter: "mouseenter",
	pointerleave: "mouseleave"
};
var touchEventNames = {
	pointerdown: "touchstart",
	pointermove: "touchmove",
	pointerup: "touchend",
	pointercancel: "touchcancel"
};
function getPointerEventName(name) {
	if (supportsPointerEvents()) return name;
	else if (supportsTouchEvents()) return touchEventNames[name];
	else if (supportsMouseEvents()) return mouseEventNames[name];
	return name;
}
function addPointerEvent(target, eventName, handler, options) {
	return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function UsePointerEvent($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let ref = $$props["ref"];
		let eventName = $$props["eventName"];
		let handler = fallback($$props["handler"], void 0);
		let options = fallback($$props["options"], void 0);
		UseDomEvent($$renderer, {
			ref,
			eventName: getPointerEventName(eventName),
			handler: handler && wrapHandler(handler, eventName === "pointerdown"),
			options,
			children: ($$renderer) => {
				$$renderer.push(`<!--[-->`);
				slot($$renderer, $$props, "default", {}, null);
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		});
		bind_props($$props, {
			ref,
			eventName,
			handler,
			options
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/PanSession.js
/**
* @internal
*/
var PanSession = function() {
	function PanSession(event, handlers, _a) {
		var _this = this;
		var transformPagePoint = (_a === void 0 ? {} : _a).transformPagePoint;
		/**
		* @internal
		*/
		this.startEvent = null;
		/**
		* @internal
		*/
		this.lastMoveEvent = null;
		/**
		* @internal
		*/
		this.lastMoveEventInfo = null;
		/**
		* @internal
		*/
		this.handlers = {};
		this.updatePoint = function() {
			if (!(_this.lastMoveEvent && _this.lastMoveEventInfo)) return;
			var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
			var isPanStarted = _this.startEvent !== null;
			var isDistancePastThreshold = distance(info.offset, {
				x: 0,
				y: 0
			}) >= 3;
			if (!isPanStarted && !isDistancePastThreshold) return;
			var point = info.point;
			var timestamp = getFrameData().timestamp;
			_this.history.push(Object.assign(Object.assign({}, point), { timestamp }));
			var _a = _this.handlers, onStart = _a.onStart, onMove = _a.onMove;
			if (!isPanStarted) {
				onStart && onStart(_this.lastMoveEvent, info);
				_this.startEvent = _this.lastMoveEvent;
			}
			onMove && onMove(_this.lastMoveEvent, info);
		};
		this.handlePointerMove = function(event, info) {
			_this.lastMoveEvent = event;
			_this.lastMoveEventInfo = transformPoint(info, _this.transformPagePoint);
			if (isMouseEvent(event) && event.buttons === 0) {
				_this.handlePointerUp(event, info);
				return;
			}
			sync.update(_this.updatePoint, true);
		};
		this.handlePointerUp = function(event, info) {
			_this.end();
			var _a = _this.handlers, onEnd = _a.onEnd, onSessionEnd = _a.onSessionEnd;
			var panInfo = getPanInfo(transformPoint(info, _this.transformPagePoint), _this.history);
			if (_this.startEvent && onEnd) onEnd(event, panInfo);
			onSessionEnd && onSessionEnd(event, panInfo);
		};
		if (isTouchEvent(event) && event.touches.length > 1) return;
		this.handlers = handlers;
		this.transformPagePoint = transformPagePoint;
		var initialInfo = transformPoint(extractEventInfo(event), this.transformPagePoint);
		var point = initialInfo.point;
		var timestamp = getFrameData().timestamp;
		this.history = [Object.assign(Object.assign({}, point), { timestamp })];
		var onSessionStart = handlers.onSessionStart;
		onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
		this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
	}
	PanSession.prototype.updateHandlers = function(handlers) {
		this.handlers = handlers;
	};
	PanSession.prototype.end = function() {
		this.removeListeners && this.removeListeners();
		cancelSync.update(this.updatePoint);
	};
	return PanSession;
}();
function transformPoint(info, transformPagePoint) {
	return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
	return {
		x: a.x - b.x,
		y: a.y - b.y
	};
}
function getPanInfo(_a, history) {
	var point = _a.point;
	return {
		point,
		delta: subtractPoint(point, lastDevicePoint(history)),
		offset: subtractPoint(point, startDevicePoint(history)),
		velocity: getVelocity(history, .1)
	};
}
function startDevicePoint(history) {
	return history[0];
}
function lastDevicePoint(history) {
	return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
	if (history.length < 2) return {
		x: 0,
		y: 0
	};
	var i = history.length - 1;
	var timestampedPoint = null;
	var lastPoint = lastDevicePoint(history);
	while (i >= 0) {
		timestampedPoint = history[i];
		if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) break;
		i--;
	}
	if (!timestampedPoint) return {
		x: 0,
		y: 0
	};
	var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
	if (time === 0) return {
		x: 0,
		y: 0
	};
	var currentVelocity = {
		x: (lastPoint.x - timestampedPoint.x) / time,
		y: (lastPoint.y - timestampedPoint.y) / time
	};
	if (currentVelocity.x === Infinity) currentVelocity.x = 0;
	if (currentVelocity.y === Infinity) currentVelocity.y = 0;
	return currentVelocity;
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/UsePanGesture.svelte
function UsePanGesture($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let hasPanEvents;
		let props = $$props["props"];
		let visualElement = $$props["visualElement"];
		let isCustom = $$props["isCustom"];
		let tmp = props, onPan = tmp.onPan, onPanStart = tmp.onPanStart, onPanEnd = tmp.onPanEnd, onPanSessionStart = tmp.onPanSessionStart;
		let panSession = null;
		const mcc = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
		let transformPagePoint = get(mcc).transformPagePoint;
		let handlers = {
			onSessionStart: onPanSessionStart,
			onStart: onPanStart,
			onMove: onPan,
			onEnd: (event, info) => {
				panSession = null;
				onPanEnd && onPanEnd(event, info);
			}
		};
		function onPointerDown(event) {
			panSession = new PanSession(event, handlers, { transformPagePoint });
		}
		onDestroy(() => panSession && panSession.end());
		$: ({onPan, onPanStart, onPanEnd, onPanSessionStart} = props);
		$: hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
		$: ({transformPagePoint} = store_get($$store_subs ??= {}, "$mcc", mcc));
		$: handlers = {
			onSessionStart: onPanSessionStart,
			onStart: onPanStart,
			onMove: onPan,
			onEnd: (event, info) => {
				panSession = null;
				onPanEnd && onPanEnd(event, info);
			}
		};
		UsePointerEvent($$renderer, {
			ref: visualElement,
			eventName: "pointerdown",
			handler: hasPanEvents && onPointerDown,
			children: ($$renderer) => {
				$$renderer.push(`<!--[-->`);
				slot($$renderer, $$props, "default", {}, null);
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		});
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			props,
			visualElement,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/utils/is-node-or-child.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* Recursively traverse up the tree to check whether the provided child node
* is the parent or a descendant of it.
*
* @param parent - Element to find
* @param child - Element to test against parent
*/
var isNodeOrChild = function(parent, child) {
	if (!child) return false;
	else if (parent === child) return true;
	else return isNodeOrChild(parent, child.parentElement);
};
//#endregion
//#region node_modules/svelte-motion/src/gestures/drag/utils/lock.js
/** 
based on framer-motion@4.1.17,
Copyright (c) 2018 Framer B.V.
*/
function createLock(name) {
	var lock = null;
	return function() {
		var openLock = function() {
			lock = null;
		};
		if (lock === null) {
			lock = name;
			return openLock;
		}
		return false;
	};
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
	var lock = false;
	if (drag === "y") lock = globalVerticalLock();
	else if (drag === "x") lock = globalHorizontalLock();
	else {
		var openHorizontal_1 = globalHorizontalLock();
		var openVertical_1 = globalVerticalLock();
		if (openHorizontal_1 && openVertical_1) lock = function() {
			openHorizontal_1();
			openVertical_1();
		};
		else {
			if (openHorizontal_1) openHorizontal_1();
			if (openVertical_1) openVertical_1();
		}
	}
	return lock;
}
function isDragActive() {
	var openGestureLock = getGlobalLock(true);
	if (!openGestureLock) return true;
	openGestureLock();
	return false;
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/UseTapGesture.svelte
function UseTapGesture($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let onTap, onTapStart, onTapCancel, whileTap, hasPressListeners;
		let props = $$props["props"];
		let visualElement = $$props["visualElement"];
		let isPressing = false;
		let cancelPointerEndListeners = null;
		function removePointerEndListener() {
			cancelPointerEndListeners?.();
			cancelPointerEndListeners = null;
		}
		function checkPointerEnd() {
			removePointerEndListener();
			isPressing = false;
			visualElement.animationState?.setActive(AnimationType.Tap, false);
			return !isDragActive();
		}
		function onPointerUp(event, info) {
			if (!checkPointerEnd()) return;
			/**
			* We only count this as a tap gesture if the event.target is the same
			* as, or a child of, this component's element
			*/
			!isNodeOrChild(visualElement.getInstance(), event.target) ? onTapCancel?.(event, info) : onTap?.(event, info);
		}
		function onPointerCancel(event, info) {
			if (!checkPointerEnd()) return;
			onTapCancel?.(event, info);
		}
		function onPointerDown(event, info) {
			if (isPressing) return;
			removePointerEndListener();
			isPressing = true;
			cancelPointerEndListeners = pipe(addPointerEvent(window, "pointerup", onPointerUp), addPointerEvent(window, "pointercancel", onPointerCancel));
			onTapStart?.(event, info);
			visualElement.animationState?.setActive(AnimationType.Tap, true);
		}
		onDestroy(removePointerEndListener);
		$: ({onTap, onTapStart, onTapCancel, whileTap} = props);
		$: hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
		UsePointerEvent($$renderer, {
			ref: visualElement,
			eventName: "pointerdown",
			handler: hasPressListeners ? onPointerDown : void 0,
			children: ($$renderer) => {
				$$renderer.push(`<!--[-->`);
				slot($$renderer, $$props, "default", {}, null);
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		});
		bind_props($$props, {
			props,
			visualElement
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/UseHoverGesture.svelte
function createHoverEvent(visualElement, isActive, callback) {
	return (event, info) => {
		if (!isMouseEvent(event) || isDragActive()) return;
		callback?.(event, info);
		visualElement.animationState?.setActive(AnimationType.Hover, isActive);
	};
}
function UseHoverGesture($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let props = $$props["props"];
		let visualElement = $$props["visualElement"];
		let tmp = props, onHoverStart = tmp.onHoverStart, onHoverEnd = tmp.onHoverEnd, whileHover = tmp.whileHover;
		$: ({onHoverStart, onHoverEnd, whileHover} = props);
		UsePointerEvent($$renderer, {
			ref: visualElement,
			eventName: "pointerenter",
			handler: onHoverStart || whileHover ? createHoverEvent(visualElement, true, onHoverStart) : void 0
		});
		$$renderer.push(`<!----> `);
		UsePointerEvent($$renderer, {
			ref: visualElement,
			eventName: "pointerleave",
			handler: onHoverEnd || whileHover ? createHoverEvent(visualElement, false, onHoverEnd) : void 0
		});
		$$renderer.push(`<!----> <!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			props,
			visualElement
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/UseFocusGesture.svelte
function UseFocusGesture($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let whileFocus;
		let props = $$props["props"];
		let visualElement = $$props["visualElement"];
		const onFocus = () => {
			visualElement.animationState?.setActive(AnimationType.Focus, true);
		};
		const onBlur = () => {
			visualElement.animationState?.setActive(AnimationType.Focus, false);
		};
		$: ({whileFocus} = props);
		UseDomEvent($$renderer, {
			ref: visualElement,
			eventName: "focus",
			handler: whileFocus ? onFocus : void 0,
			children: ($$renderer) => {
				UseDomEvent($$renderer, {
					ref: visualElement,
					eventName: "blur",
					handler: whileFocus ? onBlur : void 0,
					children: ($$renderer) => {
						$$renderer.push(`<!--[-->`);
						slot($$renderer, $$props, "default", {}, null);
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
			},
			$$slots: { default: true }
		});
		bind_props($$props, {
			props,
			visualElement
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/create-motion-class.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var createMotionClass = (features) => {
	features && loadFeatures(features);
	return Motion;
};
//#endregion
//#region node_modules/svelte-motion/src/motion/features/gestures.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* @public
*/
var gestureAnimations = {
	tap: UseTapGesture,
	focus: UseFocusGesture,
	hover: UseHoverGesture
};
//#endregion
//#region node_modules/svelte-motion/src/gestures/drag/utils/constraints.js
/**
* Apply constraints to a point. These constraints are both physical along an
* axis, and an elastic factor that determines how much to constrain the point
* by if it does lie outside the defined parameters.
*/
function applyConstraints(point, _a, elastic) {
	var min = _a.min, max = _a.max;
	if (min !== void 0 && point < min) point = elastic ? mix(min, point, elastic.min) : Math.max(point, min);
	else if (max !== void 0 && point > max) point = elastic ? mix(max, point, elastic.max) : Math.min(point, max);
	return point;
}
/**
* Calculates a min projection point based on a pointer, pointer progress
* within the drag target, and constraints.
*
* For instance if an element was 100px width, we were dragging from 0.25
* along this axis, the pointer is at 200px, and there were no constraints,
* we would calculate a min projection point of 175px.
*/
function calcConstrainedMinPoint(point, length, progress, constraints, elastic) {
	var min = point - length * progress;
	return constraints ? applyConstraints(min, constraints, elastic) : min;
}
/**
* Calculate constraints in terms of the viewport when defined relatively to the
* measured axis. This is measured from the nearest edge, so a max constraint of 200
* on an axis with a max value of 300 would return a constraint of 500 - axis length
*/
function calcRelativeAxisConstraints(axis, min, max) {
	return {
		min: min !== void 0 ? axis.min + min : void 0,
		max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
	};
}
/**
* Calculate constraints in terms of the viewport when
* defined relatively to the measured bounding box.
*/
function calcRelativeConstraints(layoutBox, _a) {
	var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
	return {
		x: calcRelativeAxisConstraints(layoutBox.x, left, right),
		y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
	};
}
/**
* Calculate viewport constraints when defined as another viewport-relative axis
*/
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
	var _a;
	var min = constraintsAxis.min - layoutAxis.min;
	var max = constraintsAxis.max - layoutAxis.max;
	if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) _a = __read([max, min], 2), min = _a[0], max = _a[1];
	return {
		min: layoutAxis.min + min,
		max: layoutAxis.min + max
	};
}
/**
* Calculate viewport constraints when defined as another viewport-relative box
*/
function calcViewportConstraints(layoutBox, constraintsBox) {
	return {
		x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
		y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
	};
}
/**
* Calculate the an axis position based on two axes and a progress value.
*/
function calcPositionFromProgress(axis, constraints, progress) {
	var axisLength = axis.max - axis.min;
	var min = mix(constraints.min, constraints.max - axisLength, progress);
	return {
		min,
		max: min + axisLength
	};
}
/**
* Rebase the calculated viewport constraints relative to the layout.min point.
*/
function rebaseAxisConstraints(layout, constraints) {
	var relativeConstraints = {};
	if (constraints.min !== void 0) relativeConstraints.min = constraints.min - layout.min;
	if (constraints.max !== void 0) relativeConstraints.max = constraints.max - layout.min;
	return relativeConstraints;
}
var defaultElastic = .35;
/**
* Accepts a dragElastic prop and returns resolved elastic values for each axis.
*/
function resolveDragElastic(dragElastic) {
	if (dragElastic === false) dragElastic = 0;
	else if (dragElastic === true) dragElastic = defaultElastic;
	return {
		x: resolveAxisElastic(dragElastic, "left", "right"),
		y: resolveAxisElastic(dragElastic, "top", "bottom")
	};
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
	return {
		min: resolvePointElastic(dragElastic, minLabel),
		max: resolvePointElastic(dragElastic, maxLabel)
	};
}
function resolvePointElastic(dragElastic, label) {
	var _a;
	return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/projection/convert-to-relative.js
/** 
based on framer-motion@4.1.11,
Copyright (c) 2018 Framer B.V.
*/
/**
* Returns a boolean stating whether or not we converted the projection
* to relative projection.
*/
function convertToRelativeProjection(visualElement, isLayoutDrag) {
	if (isLayoutDrag === void 0) isLayoutDrag = true;
	var projectionParent = visualElement.getProjectionParent();
	if (!projectionParent) return false;
	var offset;
	if (isLayoutDrag) {
		offset = calcRelativeOffset(projectionParent.projection.target, visualElement.projection.target);
		removeBoxTransforms(offset, projectionParent.getLatestValues());
	} else offset = calcRelativeOffset(projectionParent.getLayoutState().layout, visualElement.getLayoutState().layout);
	eachAxis(function(axis) {
		return visualElement.setProjectionTargetAxis(axis, offset[axis].min, offset[axis].max, true);
	});
	return true;
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/drag/VisualElementDragControls.js
var elementDragControls = /* @__PURE__ */ new WeakMap();
/**
*
*/
var lastPointerEvent;
var VisualElementDragControls = function() {
	function VisualElementDragControls(_a) {
		var visualElement = _a.visualElement;
		/**
		* Track whether we're currently dragging.
		*
		* @internal
		*/
		this.isDragging = false;
		/**
		* The current direction of drag, or `null` if both.
		*
		* @internal
		*/
		this.currentDirection = null;
		/**
		* The permitted boundaries of travel, in pixels.
		*
		* @internal
		*/
		this.constraints = false;
		/**
		* The per-axis resolved elastic values.
		*
		* @internal
		*/
		this.elastic = axisBox();
		/**
		* A reference to the host component's latest props.
		*
		* @internal
		*/
		this.props = {};
		/**
		* @internal
		*/
		this.hasMutatedConstraints = false;
		/**
		* Track the initial position of the cursor relative to the dragging element
		* when dragging starts as a value of 0-1 on each axis. We then use this to calculate
		* an ideal bounding box for the VisualElement renderer to project into every frame.
		*
		* @internal
		*/
		this.cursorProgress = {
			x: .5,
			y: .5
		};
		this.originPoint = {};
		this.openGlobalLock = null;
		/**
		* @internal
		*/
		this.panSession = null;
		this.visualElement = visualElement;
		this.visualElement.enableLayoutProjection();
		elementDragControls.set(visualElement, this);
	}
	/**
	* Instantiate a PanSession for the drag gesture
	*
	* @public
	*/
	VisualElementDragControls.prototype.start = function(originEvent, _a) {
		var _this = this;
		var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c, cursorProgress = _b.cursorProgress;
		var onSessionStart = function(event) {
			var _a;
			_this.stopMotion();
			/**
			* Save the initial point. We'll use this to calculate the pointer's position rather
			* than the one we receive when the gesture actually starts. By then, the pointer will
			* have already moved, and the perception will be of the pointer "slipping" across the element
			*/
			var initialPoint = getViewportPointFromEvent(event).point;
			(_a = _this.cancelLayout) === null || _a === void 0 || _a.call(_this);
			_this.cancelLayout = batchLayout(function(read, write) {
				var ancestors = collectProjectingAncestors(_this.visualElement);
				var children = collectProjectingChildren(_this.visualElement);
				var tree = __spreadArray(__spreadArray([], __read(ancestors)), __read(children));
				var hasManuallySetCursorOrigin = false;
				/**
				* Apply a simple lock to the projection target. This ensures no animations
				* can run on the projection box while this lock is active.
				*/
				_this.isLayoutDrag() && _this.visualElement.lockProjectionTarget();
				write(function() {
					tree.forEach(function(element) {
						return element.resetTransform();
					});
				});
				read(function() {
					updateLayoutMeasurement(_this.visualElement);
					children.forEach(updateLayoutMeasurement);
				});
				write(function() {
					tree.forEach(function(element) {
						return element.restoreTransform();
					});
					if (snapToCursor) hasManuallySetCursorOrigin = _this.snapToCursor(initialPoint);
				});
				read(function() {
					if (!Boolean(_this.getAxisMotionValue("x") && !_this.isExternalDrag())) _this.visualElement.rebaseProjectionTarget(true, _this.visualElement.measureViewportBox(false));
					_this.visualElement.scheduleUpdateLayoutProjection();
					/**
					* When dragging starts, we want to find where the cursor is relative to the bounding box
					* of the element. Every frame, we calculate a new bounding box using this relative position
					* and let the visualElement renderer figure out how to reproject the element into this bounding
					* box.
					*
					* By doing it this way, rather than applying an x/y transform directly to the element,
					* we can ensure the component always visually sticks to the cursor as we'd expect, even
					* if the DOM element itself changes layout as a result of React updates the user might
					* make based on the drag position.
					*/
					var projection = _this.visualElement.projection;
					eachAxis(function(axis) {
						if (!hasManuallySetCursorOrigin) {
							var _a = projection.target[axis], min = _a.min, max = _a.max;
							_this.cursorProgress[axis] = cursorProgress ? cursorProgress[axis] : progress(min, max, initialPoint[axis]);
						}
						/**
						* If we have external drag MotionValues, record their origin point. On pointermove
						* we'll apply the pan gesture offset directly to this value.
						*/
						var axisValue = _this.getAxisMotionValue(axis);
						if (axisValue) _this.originPoint[axis] = axisValue.get();
					});
				});
				write(function() {
					flushSync.update();
					flushSync.preRender();
					flushSync.render();
					flushSync.postRender();
				});
				read(function() {
					return _this.resolveDragConstraints();
				});
			});
		};
		var onStart = function(event, info) {
			var _a, _b, _c;
			var _d = _this.props, drag = _d.drag, dragPropagation = _d.dragPropagation;
			if (drag && !dragPropagation) {
				if (_this.openGlobalLock) _this.openGlobalLock();
				_this.openGlobalLock = getGlobalLock(drag);
				if (!_this.openGlobalLock) return;
			}
			flushLayout();
			_this.isDragging = true;
			_this.currentDirection = null;
			(_b = (_a = _this.props).onDragStart) === null || _b === void 0 || _b.call(_a, event, info);
			(_c = _this.visualElement.animationState) === null || _c === void 0 || _c.setActive(AnimationType.Drag, true);
		};
		var onMove = function(event, info) {
			var _a, _b, _c, _d;
			var _e = _this.props, dragPropagation = _e.dragPropagation, dragDirectionLock = _e.dragDirectionLock;
			if (!dragPropagation && !_this.openGlobalLock) return;
			var offset = info.offset;
			if (dragDirectionLock && _this.currentDirection === null) {
				_this.currentDirection = getCurrentDirection(offset);
				if (_this.currentDirection !== null) (_b = (_a = _this.props).onDirectionLock) === null || _b === void 0 || _b.call(_a, _this.currentDirection);
				return;
			}
			_this.updateAxis("x", info.point, offset);
			_this.updateAxis("y", info.point, offset);
			(_d = (_c = _this.props).onDrag) === null || _d === void 0 || _d.call(_c, event, info);
			lastPointerEvent = event;
		};
		var onSessionEnd = function(event, info) {
			return _this.stop(event, info);
		};
		var transformPagePoint = this.props.transformPagePoint;
		this.panSession = new PanSession(originEvent, {
			onSessionStart,
			onStart,
			onMove,
			onSessionEnd
		}, { transformPagePoint });
	};
	VisualElementDragControls.prototype.resolveDragConstraints = function() {
		var _this = this;
		var _a = this.props, dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
		var layout = this.visualElement.getLayoutState().layoutCorrected;
		if (dragConstraints) this.constraints = isRefObject(dragConstraints) ? this.resolveRefConstraints(layout, dragConstraints) : calcRelativeConstraints(layout, dragConstraints);
		else this.constraints = false;
		this.elastic = resolveDragElastic(dragElastic);
		/**
		* If we're outputting to external MotionValues, we want to rebase the measured constraints
		* from viewport-relative to component-relative.
		*/
		if (this.constraints && !this.hasMutatedConstraints) eachAxis(function(axis) {
			if (_this.getAxisMotionValue(axis)) _this.constraints[axis] = rebaseAxisConstraints(layout[axis], _this.constraints[axis]);
		});
	};
	VisualElementDragControls.prototype.resolveRefConstraints = function(layoutBox, constraints) {
		var _a = this.props, onMeasureDragConstraints = _a.onMeasureDragConstraints, transformPagePoint = _a.transformPagePoint;
		var constraintsElement = constraints.current;
		invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
		this.constraintsBox = getBoundingBox(constraintsElement, transformPagePoint);
		var measuredConstraints = calcViewportConstraints(layoutBox, this.constraintsBox);
		/**
		* If there's an onMeasureDragConstraints listener we call it and
		* if different constraints are returned, set constraints to that
		*/
		if (onMeasureDragConstraints) {
			var userConstraints = onMeasureDragConstraints(convertAxisBoxToBoundingBox(measuredConstraints));
			this.hasMutatedConstraints = !!userConstraints;
			if (userConstraints) measuredConstraints = convertBoundingBoxToAxisBox(userConstraints);
		}
		return measuredConstraints;
	};
	VisualElementDragControls.prototype.cancelDrag = function() {
		var _a, _b;
		this.visualElement.unlockProjectionTarget();
		(_a = this.cancelLayout) === null || _a === void 0 || _a.call(this);
		this.isDragging = false;
		this.panSession && this.panSession.end();
		this.panSession = null;
		if (!this.props.dragPropagation && this.openGlobalLock) {
			this.openGlobalLock();
			this.openGlobalLock = null;
		}
		(_b = this.visualElement.animationState) === null || _b === void 0 || _b.setActive(AnimationType.Drag, false);
	};
	VisualElementDragControls.prototype.stop = function(event, info) {
		var _a, _b, _c;
		(_a = this.panSession) === null || _a === void 0 || _a.end();
		this.panSession = null;
		var isDragging = this.isDragging;
		this.cancelDrag();
		if (!isDragging) return;
		var velocity = info.velocity;
		this.animateDragEnd(velocity);
		(_c = (_b = this.props).onDragEnd) === null || _c === void 0 || _c.call(_b, event, info);
	};
	VisualElementDragControls.prototype.snapToCursor = function(point) {
		var _this = this;
		return eachAxis(function(axis) {
			var drag = _this.props.drag;
			if (!shouldDrag(axis, drag, _this.currentDirection)) return;
			var axisValue = _this.getAxisMotionValue(axis);
			if (axisValue) {
				var box = _this.visualElement.getLayoutState().layout;
				var length_1 = box[axis].max - box[axis].min;
				var center = box[axis].min + length_1 / 2;
				var offset = point[axis] - center;
				_this.originPoint[axis] = point[axis];
				axisValue.set(offset);
			} else {
				_this.cursorProgress[axis] = .5;
				return true;
			}
		}).includes(true);
	};
	/**
	* Update the specified axis with the latest pointer information.
	*/
	VisualElementDragControls.prototype.updateAxis = function(axis, point, offset) {
		var drag = this.props.drag;
		if (!shouldDrag(axis, drag, this.currentDirection)) return;
		return this.getAxisMotionValue(axis) ? this.updateAxisMotionValue(axis, offset) : this.updateVisualElementAxis(axis, point);
	};
	VisualElementDragControls.prototype.updateAxisMotionValue = function(axis, offset) {
		var axisValue = this.getAxisMotionValue(axis);
		if (!offset || !axisValue) return;
		var nextValue = this.originPoint[axis] + offset[axis];
		var update = this.constraints ? applyConstraints(nextValue, this.constraints[axis], this.elastic[axis]) : nextValue;
		axisValue.set(update);
	};
	VisualElementDragControls.prototype.updateVisualElementAxis = function(axis, point) {
		var _a;
		var axisLayout = this.visualElement.getLayoutState().layout[axis];
		var axisLength = axisLayout.max - axisLayout.min;
		var axisProgress = this.cursorProgress[axis];
		var min = calcConstrainedMinPoint(point[axis], axisLength, axisProgress, (_a = this.constraints) === null || _a === void 0 ? void 0 : _a[axis], this.elastic[axis]);
		this.visualElement.setProjectionTargetAxis(axis, min, min + axisLength);
	};
	VisualElementDragControls.prototype.setProps = function(_a) {
		var _b = _a.drag, drag = _b === void 0 ? false : _b, _c = _a.dragDirectionLock, dragDirectionLock = _c === void 0 ? false : _c, _d = _a.dragPropagation, dragPropagation = _d === void 0 ? false : _d, _e = _a.dragConstraints, dragConstraints = _e === void 0 ? false : _e, _f = _a.dragElastic, dragElastic = _f === void 0 ? defaultElastic : _f, _g = _a.dragMomentum, dragMomentum = _g === void 0 ? true : _g, remainingProps = __rest(_a, [
			"drag",
			"dragDirectionLock",
			"dragPropagation",
			"dragConstraints",
			"dragElastic",
			"dragMomentum"
		]);
		this.props = Object.assign({
			drag,
			dragDirectionLock,
			dragPropagation,
			dragConstraints,
			dragElastic,
			dragMomentum
		}, remainingProps);
	};
	/**
	* Drag works differently depending on which props are provided.
	*
	* - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
	* - If the component will perform layout animations, we output the gesture to the component's
	*      visual bounding box
	* - Otherwise, we apply the delta to the x/y motion values.
	*/
	VisualElementDragControls.prototype.getAxisMotionValue = function(axis) {
		var _a = this.props, layout = _a.layout, layoutId = _a.layoutId;
		var dragKey = "_drag" + axis.toUpperCase();
		if (this.props[dragKey]) return this.props[dragKey];
		else if (!layout && layoutId === void 0) return this.visualElement.getValue(axis, 0);
	};
	VisualElementDragControls.prototype.isLayoutDrag = function() {
		return !this.getAxisMotionValue("x");
	};
	VisualElementDragControls.prototype.isExternalDrag = function() {
		var _a = this.props, _dragX = _a._dragX, _dragY = _a._dragY;
		return _dragX || _dragY;
	};
	VisualElementDragControls.prototype.animateDragEnd = function(velocity) {
		var _this = this;
		var _a = this.props, drag = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition;
		/**
		* Everything beyond the drag gesture should be performed with
		* relative projection so children stay in sync with their parent element.
		*/
		var isRelative = convertToRelativeProjection(this.visualElement, this.isLayoutDrag() && !this.isExternalDrag());
		/**
		* If we had previously resolved constraints relative to the viewport,
		* we need to also convert those to a relative coordinate space for the animation
		*/
		var constraints = this.constraints || {};
		if (isRelative && Object.keys(constraints).length && this.isLayoutDrag()) {
			var projectionParent = this.visualElement.getProjectionParent();
			if (projectionParent) {
				var relativeConstraints_1 = calcRelativeOffset(projectionParent.projection.targetFinal, constraints);
				eachAxis(function(axis) {
					var _a = relativeConstraints_1[axis], min = _a.min, max = _a.max;
					constraints[axis] = {
						min: isNaN(min) ? void 0 : min,
						max: isNaN(max) ? void 0 : max
					};
				});
			}
		}
		var momentumAnimations = eachAxis(function(axis) {
			var _a;
			if (!shouldDrag(axis, drag, _this.currentDirection)) return;
			var transition = (_a = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a !== void 0 ? _a : {};
			/**
			* Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
			* of spring animations so we should look into adding a disable spring option to `inertia`.
			* We could do something here where we affect the `bounceStiffness` and `bounceDamping`
			* using the value of `dragElastic`.
			*/
			var bounceStiffness = dragElastic ? 200 : 1e6;
			var bounceDamping = dragElastic ? 40 : 1e7;
			var inertia = Object.assign(Object.assign({
				type: "inertia",
				velocity: dragMomentum ? velocity[axis] : 0,
				bounceStiffness,
				bounceDamping,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10
			}, dragTransition), transition);
			return _this.getAxisMotionValue(axis) ? _this.startAxisValueAnimation(axis, inertia) : _this.visualElement.startLayoutAnimation(axis, inertia, isRelative);
		});
		return Promise.all(momentumAnimations).then(function() {
			var _a, _b;
			(_b = (_a = _this.props).onDragTransitionEnd) === null || _b === void 0 || _b.call(_a);
		});
	};
	VisualElementDragControls.prototype.stopMotion = function() {
		var _this = this;
		eachAxis(function(axis) {
			var axisValue = _this.getAxisMotionValue(axis);
			axisValue ? axisValue.stop() : _this.visualElement.stopLayoutAnimation();
		});
	};
	VisualElementDragControls.prototype.startAxisValueAnimation = function(axis, transition) {
		var axisValue = this.getAxisMotionValue(axis);
		if (!axisValue) return;
		var currentValue = axisValue.get();
		axisValue.set(currentValue);
		axisValue.set(currentValue);
		return startAnimation(axis, axisValue, 0, transition);
	};
	VisualElementDragControls.prototype.scalePoint = function() {
		var _this = this;
		var _a = this.props, drag = _a.drag, dragConstraints = _a.dragConstraints;
		if (!isRefObject(dragConstraints) || !this.constraintsBox) return;
		this.stopMotion();
		var boxProgress = {
			x: 0,
			y: 0
		};
		eachAxis(function(axis) {
			boxProgress[axis] = calcOrigin$1(_this.visualElement.projection.target[axis], _this.constraintsBox[axis]);
		});
		/**
		* For each axis, calculate the current progress of the layout axis within the constraints.
		* Then, using the latest layout and constraints measurements, reposition the new layout axis
		* proportionally within the constraints.
		*/
		this.updateConstraints(function() {
			eachAxis(function(axis) {
				if (!shouldDrag(axis, drag, null)) return;
				var _a = calcPositionFromProgress(_this.visualElement.projection.target[axis], _this.constraintsBox[axis], boxProgress[axis]), min = _a.min, max = _a.max;
				_this.visualElement.setProjectionTargetAxis(axis, min, max);
			});
		});
		/**
		* If any other draggable components are queuing the same tasks synchronously
		* this will wait until they've all been scheduled before flushing.
		*/
		setTimeout(flushLayout, 1);
	};
	VisualElementDragControls.prototype.updateConstraints = function(onReady) {
		var _this = this;
		this.cancelLayout = batchLayout(function(read, write) {
			var ancestors = collectProjectingAncestors(_this.visualElement);
			write(function() {
				return ancestors.forEach(function(element) {
					return element.resetTransform();
				});
			});
			read(function() {
				return updateLayoutMeasurement(_this.visualElement);
			});
			write(function() {
				return ancestors.forEach(function(element) {
					return element.restoreTransform();
				});
			});
			read(function() {
				_this.resolveDragConstraints();
			});
			if (onReady) write(onReady);
		});
	};
	VisualElementDragControls.prototype.mount = function(visualElement) {
		var _this = this;
		/**
		* Attach a pointerdown event listener on this DOM element to initiate drag tracking.
		*/
		var stopPointerListener = addPointerEvent(visualElement.getInstance(), "pointerdown", function(event) {
			var _a = _this.props, drag = _a.drag, _b = _a.dragListener;
			drag && (_b === void 0 || _b) && _this.start(event);
		});
		/**
		* Attach a window resize listener to scale the draggable target within its defined
		* constraints as the window resizes.
		*/
		var stopResizeListener = addDomEvent(window, "resize", function() {
			_this.scalePoint();
		});
		/**
		* Ensure drag constraints are resolved correctly relative to the dragging element
		* whenever its layout changes.
		*/
		var stopLayoutUpdateListener = visualElement.onLayoutUpdate(function() {
			if (_this.isDragging) _this.resolveDragConstraints();
		});
		/**
		* If the previous component with this same layoutId was dragging at the time
		* it was unmounted, we want to continue the same gesture on this component.
		*/
		var prevDragCursor = visualElement.prevDragCursor;
		if (prevDragCursor) this.start(lastPointerEvent, { cursorProgress: prevDragCursor });
		/**
		* Return a function that will teardown the drag gesture
		*/
		return function() {
			stopPointerListener === null || stopPointerListener === void 0 || stopPointerListener();
			stopResizeListener === null || stopResizeListener === void 0 || stopResizeListener();
			stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0 || stopLayoutUpdateListener();
			_this.cancelDrag();
		};
	};
	return VisualElementDragControls;
}();
function shouldDrag(direction, drag, currentDirection) {
	return (drag === true || drag === direction) && (currentDirection === null || currentDirection === direction);
}
/**
* Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
* than the provided threshold, return `null`.
*
* @param offset - The x/y offset from origin.
* @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
*/
function getCurrentDirection(offset, lockThreshold) {
	if (lockThreshold === void 0) lockThreshold = 10;
	var direction = null;
	if (Math.abs(offset.y) > lockThreshold) direction = "y";
	else if (Math.abs(offset.x) > lockThreshold) direction = "x";
	return direction;
}
//#endregion
//#region node_modules/svelte-motion/src/gestures/drag/UseDrag.svelte
function UseDrag($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let visualElement = $$props["visualElement"];
		let props = $$props["props"];
		let isCustom = $$props["isCustom"];
		const mcc = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
		let dragControls = new VisualElementDragControls({ visualElement });
		let cleanup;
		const dragEffect = () => {
			if (cleanup) cleanup();
			if (groupDragControls) cleanup = groupDragControls.subscribe(dragControls);
		};
		let groupDragControls = props.dragControls;
		let transformPagePoint = get(mcc).transformPagePoint;
		dragControls.setProps({
			...props,
			transformPagePoint
		});
		onDestroy(() => {
			if (cleanup) cleanup();
		});
		$: ({dragControls: groupDragControls} = props);
		$: ({transformPagePoint} = store_get($$store_subs ??= {}, "$mcc", mcc));
		$: dragControls.setProps({
			...props,
			transformPagePoint
		});
		$: dragEffect(dragControls);
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			visualElement,
			props,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/motion/features/drag.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
/**
* @public
*/
var drag = {
	pan: UsePanGesture,
	drag: UseDrag
};
//#endregion
//#region node_modules/svelte-motion/src/render/dom/projection/default-scale-correctors.js
function pixelsToPercent(pixels, axis) {
	return pixels / (axis.max - axis.min) * 100;
}
/**
* We always correct borderRadius as a percentage rather than pixels to reduce paints.
* For example, if you are projecting a box that is 100px wide with a 10px borderRadius
* into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
* borderRadius in both states. If we animate between the two in pixels that will trigger
* a paint each time. If we animate between the two in percentage we'll avoid a paint.
*/
function correctBorderRadius(latest, _layoutState, _a) {
	var target = _a.target;
	/**
	* If latest is a string, if it's a percentage we can return immediately as it's
	* going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
	*/
	if (typeof latest === "string") if (px.test(latest)) latest = parseFloat(latest);
	else return latest;
	/**
	* If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
	* pixel value as a percentage of each axis
	*/
	var x = pixelsToPercent(latest, target.x);
	var y = pixelsToPercent(latest, target.y);
	return x + "% " + y + "%";
}
Object.assign(Object.assign({}, { process: correctBorderRadius }), { applyTo: [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomLeftRadius",
	"borderBottomRightRadius"
] });
function Animate($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let visualElement = $$props["visualElement"];
		let layout = fallback($$props["layout"], void 0);
		let safeToRemove = $$props["safeToRemove"];
		axisBox();
		axisBox();
		let stopAxisAnimation = {
			x: void 0,
			y: void 0
		};
		let unsubLayoutReady;
		onDestroy(() => {
			unsubLayoutReady();
			eachAxis((axis) => stopAxisAnimation[axis]?.());
		});
		bind_props($$props, {
			visualElement,
			layout,
			safeToRemove
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/motion/features/layout/AnimateLayoutContextProvider.svelte
function AnimateLayoutContextProvider($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let visualElement = $$props["visualElement"];
		let props = $$props["props"];
		let isCustom = $$props["isCustom"];
		let layout = props.layout;
		const presence = usePresence(isCustom);
		$: ({layout} = props);
		Animate($$renderer, {
			visualElement,
			layout,
			safeToRemove: store_get($$store_subs ??= {}, "$presence", presence)[1]
		});
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			visualElement,
			props,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/motion/features/layout/Measure.svelte
function Measure($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let visualElement = $$props["visualElement"];
		let syncLayout = $$props["syncLayout"];
		let framerSyncLayout = $$props["framerSyncLayout"];
		let update = $$props["update"];
		const scaleCorrectionContext = getContext(ScaleCorrectionContext);
		const scaleCorrectionParentContext = getContext(ScaleCorrectionParentContext);
		/**
		* If this is a child of a SyncContext, notify it that it needs to re-render. It will then
		* handle the snapshotting.
		*
		* If it is stand-alone component, add it to the batcher.
		*/
		let updated = false;
		const updater = (nc = false) => {
			if (updated) return null;
			updated = true;
			get(scaleCorrectionContext).forEach((v) => {
				v.updater?.(true);
			});
			if (isSharedLayout(syncLayout)) syncLayout.syncUpdate();
			else {
				snapshotViewportBox(visualElement, nc);
				syncLayout.add(visualElement);
			}
			return null;
		};
		if (update === void 0);
		const afterU = (nc = false) => {
			updated = false;
			get(scaleCorrectionContext).forEach((v, i) => {
				v.afterU?.(true);
			});
			if (!isSharedLayout(syncLayout)) syncLayout.flush();
			/**
			* If this axis isn't animating as a result of this render we want to reset the targetBox
			* to the measured box
			*/
		};
		scaleCorrectionParentContext.update((v) => v.concat([{
			updater,
			afterU
		}]));
		$: update !== void 0 && updater(update);
		bind_props($$props, {
			visualElement,
			syncLayout,
			framerSyncLayout,
			update
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/motion/features/layout/MeasureContextProvider.svelte
function MeasureContextProvider($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let update;
		let visualElement = $$props["visualElement"];
		let props = $$props["props"];
		let isCustom = $$props["isCustom"];
		const syncLayout = getContext(SharedLayoutContext) || SharedLayoutContext(isCustom);
		const framerSyncLayout = getContext(FramerTreeLayoutContext) || FramerTreeLayoutContext(isCustom);
		$: ({update} = props);
		Measure($$renderer, {
			syncLayout: store_get($$store_subs ??= {}, "$syncLayout", syncLayout),
			framerSyncLayout: store_get($$store_subs ??= {}, "$framerSyncLayout", framerSyncLayout),
			visualElement,
			update
		});
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			visualElement,
			props,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/motion/features/layout/index.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var layoutAnimations = {
	measureLayout: MeasureContextProvider,
	layoutAnimation: AnimateLayoutContextProvider
};
//#endregion
//#region node_modules/svelte-motion/src/motion/features/AnimationState.svelte
function AnimationState($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let visualElement = $$props["visualElement"];
		let props = $$props["props"];
		let animate = props.animate;
		$: ({animate} = props);
		$: visualElement.animationState = visualElement.animationState || createAnimationState(visualElement);
		$: if (isAnimationControls(animate)) (/* @__PURE__ */ tick()).then(() => animate.subscribe(visualElement));
		bind_props($$props, {
			visualElement,
			props
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/motion/features/Exit.svelte
function Exit($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let custom;
		let props = $$props["props"];
		let visualElement = $$props["visualElement"];
		let isCustom = $$props["isCustom"];
		const presenceContext = getContext(PresenceContext) || PresenceContext(isCustom);
		const presence = usePresence(isCustom);
		const effect = (pres) => {
			const [isPresent, onExitComplete] = pres;
			const animation = visualElement.animationState?.setActive(AnimationType.Exit, !isPresent, { custom: store_get($$store_subs ??= {}, "$presenceContext", presenceContext)?.custom ?? custom });
			!isPresent && animation?.then(onExitComplete);
			return "";
		};
		$: ({custom} = props);
		$: effect(store_get($$store_subs ??= {}, "$presence", presence));
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			props,
			visualElement,
			isCustom
		});
	});
}
//#endregion
//#region node_modules/svelte-motion/src/render/dom/motion.js
/**
* HTML & SVG components, optimised for use with gestures and animation. These can be used as
* drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
*
* @public
*/
var motion = /* @__PURE__ */ createMotionClass({
	animation: AnimationState,
	exit: Exit,
	...gestureAnimations,
	...drag,
	...layoutAnimations
});
//#endregion
//#region node_modules/svelte-motion/src/value/use-combine-values.js
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
var useCombineMotionValues = (values, combineValues) => {
	let subscriptions = [];
	let vals = values;
	const unsubscribe = () => {
		subscriptions.forEach((unsubscribe) => unsubscribe());
	};
	const subscribe = () => {
		subscriptions = vals.map((val) => val.onChange(handler));
		updateValue();
	};
	const value = motionValue(combineValues(), () => {
		unsubscribe();
		subscribe();
		return unsubscribe;
	});
	let updateValue = () => {
		value.set(combineValues());
	};
	const handler = () => {
		sync.update(updateValue, false, true);
	};
	value.reset = (_values, _combineValues) => {
		vals = _values;
		unsubscribe();
		updateValue = () => {
			value.set(_combineValues());
		};
		subscribe();
	};
	return value;
};
//#endregion
//#region node_modules/svelte-motion/src/utils/transform.js
var isCustomValueType = function(v) {
	return typeof v === "object" && v.mix;
};
var getMixer = function(v) {
	return isCustomValueType(v) ? v.mix : void 0;
};
function transform() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	var useImmediate = !Array.isArray(args[0]);
	var argOffset = useImmediate ? 0 : -1;
	var inputValue = args[0 + argOffset];
	var inputRange = args[1 + argOffset];
	var outputRange = args[2 + argOffset];
	var options = args[3 + argOffset];
	var interpolator = interpolate(inputRange, outputRange, Object.assign({ mixer: getMixer(outputRange[0]) }, options));
	return useImmediate ? interpolator(inputValue) : interpolator;
}
//#endregion
//#region node_modules/svelte-motion/src/value/use-transform.js
var useTransform = (input, inputRangeOrTransformer, outputRange, options) => {
	let latest = [];
	const update = (input, inputRangeOrTransformer, outputRange, options) => {
		const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
		const values = Array.isArray(input) ? input : [input];
		const _transformer = Array.isArray(input) ? transformer : ([latest]) => transformer(latest);
		return [values, () => {
			latest.length = 0;
			const numValues = values.length;
			for (let i = 0; i < numValues; i++) latest[i] = values[i].get();
			return _transformer(latest);
		}];
	};
	const comb = useCombineMotionValues(...update(input, inputRangeOrTransformer, outputRange, options));
	comb.updateInner = comb.reset;
	comb.reset = (input, inputRangeOrTransformer, outputRange, options) => comb.updateInner(...update(input, inputRangeOrTransformer, outputRange, options));
	return comb;
};
//#endregion
//#region node_modules/svelte-motion/src/value/use-spring.js
/**
* Creates a `MotionValue` that, when `set`, will use a spring animation to animate to its new state.
*
* It can either work as a stand-alone `MotionValue` by initialising it with a value, or as a subscriber
* to another `MotionValue`.
*
* @remarks
*
* ```jsx
* const x = useSpring(0, { stiffness: 300 })
* const y = useSpring(x, { damping: 10 })
* ```
*
* @param inputValue - `MotionValue` or number. If provided a `MotionValue`, when the input `MotionValue` changes, the created `MotionValue` will spring towards that value.
* @param springConfig - Configuration options for the spring.
* @returns `MotionValue`
*
* @public
*/
var useSpring = (source, config = {}, isCustom = false) => {
	const mcc = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
	let activeSpringAnimation = null;
	let value = motionValue(isMotionValue(source) ? source.get() : source);
	let cleanup;
	const update = (_source, _config) => {
		value.attach((v, set) => {
			const { isStatic } = get(mcc);
			if (isStatic) return set(v);
			if (activeSpringAnimation) activeSpringAnimation.stop();
			activeSpringAnimation = animate({
				from: value.get(),
				to: v,
				velocity: value.getVelocity(),
				..._config,
				onUpdate: set
			});
			return value.get();
		});
		cleanup?.();
		return isMotionValue(_source) ? _source.onChange((v) => value.set(parseFloat(v))) : void 0;
	};
	update(source, config);
	value.reset = update;
	return value;
};
//#endregion
//#region src/lib/components/ui/HeroParallax/ProductCard.svelte
function ProductCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let product = $$props["product"];
		let translate = $$props["translate"];
		motion($$renderer, {
			style: { x: translate },
			whileHover: { y: -20 },
			children: invalid_default_snippet,
			$$slots: { default: ($$renderer, { motion }) => {
				$$renderer.push(`<div class="group/product relative h-96 w-[20rem] sm:w-[30rem] flex-shrink-0 cursor-pointer"><a${attr("href", product.link)} class="block group-hover/product:shadow-2xl h-full w-full"><img${attr("src", product.thumbnail)} loading="lazy" class="absolute inset-0 h-full w-full object-cover object-center rounded-sm shadow-xl"${attr("alt", product.title)}/></a> <div class="pointer-events-none absolute inset-0 h-full w-full bg-forest-900 opacity-0 group-hover/product:opacity-60 transition-opacity duration-300 rounded-sm"></div> <h2 class="font-display absolute bottom-6 left-6 text-gold-300 text-2xl opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 drop-shadow-md">${escape_html(product.title)}</h2></div>`);
			} }
		});
		bind_props($$props, {
			product,
			translate
		});
	});
}
//#endregion
//#region src/lib/components/ui/HeroParallax/HeroParallax.svelte
function HeroParallax($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let firstRowBase, secondRowBase, thirdRowBase, firstRow, secondRow, thirdRow;
		let products = $$props["products"];
		const shuffleArray = (array) => {
			const arr = [...array];
			for (let i = arr.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
			return arr;
		};
		const { scrollYProgress } = { scrollYProgress: motionValue(0) };
		const springConfig = {
			stiffness: 300,
			damping: 30,
			bounce: 100
		};
		const scrollX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1e3]), springConfig);
		const scrollXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1e3]), springConfig);
		const rotateX = useSpring(useTransform(scrollYProgress, [0, .2], [15, 0]), springConfig);
		const opacity = useSpring(useTransform(scrollYProgress, [0, .2], [.2, 1]), springConfig);
		const rotateZ = useSpring(useTransform(scrollYProgress, [0, .2], [20, 0]), springConfig);
		const translateY = useSpring(useTransform(scrollYProgress, [0, .2], [-700, 300]), springConfig);
		const auto1 = motionValue(0);
		const auto2 = motionValue(0);
		const auto3 = motionValue(0);
		const translateX1 = useTransform([scrollX, auto1], ([s, a]) => -1500 + s + a);
		const translateX2 = useTransform([scrollXReverse, auto2], ([s, a]) => s + a);
		const translateX3 = useTransform([scrollX, auto3], ([s, a]) => -1800 + s + a);
		const translateX1Spring = useSpring(translateX1, springConfig);
		const translateX2Spring = useSpring(translateX2, springConfig);
		const translateX3Spring = useSpring(translateX3, springConfig);
		onDestroy(() => {});
		$: firstRowBase = shuffleArray(products);
		$: secondRowBase = shuffleArray(products);
		$: thirdRowBase = shuffleArray(products);
		$: firstRow = [
			...firstRowBase,
			...firstRowBase,
			...firstRowBase
		];
		$: secondRow = [
			...secondRowBase,
			...secondRowBase,
			...secondRowBase
		];
		$: thirdRow = [
			...thirdRowBase,
			...thirdRowBase,
			...thirdRowBase
		];
		$: 560 * products.length;
		$$renderer.push(`<div class="relative flex h-[220vh] flex-col self-auto overflow-hidden py-4 antialiased [perspective:1000px] [transform-style:preserve-3d] bg-stone-50"><div class="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-8 md:py-40 z-20 pointer-events-auto"><!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]--></div> `);
		motion($$renderer, {
			style: {
				rotateX,
				rotateZ,
				translateY,
				opacity
			},
			children: invalid_default_snippet,
			$$slots: { default: ($$renderer, { motion }) => {
				$$renderer.push(`<div class="pointer-events-none pb-10"><div class="mb-20 flex flex-row flex-nowrap whitespace-nowrap w-max space-x-20 pointer-events-auto"><!--[-->`);
				const each_array = ensure_array_like(firstRow);
				for (let i = 0, $$length = each_array.length; i < $$length; i++) {
					let product = each_array[i];
					ProductCard($$renderer, {
						product,
						translate: translateX1Spring
					});
				}
				$$renderer.push(`<!--]--></div> <div class="mb-20 flex flex-row flex-nowrap whitespace-nowrap w-max space-x-20 pointer-events-auto"><!--[-->`);
				const each_array_1 = ensure_array_like(secondRow);
				for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
					let product = each_array_1[i];
					ProductCard($$renderer, {
						product,
						translate: translateX2Spring
					});
				}
				$$renderer.push(`<!--]--></div> <div class="flex flex-row flex-nowrap whitespace-nowrap w-max space-x-20 pointer-events-auto"><!--[-->`);
				const each_array_2 = ensure_array_like(thirdRow);
				for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
					let product = each_array_2[i];
					ProductCard($$renderer, {
						product,
						translate: translateX3Spring
					});
				}
				$$renderer.push(`<!--]--></div></div>`);
			} }
		});
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { products });
	});
}
//#endregion
//#region src/lib/components/Hero.svelte
function Hero($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const webpFiles = [
			"aziz-najia-cooking.webp",
			"beef-meatballs-cardamon.webp",
			"chicken-volubilis.webp",
			"fresh-sardine-tagine.webp",
			"interior-of-ruined-garden.webp",
			"photo0jpg (1).webp",
			"photo0jpg.webp",
			"photo1jpg.webp",
			"photo2jpg (1).webp",
			"photo2jpg.webp",
			"sardine-sweet-onion-terine.webp",
			"table-in-the-bushes-photo.webp",
			"tapas-caliente-makuda.webp",
			"the-fountain-old-and.webp",
			"the-front-entrance-on.webp",
			"the-garden-at-night-photo.webp",
			"the-garden-early-evening.webp",
			"the-ruined-garden.webp",
			"vegetable-b-stella-photo.webp",
			"view-toward-the-rear.webp"
		];
		const formatTitle = (filename) => {
			let name = filename.replace(".webp", "");
			name = name.replace(/-/g, " ");
			name = name.replace(/jpg/g, "");
			name = name.replace(/\(\d+\)/g, "");
			return name.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ").replace(/\s+/g, " ").trim();
		};
		const products = webpFiles.map((file) => ({
			title: formatTitle(file) || "Ruined Garden",
			link: `#`,
			thumbnail: `/assets/${file}`
		}));
		HeroParallax($$renderer, {
			products: [...products, ...products.slice(0, 5)],
			children: ($$renderer) => {
				$$renderer.push(`<div class="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto my-auto mt-12 md:mt-24 pointer-events-auto"><p class="chapter-eyebrow text-forest-800/80 mb-6 tracking-[0.3em] font-sans font-bold">Welcome to</p> <h1 class="font-display font-light text-6xl md:text-8xl text-forest-900 mb-8 tracking-wider leading-tight drop-shadow-xl">The Ruined<br/>Garden</h1> <p class="text-lg md:text-xl text-stone-100 mb-12 font-medium tracking-wide max-w-2xl mx-auto drop-shadow-sm bg-forest-900/80 p-6 rounded-sm shadow-2xl border border-gold-300/30">Discover a secret oasis hidden within the ancient Medina of Fes. Where nature reclaims the ruins, and every meal is a journey through time.</p> <a href="https://www.google.com/maps/search/?api=1&amp;query=The+Ruined+Garden+Fes" target="_blank" rel="noopener noreferrer" class="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-forest-900 bg-forest-900 text-gold-300 hover:text-stone-100 hover:bg-forest-800 transition-all duration-500 ease-out shadow-xl rounded-sm"><span class="font-sans font-bold text-[0.95rem] tracking-[0.15em] uppercase">Come Visit Us</span></a></div>`);
			},
			$$slots: { default: true }
		});
	});
}
//#endregion
//#region src/lib/components/CrumbleCard.svelte
function CrumbleCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let hasCrumbled = fallback($$props["hasCrumbled"], false);
		const rows = 8;
		const cols = 6;
		const crumblingWallImage = "/assets/crumbling-wall.webp";
		onDestroy(() => {});
		$$renderer.push(`<div class="relative block w-full outline-none"><div class="absolute -left-16 -top-12 z-0 pointer-events-none opacity-0 drop-shadow-xl saturate-150"><svg width="140" height="140" viewBox="0 0 24 24" fill="none" class="text-forest-600 sm:w-36 sm:h-36 mix-blend-multiply opacity-80"><path d="M5 22s-2-8 3-12c5-4 11-5 11-5s1 6-4 11c-5 5-10 6-10 6Z" fill="currentColor"></path><path d="M22 6c-3 0-8 2-12 6s-6 10-6 10" stroke="#0f1f18" stroke-width="0.5" stroke-linecap="round"></path><circle cx="15" cy="8" r="3" fill="#C0B283"></circle></svg></div> <div class="absolute -right-12 -bottom-14 z-0 pointer-events-none opacity-0 drop-shadow-xl saturate-150"><svg width="160" height="160" viewBox="0 0 24 24" fill="none" class="text-terracotta-700 sm:w-40 sm:h-40 mix-blend-multiply opacity-80"><path d="M19 22s2-8-3-12c-5-4-11-5-11-5s-1 6 4 11c5 5 10 6 10 6Z" fill="currentColor"></path><path d="M2 6c3 0 8 2 12 6s6 10 6 10" stroke="#823c2a" stroke-width="0.5" stroke-linecap="round"></path><circle cx="9" cy="8" r="3" fill="#C0B283"></circle></svg></div> <div class="relative z-10 crumble-content bg-transparent opacity-100 pointer-events-auto"><!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]--></div> `);
		if (!hasCrumbled) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="absolute inset-x-0 inset-y-0 z-20 grid overflow-hidden shadow-2xl transition-transform duration-300"${attr_style(`grid-template-columns: repeat(${cols}, 1fr); grid-template-rows: repeat(${rows}, 1fr);`)}><!--[-->`);
			const each_array = ensure_array_like(Array(rows * cols));
			for (let i = 0, $$length = each_array.length; i < $$length; i++) {
				each_array[i];
				$$renderer.push(`<div class="relative w-full h-full bg-cover"${attr_style(` background-image: url(${stringify(crumblingWallImage)}); background-size: ${stringify(cols * 100)}% ${stringify(rows * 100)}%; background-position: ${stringify(i % cols * (100 / (cols - 1)))}% ${stringify(Math.floor(i / cols) * (100 / (rows - 1)))}%; border: 0.5px solid rgba(0,0,0,0.1); `)}></div>`);
			}
			$$renderer.push(`<!--]--> <div class="absolute inset-0 bg-stone-900/40 mix-blend-multiply flex flex-col items-center justify-center border-2 border-stone-500/20 m-2 pointer-events-none"></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div>`);
		bind_props($$props, { hasCrumbled });
	});
}
//#endregion
//#region src/lib/components/RoamingCat.svelte
function RoamingCat($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const placements = [
			{
				trigger: "[aria-labelledby=\"chapter-ruin\"]",
				side: "right",
				top: "38%",
				rotation: -8,
				size: 90
			},
			{
				trigger: "[aria-labelledby=\"chapter-ruin\"]",
				side: "left",
				top: "72%",
				rotation: 12,
				size: 75
			},
			{
				trigger: "[aria-labelledby=\"chapter-gateway\"]",
				side: "right",
				top: "22%",
				rotation: -5,
				size: 85
			},
			{
				trigger: "[aria-labelledby=\"chapter-guardians\"]",
				side: "left",
				top: "55%",
				rotation: 10,
				size: 80
			},
			{
				trigger: "[aria-labelledby=\"chapter-feast\"]",
				side: "right",
				top: "60%",
				rotation: -12,
				size: 95
			}
		];
		let triggers = [];
		onDestroy(() => {
			triggers.forEach((t) => t.kill());
		});
		$$renderer.push(`<!--[-->`);
		const each_array = ensure_array_like(placements);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let p = each_array[i];
			$$renderer.push(`<div class="fixed z-30 pointer-events-none opacity-0"${attr_style(` ${stringify(p.side === "right" ? "right: 1.5rem;" : "left: 1.5rem;")} top: ${stringify(p.top)}; width: ${stringify(p.size)}px; transform: rotate(${stringify(p.rotation)}deg); mix-blend-mode: normal; `)} aria-hidden="true"><img src="/assets/sleeping-cat.png" alt=""${attr("width", p.size)}${attr("height", p.size)} class="w-full h-auto drop-shadow-xl" style="filter: invert(1) opacity(0.55);"/></div>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let isMenuOpen = false;
		let isQuestionnaireOpen = false;
		const heroImage = "/assets/the-garden-early-evening.webp";
		const feastImage = "/assets/the-garden-at-night-photo.webp";
		onDestroy(() => {});
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			head("1uha8ag", $$renderer, ($$renderer) => {
				$$renderer.title(($$renderer) => {
					$$renderer.push(`<title>The Ruined Garden | Fes</title>`);
				});
			});
			GrowingIvy($$renderer, {});
			$$renderer.push(`<!----> <main class="site-shell bg-stone-50 text-stone-900 overflow-x-hidden selection:bg-gold-300 selection:text-forest-900">`);
			RoamingCat($$renderer, {});
			$$renderer.push(`<!----> `);
			Hero($$renderer, {});
			$$renderer.push(`<!----> `);
			ReviewMarquee($$renderer, {});
			$$renderer.push(`<!----> <section aria-labelledby="chapter-ruin" class="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden chapter-shell"><img class="absolute inset-0 h-full w-full object-cover fixed-parallax gpu-layer"${attr("src", heroImage)} alt="" loading="eager" fetchpriority="high" decoding="async" sizes="100vw"/> <div class="absolute inset-0 bg-stone-100/80"></div> <div class="grain-overlay"></div> <div class="max-w-5xl mx-auto z-10 relative animate-fade-in animate-slide-up w-full px-4">`);
			CrumbleCard($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<div class="story-panel"><p class="chapter-eyebrow">Chapter I: The Sanctuary Found</p> <h1 id="chapter-ruin" class="font-display text-5xl md:text-7xl lg:text-8xl text-forest-800 mb-6 leading-tight chapter-title">A Secret Map to the Soul of Fes.</h1> <div class="luxury-divider mx-auto mb-12"></div> <div data-story-block="" class="font-sans text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto drop-shadow-sm font-medium text-left md:text-center space-y-4"><p class="story-sentence">Five minutes from the chaos of Talaa Seghira, time begins to slow.</p> <p class="story-sentence">Follow the hand-painted signs through the labyrinth of the Medina
              until the stone gives way to a hidden gate.</p> <p class="story-sentence">Here, a 14th-century merchant’s palace has been reclaimed by the
              earth.</p> <p class="story-sentence">We are a ruin, yes, but a living one.</p> <p class="story-sentence">Whether you find us by the light of a log fire in the winter salon
              or under the wide-brimmed shade of a summer sun hat, the garden is
              always waiting.</p></div> <div class="mt-12 pt-10 border-t border-stone-200/60 text-center"><button class="inline-flex items-center justify-center px-8 py-4 border border-forest-800/60 text-forest-800 hover:bg-forest-800 hover:text-gold-300 transition-all duration-300 font-sans text-xs tracking-[0.22em] uppercase rounded-sm">Curate Your Journey</button></div></div>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></section> <section id="gateway" aria-labelledby="chapter-gateway" class="relative py-20 min-h-screen flex flex-col items-center justify-center bg-stone-50"><div class="w-full max-w-5xl mx-auto px-4 mb-12 text-center text-stone-500"></div> <div class="relative z-20 px-4 w-full"><div class="max-w-4xl mx-auto">`);
			CrumbleCard($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<div class="chapter-card p-6 md:p-10"><p class="chapter-eyebrow text-center" id="chapter-gateway">Chapter II: The Gateway</p> <h2 class="font-display text-4xl md:text-6xl text-terracotta-800 mb-6 text-center chapter-title">Of Fire and Slow Time.</h2> <div class="luxury-divider mx-auto mb-8"></div> <div data-story-block="" class="font-sans text-stone-700 text-lg md:text-xl leading-relaxed space-y-4"><p class="story-sentence">Our kitchen breathes with the seasons.</p> <p class="story-sentence">At midday, we serve the vibrant pulse of the street, tapas and
                pastries dusted with sugar and history.</p> <p class="story-sentence">But as the shadows lengthen across the Zellige, the real magic
                begins.</p> <p class="story-sentence">This is the home of the <span class="practical-word">Seven-Hour Mechoui Lamb</span>, a dish that cannot be rushed, only coaxed into perfection.</p></div> <div class="mt-10 pt-8 border-t border-stone-200/60 text-center"><button class="inline-flex items-center justify-center px-8 py-4 border border-[#C0B283]/70 text-[#8a7150] hover:bg-[#C0B283]/10 hover:border-[#C0B283] transition-all duration-300 font-sans text-xs tracking-[0.22em] uppercase rounded-sm">View the Menu</button></div></div>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></div></section> <section id="guardians" aria-labelledby="chapter-guardians" class="relative min-h-screen bg-stone-100 py-32 flex flex-col items-center justify-center chapter-shell"><div class="max-w-4xl mx-auto px-4 w-full text-center z-10 mb-12 relative">`);
			CrumbleCard($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<div class="story-panel relative"><p class="chapter-eyebrow mb-8">Chapter III: The Guardians of the Medina</p> <h2 id="chapter-guardians" class="font-display text-5xl md:text-7xl text-terracotta-800 mb-8 chapter-title">Shadows in the Garden.</h2> <div class="luxury-divider mx-auto mb-8"></div> <div data-story-block="" class="font-sans text-stone-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto space-y-4"><p class="story-sentence">You may see them, the silent, amber-eyed watchers of the Medina.</p> <p class="story-sentence">The stray cats of Fes are our ancient pest-control and our
              companions.</p> <p class="story-sentence">While we feed them at the gates and keep their water bowls full,
              we ask that you let them remain wild within our walls.</p> <p class="story-sentence">Behind the scenes, our human family works with the same quiet
              grace.</p> <p class="story-sentence">At The Ruined Garden, every gratuity goes directly to the hands
              that prepared your tea and the hearts that tend the hearth.</p></div></div>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></section> <section id="feast" aria-labelledby="chapter-feast" class="relative min-h-[90vh] bg-forest-900 text-stone-100 flex flex-col justify-center items-center text-center px-4 py-32 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"><img class="absolute inset-0 h-full w-full object-cover fixed-parallax gpu-layer opacity-30"${attr("src", feastImage)} alt="" loading="lazy" decoding="async" sizes="100vw"/> <div class="grain-overlay"></div> <div class="relative z-10 w-full max-w-3xl mx-auto">`);
			CrumbleCard($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<div class="story-panel-dark"><p class="chapter-eyebrow text-gold-100/80 mb-7">Chapter IV: The Guided Return</p> <h2 id="chapter-feast" class="font-display text-5xl md:text-8xl text-gold-400 mb-8 glow-effect chapter-title">The Way Home.</h2> <div class="luxury-divider mx-auto mb-10"></div> <div data-story-block="" class="font-sans text-xl md:text-2xl text-stone-200 leading-relaxed mb-16 space-y-5"><p class="story-sentence">The Medina is a beautiful maze, but you need never feel lost.</p> <p class="story-sentence">For a few dirhams, our <span class="practical-word">Escort Service</span> will meet you at your riad and guide you through the starlit alleys
              to our door.</p> <p class="story-sentence">And when the feast is done, we make sure you return safely.</p> <p class="story-sentence">During the high seasons of light and bloom, our tables fill
              quickly. Secure your place in the story before the garden closes
              its gates for the night.</p></div> <button class="cta-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900">Reserve Your Table</button></div>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></section> <footer class="relative bg-[#0f1f18] text-stone-500 py-16 text-center font-sans tracking-wide border-t border-gold-900/40"><p class="text-sm uppercase mb-4 text-gold-600/50 hover:text-gold-400 transition-colors cursor-pointer">Built with SvelteKit &amp; GSAP</p> <p>© 2026 The Ruined Garden. All rights reserved.</p></footer></main> `);
			MenuModal($$renderer, {
				get isOpen() {
					return isMenuOpen;
				},
				set isOpen($$value) {
					isMenuOpen = $$value;
					$$settled = false;
				}
			});
			$$renderer.push(`<!----> `);
			ExperienceQuestionnaire($$renderer, {
				get isOpen() {
					return isQuestionnaireOpen;
				},
				set isOpen($$value) {
					isQuestionnaireOpen = $$value;
					$$settled = false;
				}
			});
			$$renderer.push(`<!---->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}
//#endregion
export { _page as default };
