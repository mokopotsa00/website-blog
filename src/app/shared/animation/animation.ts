import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('in', style({
            'max-height': '500px', 'opacity': '1', 'visibility': 'visible','padding-bottom': '30px'
        })),
        state('out', style({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden', 'padding-bottom': '0'
        })),
        transition('in => out', [group([
            animate('400ms ease-in-out', style({
                'opacity': '0',
                'padding-bottom': '30px'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '0px',
                'padding-bottom': '16px'
            })),
            animate('700ms ease-in-out', style({
                'visibility': 'hidden',
                'padding-bottom': '0'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('1ms ease-in-out', style({
                'visibility': 'visible',
                'padding-bottom': '0'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '500px',
                'padding-bottom': '16px'
            })),
            animate('800ms ease-in-out', style({
                'opacity': '1',
                'padding-bottom': '30px'
            }))
        ]
        )])
    ]),
]