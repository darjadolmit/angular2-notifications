(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('@angular/core'), require('rxjs'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular2-notifications', ['exports', '@angular/animations', '@angular/core', 'rxjs', '@angular/platform-browser', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['angular2-notifications'] = {}, global.ng.animations, global.ng.core, global.rxjs, global.ng.platformBrowser, global.ng.common));
}(this, (function (exports, animations, i0, rxjs, i2, i3) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);

    var DEFAULT_ICONS = {
        alert: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/>\n        </svg>\n    ",
        error: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0V0z\" fill=\"none\"/>\n            <path d=\"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>\n        </svg>\n    ",
        info: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z\"/>\n        </svg>\n    ",
        success: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\"/>\n        </svg>\n    ",
        warn: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" width=\"64\" viewBox=\"0 0 64 64\" height=\"64\">\n          <circle cx=\"32.086\" cy=\"50.142\" r=\"2.256\"/>\n          <path d=\"M30.08 25.012V42.32c0 1.107.897 2.005 2.006 2.005s2.006-.897 2.006-2.005V25.012c0-1.107-.897-2.006-2.006-2.006s-2.006.898-2.006 2.006z\"/>\n          <path d=\"M63.766 59.234L33.856 3.082c-.697-1.308-2.844-1.308-3.54 0L.407 59.234c-.331.622-.312 1.372.051 1.975.362.605 1.015.975 1.72.975h59.816c.705 0 1.357-.369 1.721-.975.361-.603.381-1.353.051-1.975zM5.519 58.172L32.086 8.291l26.568 49.881H5.519z\"/>\n        </svg>\n    "
    };

    exports.NotificationType = void 0;
    (function (NotificationType) {
        NotificationType["Success"] = "success";
        NotificationType["Error"] = "error";
        NotificationType["Alert"] = "alert";
        NotificationType["Info"] = "info";
        NotificationType["Warn"] = "warn";
        NotificationType["Bare"] = "bare";
    })(exports.NotificationType || (exports.NotificationType = {}));

    var NotificationsService = /** @class */ (function () {
        function NotificationsService(globalOptions) {
            this.globalOptions = globalOptions;
            this.emitter = new rxjs.Subject();
            this.icons = DEFAULT_ICONS;
        }
        NotificationsService.prototype.set = function (notification, to) {
            notification.id = notification.override && notification.override.id ?
                notification.override.id :
                Math.random().toString(36).substring(3);
            notification.click = new i0.EventEmitter();
            notification.clickIcon = new i0.EventEmitter();
            notification.timeoutEnd = new i0.EventEmitter();
            this.emitter.next({ command: 'set', notification: notification, add: to });
            return notification;
        };
        NotificationsService.prototype.success = function (title, content, override, context) {
            if (title === void 0) { title = ''; }
            if (content === void 0) { content = ''; }
            return this.set({ title: title, content: content || '', type: exports.NotificationType.Success, icon: this.icons.success, override: override, context: context }, true);
        };
        NotificationsService.prototype.error = function (title, content, override, context) {
            if (title === void 0) { title = ''; }
            if (content === void 0) { content = ''; }
            return this.set({ title: title, content: content || '', type: exports.NotificationType.Error, icon: this.icons.error, override: override, context: context }, true);
        };
        NotificationsService.prototype.alert = function (title, content, override, context) {
            if (title === void 0) { title = ''; }
            if (content === void 0) { content = ''; }
            return this.set({ title: title, content: content || '', type: exports.NotificationType.Alert, icon: this.icons.alert, override: override, context: context }, true);
        };
        NotificationsService.prototype.info = function (title, content, override, context) {
            if (title === void 0) { title = ''; }
            if (content === void 0) { content = ''; }
            return this.set({ title: title, content: content || '', type: exports.NotificationType.Info, icon: this.icons.info, override: override, context: context }, true);
        };
        NotificationsService.prototype.warn = function (title, content, override, context) {
            if (title === void 0) { title = ''; }
            if (content === void 0) { content = ''; }
            return this.set({ title: title, content: content || '', type: exports.NotificationType.Warn, icon: this.icons.warn, override: override, context: context }, true);
        };
        NotificationsService.prototype.bare = function (title, content, override, context) {
            if (title === void 0) { title = ''; }
            if (content === void 0) { content = ''; }
            return this.set({ title: title, content: content || '', type: exports.NotificationType.Bare, icon: 'bare', override: override, context: context }, true);
        };
        // With type method
        NotificationsService.prototype.create = function (title, content, type, override, context) {
            if (title === void 0) { title = ''; }
            if (content === void 0) { content = ''; }
            if (type === void 0) { type = exports.NotificationType.Success; }
            return this.set({ title: title, content: content, type: type, icon: this.icons[type], override: override, context: context }, true);
        };
        // HTML Notification method
        NotificationsService.prototype.html = function (html, type, override, icon, context) {
            if (type === void 0) { type = exports.NotificationType.Success; }
            if (icon === void 0) { icon = 'bare'; }
            return this.set({ html: html, type: type, icon: this.icons[icon], override: override, context: context }, true);
        };
        // Remove all notifications method
        NotificationsService.prototype.remove = function (id) {
            if (id) {
                this.emitter.next({ command: 'clean', id: id });
            }
            else {
                this.emitter.next({ command: 'cleanAll' });
            }
        };
        return NotificationsService;
    }());
    NotificationsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: NotificationsService, deps: [{ token: 'options' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NotificationsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: NotificationsService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: NotificationsService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['options']
                        }] }];
        } });

    var NotificationComponent = /** @class */ (function () {
        function NotificationComponent(notificationService, domSanitizer, cd, zone) {
            var _this = this;
            this.notificationService = notificationService;
            this.domSanitizer = domSanitizer;
            this.cd = cd;
            this.zone = zone;
            this.titleIsTemplate = false;
            this.contentIsTemplate = false;
            this.htmlIsTemplate = false;
            this.progressWidth = 0;
            this.stopTime = false;
            this.framesPerSecond = 40;
            this.instance = function () {
                var now = new Date().getTime();
                if (_this.endTime < now) {
                    _this.remove();
                    _this.item.timeoutEnd.emit();
                }
                else if (!_this.stopTime) {
                    if (_this.showProgressBar) {
                        // We add this.sleepTime just to have 100% before close
                        _this.progressWidth = Math.min((now - _this.startTime + _this.sleepTime) * 100 / _this.timeOut, 100);
                    }
                    _this.timer = setTimeout(_this.instance, _this.sleepTime);
                }
                _this.zone.run(function () {
                    if (!_this.cd.destroyed) {
                        _this.cd.detectChanges();
                    }
                });
            };
        }
        NotificationComponent.prototype.ngOnInit = function () {
            if (this.item.override) {
                this.attachOverrides();
            }
            if (this.animate) {
                this.item.state = this.animate;
            }
            if (this.timeOut !== 0) {
                this.startTimeOut();
            }
            this.contentType(this.item.title, 'title');
            this.contentType(this.item.content, 'content');
            this.contentType(this.item.html, 'html');
            this.safeSvg = this.domSanitizer.bypassSecurityTrustHtml(this.icon || this.item.icon);
            this.safeInputHtml = this.domSanitizer.bypassSecurityTrustHtml(this.item.html);
        };
        NotificationComponent.prototype.ngOnDestroy = function () {
            clearTimeout(this.timer);
            this.cd.detach();
        };
        NotificationComponent.prototype.startTimeOut = function () {
            var _this = this;
            this.sleepTime = 1000 / this.framesPerSecond /* ms */;
            this.startTime = new Date().getTime();
            this.endTime = this.startTime + this.timeOut;
            this.zone.runOutsideAngular(function () { return _this.timer = setTimeout(_this.instance, _this.sleepTime); });
        };
        NotificationComponent.prototype.onEnter = function () {
            if (this.pauseOnHover) {
                this.stopTime = true;
                this.pauseStart = new Date().getTime();
            }
        };
        NotificationComponent.prototype.onLeave = function () {
            var _this = this;
            if (this.pauseOnHover) {
                this.stopTime = false;
                this.startTime += (new Date().getTime() - this.pauseStart);
                this.endTime += (new Date().getTime() - this.pauseStart);
                this.zone.runOutsideAngular(function () { return setTimeout(_this.instance, _this.sleepTime); });
            }
        };
        NotificationComponent.prototype.onClick = function (event) {
            this.item.click.emit(event);
            if (this.clickToClose) {
                this.remove();
            }
        };
        NotificationComponent.prototype.onClickIcon = function (event) {
            this.item.clickIcon.emit(event);
            if (this.clickIconToClose) {
                this.remove();
            }
        };
        // Attach all the overrides
        NotificationComponent.prototype.attachOverrides = function () {
            var _this = this;
            Object.keys(this.item.override).forEach(function (a) {
                if (_this.hasOwnProperty(a)) {
                    _this[a] = _this.item.override[a];
                }
            });
        };
        NotificationComponent.prototype.remove = function () {
            var _this = this;
            if (this.animate) {
                this.item.state = this.animate + 'Out';
                setTimeout(function () {
                    _this.notificationService.set(_this.item, false);
                }, 310);
            }
            else {
                this.notificationService.set(this.item, false);
            }
        };
        NotificationComponent.prototype.contentType = function (item, key) {
            if (item instanceof i0.TemplateRef) {
                this[key] = item;
            }
            else {
                this[key] = this.domSanitizer.bypassSecurityTrustHtml(item);
            }
            this[key + 'IsTemplate'] = item instanceof i0.TemplateRef;
        };
        return NotificationComponent;
    }());
    NotificationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: NotificationComponent, deps: [{ token: NotificationsService }, { token: i2__namespace.DomSanitizer }, { token: i0__namespace.ChangeDetectorRef }, { token: i0__namespace.NgZone }], target: i0__namespace.ɵɵFactoryTarget.Component });
    NotificationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.12", type: NotificationComponent, selector: "simple-notification", inputs: { timeOut: "timeOut", showProgressBar: "showProgressBar", pauseOnHover: "pauseOnHover", clickToClose: "clickToClose", clickIconToClose: "clickIconToClose", maxLength: "maxLength", theClass: "theClass", rtl: "rtl", animate: "animate", position: "position", item: "item" }, ngImport: i0__namespace, template: "<div class=\"simple-notification\"\n     [@enterLeave]=\"item.state\"\n     (click)=\"onClick($event)\"\n     [class]=\"theClass\"\n     [ngClass]=\"{\n            'alert': item.type === 'alert',\n            'error': item.type === 'error',\n            'warn': item.type === 'warn',\n            'success': item.type === 'success',\n            'info': item.type === 'info',\n            'bare': item.type === 'bare',\n            'rtl-mode': rtl,\n            'has-icon': item.icon !== 'bare'\n        }\"\n     (mouseenter)=\"onEnter()\"\n     (mouseleave)=\"onLeave()\">\n\n    <div *ngIf=\"!item.html\">\n\n        <div class=\"sn-title\" *ngIf=\"titleIsTemplate; else regularTitle\">\n            <ng-container *ngTemplateOutlet=\"title; context: item.context\"></ng-container>\n        </div>\n\n        <ng-template #regularTitle>\n            <div class=\"sn-title\" [innerHTML]=\"title\"></div>\n        </ng-template>\n\n        <div class=\"sn-content\" *ngIf=\"contentIsTemplate else regularContent\">\n            <ng-container *ngTemplateOutlet=\"content; context: item.context\"></ng-container>\n        </div>\n\n        <ng-template #regularContent>\n            <div class=\"sn-content\" [innerHTML]=\"content\"></div>\n        </ng-template>\n\n        <div class=\"icon\" *ngIf=\"item.icon !== 'bare'\" [innerHTML]=\"safeSvg\"></div>\n    </div>\n    <div *ngIf=\"item.html\">\n        <div class=\"sn-html\" *ngIf=\"htmlIsTemplate; else regularHtml\">\n            <ng-container *ngTemplateOutlet=\"item.html; context: item.context\"></ng-container>\n        </div>\n\n        <ng-template #regularHtml>\n            <div class=\"sn-content\" [innerHTML]=\"safeInputHtml\"></div>\n        </ng-template>\n\n        <div class=\"icon\" [class.icon-hover]=\"clickIconToClose\" *ngIf=\"item.icon\" [innerHTML]=\"safeSvg\" (click)=\"onClickIcon($event)\"></div>\n    </div>\n\n    <div class=\"sn-progress-loader\" *ngIf=\"showProgressBar\">\n        <span [ngStyle]=\"{'width': progressWidth + '%'}\"></span>\n    </div>\n\n</div>\n", styles: [".simple-notification{width:100%;padding:10px 20px;box-sizing:border-box;position:relative;float:left;margin-bottom:10px;color:#fff;cursor:pointer;transition:all .5s;min-height:70px}.simple-notification .sn-content,.simple-notification .sn-html,.simple-notification .sn-title{margin:0}.simple-notification .sn-title{line-height:30px;font-size:20px}.simple-notification .sn-content{font-size:16px;line-height:20px}.simple-notification.has-icon .sn-content,.simple-notification.has-icon .sn-html,.simple-notification.has-icon .sn-title{padding:0 50px 0 0}.simple-notification .icon{position:absolute;box-sizing:border-box;top:0;right:0;width:70px;height:70px;padding:10px}.simple-notification .icon.icon-hover:hover{opacity:.5}.simple-notification .icon svg{fill:#fff;width:100%;height:100%}.simple-notification .icon svg g{fill:#fff}.simple-notification.rtl-mode.has-icon .sn-content,.simple-notification.rtl-mode.has-icon .sn-html,.simple-notification.rtl-mode.has-icon .sn-title{padding:0 0 0 50px}.simple-notification.rtl-mode{direction:rtl}.simple-notification.rtl-mode .sn-content{padding:0 0 0 50px}.simple-notification.rtl-mode svg{left:0;right:auto}.simple-notification.error{background:#f44336}.simple-notification.success{background:#8bc34a}.simple-notification.alert{background:#ffdb5b}.simple-notification.info{background:#03a9f4}.simple-notification.warn{background:#ffdb5b}.simple-notification .sn-progress-loader{position:absolute;top:0;left:0;width:100%;height:5px}.simple-notification .sn-progress-loader span{float:left;height:100%}.simple-notification.success .sn-progress-loader span{background:#689f38}.simple-notification.error .sn-progress-loader span{background:#d32f2f}.simple-notification.alert .sn-progress-loader span{background:#edc242}.simple-notification.info .sn-progress-loader span{background:#0288d1}.simple-notification.warn .sn-progress-loader span{background:#edc242}.simple-notification.bare .sn-progress-loader span{background:#ccc}.simple-notification.warn div .sn-content,.simple-notification.warn div .sn-html,.simple-notification.warn div .sn-title{color:#444}"], directives: [{ type: i3__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i3__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], animations: [
            animations.trigger('enterLeave', [
                // Fade
                animations.state('fade', animations.style({ opacity: 1 })),
                animations.transition('* => fade', [
                    animations.style({ opacity: 0 }),
                    animations.animate('400ms ease-in-out')
                ]),
                animations.state('fadeOut', animations.style({ opacity: 0 })),
                animations.transition('fade => fadeOut', [
                    animations.style({ opacity: 1 }),
                    animations.animate('300ms ease-in-out')
                ]),
                // Enter from top
                animations.state('fromTop', animations.style({ opacity: 1, transform: 'translateY(0)' })),
                animations.transition('* => fromTop', [
                    animations.style({ opacity: 0, transform: 'translateY(-5%)' }),
                    animations.animate('400ms ease-in-out')
                ]),
                animations.state('fromTopOut', animations.style({ opacity: 0, transform: 'translateY(5%)' })),
                animations.transition('fromTop => fromTopOut', [
                    animations.style({ opacity: 1, transform: 'translateY(0)' }),
                    animations.animate('300ms ease-in-out')
                ]),
                // Enter from right
                animations.state('fromRight', animations.style({ opacity: 1, transform: 'translateX(0)' })),
                animations.transition('* => fromRight', [
                    animations.style({ opacity: 0, transform: 'translateX(5%)' }),
                    animations.animate('400ms ease-in-out')
                ]),
                animations.state('fromRightOut', animations.style({ opacity: 0, transform: 'translateX(-5%)' })),
                animations.transition('fromRight => fromRightOut', [
                    animations.style({ opacity: 1, transform: 'translateX(0)' }),
                    animations.animate('300ms ease-in-out')
                ]),
                // Enter from bottom
                animations.state('fromBottom', animations.style({ opacity: 1, transform: 'translateY(0)' })),
                animations.transition('* => fromBottom', [
                    animations.style({ opacity: 0, transform: 'translateY(5%)' }),
                    animations.animate('400ms ease-in-out')
                ]),
                animations.state('fromBottomOut', animations.style({ opacity: 0, transform: 'translateY(-5%)' })),
                animations.transition('fromBottom => fromBottomOut', [
                    animations.style({ opacity: 1, transform: 'translateY(0)' }),
                    animations.animate('300ms ease-in-out')
                ]),
                // Enter from left
                animations.state('fromLeft', animations.style({ opacity: 1, transform: 'translateX(0)' })),
                animations.transition('* => fromLeft', [
                    animations.style({ opacity: 0, transform: 'translateX(-5%)' }),
                    animations.animate('400ms ease-in-out')
                ]),
                animations.state('fromLeftOut', animations.style({ opacity: 0, transform: 'translateX(5%)' })),
                animations.transition('fromLeft => fromLeftOut', [
                    animations.style({ opacity: 1, transform: 'translateX(0)' }),
                    animations.animate('300ms ease-in-out')
                ]),
                // Rotate
                animations.state('scale', animations.style({ opacity: 1, transform: 'scale(1)' })),
                animations.transition('* => scale', [
                    animations.style({ opacity: 0, transform: 'scale(0)' }),
                    animations.animate('400ms ease-in-out')
                ]),
                animations.state('scaleOut', animations.style({ opacity: 0, transform: 'scale(0)' })),
                animations.transition('scale => scaleOut', [
                    animations.style({ opacity: 1, transform: 'scale(1)' }),
                    animations.animate('400ms ease-in-out')
                ]),
                // Scale
                animations.state('rotate', animations.style({ opacity: 1, transform: 'rotate(0deg)' })),
                animations.transition('* => rotate', [
                    animations.style({ opacity: 0, transform: 'rotate(5deg)' }),
                    animations.animate('400ms ease-in-out')
                ]),
                animations.state('rotateOut', animations.style({ opacity: 0, transform: 'rotate(-5deg)' })),
                animations.transition('rotate => rotateOut', [
                    animations.style({ opacity: 1, transform: 'rotate(0deg)' }),
                    animations.animate('400ms ease-in-out')
                ])
            ])
        ], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: NotificationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'simple-notification',
                        encapsulation: i0.ViewEncapsulation.None,
                        animations: [
                            animations.trigger('enterLeave', [
                                // Fade
                                animations.state('fade', animations.style({ opacity: 1 })),
                                animations.transition('* => fade', [
                                    animations.style({ opacity: 0 }),
                                    animations.animate('400ms ease-in-out')
                                ]),
                                animations.state('fadeOut', animations.style({ opacity: 0 })),
                                animations.transition('fade => fadeOut', [
                                    animations.style({ opacity: 1 }),
                                    animations.animate('300ms ease-in-out')
                                ]),
                                // Enter from top
                                animations.state('fromTop', animations.style({ opacity: 1, transform: 'translateY(0)' })),
                                animations.transition('* => fromTop', [
                                    animations.style({ opacity: 0, transform: 'translateY(-5%)' }),
                                    animations.animate('400ms ease-in-out')
                                ]),
                                animations.state('fromTopOut', animations.style({ opacity: 0, transform: 'translateY(5%)' })),
                                animations.transition('fromTop => fromTopOut', [
                                    animations.style({ opacity: 1, transform: 'translateY(0)' }),
                                    animations.animate('300ms ease-in-out')
                                ]),
                                // Enter from right
                                animations.state('fromRight', animations.style({ opacity: 1, transform: 'translateX(0)' })),
                                animations.transition('* => fromRight', [
                                    animations.style({ opacity: 0, transform: 'translateX(5%)' }),
                                    animations.animate('400ms ease-in-out')
                                ]),
                                animations.state('fromRightOut', animations.style({ opacity: 0, transform: 'translateX(-5%)' })),
                                animations.transition('fromRight => fromRightOut', [
                                    animations.style({ opacity: 1, transform: 'translateX(0)' }),
                                    animations.animate('300ms ease-in-out')
                                ]),
                                // Enter from bottom
                                animations.state('fromBottom', animations.style({ opacity: 1, transform: 'translateY(0)' })),
                                animations.transition('* => fromBottom', [
                                    animations.style({ opacity: 0, transform: 'translateY(5%)' }),
                                    animations.animate('400ms ease-in-out')
                                ]),
                                animations.state('fromBottomOut', animations.style({ opacity: 0, transform: 'translateY(-5%)' })),
                                animations.transition('fromBottom => fromBottomOut', [
                                    animations.style({ opacity: 1, transform: 'translateY(0)' }),
                                    animations.animate('300ms ease-in-out')
                                ]),
                                // Enter from left
                                animations.state('fromLeft', animations.style({ opacity: 1, transform: 'translateX(0)' })),
                                animations.transition('* => fromLeft', [
                                    animations.style({ opacity: 0, transform: 'translateX(-5%)' }),
                                    animations.animate('400ms ease-in-out')
                                ]),
                                animations.state('fromLeftOut', animations.style({ opacity: 0, transform: 'translateX(5%)' })),
                                animations.transition('fromLeft => fromLeftOut', [
                                    animations.style({ opacity: 1, transform: 'translateX(0)' }),
                                    animations.animate('300ms ease-in-out')
                                ]),
                                // Rotate
                                animations.state('scale', animations.style({ opacity: 1, transform: 'scale(1)' })),
                                animations.transition('* => scale', [
                                    animations.style({ opacity: 0, transform: 'scale(0)' }),
                                    animations.animate('400ms ease-in-out')
                                ]),
                                animations.state('scaleOut', animations.style({ opacity: 0, transform: 'scale(0)' })),
                                animations.transition('scale => scaleOut', [
                                    animations.style({ opacity: 1, transform: 'scale(1)' }),
                                    animations.animate('400ms ease-in-out')
                                ]),
                                // Scale
                                animations.state('rotate', animations.style({ opacity: 1, transform: 'rotate(0deg)' })),
                                animations.transition('* => rotate', [
                                    animations.style({ opacity: 0, transform: 'rotate(5deg)' }),
                                    animations.animate('400ms ease-in-out')
                                ]),
                                animations.state('rotateOut', animations.style({ opacity: 0, transform: 'rotate(-5deg)' })),
                                animations.transition('rotate => rotateOut', [
                                    animations.style({ opacity: 1, transform: 'rotate(0deg)' }),
                                    animations.animate('400ms ease-in-out')
                                ])
                            ])
                        ],
                        templateUrl: './notification.component.html',
                        styleUrls: ['./notification.component.css'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], ctorParameters: function () { return [{ type: NotificationsService }, { type: i2__namespace.DomSanitizer }, { type: i0__namespace.ChangeDetectorRef }, { type: i0__namespace.NgZone }]; }, propDecorators: { timeOut: [{
                    type: i0.Input
                }], showProgressBar: [{
                    type: i0.Input
                }], pauseOnHover: [{
                    type: i0.Input
                }], clickToClose: [{
                    type: i0.Input
                }], clickIconToClose: [{
                    type: i0.Input
                }], maxLength: [{
                    type: i0.Input
                }], theClass: [{
                    type: i0.Input
                }], rtl: [{
                    type: i0.Input
                }], animate: [{
                    type: i0.Input
                }], position: [{
                    type: i0.Input
                }], item: [{
                    type: i0.Input
                }] } });

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || from);
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    exports.NotificationAnimationType = void 0;
    (function (NotificationAnimationType) {
        NotificationAnimationType["Fade"] = "fade";
        NotificationAnimationType["FromTop"] = "fromTop";
        NotificationAnimationType["FromRight"] = "fromRight";
        NotificationAnimationType["FromBottom"] = "fromBottom";
        NotificationAnimationType["FromLeft"] = "fromLeft";
        NotificationAnimationType["Scale"] = "scale";
        NotificationAnimationType["Rotate"] = "rotate";
    })(exports.NotificationAnimationType || (exports.NotificationAnimationType = {}));

    var SimpleNotificationsComponent = /** @class */ (function () {
        function SimpleNotificationsComponent(service, cd) {
            this.service = service;
            this.cd = cd;
            this.create = new i0.EventEmitter();
            this.destroy = new i0.EventEmitter();
            this.notifications = [];
            this.position = ['bottom', 'right'];
            // Received values
            this.lastOnBottom = true;
            this.maxStack = 8;
            this.preventLastDuplicates = false;
            this.preventDuplicates = false;
            // Sent values
            this.timeOut = 0;
            this.maxLength = 0;
            this.clickToClose = true;
            this.clickIconToClose = false;
            this.showProgressBar = true;
            this.pauseOnHover = true;
            this.theClass = '';
            this.rtl = false;
            this.animate = exports.NotificationAnimationType.FromRight;
            this.usingComponentOptions = false;
        }
        Object.defineProperty(SimpleNotificationsComponent.prototype, "options", {
            set: function (opt) {
                this.usingComponentOptions = true;
                this.attachChanges(opt);
            },
            enumerable: false,
            configurable: true
        });
        SimpleNotificationsComponent.prototype.ngOnInit = function () {
            var _this = this;
            /**
             * Only attach global options if config
             * options were never sent through input
             */
            if (!this.usingComponentOptions) {
                this.attachChanges(this.service.globalOptions);
            }
            this.listener = this.service.emitter
                .subscribe(function (item) {
                switch (item.command) {
                    case 'cleanAll':
                        _this.notifications = [];
                        break;
                    case 'clean':
                        _this.cleanSingle(item.id);
                        break;
                    case 'set':
                        if (item.add) {
                            _this.add(item.notification);
                        }
                        else {
                            _this.defaultBehavior(item);
                        }
                        break;
                    default:
                        _this.defaultBehavior(item);
                        break;
                }
                if (!_this.cd.destroyed) {
                    _this.cd.detectChanges();
                }
            });
        };
        SimpleNotificationsComponent.prototype.ngOnDestroy = function () {
            if (this.listener) {
                this.listener.unsubscribe();
            }
            this.cd.detach();
        };
        // Default behavior on event
        SimpleNotificationsComponent.prototype.defaultBehavior = function (value) {
            this.notifications.splice(this.notifications.indexOf(value.notification), 1);
            this.destroy.emit(this.buildEmit(value.notification, false));
        };
        // Add the new notification to the notification array
        SimpleNotificationsComponent.prototype.add = function (item) {
            item.createdOn = new Date();
            var toBlock = this.preventLastDuplicates || this.preventDuplicates ? this.block(item) : false;
            // Save this as the last created notification
            this.lastNotificationCreated = item;
            // Override icon if set
            if (item.override && item.override.icons && item.override.icons[item.type]) {
                item.icon = item.override.icons[item.type];
            }
            if (!toBlock) {
                // Check if the notification should be added at the start or the end of the array
                if (this.lastOnBottom) {
                    if (this.notifications.length >= this.maxStack) {
                        this.notifications.splice(0, 1);
                    }
                    this.notifications.push(item);
                }
                else {
                    if (this.notifications.length >= this.maxStack) {
                        this.notifications.splice(this.notifications.length - 1, 1);
                    }
                    this.notifications.splice(0, 0, item);
                }
                this.create.emit(this.buildEmit(item, true));
            }
        };
        // Check if notifications should be prevented
        SimpleNotificationsComponent.prototype.block = function (item) {
            var e_1, _a;
            var toCheck = item.html ? this.checkHtml : this.checkStandard;
            if (this.preventDuplicates && this.notifications.length > 0) {
                try {
                    for (var _b = __values(this.notifications), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var notification = _c.value;
                        if (toCheck(notification, item)) {
                            return true;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            if (this.preventLastDuplicates) {
                var comp = void 0;
                if (this.preventLastDuplicates === 'visible' && this.notifications.length > 0) {
                    if (this.lastOnBottom) {
                        comp = this.notifications[this.notifications.length - 1];
                    }
                    else {
                        comp = this.notifications[0];
                    }
                }
                else if (this.preventLastDuplicates === 'all' && this.lastNotificationCreated) {
                    comp = this.lastNotificationCreated;
                }
                else {
                    return false;
                }
                return toCheck(comp, item);
            }
            return false;
        };
        SimpleNotificationsComponent.prototype.checkStandard = function (checker, item) {
            return checker.type === item.type && checker.title === item.title && checker.content === item.content;
        };
        SimpleNotificationsComponent.prototype.checkHtml = function (checker, item) {
            return checker.html ?
                checker.type === item.type && checker.title === item.title && checker.content === item.content && checker.html === item.html :
                false;
        };
        // Attach all the changes received in the options object
        SimpleNotificationsComponent.prototype.attachChanges = function (options) {
            for (var key in options) {
                if (this.hasOwnProperty(key)) {
                    this[key] = options[key];
                }
                else if (key === 'icons') {
                    this.service.icons = options[key];
                }
            }
        };
        SimpleNotificationsComponent.prototype.buildEmit = function (notification, to) {
            var toEmit = {
                createdOn: notification.createdOn,
                type: notification.type,
                icon: notification.icon,
                id: notification.id
            };
            if (notification.html) {
                toEmit.html = notification.html;
            }
            else {
                toEmit.title = notification.title;
                toEmit.content = notification.content;
            }
            if (!to) {
                toEmit.destroyedOn = new Date();
            }
            return toEmit;
        };
        SimpleNotificationsComponent.prototype.cleanSingle = function (id) {
            var indexOfDelete = 0;
            var doDelete = false;
            var noti;
            this.notifications.forEach(function (notification, idx) {
                if (notification.id === id) {
                    indexOfDelete = idx;
                    noti = notification;
                    doDelete = true;
                }
            });
            if (doDelete) {
                this.notifications.splice(indexOfDelete, 1);
                this.destroy.emit(this.buildEmit(noti, false));
            }
        };
        return SimpleNotificationsComponent;
    }());
    SimpleNotificationsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: SimpleNotificationsComponent, deps: [{ token: NotificationsService }, { token: i0__namespace.ChangeDetectorRef }], target: i0__namespace.ɵɵFactoryTarget.Component });
    SimpleNotificationsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.12", type: SimpleNotificationsComponent, selector: "simple-notifications", inputs: { options: "options" }, outputs: { create: "create", destroy: "destroy" }, ngImport: i0__namespace, template: "<div class=\"simple-notification-wrapper\" [ngClass]=\"position\">\n    <simple-notification\n            *ngFor=\"let a of notifications; let i = index\"\n            [item]=\"a\"\n            [timeOut]=\"timeOut\"\n            [clickToClose]=\"clickToClose\"\n            [clickIconToClose]=\"clickIconToClose\"\n            [maxLength]=\"maxLength\"\n            [showProgressBar]=\"showProgressBar\"\n            [pauseOnHover]=\"pauseOnHover\"\n            [theClass]=\"theClass\"\n            [rtl]=\"rtl\"\n            [animate]=\"animate\"\n            [position]=\"i\">\n    </simple-notification>\n</div>", styles: [".simple-notification-wrapper{position:fixed;width:300px;z-index:1000}.simple-notification-wrapper.left{left:20px}.simple-notification-wrapper.top{top:20px}.simple-notification-wrapper.right{right:20px}.simple-notification-wrapper.bottom{bottom:20px}.simple-notification-wrapper.center{left:50%;transform:translateX(-50%)}.simple-notification-wrapper.middle{top:50%;transform:translateY(-50%)}.simple-notification-wrapper.middle.center{transform:translate(-50%,-50%)}@media (max-width:340px){.simple-notification-wrapper{width:auto;left:20px;right:20px}}"], components: [{ type: NotificationComponent, selector: "simple-notification", inputs: ["timeOut", "showProgressBar", "pauseOnHover", "clickToClose", "clickIconToClose", "maxLength", "theClass", "rtl", "animate", "position", "item"] }], directives: [{ type: i3__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: SimpleNotificationsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'simple-notifications',
                        encapsulation: i0.ViewEncapsulation.None,
                        templateUrl: './simple-notifications.component.html',
                        styleUrls: ['./simple-notifications.component.css'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], ctorParameters: function () { return [{ type: NotificationsService }, { type: i0__namespace.ChangeDetectorRef }]; }, propDecorators: { options: [{
                    type: i0.Input
                }], create: [{
                    type: i0.Output
                }], destroy: [{
                    type: i0.Output
                }] } });

    var DEFAULT_OPTIONS = {
        position: ['bottom', 'right'],
        timeOut: 0,
        showProgressBar: true,
        pauseOnHover: true,
        lastOnBottom: true,
        clickToClose: true,
        clickIconToClose: false,
        maxLength: 0,
        maxStack: 8,
        preventDuplicates: false,
        preventLastDuplicates: false,
        theClass: '',
        rtl: false,
        animate: exports.NotificationAnimationType.FromRight,
        icons: DEFAULT_ICONS
    };

    var OPTIONS = new i0.InjectionToken('options');
    function optionsFactory(options) {
        return Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
    }
    var SimpleNotificationsModule = /** @class */ (function () {
        function SimpleNotificationsModule() {
        }
        SimpleNotificationsModule.forRoot = function (options) {
            if (options === void 0) { options = {}; }
            return {
                ngModule: SimpleNotificationsModule,
                providers: [
                    NotificationsService,
                    {
                        provide: OPTIONS,
                        useValue: options
                    },
                    {
                        provide: 'options',
                        useFactory: optionsFactory,
                        deps: [OPTIONS]
                    }
                ]
            };
        };
        return SimpleNotificationsModule;
    }());
    SimpleNotificationsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: SimpleNotificationsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SimpleNotificationsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: SimpleNotificationsModule, declarations: [SimpleNotificationsComponent,
            NotificationComponent], imports: [i3.CommonModule], exports: [SimpleNotificationsComponent] });
    SimpleNotificationsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: SimpleNotificationsModule, imports: [[
                i3.CommonModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: SimpleNotificationsModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3.CommonModule,
                        ],
                        declarations: [
                            SimpleNotificationsComponent,
                            NotificationComponent
                        ],
                        exports: [SimpleNotificationsComponent]
                    }]
            }] });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NotificationComponent = NotificationComponent;
    exports.NotificationsService = NotificationsService;
    exports.OPTIONS = OPTIONS;
    exports.SimpleNotificationsComponent = SimpleNotificationsComponent;
    exports.SimpleNotificationsModule = SimpleNotificationsModule;
    exports.optionsFactory = optionsFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular2-notifications.umd.js.map
