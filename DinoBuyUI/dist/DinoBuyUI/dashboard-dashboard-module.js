(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js ***!
  \*********************************************************************************************/
/*! exports provided: CarouselComponent, CarouselConfig, CarouselModule, SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return CarouselConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



function CarouselComponent_ol_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ol_1_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.selectSlide(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", slide_r4.active === true);
} }
function CarouselComponent_ol_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ol_1_li_1_Template, 1, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.indicatorsSlides());
} }
function CarouselComponent_a_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarouselComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.previousSlide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_a_4_span_2_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.activeSlide === 0 && ctx_r1.noWrap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isBs4);
} }
function CarouselComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.nextSlide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r2.isLast(ctx_r2.activeSlide) && ctx_r2.noWrap);
} }
const _c0 = function (a0) { return { "display": a0 }; };
const _c1 = ["*"];
class CarouselConfig {
    constructor() {
        /* Default interval of auto changing of slides */
        this.interval = 5000;
        /* Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /* Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /* Show carousel-indicators */
        this.showIndicators = true;
        /* Slides can be paused on focus */
        this.pauseOnFocus = false;
        /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
            of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
    }
}
CarouselConfig.ɵfac = function CarouselConfig_Factory(t) { return new (t || CarouselConfig)(); };
/** @nocollapse */ CarouselConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function CarouselConfig_Factory() { return new CarouselConfig(); }, token: CarouselConfig, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @template T
 * @param {?} array The source array to search in
 * @param {?} predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 * @return {?}
 */
function findLastIndex(array, predicate) {
    /** @type {?} */
    let l = array.length;
    while (l--) {
        if (predicate(array[l], l, array)) {
            return l;
        }
    }
    return -1;
}
/**
 * @template T
 * @param {?} array
 * @param {?} size
 * @return {?}
 */
