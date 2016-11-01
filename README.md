# Quantum CSS

Property abbreviations were inspired by [Emmet](http://docs.emmet.io/cheat-sheet/)

Run `npm run package` to create `css/index.css`.

Run `npm run watch` to watch SCSS files and create `css/index.css` on change detection.

## Contents

1. [Atoms](#atoms)
	1. [Background](#background)
	1. [Border](#border)
	1. [Box Sizing](#box-sizing)
	1. [Clear](#clear)
	1. [Color](#color)
	1. [Cursor](#cursor)
	1. [Display](#display)
	1. [Fill](#fill)
	1. [Flex](#flex)
	1. [Float](#float)
	1. [Font](#font)
	1. [Height](#height)
	1. [Letter Spacing](#letter-spacing)
	1. [Line Height](#line-height)
	1. [List](#list)
	1. [Margin](#margin)
	1. [Object Fit](#object-fit)
	1. [Opacity](#opacity)
	1. [Overflow](#overflow)
	1. [Padding](#padding)
	1. [Page Break](#page-break)
	1. [Position](#position)
	1. [Resize](#resize)
	1. [Table](#table)
	1. [Text](#text)
	1. [Transform](#transform)
	1. [Transition](#transition)
	1. [User Select](#user-select)
	1. [Vertical Align](#vertical-align)
	1. [Visibility](#visibility)
	1. [White Space](#white-space)
	1. [Width](#width)
	1. [Word](#word)
	1. [Z-index](#z-index)


## Atoms

### Background


### Border
### Box Sizing
### Clear
### Color
### Cursor
### Display
### Fill
### Flex
### Float
### Font
### Height
### Letter Spacing
### Line Height
### List
### Margin
### Object Fit
### Opacity
### Overflow
### Padding
### Page Break
### Position
### Resize
### Table
### Text
### Transform
### Transition
### User Select
### Vertical Align
### Visibility
### White Space
### Width
### Word
### Z-index









## Utilities

### Grid

Template `.g>.gr>.gc`

###### Example

```html
<div class="g">
  <div class="gr">
    <div class="gc12 MD_gc6">
      Occupies 12 cols on small screen, 6 cols starting from MD breakpoint
    </div>
  </div>
  <div class="gr">
    <div class="gc6">
      <!-- Nested grid rows -->
      <div class="gr">
        <div class="gc6"></div>
        <div class="gc6"></div>
      </div>
    </div>
  </div>
</div>
```

###### Classes

- `.g` Grid wrapper.
- `.gr` Grid row.
- `.gc1`, `.gc2`, `.SM_gc1`, etc. Grid columns.
- `.go1`, `.go2`, `.SM_go1`, etc. Grid column offset.
- `.gsl1`, `.gsl2`, `.SM_gsl1`, etc. Grid shift column left.
- `.gsr1`, `.gsr2`, `.SM_gsr1`, etc. Grid shift column right.
- `.p-g` Padding equal to grid gutter at current breakpoint. 
- `.pt-g`, `.pr-g`, `.pb-g`, `.pl-g` Same as `.p-g` but for top, right, bottom and left side only.


### Buttons

Template `button.btn.btnz-m.btnr-m.btnc-bb`

###### Example

```html
<button class="btn btnz-m btnr-m btnc-or"
        type="button">
  Outlined Red
</button>
```

###### Classes
- `.btn` Button common styles.
- `.btnz-s`, `.btnz-m` Button sizes: small, medium.
- `.btnr-s`, `.btnr-m` Button radiuses: small, medium.
- `.btnc-or` Button color: Outlined red.
- `.btnc-g` Button color: Green.
