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

- <code>.<b>bg</b>c-w</code> <code>.<b>bg</b>c-w-hf</code> <code>.SM_<b>bg</b>c-w</code> <code>.SM_<b>bg</b>c-w-hf</code> → `background-color`

Configure background colors with `$background-colors` map.

#### Background Attachment

- <code>.<b>bg</b>a-f</code> → `background-attachment: fixed`
- <code>.<b>bg</b>a-s</code> → `background-attachment: scroll`

#### Background Clip

- <code>.<b>bg</b>cp-bb</code> → `background-clip: border-box`
- <code>.<b>bg</b>cp-pb</code> → `background-clip: padding-box`
- <code>.<b>bg</b>cp-cb</code> → `background-clip: content-box`
- <code>.<b>bg</b>cp-i</code> → `background-clip: inherit`

#### Background Image

- <code>.<b>bg</b>i-n</code> → `background-image: none`
- <code>.<b>bg</b>i-i</code> → `background-image: inherit`

#### Background Origin

- <code>.<b>bg</b>o-bb</code> → `background-origin: border-box`
- <code>.<b>bg</b>o-pb</code> → `background-origin: padding-box`
- <code>.<b>bg</b>o-cb</code> → `background-origin: content-box`

#### Background Position

- <code>.<b>bg</b>p-tc</code> → `background-position: top center`
- <code>.<b>bg</b>p-tl</code> → `background-position: top left`
- <code>.<b>bg</b>p-cr</code> → `background-position: center right`
- <code>.<b>bg</b>p-cc</code> → `background-position: center center`
- <code>.<b>bg</b>p-cl</code> → `background-position: center left`
- <code>.<b>bg</b>p-br</code> → `background-position: bottom right`
- <code>.<b>bg</b>p-bc</code> → `background-position: bottom center`
- <code>.<b>bg</b>p-bl</code> → `background-position: bottom left`

#### Background Position X

- <code>.<b>bg</b>px-r</code> → `background-position-x: right`
- <code>.<b>bg</b>px-c</code> → `background-position-x: center`
- <code>.<b>bg</b>px-l</code> → `background-position-x: left`

#### Background Position Y

- <code>.<b>bg</b>py-t</code> → `background-position-y: top`
- <code>.<b>bg</b>py-c</code> → `background-position-y: center`
- <code>.<b>bg</b>py-b</code> → `background-position-y: bottom`

#### Background Repeat

- <code>.<b>bg</b>r-n</code> → `background-repeat: no-repeat`
- <code>.<b>bg</b>r-x</code> → `background-repeat: repeat-x`
- <code>.<b>bg</b>r-y</code> → `background-repeat: repeat-y`
- <code>.<b>bg</b>r-s</code> → `background-repeat: space`
- <code>.<b>bg</b>r-r</code> → `background-repeat: round`

#### Background Size

- <code>.<b>bg</b>z-a</code> → `background-size: auto`
- <code>.<b>bg</b>z-ct</code> → `background-size: contain`
- <code>.<b>bg</b>z-cv</code> → `background-size: cover`


### Border

#### Border Color

- <code>.<b>bd</b>c-w</code> <code>.<b>bd</b>c-w-hf</code> <code>.SM_<b>bd</b>c-w</code> <code>.SM_<b>bd</b>c-w-hf</code> → `border-color`
- <code>.<b>bd</b>xc-w</code> <code>.<b>bd</b>xc-w-hf</code> <code>.SM_<b>bd</b>xc-w</code> <code>.SM_<b>bd</b>xc-w-hf</code> → `border-left-color` and `border-right-color`
- <code>.<b>bd</b>yc-w</code> <code>.<b>bd</b>yc-w-hf</code> <code>.SM_<b>bd</b>yc-w</code> <code>.SM_<b>bd</b>yc-w-hf</code> → `border-top-color` and `border-bottom-color`
- <code>.<b>bd</b>tc-w</code> <code>.<b>bd</b>tc-w-hf</code> <code>.SM_<b>bd</b>tc-w</code> <code>.SM_<b>bd</b>tc-w-hf</code> → `border-top-color`
- <code>.<b>bd</b>rc-w</code> <code>.<b>bd</b>rc-w-hf</code> <code>.SM_<b>bd</b>rc-w</code> <code>.SM_<b>bd</b>rc-w-hf</code> → `border-right-color`
- <code>.<b>bd</b>bc-w</code> <code>.<b>bd</b>bc-w-hf</code> <code>.SM_<b>bd</b>bc-w</code> <code>.SM_<b>bd</b>bc-w-hf</code> → `border-bottom-color`
- <code>.<b>bd</b>lc-w</code> <code>.<b>bd</b>lc-w-hf</code> <code>.SM_<b>bd</b>lc-w</code> <code>.SM_<b>bd</b>lc-w-hf</code> → `border-left-color`