function chunkByNumber(array, size) {
    /** @type {?} */
    const out = [];
    /** @type {?} */
    const n = Math.ceil((array.length) / size);
    /** @type {?} */
    let i = 0;
    while (i < n) {
        /** @type {?} */
        const chunk = array.splice(0, (i === n - 1) && size < array.length ? array.length : size);
        out.push(chunk);
        i++;
    }
    return out;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Direction = {
    UNKNOWN: 0,
    NEXT: 1,
    PREV: 2,
};
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */
class CarouselComponent {
    /**
     * @param {?} config
     * @param {?} ngZone
     */
    constructor(config, ngZone) {
        this.ngZone = ngZone;
        /* If `true` - carousel indicators indicate slides chunks
             works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
             of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
        /**
         * Turn on/off animation. Animation doesn't work for multilist carousel
         */
        this.isAnimated = false;
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        /**
         * Will be emitted when active slides has been changed in multilist mode
         */
        this.slideRangeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /* Index to start display slides from it */
        this.startFromIndex = 0;
        this._slides = new ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]();
        this._currentVisibleSlidesIndex = 0;
        this.destroyed = false;
        this.getActive = (/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => slide.active);
        this.makeSlidesConsistent = (/**
         * @param {?} slides
         * @return {?}
         */
        (slides) => {
            slides.forEach((/**
             * @param {?} slide
             * @param {?} index
             * @return {?}
             */
            (slide, index) => slide.item.order = index));
        });
        Object.assign(this, config);
    }
    /**
     * Index of currently displayed slide(started for 0)
     * @param {?} index
     * @return {?}
     */
    set activeSlide(index) {
        if (this.multilist) {
            return;
        }
        if (this._slides.length && index !== this._currentActiveSlide) {
            this._select(index);
        }
    }
    /**
     * @return {?}
     */
    get activeSlide() {
        return this._currentActiveSlide;
    }
    /**
     * Delay of item cycling in milliseconds. If false, carousel won't cycle
     * automatically.
     * @return {?}
     */
    get interval() {
        return this._interval;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set interval(value) {
        this._interval = value;
        this.restartTimer();
    }
    /**
     * @return {?}
     */
    get slides() {
        return this._slides.toArray();
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.singleSlideOffset) {
                this.indicatorsByChunk = false;
            }
            if (this.multilist) {
                this._chunkedSlides = chunkByNumber(this.mapSlidesAndIndexes(), this.itemsPerSlide);
                this.selectInitialSlides();
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed = true;
    }
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    addSlide(slide) {
        this._slides.add(slide);
        if (this.multilist && this._slides.length <= this.itemsPerSlide) {
            slide.active = true;
        }
        if (!this.multilist && this.isAnimated) {
            slide.isAnimated = true;
        }
        if (!this.multilist && this._slides.length === 1) {
            this._currentActiveSlide = undefined;
            this.activeSlide = 0;
            this.play();
        }
        if (this.multilist && this._slides.length > this.itemsPerSlide) {
            this.play();
        }
    }
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    removeSlide(slide) {
        /** @type {?} */
        const remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            /** @type {?} */
            let nextSlideIndex = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout((/**
             * @return {?}
             */
            () => {
                this._select(nextSlideIndex);
            }), 0);
        }
        else {
            this._slides.remove(remIndex);
            /** @type {?} */
            const currentSlideIndex = this.getCurrentSlideIndex();
            setTimeout((/**
             * @return {?}
             */
            () => {
                // after removing, need to actualize index of current active slide
                this._currentActiveSlide = currentSlideIndex;
                this.activeSlideChange.emit(this._currentActiveSlide);
            }), 0);
        }
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    nextSlideFromInterval(force = false) {
        this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    nextSlide(force = false) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    previousSlide(force = false) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.PREV, force);
    }
    /**
     * @return {?}
     */
    getFirstVisibleIndex() {
        return this.slides.findIndex(this.getActive);
    }
    /**
     * @return {?}
     */
    getLastVisibleIndex() {
        return findLastIndex(this.slides, this.getActive);
    }
    /**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */
    move(direction, force = false) {
        /** @type {?} */
        const firstVisibleIndex = this.getFirstVisibleIndex();
        /** @type {?} */
        const lastVisibleIndex = this.getLastVisibleIndex();
        if (this.noWrap) {
            if (direction === Direction.NEXT &&
                this.isLast(lastVisibleIndex) ||
                direction === Direction.PREV &&
                    firstVisibleIndex === 0) {
                return;
            }
        }
        if (!this.multilist) {
            this.activeSlide = this.findNextSlideIndex(direction, force);
        }
        else {
            this.moveMultilist(direction);
        }
    }
    /**
     * Swith slides by enter, space and arrows keys
     * \@internal
     * @param {?} event
     * @return {?}
     */
    keydownPress(event) {
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            this.nextSlide();
            event.preventDefault();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 37 || event.key === 'LeftArrow') {
            this.previousSlide();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 39 || event.key === 'RightArrow') {
            this.nextSlide();
            return;
        }
    }
    /**
     * Play on mouse leave
     * \@internal
     * @return {?}
     */
    onMouseLeave() {
        if (!this.pauseOnFocus) {
            this.play();
        }
    }
    /**
     * Play on mouse up
     * \@internal
     * @return {?}
     */
    onMouseUp() {
        if (!this.pauseOnFocus) {
            this.play();
        }
    }
    /**
     * When slides on focus autoplay is stopped(optional)
     * \@internal
     * @return {?}
     */
    pauseFocusIn() {
        if (this.pauseOnFocus) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * When slides out of focus autoplay is started
     * \@internal
     * @return {?}
     */
    pauseFocusOut() {
        this.play();
    }
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    selectSlide(index) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        if (!this.multilist) {
            this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
        }
        else {
            this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
        }
    }
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    }
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    pause() {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    getCurrentSlideIndex() {
        return this._slides.findIndex(this.getActive);
    }
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    isLast(index) {
        return index + 1 >= this._slides.length;
    }
    /**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */
    isFirst(index) {
        return index === 0;
    }
    /**
     * @return {?}
     */
    indicatorsSlides() {
        return this.slides.filter((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        (slide, index) => !this.indicatorsByChunk || index % this.itemsPerSlide === 0));
    }
    /**
     * @private
     * @return {?}
     */
    selectInitialSlides() {
        /** @type {?} */
        const startIndex = this.startFromIndex <= this._slides.length
            ? this.startFromIndex
            : 0;
        this.hideSlides();
        if (this.singleSlideOffset) {
            this._slidesWithIndexes = this.mapSlidesAndIndexes();
            if (this._slides.length - startIndex < this.itemsPerSlide) {
                /** @type {?} */
                const slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);
                this._slidesWithIndexes = [
                    ...this._slidesWithIndexes,
                    ...slidesToAppend
                ]
                    .slice(slidesToAppend.length)
                    .slice(0, this.itemsPerSlide);
            }
            else {
                this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
            }
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
            this.makeSlidesConsistent(this._slidesWithIndexes);
        }
        else {
            this.selectRangeByNestedIndex(startIndex);
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    findNextSlideIndex(direction, force) {
        /** @type {?} */
        let nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return undefined;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    }
    /**
     * @private
     * @return {?}
     */
    mapSlidesAndIndexes() {
        return this.slides
            .slice()
            .map((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        (slide, index) => {
            return {
                index,
                item: slide
            };
        }));
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    selectSlideRange(index) {
        if (this.isIndexInRange(index)) {
            return;
        }
        this.hideSlides();
        if (!this.singleSlideOffset) {
            this.selectRangeByNestedIndex(index);
        }
        else {
            /** @type {?} */
            const startIndex = this.isIndexOnTheEdges(index)
                ? index
                : index - this.itemsPerSlide + 1;
            /** @type {?} */
            const endIndex = this.isIndexOnTheEdges(index)
                ? index + this.itemsPerSlide
                : index + 1;
            this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    selectRangeByNestedIndex(index) {
        /** @type {?} */
        const selectedRange = this._chunkedSlides
            .map((/**
         * @param {?} slidesList
         * @param {?} i
         * @return {?}
         */
        (slidesList, i) => {
            return {
                index: i,
                list: slidesList
            };
        }))
            .find((/**
         * @param {?} slidesList
         * @return {?}
         */
        (slidesList) => {
            return slidesList.list.find((/**
             * @param {?} slide
             * @return {?}
             */
            slide => slide.index === index)) !== undefined;
        }));
        this._currentVisibleSlidesIndex = selectedRange.index;
        this._chunkedSlides[selectedRange.index].forEach((/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => {
            slide.item.active = true;
        }));
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isIndexOnTheEdges(index) {
        return (index + 1 - this.itemsPerSlide <= 0 ||
            index + this.itemsPerSlide <= this._slides.length);
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isIndexInRange(index) {
        if (this.singleSlideOffset) {
            /** @type {?} */
            const visibleIndexes = this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
            return visibleIndexes.indexOf(index) >= 0;
        }
        return (index <= this.getLastVisibleIndex() &&
            index >= this.getFirstVisibleIndex());
    }
    /**
     * @private
     * @return {?}
     */
    hideSlides() {
        this.slides.forEach((/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => slide.active = false));
    }
    /**
     * @private
     * @return {?}
     */
    isVisibleSlideListLast() {
        return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
    }
    /**
     * @private
     * @return {?}
     */
    isVisibleSlideListFirst() {
        return this._currentVisibleSlidesIndex === 0;
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    moveSliderByOneItem(direction) {
        /** @type {?} */
        let firstVisibleIndex;
        /** @type {?} */
        let lastVisibleIndex;
        /** @type {?} */
        let indexToHide;
        /** @type {?} */
        let indexToShow;
        if (this.noWrap) {
            firstVisibleIndex = this.getFirstVisibleIndex();
            lastVisibleIndex = this.getLastVisibleIndex();
            indexToHide = direction === Direction.NEXT
                ? firstVisibleIndex
                : lastVisibleIndex;
            indexToShow = direction !== Direction.NEXT
                ? firstVisibleIndex - 1
                : !this.isLast(lastVisibleIndex)
                    ? lastVisibleIndex + 1 : 0;
            this._slides.get(indexToHide).active = false;
            this._slides.get(indexToShow).active = true;
            /** @type {?} */
            const slidesToReorder = this.mapSlidesAndIndexes().filter((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active));
            this.makeSlidesConsistent(slidesToReorder);
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
        else {
            /** @type {?} */
            let displayedIndex;
            firstVisibleIndex = this._slidesWithIndexes[0].index;
            lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;
            if (direction === Direction.NEXT) {
                this._slidesWithIndexes.shift();
                displayedIndex = this.isLast(lastVisibleIndex)
                    ? 0
                    : lastVisibleIndex + 1;
                this._slidesWithIndexes.push({
                    index: displayedIndex,
                    item: this._slides.get(displayedIndex)
                });
            }
            else {
                this._slidesWithIndexes.pop();
                displayedIndex = this.isFirst(firstVisibleIndex)
                    ? this._slides.length - 1
                    : firstVisibleIndex - 1;
                this._slidesWithIndexes = [{
                        index: displayedIndex,
                        item: this._slides.get(displayedIndex)
                    }, ...this._slidesWithIndexes];
            }
            this.hideSlides();
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            slide => slide.item.active = true));
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this.slideRangeChange.emit(this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index)));
        }
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    moveMultilist(direction) {
        if (this.singleSlideOffset) {
            this.moveSliderByOneItem(direction);
        }
        else {
            this.hideSlides();
            if (this.noWrap) {
                this._currentVisibleSlidesIndex = direction === Direction.NEXT
                    ? this._currentVisibleSlidesIndex + 1
                    : this._currentVisibleSlidesIndex - 1;
            }
            else {
                if (direction === Direction.NEXT) {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListLast()
                        ? 0
                        : this._currentVisibleSlidesIndex + 1;
                }
                else {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListFirst()
                        ? this._chunkedSlides.length - 1
                        : this._currentVisibleSlidesIndex - 1;
                }
            }
            this._chunkedSlides[this._currentVisibleSlidesIndex].forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
    }
    /**
     * @private
     * @return {?}
     */
    getVisibleIndexes() {
        if (!this.singleSlideOffset) {
            return this._chunkedSlides[this._currentVisibleSlidesIndex]
                .map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
        }
        else {
            return this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
        }
    }
    /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */
    _select(index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        if (!this.multilist) {
            /** @type {?} */
            const currentSlide = this._slides.get(this._currentActiveSlide);
            if (currentSlide) {
                currentSlide.active = false;
            }
        }
        /** @type {?} */
        const nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    }
    /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */
    restartTimer() {
        this.resetTimer();
        /** @type {?} */
        const interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                return setInterval((/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const nInterval = +this.interval;
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (this.isPlaying &&
                            !isNaN(this.interval) &&
                            nInterval > 0 &&
                            this.slides.length) {
                            this.nextSlideFromInterval();
                        }
                        else {
                            this.pause();
                        }
                    }));
                }), interval);
            }));
        }
    }
    /**
     * @return {?}
     */
    get multilist() {
        return this.itemsPerSlide > 1;
    }
    /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
    resetTimer() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CarouselConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["carousel"]], inputs: { indicatorsByChunk: "indicatorsByChunk", itemsPerSlide: "itemsPerSlide", singleSlideOffset: "singleSlideOffset", isAnimated: "isAnimated", startFromIndex: "startFromIndex", activeSlide: "activeSlide", interval: "interval", noWrap: "noWrap", noPause: "noPause", showIndicators: "showIndicators", pauseOnFocus: "pauseOnFocus" }, outputs: { activeSlideChange: "activeSlideChange", slideRangeChange: "slideRangeChange" }, ngContentSelectors: _c1, decls: 6, vars: 6, consts: [["tabindex", "0", 1, "carousel", "slide", 3, "mouseenter", "mouseleave", "mouseup", "keydown", "focusin", "focusout"], ["class", "carousel-indicators", 4, "ngIf"], [1, "carousel-inner", 3, "ngStyle"], ["class", "left carousel-control carousel-control-prev", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "right carousel-control carousel-control-next", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], [1, "carousel-indicators"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["tabindex", "0", "role", "button", 1, "left", "carousel-control", "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"], ["tabindex", "0", "role", "button", 1, "right", "carousel-control", "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CarouselComponent_Template_div_mouseenter_0_listener() { return ctx.pause(); })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); })("mouseup", function CarouselComponent_Template_div_mouseup_0_listener() { return ctx.onMouseUp(); })("keydown", function CarouselComponent_Template_div_keydown_0_listener($event) { return ctx.keydownPress($event); })("focusin", function CarouselComponent_Template_div_focusin_0_listener() { return ctx.pauseFocusIn(); })("focusout", function CarouselComponent_Template_div_focusout_0_listener() { return ctx.pauseFocusOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ol_1_Template, 2, 1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_a_4_Template, 3, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_a_5_Template, 4, 2, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIndicators && ctx.slides.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.multilist ? "flex" : "block"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: CarouselConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
CarouselComponent.propDecorators = {
    noWrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    noPause: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pauseOnFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    indicatorsByChunk: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemsPerSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    singleSlideOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activeSlideChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    slideRangeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activeSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    startFromIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    interval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'carousel',
                template: "<div (mouseenter)=\"pause()\"\n     (mouseleave)=\"onMouseLeave()\"\n     (mouseup)=\"onMouseUp()\"\n     (keydown)=\"keydownPress($event)\"\n     (focusin)=\"pauseFocusIn()\"\n     (focusout)=\"pauseFocusOut()\"\n     class=\"carousel slide\" tabindex=\"0\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\n        [class.active]=\"slide.active === true\"\n        (click)=\"selectSlide(i)\">\n    </li>\n  </ol>\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\">\n    <ng-content></ng-content>\n  </div>\n  <a class=\"left carousel-control carousel-control-prev\"\n     [class.disabled]=\"activeSlide === 0 && noWrap\"\n     (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"\n      tabindex=\"0\" role=\"button\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\"\n     [class.disabled]=\"isLast(activeSlide) && noWrap\"\n     (click)=\"nextSlide()\" *ngIf=\"slides.length > 1\"\n     tabindex=\"0\" role=\"button\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
            }]
    }], function () { return [{ type: CarouselConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { indicatorsByChunk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemsPerSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], singleSlideOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeSlideChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], slideRangeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], startFromIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], interval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noWrap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noPause: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pauseOnFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlideComponent {
    /**
     * @param {?} carousel
     */
    constructor(carousel) {
        this.itemWidth = '100%';
        this.order = 0;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.addClass = true;
        this.carousel = carousel;
    }
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    ngOnInit() {
        this.carousel.addSlide(this);
        this.itemWidth = `${100 / this.carousel.itemsPerSlide}%`;
    }
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
}
SlideComponent.ɵfac = function SlideComponent_Factory(t) { return new (t || SlideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CarouselComponent)); };
SlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlideComponent, selectors: [["slide"]], hostVars: 13, hostBindings: function SlideComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", !ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.itemWidth)("order", ctx.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("item", ctx.addClass)("carousel-item", ctx.addClass)("active", ctx.active)("carousel-animation", ctx.isAnimated);
    } }, inputs: { active: "active" }, ngContentSelectors: _c1, decls: 2, vars: 2, consts: [[1, "item"]], template: function SlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active);
    } }, styles: [".carousel-animation[_nghost-%COMP%] {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    .carousel-animation.active[_nghost-%COMP%] {\n      opacity: 1;\n      visibility: visible;\n    }\n    .carousel-animation[_nghost-%COMP%]:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }"] });
