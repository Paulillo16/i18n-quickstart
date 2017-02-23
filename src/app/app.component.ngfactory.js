/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('./app.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import4 = require('@angular/core/src/metadata/view');
var import5 = require('@angular/core/src/linker/view_type');
var import6 = require('@angular/core/src/change_detection/constants');
var import7 = require('@angular/core/src/linker/component_factory');
var import8 = require('@angular/core/src/linker/view_container');
var import9 = require('@angular/core/src/change_detection/change_detection_util');
var import10 = require('../../node_modules/@angular/common/src/directives/ng_if.ngfactory');
var import11 = require('../../node_modules/@angular/common/src/directives/ng_for.ngfactory');
var import12 = require('@angular/core/src/linker/template_ref');
var import13 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import14 = require('@angular/common/src/directives/ng_if');
var import15 = require('@angular/common/src/directives/ng_for');
var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent() {
        this._changed = false;
        this.context = new import0.AppComponent();
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
exports.Wrapper_AppComponent = Wrapper_AppComponent;
var renderType_AppComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'my-app', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent();
        this.compView_0.create(this._AppComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AppComponent_0_3.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent_Host0;
}(import1.AppView));
exports.AppComponentNgFactory = new import7.ComponentFactory('my-app', View_AppComponent_Host0, import0.AppComponent);
var styles_AppComponent = [];
var View_AppComponent1 = (function (_super) {
    __extends(View_AppComponent1, _super);
    function View_AppComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent1, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_AppComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Hello Angular', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent1;
}(import1.AppView));
var View_AppComponent2 = (function (_super) {
    __extends(View_AppComponent2, _super);
    function View_AppComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent2, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import9.UNINITIALIZED;
    }
    View_AppComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, '', this.context.$implicit, '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent2;
}(import1.AppView));
var renderType_AppComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AppComponent, {});
var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent0, renderType_AppComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'button', new import3.InlineArray2(2, 'title', ''), null);
        this._text_1 = this.renderer.createText(this._el_0, 'Toggle Heading', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_3 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_3 = new import8.ViewContainer(3, null, this, this._anchor_3);
        this._TemplateRef_3_5 = new import12.TemplateRef_(this, 3, this._anchor_3);
        this._NgIf_3_6 = new import10.Wrapper_NgIf(this._vc_3.vcRef, this._TemplateRef_3_5);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_5 = import3.createRenderElement(this.renderer, parentRenderNode, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_7 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_7 = new import8.ViewContainer(7, null, this, this._anchor_7);
        this._TemplateRef_7_5 = new import12.TemplateRef_(this, 7, this._anchor_7);
        this._NgFor_7_6 = new import11.Wrapper_NgFor(this._vc_7.vcRef, this._TemplateRef_7_5, this.parentView.injectorGet(import13.IterableDiffers, this.parentIndex), this.ref);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._anchor_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._anchor_7,
            this._text_8
        ]), [disposable_0]);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === import14.NgIf) && (3 === requestNodeIndex))) {
            return this._NgIf_3_6.context;
        }
        if (((token === import12.TemplateRef) && (7 === requestNodeIndex))) {
            return this._TemplateRef_7_5;
        }
        if (((token === import15.NgFor) && (7 === requestNodeIndex))) {
            return this._NgFor_7_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3_0_0 = this.context.showHeading;
        this._NgIf_3_6.check_ngIf(currVal_3_0_0, throwOnChange, false);
        this._NgIf_3_6.ngDoCheck(this, this._anchor_3, throwOnChange);
        var currVal_7_0_0 = this.context.heroes;
        this._NgFor_7_6.check_ngForOf(currVal_7_0_0, throwOnChange, false);
        this._NgFor_7_6.ngDoCheck(this, this._anchor_7, throwOnChange);
        this._vc_3.detectChangesInNestedViews(throwOnChange);
        this._vc_7.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this._vc_3.destroyNestedViews();
        this._vc_7.destroyNestedViews();
    };
    View_AppComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 3)) {
            return new View_AppComponent1(this.viewUtils, this, 3, this._anchor_3, this._vc_3);
        }
        if ((nodeIndex == 7)) {
            return new View_AppComponent2(this.viewUtils, this, 7, this._anchor_7, this._vc_7);
        }
        return null;
    };
    View_AppComponent0.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.toggleHeading() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AppComponent0;
}(import1.AppView));
exports.View_AppComponent0 = View_AppComponent0;
//# sourceMappingURL=app.component.ngfactory.js.map