#### Border Width

- <code>.<b>bd</b>w1</code> <code>.SM_<b>bd</b>w1</code> → `border-width`
- <code>.<b>bd</b>xw1</code> <code>.SM_<b>bd</b>xw1</code> → `border-left-width` and `border-right-width`
- <code>.<b>bd</b>yw1</code> <code>.SM_<b>bd</b>yw1</code> → `border-top-width` and `border-bottom-width`
- <code>.<b>bd</b>tw1</code> <code>.SM_<b>bd</b>tw1</code> → `border-top-width`
- <code>.<b>bd</b>rw1</code> <code>.SM_<b>bd</b>rw1</code> → `border-right-width`
- <code>.<b>bd</b>bw1</code> <code>.SM_<b>bd</b>bw1</code> → `border-bottom-width`
- <code>.<b>bd</b>lw1</code> <code>.SM_<b>bd</b>lw1</code> → `border-left-width`

#### Border Style

- <code>.<b>bd</b>s-s</code> <code>.SM_<b>bd</b>s-s</code> → `border-style`
- <code>.<b>bd</b>xs-s</code> <code>.SM_<b>bd</b>xs-s</code> → `border-left-style` and `border-right-style`
- <code>.<b>bd</b>ys-s</code> <code>.SM_<b>bd</b>ys-s</code> → `border-top-style` and `border-bottom-style`
- <code>.<b>bd</b>ts-s</code> <code>.SM_<b>bd</b>ts-s</code> → `border-top-style`
- <code>.<b>bd</b>rs-s</code> <code>.SM_<b>bd</b>rs-s</code> → `border-right-style`
- <code>.<b>bd</b>bs-s</code> <code>.SM_<b>bd</b>bs-s</code> → `border-bottom-style`
- <code>.<b>bd</b>ls-s</code> <code>.SM_<b>bd</b>ls-s</code> → `border-left-style`

By default, following border styles are emitted:

```scss
$border-styles: (
  n:      none,
  h:      hidden,
  dt:     dotted,
  ds:     dashed,
  s:      solid,
  db:     double,
  dtds:   dot-dash,
  dtdtds: dot-dot-dash,
  w:      wave,
  g:      groove,
  r:      ridge,
  in:     inset,
  o:      outset,
  i:      inherit,
) !default;
```

#### Border Collapse

- <code>.<b>bd</b>ce-c</code> → `border-collapse: collapse`
- <code>.<b>bd</b>ce-s</code> → `border-collapse: separate`
- <code>.<b>bd</b>ce-i</code> → `border-collapse: inherit`


### Box Sizing

- <code>.<b>bxz</b>-cb</code> → `box-sizing: content-box`
- <code>.<b>bxz</b>-bb</code> → `box-sizing: border-box`
- <code>.<b>bxz</b>-i</code> → `box-sizing: inherit`


### Clear

- <code>.<b>cl</b>-l</code> → `clear: left`
- <code>.<b>cl</b>-r</code> → `clear: right`
- <code>.<b>cl</b>-b</code> → `clear: both`
- <code>.<b>cl</b>-n</code> → `clear: none`


### Color

- <code>.<b>c</b>-w</code> <code>.<b>c</b>-w-hf</code> <code>.SM_<b>c</b>-w</code> → `color`


### Cursor

.cur#{$literal-sep} {
- <code>.<b>c</b>-a</code> → `cursor: auto`
- <code>.<b>c</b>-d</code> → `cursor: default`
- <code>.<b>c</b>-cm</code> → `cursor: context-menu`
- <code>.<b>c</b>-h</code> → `cursor: help`
- <code>.<b>c</b>-p</code> → `cursor: pointer`
- <code>.<b>c</b>-ps</code> → `cursor: progress`
- <code>.<b>c</b>-w</code> → `cursor: wait`
- <code>.<b>c</b>-cl</code> → `cursor: cell`
- <code>.<b>c</b>-c</code> → `cursor: crosshair`
- <code>.<b>c</b>-t</code> → `cursor: text`
- <code>.<b>c</b>-al</code> → `cursor: alias`
- <code>.<b>c</b>-cp</code> → `cursor: copy`
- <code>.<b>c</b>-m</code> → `cursor: move`
- <code>.<b>c</b>-nd</code> → `cursor: no-drop`
- <code>.<b>c</b>-na</code> → `cursor: not-allowed`
- <code>.<b>c</b>-as</code> → `cursor: all-scroll`
- <code>.<b>c</b>-cr</code> → `cursor: col-resize`
- <code>.<b>c</b>-rr</code> → `cursor: row-resize`
- <code>.<b>c</b>-nr</code> → `cursor: n-resize`
- <code>.<b>c</b>-er</code> → `cursor: e-resize`
- <code>.<b>c</b>-sr</code> → `cursor: s-resize`
- <code>.<b>c</b>-wr</code> → `cursor: w-resize`
- <code>.<b>c</b>-ner</code> → `cursor: ne-resize`
- <code>.<b>c</b>-nwr</code> → `cursor: nw-resize`
- <code>.<b>c</b>-ser</code> → `cursor: se-resize`
- <code>.<b>c</b>-swr</code> → `cursor: sw-resize`
- <code>.<b>c</b>-ewr</code> → `cursor: ew-resize`
- <code>.<b>c</b>-nsr</code> → `cursor: ns-resize`
- <code>.<b>c</b>-neswr</code> → `cursor: nesw-resize`
- <code>.<b>c</b>-nwser</code> → `cursor: nwse-resize`
- <code>.<b>c</b>-zi</code> → `cursor: zoom-in`
- <code>.<b>c</b>-zo</code> → `cursor: zoom-out`
- <code>.<b>c</b>-g</code> → `cursor: grab`
- <code>.<b>c</b>-gr</code> → `cursor: grabbing`
- <code>.<b>c</b>-n</code> → `cursor: none`


