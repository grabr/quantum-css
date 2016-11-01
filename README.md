# Quantum CSS

Run `npm run package` to create `css/index.css`.

Run `npm run watch` to watch SCSS files and create `css/index.css` on change detection.

## Contents

1. [Atoms](#atoms)
  - [Background](#background)
  - [Border](#border)
  - [Box Sizing](#box-sizing)
  - [Clear](#clear)
  - [Color](#color)
  - [Cursor](#cursor)
  - [Display](#display)
  - [Fill](#fill)
  - [Flex](#flex)
  - [Float](#float)
  - [Font](#font)
  - [Height](#height)
  - [Letter Spacing](#letter-spacing)
  - [Line Height](#line-height)
  - [List](#list)
  - [Margin](#margin)
  - [Object Fit](#object-fit)
  - [Opacity](#opacity)
  - [Overflow](#overflow)
  - [Padding](#padding)
  - [Page Break](#page-break)
  - [Position](#position)
  - [Resize](#resize)
  - [Table](#table)
  - [Text](#text)
  - [Transform](#transform)
  - [Transition](#transition)
  - [User Select](#user-select)
  - [Vertical Align](#vertical-align)
  - [Visibility](#visibility)
  - [White Space](#white-space)
  - [Width](#width)
  - [Word](#word)
  - [Z-index](#z-index)


## Class Naming

Every class name consist of following parts in given order:

- Optional breakpoint name
- Property abbreviation
- Value abbreviation
- Optional pseudo-class and/or pseudo-element modifier 

You can configure separators between each parts of class name with following variables:

- `$breakpoint-sep` is the separator between breakpoint name and property abbreviation. By default, `_` is used.
- `$literal-sep` and `$ordinal-sep` define separators that are inserted between property name and literal value abbreviation or ordinal one respectively. By default, `$literal-sep` is set to minus `-` and `$ordinal-sep` is a blank string.
- `$pseudo-sep` separates pseudo modifier from value abbreviation.

Property and value abbreviations were heavily inspired by [Emmet](http://docs.emmet.io/cheat-sheet/).


## Breakpoints

Breakpoints configuring breaks down to declaring required set of names and corresponding `min-width`s in `$breakpoints`. By default:

```scss
$breakpoints: (
  null: 0,
  SM:   576px,
  MD:   768px,
  LG:   992px,
  XL:   1200px,
) !default;
```

Notice the `null` breakpoint name. This name would not be concatenated to class name, so classes are outputted like `.bgc-w`, `.SM_bgc-w`, `.MD_bgc-w` etc.


### Pseudo-classes and Pseudo-elements

You can configure set of pseudo-classes and pseudo-elements for which atoms are generated via `$pseudos`. By default:

```scss
$pseudos: (
  hf: (hover, focus),
  h: hover,
  f: focus,
) !default;
```

Comma-separated list defines selector disjunction. Ex. `(hf: (hover, focus))` following classes would be generated:

```scss
.bgc-w-hf:hover,
.bgc-w-hf:focus {
  background-color: white;
}
```

Space-separated list defines selector conjunction. Ex. `(eh: empty hover)` following class would be generated:

```scss
.bgc-w-eh:empty:hover {
  background-color: white;
}
```

You can combine those two like `(ch: first-child hover, last-child hover)`:

```scss
.bgc-w-ch:first-child:hover,
.bgc-w-ch:last-child:hover {
  background-color: white;
}
```


## Atoms

Some atoms can be configured via `_variablel.scss`.


### Background 

#### Background Color

- <code>.<b>bg</b>c-w</code> <code>.<b>bg</b>c-w-hf</code> <code>.SM_<b>bg</b>c-w-hf</code> → `background-color`

Configure background colors with `$background-colors` map.

#### Background Attachment

- <code>.<b>bg</b>a-f</code> → `background-attachment: fixed`
- <code>.<b>bg</b>a-s</code> → `background-attachment: scroll`

#### Background Clip

- <code>.<b>bg</b>cp-bb</code> → `background-clip: border-box`
- <code>.<b>bg</b>cp-pb</code> → `background-clip: padding-box`
- <code>.<b>bg</b>cp-cb</code> → `background-clip: content-box`
- <code>.<b>bg</b>cp-i</code> → `background-clip: inherit`


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
