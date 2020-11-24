(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_checkbox", function() { return Checkbox; });
/* harmony import */ var _home_josan_proyectos_web_welcomcityApp_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_josan_proyectos_web_welcomcityApp_test_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_josan_proyectos_web_welcomcityApp_test_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ionic-global-9d5c8ee3.js */ "./node_modules/@ionic/core/dist/esm/ionic-global-9d5c8ee3.js");
/* harmony import */ var _helpers_fde0057c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-fde0057c.js */ "./node_modules/@ionic/core/dist/esm/helpers-fde0057c.js");
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-ff3fc52f.js */ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js");







var checkboxIosCss = ":host{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.23);--background:var(--ion-item-background, var(--ion-background-color, #fff));--size:26px;width:var(--size);height:var(--size)}:host(.checkbox-disabled){opacity:0.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:20px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:20px;margin-inline-end:20px}}";
var checkboxMdCss = ":host{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.51);--checkmark-width:3;--background:var(--ion-item-background, var(--ion-background-color, #fff));--transition:background 180ms cubic-bezier(0.4, 0, 0.2, 1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:0.3}:host(.in-item){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}";

var Checkbox = /*#__PURE__*/function () {
  function Checkbox(hostRef) {
    var _this = this;

    Object(_home_josan_proyectos_web_welcomcityApp_test_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Checkbox);

    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_3__["r"])(this, hostRef);
    this.ionChange = Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this, "ionChange", 7);
    this.ionFocus = Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this, "ionFocus", 7);
    this.ionBlur = Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this, "ionBlur", 7);
    this.ionStyle = Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this, "ionStyle", 7);
    this.inputId = "ion-cb-".concat(checkboxIds++);
    /**
     * The name of the control, which is submitted with the form data.
     */

    this.name = this.inputId;
    /**
     * If `true`, the checkbox is selected.
     */

    this.checked = false;
    /**
     * If `true`, the checkbox will visually appear as indeterminate.
     */

    this.indeterminate = false;
    /**
     * If `true`, the user cannot interact with the checkbox.
     */

    this.disabled = false;
    /**
     * The value of the checkbox does not mean if it's checked or not, use the `checked`
     * property for that.
     *
     * The value of a checkbox is analogous to the value of an `<input type="checkbox">`,
     * it's only used when the checkbox participates in a native `<form>`.
     */

    this.value = 'on';

    this.onClick = function (ev) {
      ev.preventDefault();
      ev.stopPropagation();

      _this.setFocus();

      _this.checked = !_this.checked;
      _this.indeterminate = false;
    };

    this.onFocus = function () {
      _this.ionFocus.emit();
    };

    this.onBlur = function () {
      _this.ionBlur.emit();
    };
  }

  Object(_home_josan_proyectos_web_welcomcityApp_test_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Checkbox, [{
    key: "componentWillLoad",
    value: function componentWillLoad() {
      this.emitStyle();
    }
  }, {
    key: "checkedChanged",
    value: function checkedChanged(isChecked) {
      this.ionChange.emit({
        checked: isChecked,
        value: this.value
      });
      this.emitStyle();
    }
  }, {
    key: "disabledChanged",
    value: function disabledChanged() {
      this.emitStyle();
    }
  }, {
    key: "emitStyle",
    value: function emitStyle() {
      this.ionStyle.emit({
        'checkbox-checked': this.checked,
        'interactive-disabled': this.disabled
      });
    }
  }, {
    key: "setFocus",
    value: function setFocus() {
      if (this.focusEl) {
        this.focusEl.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _createColorClasses,
          _this2 = this;

      var color = this.color,
          checked = this.checked,
          disabled = this.disabled,
          el = this.el,
          indeterminate = this.indeterminate,
          inputId = this.inputId,
          name = this.name,
          value = this.value;
      var mode = Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(this);

      var _getAriaLabel = Object(_helpers_fde0057c_js__WEBPACK_IMPORTED_MODULE_5__["c"])(el, inputId),
          label = _getAriaLabel.label,
          labelId = _getAriaLabel.labelId,
          labelText = _getAriaLabel.labelText;

      Object(_helpers_fde0057c_js__WEBPACK_IMPORTED_MODULE_5__["d"])(true, el, name, checked ? value : '', disabled);
      var path = indeterminate ? Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_3__["h"])("path", {
        d: "M6 12L18 12",
        part: "mark"
      }) : Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_3__["h"])("path", {
        d: "M5.9,12.5l3.8,3.8l8.8-8.8",
        part: "mark"
      });

      if (mode === 'md') {
        path = indeterminate ? Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_3__["h"])("path", {
          d: "M2 12H22",
          part: "mark"
        }) : Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_3__["h"])("path", {
          d: "M1.73,12.91 8.1,19.28 22.79,4.59",
          part: "mark"
        });
      }

      return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_3__["h"])(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_3__["H"], {
        onClick: this.onClick,
        "aria-labelledby": label ? labelId : null,
        "aria-checked": "".concat(checked),
        "aria-hidden": disabled ? 'true' : null,
        role: "checkbox",
        class: Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__["c"])(color, (_createColorClasses = {}, Object(_home_josan_proyectos_web_welcomcityApp_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createColorClasses, mode, true), Object(_home_josan_proyectos_web_welcomcityApp_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createColorClasses, 'in-item', Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__["h"])('ion-item', el)), Object(_home_josan_proyectos_web_welcomcityApp_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createColorClasses, 'checkbox-checked', checked), Object(_home_josan_proyectos_web_welcomcityApp_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createColorClasses, 'checkbox-disabled', disabled), Object(_home_josan_proyectos_web_welcomcityApp_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createColorClasses, 'checkbox-indeterminate', indeterminate), Object(_home_josan_proyectos_web_welcomcityApp_test_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createColorClasses, 'interactive', true), _createColorClasses))
      }, Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_3__["h"])("svg", {
        class: "checkbox-icon",
        viewBox: "0 0 24 24",
        part: "container"
      }, path), Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_3__["h"])("label", {
        htmlFor: inputId
      }, labelText), Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_3__["h"])("input", {
        type: "checkbox",
        "aria-checked": "".concat(checked),
        disabled: disabled,
        id: inputId,
        onFocus: function onFocus() {
          return _this2.onFocus();
        },
        onBlur: function onBlur() {
          return _this2.onBlur();
        },
        ref: function ref(focusEl) {
          return _this2.focusEl = focusEl;
        }
      }));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_3__["i"])(this);
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "checked": ["checkedChanged"],
        "disabled": ["disabledChanged"]
      };
    }
  }]);

  return Checkbox;
}();

var checkboxIds = 0;
Checkbox.style = {
  ios: checkboxIosCss,
  md: checkboxMdCss
};


/***/ })

}]);
//# sourceMappingURL=8.js.map