### Display

- <code>.<b>d</b>-n</code> <code>.SM_<b>d</b>-n</code> → `display: none`
- <code>.<b>d</b>-b</code> <code>.SM_<b>d</b>-b</code> → `display: block`
- <code>.<b>d</b>-fx</code> <code>.SM_<b>d</b>-fx</code> → `display: flex`
- <code>.<b>d</b>-li</code> <code>.SM_<b>d</b>-li</code> → `display: list-item`
- <code>.<b>d</b>-ri</code> <code>.SM_<b>d</b>-ri</code> → `display: run-in`

#### Inline

- <code>.<b>d</b>-i</code> <code>.SM_<b>d</b>-i</code> → `display: inline`
- <code>.<b>d</b>-itb</code> <code>.SM_<b>d</b>-itb</code> → `display: inline-table`
- <code>.<b>d</b>-ifx</code> <code>.SM_<b>d</b>-ifx</code> → `display: inline-flex`
- <code>.<b>d</b>-ib</code> <code>.SM_<b>d</b>-ib</code> → `display: inline-block`

#### Table

- <code>.<b>d</b>-tb</code> <code>.SM_<b>d</b>-tb</code> → `display: table`
- <code>.<b>d</b>-tcp</code> <code>.SM_<b>d</b>-tcp</code> → `display: table-caption`
- <code>.<b>d</b>-tc</code> <code>.SM_<b>d</b>-tc</code> → `display: table-column`
- <code>.<b>d</b>-tcg</code> <code>.SM_<b>d</b>-tcg</code> → `display: table-column-group`
- <code>.<b>d</b>-thg</code> <code>.SM_<b>d</b>-thg</code> → `display: table-header-group`
- <code>.<b>d</b>-tfg</code> <code>.SM_<b>d</b>-tfg</code> → `display: table-footer-group`
- <code>.<b>d</b>-tr</code> <code>.SM_<b>d</b>-tr</code> → `display: table-row`
- <code>.<b>d</b>-trg</code> <code>.SM_<b>d</b>-trg</code> → `display: table-row-group`
- <code>.<b>d</b>-tcl</code> <code>.SM_<b>d</b>-tcl</code> → `display: table-cell`

#### Ruby

- <code>.<b>d</b>-rb</code> <code>.SM_<b>d</b>-rb</code> → `display: ruby`
- <code>.<b>d</b>-rbb</code> <code>.SM_<b>d</b>-rbb</code> → `display: ruby-base`
- <code>.<b>d</b>-rbbc</code> <code>.SM_<b>d</b>-rbbc</code> → `display: ruby-base-container`
- <code>.<b>d</b>-rbt</code> <code>.SM_<b>d</b>-rbt</code> → `display: ruby-text`
- <code>.<b>d</b>-rbtc</code> <code>.SM_<b>d</b>-rbtc</code> → `display: ruby-text-container`


### Fill

- <code>.<b>fi</b>-w</code> → `fill`


### Flex

- <code>.<b>fx</b>-r</code>  <code>.SM_<b>fx</b>-r</code>  → `display: flex; flex-direction: row`
- <code>.<b>fx</b>-rr</code> <code>.SM_<b>fx</b>-rr</code> → `display: flex; flex-direction: row-reverse`
- <code>.<b>fx</b>-c</code>  <code>.SM_<b>fx</b>-c</code>  → `display: flex; flex-direction: column`
- <code>.<b>fx</b>-cr</code> <code>.SM_<b>fx</b>-cr</code> → `display: flex; flex-direction: column-reverse`