/** @nocollapse */
SlideComponent.ctorParameters = () => [
    { type: CarouselComponent }
];
SlideComponent.propDecorators = {
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }],
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.order',] }],
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-animation',] }],
    addClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.item',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'slide',
                template: `
    <div [class.active]="active" class="item">
      <ng-content></ng-content>
    </div>
  `,
                host: {
                    '[attr.aria-hidden]': '!active'
                },
                styles: [`
    :host.carousel-animation {
       transition: opacity 0.6s ease, visibility 0.6s ease;
       float: left;
    }
    :host.carousel-animation.active {
      opacity: 1;
      visibility: visible;
    }
    :host.carousel-animation:not(.active) {
      display: block;
      position: absolute;
      opacity: 0;
      visibility: hidden;
    }
  `]
            }]
    }], function () { return [{ type: CarouselComponent }]; }, { itemWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
        }], order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.order']
        }], addClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.item']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.carousel-item']
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.carousel-animation']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CarouselModule, providers: [] };
    }
}
CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CarouselModule });
CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CarouselModule_Factory(t) { return new (t || CarouselModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarouselModule, { declarations: function () { return [SlideComponent, CarouselComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [SlideComponent, CarouselComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [SlideComponent, CarouselComponent],
                exports: [SlideComponent, CarouselComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-carousel.js.map

/***/ }),

/***/ "./src/app/dashboard/brandoffers/brandoffers.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/brandoffers/brandoffers.component.ts ***!
  \****************************************************************/
/*! exports provided: BrandoffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandoffersComponent", function() { return BrandoffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BrandoffersComponent {
    constructor() { }
    ngOnInit() {
    }
}
BrandoffersComponent.ɵfac = function BrandoffersComponent_Factory(t) { return new (t || BrandoffersComponent)(); };
BrandoffersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrandoffersComponent, selectors: [["app-brandoffers"]], decls: 2, vars: 0, template: function BrandoffersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "brandoffers works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2JyYW5kb2ZmZXJzL2JyYW5kb2ZmZXJzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrandoffersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-brandoffers',
                templateUrl: './brandoffers.component.html',
                styleUrls: ['./brandoffers.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 8, vars: 0, consts: [[1, "container1"], [1, "navbarfixed", "container1"], [1, "contentstyle"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".navbarfixed[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    position: fixed; \r\n    top: 0; \r\n    z-index: 1;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.container1[_ngcontent-%COMP%] {\r\n    width: 1200px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n.contentstyle[_ngcontent-%COMP%] {\r\n    margin-top: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBRSxxQ0FBcUM7SUFDdEQsTUFBTSxFQUFFLCtDQUErQztJQUN2RCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5hdmJhcmZpeGVkIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNldCB0aGUgbmF2YmFyIHRvIGZpeGVkIHBvc2l0aW9uICovXHJcbiAgICB0b3A6IDA7IC8qIFBvc2l0aW9uIHRoZSBuYXZiYXIgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSAqL1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyMSB7XHJcbiAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5jb250ZW50c3R5bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../navbar/navbar.module */ "./src/app/navbar/navbar.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _offercarousel_offercarousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offercarousel/offercarousel.component */ "./src/app/dashboard/offercarousel/offercarousel.component.ts");
/* harmony import */ var _productpage_productpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./productpage/productpage.component */ "./src/app/dashboard/productpage/productpage.component.ts");
/* harmony import */ var _homepageoffers_homepageoffers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homepageoffers/homepageoffers.component */ "./src/app/dashboard/homepageoffers/homepageoffers.component.ts");
/* harmony import */ var _featuredbrandoffers_featuredbrandoffers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./featuredbrandoffers/featuredbrandoffers.component */ "./src/app/dashboard/featuredbrandoffers/featuredbrandoffers.component.ts");
/* harmony import */ var _todaysdeals_todaysdeals_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todaysdeals/todaysdeals.component */ "./src/app/dashboard/todaysdeals/todaysdeals.component.ts");
/* harmony import */ var _topproducts_topproducts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./topproducts/topproducts.component */ "./src/app/dashboard/topproducts/topproducts.component.ts");
/* harmony import */ var _offerband_offerband_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./offerband/offerband.component */ "./src/app/dashboard/offerband/offerband.component.ts");
/* harmony import */ var _brandoffers_brandoffers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./brandoffers/brandoffers.component */ "./src/app/dashboard/brandoffers/brandoffers.component.ts");

















