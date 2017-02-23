/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../src/app/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/view_container';
import * as import9 from '@angular/core/src/change_detection/change_detection_util';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/common/src/directives/ng_for';
import * as import15 from '@angular/common/src/directives/ng_if';
export var Wrapper_AppComponent = (function () {
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
export var AppComponentNgFactory = new import7.ComponentFactory('my-app', View_AppComponent_Host0, import0.AppComponent);
var styles_AppComponent = [];
var View_AppComponent1 = (function (_super) {
    __extends(View_AppComponent1, _super);
    function View_AppComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent1, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import9.UNINITIALIZED;
    }
    View_AppComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray4(4, 'href', '#', 'style', 'margin-left: 20px'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_AppComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, '', this.context.$implicit.descripcion, '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent1.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.estableceIdioma(this.context.$implicit.codigo) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AppComponent1;
}(import1.AppView));
var View_AppComponent2 = (function (_super) {
    __extends(View_AppComponent2, _super);
    function View_AppComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent2, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_AppComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'h1', new import3.InlineArray2(2, 'i18n', ''), null);
        this._text_1 = this.renderer.createText(this._el_0, 'Hola Angular!', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent2;
}(import1.AppView));
var View_AppComponent3 = (function (_super) {
    __extends(View_AppComponent3, _super);
    function View_AppComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent3, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import9.UNINITIALIZED;
    }
    View_AppComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, '', this.context.$implicit, '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent3;
}(import1.AppView));
var renderType_AppComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AppComponent, {});
export var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent0, renderType_AppComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '    ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, '\n        ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'label', new import3.InlineArray2(2, 'i18n', ''), null);
        this._text_4 = this.renderer.createText(this._el_3, 'Idioma:', null);
        this._text_5 = this.renderer.createText(this._el_1, '\n        ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_6 = new import8.ViewContainer(6, 1, this, this._anchor_6);
        this._TemplateRef_6_5 = new import12.TemplateRef_(this, 6, this._anchor_6);
        this._NgFor_6_6 = new import10.Wrapper_NgFor(this._vc_6.vcRef, this._TemplateRef_6_5, this.parentView.injectorGet(import13.IterableDiffers, this.parentIndex), this.ref);
        this._text_7 = this.renderer.createText(this._el_1, '\n    ', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_9 = import3.createRenderElement(this.renderer, parentRenderNode, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_11 = import3.createRenderElement(this.renderer, parentRenderNode, 'button', new import3.InlineArray8(6, 'i18n', '', 'i18n-title', '', 'title', 'Pulse para mostrar u ocultar la cabecera'), null);
        this._text_12 = this.renderer.createText(this._el_11, 'Mostrar / Ocultar cabecera', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_14 = new import8.ViewContainer(14, null, this, this._anchor_14);
        this._TemplateRef_14_5 = new import12.TemplateRef_(this, 14, this._anchor_14);
        this._NgIf_14_6 = new import11.Wrapper_NgIf(this._vc_14.vcRef, this._TemplateRef_14_5);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_16 = import3.createRenderElement(this.renderer, parentRenderNode, 'h3', new import3.InlineArray2(2, 'i18n', ''), null);
        this._text_17 = this.renderer.createText(this._el_16, 'Lista de Heroes', null);
        this._text_18 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_19 = new import8.ViewContainer(19, null, this, this._anchor_19);
        this._TemplateRef_19_5 = new import12.TemplateRef_(this, 19, this._anchor_19);
        this._NgFor_19_6 = new import10.Wrapper_NgFor(this._vc_19.vcRef, this._TemplateRef_19_5, this.parentView.injectorGet(import13.IterableDiffers, this.parentIndex), this.ref);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_11, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_11));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._anchor_19
        ]), [disposable_0]);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import14.NgFor) && (6 === requestNodeIndex))) {
            return this._NgFor_6_6.context;
        }
        if (((token === import12.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import15.NgIf) && (14 === requestNodeIndex))) {
            return this._NgIf_14_6.context;
        }
        if (((token === import12.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import14.NgFor) && (19 === requestNodeIndex))) {
            return this._NgFor_19_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6_0_0 = this.context.idiomas;
        this._NgFor_6_6.check_ngForOf(currVal_6_0_0, throwOnChange, false);
        this._NgFor_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        var currVal_14_0_0 = this.context.showHeading;
        this._NgIf_14_6.check_ngIf(currVal_14_0_0, throwOnChange, false);
        this._NgIf_14_6.ngDoCheck(this, this._anchor_14, throwOnChange);
        var currVal_19_0_0 = this.context.heroes;
        this._NgFor_19_6.check_ngForOf(currVal_19_0_0, throwOnChange, false);
        this._NgFor_19_6.ngDoCheck(this, this._anchor_19, throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        this._vc_14.detectChangesInNestedViews(throwOnChange);
        this._vc_19.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this._vc_6.destroyNestedViews();
        this._vc_14.destroyNestedViews();
        this._vc_19.destroyNestedViews();
    };
    View_AppComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 6)) {
            return new View_AppComponent1(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        if ((nodeIndex == 14)) {
            return new View_AppComponent2(this.viewUtils, this, 14, this._anchor_14, this._vc_14);
        }
        if ((nodeIndex == 19)) {
            return new View_AppComponent3(this.viewUtils, this, 19, this._anchor_19, this._vc_19);
        }
        return null;
    };
    View_AppComponent0.prototype.handleEvent_11 = function (eventName, $event) {
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
//# sourceMappingURL=app.component.ngfactory.js.map