import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DEFAULT_ICONS } from '../consts/default-icons.const';
import { NotificationType } from '../enums/notification-type.enum';
import * as i0 from "@angular/core";
export class NotificationsService {
    constructor(globalOptions) {
        this.globalOptions = globalOptions;
        this.emitter = new Subject();
        this.icons = DEFAULT_ICONS;
    }
    set(notification, to) {
        notification.id = notification.override && notification.override.id ?
            notification.override.id :
            Math.random().toString(36).substring(3);
        notification.click = new EventEmitter();
        notification.clickIcon = new EventEmitter();
        notification.timeoutEnd = new EventEmitter();
        this.emitter.next({ command: 'set', notification, add: to });
        return notification;
    }
    success(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Success, icon: this.icons.success, override, context }, true);
    }
    error(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Error, icon: this.icons.error, override, context }, true);
    }
    alert(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Alert, icon: this.icons.alert, override, context }, true);
    }
    info(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Info, icon: this.icons.info, override, context }, true);
    }
    warn(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Warn, icon: this.icons.warn, override, context }, true);
    }
    bare(title = '', content = '', override, context) {
        return this.set({ title, content: content || '', type: NotificationType.Bare, icon: 'bare', override, context }, true);
    }
    // With type method
    create(title = '', content = '', type = NotificationType.Success, override, context) {
        return this.set({ title, content, type, icon: this.icons[type], override, context }, true);
    }
    // HTML Notification method
    html(html, type = NotificationType.Success, override, icon = 'bare', context) {
        return this.set({ html, type, icon: this.icons[icon], override, context }, true);
    }
    // Remove all notifications method
    remove(id) {
        if (id) {
            this.emitter.next({ command: 'clean', id });
        }
        else {
            this.emitter.next({ command: 'cleanAll' });
        }
    }
}
NotificationsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0, type: NotificationsService, deps: [{ token: 'options' }], target: i0.ɵɵFactoryTarget.Injectable });
NotificationsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0, type: NotificationsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0, type: NotificationsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['options']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9ub3RpZmljYXRpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQU1uRSxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLFlBQzRCLGFBQWtCO1FBQWxCLGtCQUFhLEdBQWIsYUFBYSxDQUFLO1FBRzlDLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBcUIsQ0FBQztRQUMzQyxVQUFLLEdBQVUsYUFBYSxDQUFDO0lBSHpCLENBQUM7SUFLTCxHQUFHLENBQUMsWUFBMEIsRUFBRSxFQUFXO1FBQ3pDLFlBQVksQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLFFBQVEsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQVksRUFBTSxDQUFDO1FBQzVDLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU0sQ0FBQztRQUNoRCxZQUFZLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFNLENBQUM7UUFFakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFB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QUFJLEVBQUcsSUFBSSxDQUFDLEtBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVELDJCQUEyQjtJQUMzQixJQUFJLENBQUMsSUFBUyxFQUFFLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsUUFBYyxFQUFFLElBQUksR0FBRyxNQUFNLEVBQUUsT0FBYTtRQUMzRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRyxJQUFJLENBQUMsS0FBYSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQsa0NBQWtDO0lBQ2xDLE1BQU0sQ0FBQyxFQUFXO1FBQ2hCLElBQUksRUFBRSxFQUFFO1lBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDOztrSEE3RFUsb0JBQW9CLGtCQUVyQixTQUFTO3NIQUZSLG9CQUFvQjs0RkFBcEIsb0JBQW9CO2tCQURoQyxVQUFVOzswQkFHTixNQUFNOzJCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OUyB9IGZyb20gJy4uL2NvbnN0cy9kZWZhdWx0LWljb25zLmNvbnN0JztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblR5cGUgfSBmcm9tICcuLi9lbnVtcy9ub3RpZmljYXRpb24tdHlwZS5lbnVtJztcbmltcG9ydCB7IEljb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pY29ucyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25FdmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvbm90aWZpY2F0aW9uLWV2ZW50LnR5cGUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ub3RpZmljYXRpb24udHlwZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ29wdGlvbnMnKSBwdWJsaWMgZ2xvYmFsT3B0aW9uczogYW55XG4gICkgeyB9XG5cbiAgZW1pdHRlciA9IG5ldyBTdWJqZWN0PE5vdGlmaWNhdGlvbkV2ZW50PigpO1xuICBpY29uczogSWNvbnMgPSBERUZBVUxUX0lDT05TO1xuXG4gIHNldChub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbiwgdG86IGJvb2xlYW4pOiBOb3RpZmljYXRpb24ge1xuICAgIG5vdGlmaWNhdGlvbi5pZCA9IG5vdGlmaWNhdGlvbi5vdmVycmlkZSAmJiBub3RpZmljYXRpb24ub3ZlcnJpZGUuaWQgP1xuICAgICAgbm90aWZpY2F0aW9uLm92ZXJyaWRlLmlkIDpcbiAgICAgIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygzKTtcbiAgICBub3RpZmljYXRpb24uY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuICAgIG5vdGlmaWNhdGlvbi5jbGlja0ljb24gPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuICAgIG5vdGlmaWNhdGlvbi50aW1lb3V0RW5kID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcblxuICAgIHRoaXMuZW1pdHRlci5uZXh0KHsgY29tbWFuZDogJ3NldCcsIG5vdGlmaWNhdGlvbiwgYWRkOiB0byB9KTtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uO1xuICB9XG5cbiAgc3VjY2Vzcyh0aXRsZTogYW55ID0gJycsIGNvbnRlbnQ6IGFueSA9ICcnLCBvdmVycmlkZT86IGFueSwgY29udGV4dD86IGFueSk6IE5vdGlmaWNhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0KHsgdGl0bGUsIGNvbnRlbnQ6IGNvbnRlbnQgfHwgJycsIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuU3VjY2VzcywgaWNvbjogdGhpcy5pY29ucy5zdWNjZXNzLCBvdmVycmlkZSwgY29udGV4dCB9LCB0cnVlKTtcbiAgfVxuXG4gIGVycm9yKHRpdGxlOiBhbnkgPSAnJywgY29udGVudDogYW55ID0gJycsIG92ZXJyaWRlPzogYW55LCBjb250ZXh0PzogYW55KTogTm90aWZpY2F0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5zZXQoeyB0aXRsZSwgY29udGVudDogY29udGVudCB8fCAnJywgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5FcnJvciwgaWNvbjogdGhpcy5pY29ucy5lcnJvciwgb3ZlcnJpZGUsIGNvbnRleHQgfSwgdHJ1ZSk7XG4gIH1cblxuICBhbGVydCh0aXRsZTogYW55ID0gJycsIGNvbnRlbnQ6IGFueSA9ICcnLCBvdmVycmlkZT86IGFueSwgY29udGV4dD86IGFueSk6IE5vdGlmaWNhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0KHsgdGl0bGUsIGNvbnRlbnQ6IGNvbnRlbnQgfHwgJycsIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuQWxlcnQsIGljb246IHRoaXMuaWNvbnMuYWxlcnQsIG92ZXJyaWRlLCBjb250ZXh0IH0sIHRydWUpO1xuICB9XG5cbiAgaW5mbyh0aXRsZTogYW55ID0gJycsIGNvbnRlbnQ6IGFueSA9ICcnLCBvdmVycmlkZT86IGFueSwgY29udGV4dD86IGFueSk6IE5vdGlmaWNhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0KHsgdGl0bGUsIGNvbnRlbnQ6IGNvbnRlbnQgfHwgJycsIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuSW5mbywgaWNvbjogdGhpcy5pY29ucy5pbmZvLCBvdmVycmlkZSwgY29udGV4dCB9LCB0cnVlKTtcbiAgfVxuXG4gIHdhcm4odGl0bGU6IGFueSA9ICcnLCBjb250ZW50OiBhbnkgPSAnJywgb3ZlcnJpZGU/OiBhbnksIGNvbnRleHQ/OiBhbnkpOiBOb3RpZmljYXRpb24ge1xuICAgIHJldHVybiB0aGlzLnNldCh7IHRpdGxlLCBjb250ZW50OiBjb250ZW50IHx8ICcnLCB0eXBlOiBOb3RpZmljYXRpb25UeXBlLldhcm4sIGljb246IHRoaXMuaWNvbnMud2Fybiwgb3ZlcnJpZGUsIGNvbnRleHQgfSwgdHJ1ZSk7XG4gIH1cblxuICBiYXJlKHRpdGxlOiBhbnkgPSAnJywgY29udGVudDogYW55ID0gJycsIG92ZXJyaWRlPzogYW55LCBjb250ZXh0PzogYW55KTogTm90aWZpY2F0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5zZXQoeyB0aXRsZSwgY29udGVudDogY29udGVudCB8fCAnJywgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5CYXJlLCBpY29uOiAnYmFyZScsIG92ZXJyaWRlLCBjb250ZXh0IH0sIHRydWUpO1xuICB9XG5cbiAgLy8gV2l0aCB0eXBlIG1ldGhvZFxuICBjcmVhdGUodGl0bGU6IGFueSA9ICcnLCBjb250ZW50OiBhbnkgPSAnJywgdHlwZSA9IE5vdGlmaWNhdGlvblR5cGUuU3VjY2Vzcywgb3ZlcnJpZGU/OiBhbnksIGNvbnRleHQ/OiBhbnkpOiBOb3RpZmljYXRpb24ge1xuICAgIHJldHVybiB0aGlzLnNldCh7IHRpdGxlLCBjb250ZW50LCB0eXBlLCBpY29uOiAodGhpcy5pY29ucyBhcyBhbnkpW3R5cGVdLCBvdmVycmlkZSwgY29udGV4dCB9LCB0cnVlKTtcbiAgfVxuXG4gIC8vIEhUTUwgTm90aWZpY2F0aW9uIG1ldGhvZFxuICBodG1sKGh0bWw6IGFueSwgdHlwZSA9IE5vdGlmaWNhdGlvblR5cGUuU3VjY2Vzcywgb3ZlcnJpZGU/OiBhbnksIGljb24gPSAnYmFyZScsIGNvbnRleHQ/OiBhbnkpOiBOb3RpZmljYXRpb24ge1xuICAgIHJldHVybiB0aGlzLnNldCh7IGh0bWwsIHR5cGUsIGljb246ICh0aGlzLmljb25zIGFzIGFueSlbaWNvbl0sIG92ZXJyaWRlLCBjb250ZXh0IH0sIHRydWUpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGFsbCBub3RpZmljYXRpb25zIG1ldGhvZFxuICByZW1vdmUoaWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRoaXMuZW1pdHRlci5uZXh0KHsgY29tbWFuZDogJ2NsZWFuJywgaWQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW1pdHRlci5uZXh0KHsgY29tbWFuZDogJ2NsZWFuQWxsJyB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==