const dashboardRoutes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        children: [
            {
                path: '', component: _homepageoffers_homepageoffers_component__WEBPACK_IMPORTED_MODULE_8__["HomepageoffersComponent"]
            },
            {
                path: 'product/:productname', component: _productpage_productpage_component__WEBPACK_IMPORTED_MODULE_7__["ProductpageComponent"]
            }
        ]
    }
];
class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(dashboardRoutes),
            _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _offercarousel_offercarousel_component__WEBPACK_IMPORTED_MODULE_6__["OffercarouselComponent"], _productpage_productpage_component__WEBPACK_IMPORTED_MODULE_7__["ProductpageComponent"], _homepageoffers_homepageoffers_component__WEBPACK_IMPORTED_MODULE_8__["HomepageoffersComponent"], _featuredbrandoffers_featuredbrandoffers_component__WEBPACK_IMPORTED_MODULE_9__["FeaturedbrandoffersComponent"], _todaysdeals_todaysdeals_component__WEBPACK_IMPORTED_MODULE_10__["TodaysdealsComponent"], _topproducts_topproducts_component__WEBPACK_IMPORTED_MODULE_11__["TopproductsComponent"], _offerband_offerband_component__WEBPACK_IMPORTED_MODULE_12__["OfferbandComponent"], _brandoffers_brandoffers_component__WEBPACK_IMPORTED_MODULE_13__["BrandoffersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _offercarousel_offercarousel_component__WEBPACK_IMPORTED_MODULE_6__["OffercarouselComponent"], _productpage_productpage_component__WEBPACK_IMPORTED_MODULE_7__["ProductpageComponent"], _homepageoffers_homepageoffers_component__WEBPACK_IMPORTED_MODULE_8__["HomepageoffersComponent"], _featuredbrandoffers_featuredbrandoffers_component__WEBPACK_IMPORTED_MODULE_9__["FeaturedbrandoffersComponent"], _todaysdeals_todaysdeals_component__WEBPACK_IMPORTED_MODULE_10__["TodaysdealsComponent"], _topproducts_topproducts_component__WEBPACK_IMPORTED_MODULE_11__["TopproductsComponent"], _offerband_offerband_component__WEBPACK_IMPORTED_MODULE_12__["OfferbandComponent"], _brandoffers_brandoffers_component__WEBPACK_IMPORTED_MODULE_13__["BrandoffersComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(dashboardRoutes),
                    _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"],
                    ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"].forRoot()
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/featuredbrandoffers/featuredbrandoffers.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/featuredbrandoffers/featuredbrandoffers.component.ts ***!
  \********************************************************************************/
/*! exports provided: FeaturedbrandoffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedbrandoffersComponent", function() { return FeaturedbrandoffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function FeaturedbrandoffersComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "BUY NOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", offer_r1.brandlogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r1.brandofferdetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", offer_r1.offerimagesource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class FeaturedbrandoffersComponent {
    constructor() {
        this.featuredbrandtext = '';
        this.featuredbrandtext = 'Game To The End With ADATA';
        this.brandOffers = [
            {
                brandofferdetail: 'offer1',
                offerimagesource: 'https://via.placeholder.com/210x210.png?text=offer1',
                offerimagetext: 'offer1',
                brandlogo: 'https://via.placeholder.com/210x50.png?text=brandlogo',
                brandofferlink: 'brandoffer/offer1'
            },
            {
                brandofferdetail: 'offer2',
                offerimagesource: 'https://via.placeholder.com/210x210.png?text=offer2',
                offerimagetext: 'offer2',
                brandlogo: 'https://via.placeholder.com/210x50.png?text=brandlogo',
                brandofferlink: 'brandoffer/offer2'
            },
            {
                brandofferdetail: 'offer3',
                offerimagesource: 'https://via.placeholder.com/210x210.png?text=offer3',
                offerimagetext: 'offer3',
                brandlogo: 'https://via.placeholder.com/210x50.png?text=brandlogo',
                brandofferlink: 'brandoffer/offer3'
            },
            {
                brandofferdetail: 'offer4',
                offerimagesource: 'https://via.placeholder.com/210x210.png?text=offer4',
                offerimagetext: 'offer4',
                brandlogo: 'https://via.placeholder.com/210x50.png?text=brandlogo',
                brandofferlink: 'brandoffer/offer5'
            },
            {
                brandofferdetail: 'offer5',
                offerimagesource: 'https://via.placeholder.com/210x210.png?text=offer5',
                offerimagetext: 'offer5',
                brandlogo: 'https://via.placeholder.com/210x50.png?text=brandlogo',
                brandofferlink: 'brandoffer/offer6'
            }
        ];
    }
    ngOnInit() {
    }
}
FeaturedbrandoffersComponent.ɵfac = function FeaturedbrandoffersComponent_Factory(t) { return new (t || FeaturedbrandoffersComponent)(); };
FeaturedbrandoffersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturedbrandoffersComponent, selectors: [["app-featuredbrandoffers"]], decls: 5, vars: 2, consts: [[1, "featuredbrand"], [1, "offertextstyle"], [1, "brandofferbox"], ["class", "brandoffer hoverfade", 4, "ngFor", "ngForOf"], [1, "brandoffer", "hoverfade"], ["routerLinkActive", "active", "routerLink", "/brandoffer/offer"], [2, "display", "block", 3, "src"], [1, "centretexthorizontal", "brandofferbackground"], [1, "brandofferdetail"], ["alt", "first slide", 2, "display", "block", 3, "src"], [1, "centretexthorizontal", "buynowborder", "changeoverhover"]], template: function FeaturedbrandoffersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FeaturedbrandoffersComponent_div_4_Template, 14, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featuredbrandtext);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brandOffers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".featuredbrand[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n}\r\n\r\n.brandofferbox[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    min-height: 300px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.offertextstyle[_ngcontent-%COMP%] {\r\n  font-family: 'Raleway', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 24px;\r\n  color: rgb(139, 139, 139);\r\n  border-bottom: 1px solid grey;\r\n}\r\n\r\n.brandoffer[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n}\r\n\r\n.brandofferdetail[_ngcontent-%COMP%] {\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  vertical-align: middle;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.brandofferbackground[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(#AAD1F9,#9876C3);\r\n}\r\n\r\n.brandofferlink[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.centretexthorizontal[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.hoverfade[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.9;\r\n}\r\n\r\n.hoverfade[_ngcontent-%COMP%]:hover   .changeoverhover[_ngcontent-%COMP%]{\r\n  font-family: 'Raleway', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n  background-color: black;\r\n  color: #ffffff;\r\n}\r\n\r\n.buynowborder[_ngcontent-%COMP%] {\r\n  min-height: 50px;\r\n  padding-top: 15px;\r\n\t box-shadow: 0 8px 6px -6px black;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\na[_ngcontent-%COMP%]:link {\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:visited {\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n  color: black;\r\n  opacity: 0.5;\r\n}\r\n\r\na[_ngcontent-%COMP%]:active {\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZmVhdHVyZWRicmFuZG9mZmVycy9mZWF0dXJlZGJyYW5kb2ZmZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiw4QkFBOEI7QUFDbEM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBR1YsZ0NBQWdDO0FBQ3pDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZmVhdHVyZWRicmFuZG9mZmVycy9mZWF0dXJlZGJyYW5kb2ZmZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZlYXR1cmVkYnJhbmQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5icmFuZG9mZmVyYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm9mZmVydGV4dHN0eWxlIHtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiByZ2IoMTM5LCAxMzksIDEzOSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5icmFuZG9mZmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5icmFuZG9mZmVyZGV0YWlsIHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmJyYW5kb2ZmZXJiYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI0FBRDFGOSwjOTg3NkMzKTtcclxufVxyXG5cclxuLmJyYW5kb2ZmZXJsaW5rIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jZW50cmV0ZXh0aG9yaXpvbnRhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5ob3ZlcmZhZGU6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmhvdmVyZmFkZTpob3ZlciAuY2hhbmdlb3ZlcmhvdmVye1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcblxyXG4uYnV5bm93Ym9yZGVyIHtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XHJcblx0ICAgLW1vei1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcclxuXHQgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IGJsYWNrO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuYTpsaW5rIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6dmlzaXRlZCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuYTphY3RpdmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturedbrandoffersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-featuredbrandoffers',
                templateUrl: './featuredbrandoffers.component.html',
                styleUrls: ['./featuredbrandoffers.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/homepageoffers/homepageoffers.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/homepageoffers/homepageoffers.component.ts ***!
  \**********************************************************************/
/*! exports provided: HomepageoffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageoffersComponent", function() { return HomepageoffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _offercarousel_offercarousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../offercarousel/offercarousel.component */ "./src/app/dashboard/offercarousel/offercarousel.component.ts");
/* harmony import */ var _featuredbrandoffers_featuredbrandoffers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../featuredbrandoffers/featuredbrandoffers.component */ "./src/app/dashboard/featuredbrandoffers/featuredbrandoffers.component.ts");
/* harmony import */ var _todaysdeals_todaysdeals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todaysdeals/todaysdeals.component */ "./src/app/dashboard/todaysdeals/todaysdeals.component.ts");
/* harmony import */ var _topproducts_topproducts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topproducts/topproducts.component */ "./src/app/dashboard/topproducts/topproducts.component.ts");
/* harmony import */ var _offerband_offerband_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../offerband/offerband.component */ "./src/app/dashboard/offerband/offerband.component.ts");
/* harmony import */ var _brandoffers_brandoffers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../brandoffers/brandoffers.component */ "./src/app/dashboard/brandoffers/brandoffers.component.ts");








class HomepageoffersComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageoffersComponent.ɵfac = function HomepageoffersComponent_Factory(t) { return new (t || HomepageoffersComponent)(); };
HomepageoffersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageoffersComponent, selectors: [["app-homepageoffers"]], decls: 7, vars: 0, consts: [[1, "dealbox1"], [1, "todaysdeals"], [1, "topproducts"]], template: function HomepageoffersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-offercarousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-featuredbrandoffers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-todaysdeals", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-topproducts", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-offerband");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-brandoffers");
    } }, directives: [_offercarousel_offercarousel_component__WEBPACK_IMPORTED_MODULE_1__["OffercarouselComponent"], _featuredbrandoffers_featuredbrandoffers_component__WEBPACK_IMPORTED_MODULE_2__["FeaturedbrandoffersComponent"], _todaysdeals_todaysdeals_component__WEBPACK_IMPORTED_MODULE_3__["TodaysdealsComponent"], _topproducts_topproducts_component__WEBPACK_IMPORTED_MODULE_4__["TopproductsComponent"], _offerband_offerband_component__WEBPACK_IMPORTED_MODULE_5__["OfferbandComponent"], _brandoffers_brandoffers_component__WEBPACK_IMPORTED_MODULE_6__["BrandoffersComponent"]], styles: [".dealbox1[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-top: 50px;\r\n}\r\n\r\n.todaysdeals[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n}\r\n\r\n.topproducts[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvaG9tZXBhZ2VvZmZlcnMvaG9tZXBhZ2VvZmZlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9ob21lcGFnZW9mZmVycy9ob21lcGFnZW9mZmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlYWxib3gxIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4udG9kYXlzZGVhbHMge1xyXG4gICAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuLnRvcHByb2R1Y3RzIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageoffersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepageoffers',
                templateUrl: './homepageoffers.component.html',
                styleUrls: ['./homepageoffers.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/offerband/offerband.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/offerband/offerband.component.ts ***!
  \************************************************************/
/*! exports provided: OfferbandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferbandComponent", function() { return OfferbandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OfferbandComponent {
    constructor() { }
    ngOnInit() {
    }
}
OfferbandComponent.ɵfac = function OfferbandComponent_Factory(t) { return new (t || OfferbandComponent)(); };
OfferbandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OfferbandComponent, selectors: [["app-offerband"]], decls: 2, vars: 0, template: function OfferbandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "offerband works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL29mZmVyYmFuZC9vZmZlcmJhbmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfferbandComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-offerband',
                templateUrl: './offerband.component.html',
                styleUrls: ['./offerband.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/offercarousel/offercarousel.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/offercarousel/offercarousel.component.ts ***!
  \********************************************************************/
/*! exports provided: OffercarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffercarouselComponent", function() { return OffercarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function OffercarouselComponent_slide_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carouselOffer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/product/", carouselOffer_r1.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", carouselOffer_r1.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class OffercarouselComponent {
    constructor() {
        this.carouselOffers = [
            {
                productName: 'product1',
                oldPrice: '3000',
                offerPrice: '2500',
                productImage: 'https://via.placeholder.com/1920x550.png?text=dealselectionimage1'
            },
            {
                productName: 'product2',
                oldPrice: '3000',
                offerPrice: '2500',
                productImage: 'https://via.placeholder.com/1920x550.png?text=dealselectionimage2'
            },
            {
                productName: 'product3',
                oldPrice: '3000',
                offerPrice: '2500',
                productImage: 'https://via.placeholder.com/1920x550.png?text=dealselectionimage3'
            },
            {
                productName: 'product4',
                oldPrice: '3000',
                offerPrice: '2500',
                productImage: 'https://via.placeholder.com/1920x550.png?text=dealselectionimage4'
            }
        ];
    }
    ngOnInit() {
    }
}
OffercarouselComponent.ɵfac = function OffercarouselComponent_Factory(t) { return new (t || OffercarouselComponent)(); };
OffercarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OffercarouselComponent, selectors: [["app-offercarousel"]], decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink"], ["alt", "first slide", 2, "display", "block", "width", "100%", 3, "src"]], template: function OffercarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OffercarouselComponent_slide_1_Template, 3, 2, "slide", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carouselOffers);
    } }, directives: [ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".carousel-control-next[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n   margin: 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvb2ZmZXJjYXJvdXNlbC9vZmZlcmNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0dBQ2QsY0FBYztBQUNqQiIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL29mZmVyY2Fyb3VzZWwvb2ZmZXJjYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNvbnRyb2wtbmV4dCwgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICBtYXJnaW46IDAgYXV0bztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OffercarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-offercarousel',
                templateUrl: './offercarousel.component.html',
                styleUrls: ['./offercarousel.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/productpage/productpage.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/productpage/productpage.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductpageComponent", function() { return ProductpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProductpageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductpageComponent.ɵfac = function ProductpageComponent_Factory(t) { return new (t || ProductpageComponent)(); };
ProductpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductpageComponent, selectors: [["app-productpage"]], decls: 2, vars: 0, template: function ProductpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "productpage works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL3Byb2R1Y3RwYWdlL3Byb2R1Y3RwYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-productpage',
                templateUrl: './productpage.component.html',
                styleUrls: ['./productpage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/todaysdeals/todaysdeals.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/todaysdeals/todaysdeals.component.ts ***!
  \****************************************************************/
/*! exports provided: TodaysdealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodaysdealsComponent", function() { return TodaysdealsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "border-color": a0 }; };
function TodaysdealsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodaysdealsComponent_div_17_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const todaysdeal_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClick(todaysdeal_r1.productName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todaysdeal_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", todaysdeal_r1.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, todaysdeal_r1.productName === ctx_r0.currentDeal.productName ? "green" : "rgb(242, 242, 242)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", todaysdeal_r1.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class TodaysdealsComponent {
    constructor() {
        this.todaysdeals = [
            {
                productName: 'Product Test 1',
                oldPrice: '3000',
                offerPrice: '2500',
                productImage: 'https://via.placeholder.com/300x300.png?text=dealselectionimage1'
            },
            {
                productName: 'Product Test 2',
                oldPrice: '3000',
                offerPrice: '2500',
                productImage: 'https://via.placeholder.com/300x300.png?text=dealselectionimage2'
            },
            {
                productName: 'Product Test 3',
                oldPrice: '3000',
                offerPrice: '2500',
                productImage: 'https://via.placeholder.com/300x300.png?text=dealselectionimage3'
            },
            {
                productName: 'Product Test 4',
                oldPrice: '3000',
                offerPrice: '2500',
                productImage: 'https://via.placeholder.com/300x300.png?text=dealselectionimage4'
            },
            {
                productName: 'Product Test 5',
                oldPrice: '3000',
                offerPrice: '2500',
                productImage: 'https://via.placeholder.com/300x300.png?text=dealselectionimage5'
            },
            {
                productName: 'Product Test 6',
                oldPrice: '3000',
                offerPrice: '2500',
                productImage: 'https://via.placeholder.com/300x300.png?text=dealselectionimage6'
            }
        ];
        this.currentDeal = this.todaysdeals[0];
    }
    ngOnInit() {
    }
    onClick(productname) {
        console.log(productname);
        for (let todaysdeal of this.todaysdeals) {
            if (todaysdeal.productName === productname) {
                this.currentDeal = todaysdeal;
                this.updateSelectedItemCss(productname);
                break;
            }
        }
    }
    updateSelectedItemCss(productName) {
        let element = document.getElementById(productName);
        console.log(element);
    }
}
TodaysdealsComponent.ɵfac = function TodaysdealsComponent_Factory(t) { return new (t || TodaysdealsComponent)(); };
TodaysdealsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodaysdealsComponent, selectors: [["app-todaysdeals"]], decls: 18, vars: 7, consts: [[1, "todaysdeal"], [1, "h2", "todaysdealheading"], [1, "dealbox"], ["href", "", "routerLinkActive", "active", 3, "routerLink"], [1, "dealselectedimage"], ["alt", "first slide", 1, "", 2, "display", "block", 3, "src"], [1, "dealdetails"], [1, "dealname"], [1, "pricedetails"], [1, "h3", "dealprice"], [1, "h5", "oldprice"], [1, "dealselector"], ["class", "dealselectionbox", 3, "ngStyle", "id", "click", 4, "ngFor", "ngForOf"], [1, "dealselectionbox", 3, "ngStyle", "id", "click"], ["alt", "first slide", 1, "dealselectionimage", 2, "display", "block", 3, "src"]], template: function TodaysdealsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TODAY'S DEALS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TodaysdealsComponent_div_17_Template, 2, 5, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/product/", ctx.currentDeal.productName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.currentDeal.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/product/", ctx.currentDeal.productName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentDeal.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.currentDeal.offerPrice, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.currentDeal.oldPrice, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todaysdeals);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".todaysdeal[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-style: solid;\r\n    border:1px solid rgb(216, 216, 216);\r\n}\r\n\r\n.todaysdealheading[_ngcontent-%COMP%] {\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n    padding: 10px;\r\n    border-bottom: 1px solid rgb(216, 216, 216);\r\n    background-color: rgb(242, 242, 242);\r\n}\r\n\r\n.dealbox[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    border-bottom:1px solid rgb(216, 216, 216);\r\n}\r\n\r\n.dealselectedimage[_ngcontent-%COMP%] {\r\n    padding: 25px;\r\n    width: 45%;\r\n}\r\n\r\n.dealimage[_ngcontent-%COMP%] {\r\n    margin: 60px;\r\n}\r\n\r\n.dealdetails[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-left: 30px;\r\n}\r\n\r\n.dealname[_ngcontent-%COMP%] {\r\n    margin-top: 60px;\r\n    font-size: 22px;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.pricedetails[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: baseline;\r\n    font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.dealprice[_ngcontent-%COMP%] {\r\n    color: tomato;\r\n    font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.oldprice[_ngcontent-%COMP%] {\r\n    color: gray;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.dealselector[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n    align-items: center;\r\n}\r\n\r\n.dealselectionbox[_ngcontent-%COMP%] {\r\n    border: 1px solid red;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.dealselectionimage[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\na[_ngcontent-%COMP%]:link {\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:visited {\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover   .dealname[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #FF7D34;\r\n}\r\n\r\na[_ngcontent-%COMP%]:active {\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvdG9kYXlzZGVhbHMvdG9kYXlzZGVhbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0Msb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvdG9kYXlzZGVhbHMvdG9kYXlzZGVhbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RheXNkZWFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG59XHJcblxyXG4udG9kYXlzZGVhbGhlYWRpbmcge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcclxufVxyXG5cclxuLmRlYWxib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYigyMTYsIDIxNiwgMjE2KTtcclxufVxyXG5cclxuLmRlYWxzZWxlY3RlZGltYWdlIHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG4uZGVhbGltYWdlIHtcclxuICAgIG1hcmdpbjogNjBweDtcclxufVxyXG5cclxuLmRlYWxkZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uZGVhbG5hbWUge1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ucHJpY2VkZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZGVhbHByaWNlIHtcclxuICAgIGNvbG9yOiB0b21hdG87XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ub2xkcHJpY2Uge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLmRlYWxzZWxlY3RvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZWFsc2VsZWN0aW9uYm94IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRlYWxzZWxlY3Rpb25pbWFnZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmE6bGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOnZpc2l0ZWQge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlciAuZGVhbG5hbWUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI0ZGN0QzNDtcclxufVxyXG5cclxuYTphY3RpdmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodaysdealsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todaysdeals',
                templateUrl: './todaysdeals.component.html',
                styleUrls: ['./todaysdeals.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/topproducts/topproducts.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/topproducts/topproducts.component.ts ***!
  \****************************************************************/
/*! exports provided: TopproductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopproductsComponent", function() { return TopproductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function TopproductsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topproduct_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/product/", topproduct_r1.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", topproduct_r1.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topproduct_r1.productName);
} }
class TopproductsComponent {
    constructor() {
        this.topproducts = [
            {
                productName: 'Top Product 1',
                oldPrice: '3000',
                offerPrice: '2500',
                productImage: 'https://via.placeholder.com/250x250.png?text=dealselectionimage1'
            },
            {
                productName: 'Top Product 2',
                oldPrice: '3000',
                offerPrice: '2500',
                productImage: 'https://via.placeholder.com/250x250.png?text=dealselectionimage2'
            },
            {
                productName: 'Top Product 3',
                oldPrice: '3000',
                offerPrice: '2500',
                productImage: 'https://via.placeholder.com/250x250.png?text=dealselectionimage3'
            },
            {
                productName: 'Top Product 4',
                oldPrice: '3000',
                offerPrice: '2500',
                productImage: 'https://via.placeholder.com/250x250.png?text=dealselectionimage4'
            },
            {
                productName: 'Top Product 5',
                oldPrice: '3000',
                offerPrice: '2500',
                productImage: 'https://via.placeholder.com/250x250.png?text=dealselectionimage5'
            }
        ];
    }
    ngOnInit() {
    }
}
TopproductsComponent.ɵfac = function TopproductsComponent_Factory(t) { return new (t || TopproductsComponent)(); };
TopproductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopproductsComponent, selectors: [["app-topproducts"]], decls: 5, vars: 1, consts: [[1, "topproducts"], [1, "h2", "topproductheading"], [1, "topproductlist"], [4, "ngFor", "ngForOf"], ["href", "", "routerLinkActive", "active", 1, "topproductdetails", 3, "routerLink"], ["alt", "first slide", 1, "topproductimage", 2, "display", "block", 3, "src"], [1, "h5", "topproductname"]], template: function TopproductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TOP PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopproductsComponent_div_4_Template, 5, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topproducts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".topproducts[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(242, 242, 242);\r\n    margin-left: 10px;\r\n    height: 100%;\r\n}\r\n\r\n.topproductheading[_ngcontent-%COMP%] {\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n    padding: 10px;\r\n    border-bottom: 1px solid rgb(216, 216, 216);\r\n    background-color: rgb(242, 242, 242);\r\n}\r\n\r\n.topproductlist[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height: 80%;\r\n}\r\n\r\n.topproductdetails[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.topproductimage[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-left: 30px;\r\n}\r\n\r\n.topproductname[_ngcontent-%COMP%] {\r\n    margin-left: 50px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\na[_ngcontent-%COMP%]:link {\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:visited {\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n  color: #FF7D34;\r\n}\r\n\r\na[_ngcontent-%COMP%]:active {\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvdG9wcHJvZHVjdHMvdG9wcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBR0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC90b3Bwcm9kdWN0cy90b3Bwcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50b3Bwcm9kdWN0cyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQyLCAyNDIsIDI0Mik7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRvcHByb2R1Y3RoZWFkaW5nIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDI0Mik7XHJcbn1cclxuXHJcbi50b3Bwcm9kdWN0bGlzdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbi50b3Bwcm9kdWN0ZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvcHByb2R1Y3RpbWFnZSB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4udG9wcHJvZHVjdG5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuYTpsaW5rIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6dmlzaXRlZCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNGRjdEMzQ7XHJcbn1cclxuXHJcbmE6YWN0aXZlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopproductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topproducts',
                templateUrl: './topproducts.component.html',
                styleUrls: ['./topproducts.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map