#### Flex Direction

- <code>.<b>fx</b>d-r</code>  <code>.SM_<b>fx</b>d-r</code>  → `flex-direction: row`
- <code>.<b>fx</b>d-rr</code> <code>.SM_<b>fx</b>d-rr</code> → `flex-direction: row-reverse`
- <code>.<b>fx</b>d-c</code>  <code>.SM_<b>fx</b>d-c</code>  → `flex-direction: column`
- <code>.<b>fx</b>d-cr</code> <code>.SM_<b>fx</b>d-cr</code> → `flex-direction: column-reverse`

#### Flex Wrap

- <code>.<b>fx</b>w-n</code>  <code>.SM_<b>fx</b>w-w-n</code>  → `flex-wrap: nowrap`
- <code>.<b>fx</b>w-w</code>  <code>.SM_<b>fx</b>w-w-w</code>  → `flex-wrap: wrap`
- <code>.<b>fx</b>w-wr</code> <code>.SM_<b>fx</b>w-w-wr</code> → `flex-wrap: wrap-reverse`

#### Flex Grow

- <code>.<b>fx</b>g0</code>&hellip;<code>.<b>fx</b>g10</code> <code>.SM_<b>fx</b>g0</code>&hellip;<code>.SM_<b>fx</b>g10</code>  → `flex-grow: 0`&hellip;`flex-grow: 10`

#### Flex Shrink

- <code>.<b>fx</b>s0</code>&hellip;<code>.<b>fx</b>s10</code> <code>.SM_<b>fx</b>s0</code>&hellip;<code>.SM_<b>fx</b>s10</code>  → `flex-shrink: 0`&hellip;`flex-shrink: 10`

#### Flex Basis

- <code>.<b>fx</b>b-a</code>   <code>.SM_<b>fx</b>b-a</code>   → `flex-basis: auto`
- <code>.<b>fx</b>b-mac</code> <code>.SM_<b>fx</b>b-mac</code> → `flex-basis: max-content`
- <code>.<b>fx</b>b-mic</code> <code>.SM_<b>fx</b>b-mic</code> → `flex-basis: min-content`
- <code>.<b>fx</b>b-fc</code>  <code>.SM_<b>fx</b>b-fc</code>  → `flex-basis: fit-content`
- <code>.<b>fx</b>b-c</code>   <code>.SM_<b>fx</b>b-c</code>   → `flex-basis: content`

#### Justify Content

- <code>.<b>jc</b>-fs</code> → `justify-content: flex-start`
- <code>.<b>jc</b>-fe</code> → `justify-content: flex-end`
- <code>.<b>jc</b>-c</code>  → `justify-content: center`
- <code>.<b>jc</b>-sb</code> → `justify-content: space-between`
- <code>.<b>jc</b>-sa</code> → `justify-content: space-around`

#### Align Items

- <code>.<b>ai</b>-fs</code> → `align-items: flex-start`
- <code>.<b>ai</b>-fe</code> → `align-items: flex-end`
- <code>.<b>ai</b>-c</code>  → `align-items: center`
- <code>.<b>ai</b>-bs</code> → `align-items: baseline`
- <code>.<b>ai</b>-s</code>  → `align-items: stretch`

#### Align Content

- <code>.<b>ac</b>-fs</code> → `align-content: flex-start`
- <code>.<b>ac</b>-fe</code> → `align-content: flex-end`
- <code>.<b>ac</b>-c</code>  → `align-content: center`
- <code>.<b>ac</b>-sb</code> → `align-content: space-between`
- <code>.<b>ac</b>-sa</code> → `align-content: space-around`
- <code>.<b>ac</b>-s</code>  → `align-content: stretch`

#### Align Self

- <code>.<b>as</b>-a</code>  → `align-self: auto`
- <code>.<b>as</b>-fs</code> → `align-self: flex-start`
- <code>.<b>as</b>-fe</code> → `align-self: flex-end`
- <code>.<b>as</b>-c</code>  → `align-self: center`
- <code>.<b>as</b>-b</code>  → `align-self: baseline`
- <code>.<b>as</b>-s</code>  → `align-self: stretch`

#### Order

- <code>.<b>ord</b>0</code>&hellip;<code>.<b>ord</b>10</code> → `order: 0`&hellip;`order: 10`


### Float

- <code>.<b>fl</b>-l</code> <code>.SM_<b>fl</b>-l</code> → `float: left`
- <code>.<b>fl</b>-r</code> <code>.SM_<b>fl</b>-r</code> → `float: right`
- <code>.<b>fl</b>-n</code> <code>.SM_<b>fl</b>-n</code> → `float: none`


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
