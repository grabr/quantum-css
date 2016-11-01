# Quantum CSS

Functional CSS library in SCSS.

## Contents
- Atoms
  - background-color
  - background-attachment
  - background-clip
  - background-image
  - background-origin
- Molecules


### Setup

#### Breakpoints
#### Pseudos
#### Palette



### Atoms

#### [`background-color`](https://developer.mozilla.org/en/docs/Web/CSS/background-color)
<code>[<a href="#breakpoints">breakpoint</a>\_]<b>bg</b>c{id}[-<a href="#pseudos">pseudo</a>]</code> ⇢ `background-color: {value}`

Specify mapping in <code><a href="#palette">$background-colors</a>: (id: value)</code>.

#### [`background-attachment`](https://developer.mozilla.org/en/docs/Web/CSS/background-attachment)
1. <code><b>bg</b>a-f</code> ⇢ `fixed`
1. <code><b>bg</b>a-s</code> ⇢ `scroll`

#### [`background-clip`](https://developer.mozilla.org/en/docs/Web/CSS/background-clip)
1. <code><b>bg</b>cp-bb</code> ⇢ `border-box`
1. <code><b>bg</b>cp-pb</code> ⇢ `padding-box`
1. <code><b>bg</b>cp-cb</code> ⇢ `content-box`
1. <code><b>bg</b>cp-i</code>  ⇢ `inherit`

#### [`background-image`](https://developer.mozilla.org/en/docs/Web/CSS/background-image)
1. <code><b>bg</b>i-n</code> ⇢ `none`
1. <code><b>bg</b>i-i</code> ⇢ `inherit`

#### [`background-origin`](https://developer.mozilla.org/en/docs/Web/CSS/background-origin)
1. <code><b>bg</b>o-bb</code> ⇢ `border-box`
1. <code><b>bg</b>o-pb</code> ⇢ `padding-box`
1. <code><b>bg</b>o-cb</code> ⇢ `content-box`

#### [`background-position`](https://developer.mozilla.org/en/docs/Web/CSS/background-position)
1. <code><b>bg</b>p-tc</code> ⇢ `top center`
1. <code><b>bg</b>p-tl</code> ⇢ `top left`
1. <code><b>bg</b>p-cr</code> ⇢ `center right`
1. <code><b>bg</b>p-cc</code> ⇢ `center center`
1. <code><b>bg</b>p-cl</code> ⇢ `center left`
1. <code><b>bg</b>p-br</code> ⇢ `bottom right`
1. <code><b>bg</b>p-bc</code> ⇢ `bottom center`
1. <code><b>bg</b>p-bl</code> ⇢ `bottom left`

#### [`background-position-x`](https://developer.mozilla.org/en/docs/Web/CSS/background-position-x)
1. <code><b>bg</b>px-r</code> ⇢ `right`
1. <code><b>bg</b>px-c</code> ⇢ `center`
1. <code><b>bg</b>px-l</code> ⇢ `left`

#### [`background-position-y`](https://developer.mozilla.org/en/docs/Web/CSS/background-position-y)
1. <code><b>bg</b>py-t</code> ⇢ `top`
1. <code><b>bg</b>py-c</code> ⇢ `center`
1. <code><b>bg</b>py-b</code> ⇢ `bottom`

#### [`background-repeat`](https://developer.mozilla.org/en/docs/Web/CSS/background-repeat)
1. <code><b>bg</b>r-n</code> ⇢ `no-repeat`
1. <code><b>bg</b>r-x</code> ⇢ `repeat-x`
1. <code><b>bg</b>r-y</code> ⇢ `repeat-y`
1. <code><b>bg</b>r-s</code> ⇢ `space`
1. <code><b>bg</b>r-r</code> ⇢ `round`

#### [`background-size`](https://developer.mozilla.org/en/docs/Web/CSS/background-size)
1. <code><b>bg</b>z-a</code>  ⇢ `auto`
1. <code><b>bg</b>z-ct</code> ⇢ `contain`
1. <code><b>bg</b>z-cv</code> ⇢ `cover`

#### [`border-color`](https://developer.mozilla.org/en/docs/Web/CSS/border-color)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>c{id}[-<a href="#pseudos">pseudo</a>]</code>  ⇢ `border-color: {value}`<p/>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>xc{id}[-<a href="#pseudos">pseudo</a>]</code> ⇢ `border-left-color: {value}` `border-top-color: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>yc{id}[-<a href="#pseudos">pseudo</a>]</code> ⇢ `border-top-color: {value}` `border-bottom-color: {value}`<p/>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>tc{id}[-<a href="#pseudos">pseudo</a>]</code> ⇢ `border-top-color: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>bc{id}[-<a href="#pseudos">pseudo</a>]</code> ⇢ `border-bottom-color: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>rc{id}[-<a href="#pseudos">pseudo</a>]</code> ⇢ `border-right-color: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>lc{id}[-<a href="#pseudos">pseudo</a>]</code> ⇢ `border-left-color: {value}`

Specify mapping in <code><a href="#palette">$border-colors</a>: (id: value)</code>.

#### [`border-width`](https://developer.mozilla.org/en/docs/Web/CSS/border-width)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>w{id}</code>  ⇢ `border-width: {value}`<p/>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>xw{id}</code> ⇢ `border-left-width: {value}` `border-top-width: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>yw{id}</code> ⇢ `border-top-width: {value}` `border-bottom-width: {value}`<p/>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>tw{id}</code> ⇢ `border-top-width: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>bw{id}</code> ⇢ `border-bottom-width: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>rw{id}</code> ⇢ `border-right-width: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>lw{id}</code> ⇢ `border-left-width: {value}`

Specify mapping in <code><a href="#palette">$border-widths</a>: (id: value)</code>.

#### [`border-style`](https://developer.mozilla.org/en/docs/Web/CSS/border-style)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>s{id}</code>  ⇢ `border-style: {value}`<p/>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>xs{id}</code> ⇢ `border-left-style: {value}` `border-top-style: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>ys{id}</code> ⇢ `border-top-style: {value}` `border-bottom-style: {value}`<p/>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>ts{id}</code> ⇢ `border-top-style: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>bs{id}</code> ⇢ `border-bottom-style: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>rs{id}</code> ⇢ `border-right-style: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>ls{id}</code> ⇢ `border-left-style: {value}`

Specify mapping in <code><a href="#palette">$border-styles</a>: (id: value)</code>.

#### [`border-collapse`](https://developer.mozilla.org/en/docs/Web/CSS/border-collapse)
1. <code><b>bd</b>ce-c</code> ⇢ `collapse`
1. <code><b>bd</b>ce-s</code> ⇢ `separate`
1. <code><b>bd</b>ce-i</code> ⇢ `inherit`

#### [`box-sizing`](https://developer.mozilla.org/en/docs/Web/CSS/box-sizing)
1. <code><b>bxz</b>-cb</code> ⇢ `content-box`
1. <code><b>bxz</b>-bb</code> ⇢ `border-box`
1. <code><b>bxz</b>-i</code>  ⇢ `inherit`

#### [`clear`](https://developer.mozilla.org/en/docs/Web/CSS/clear)
1. <code><b>cl</b>-l</code> ⇢ `left`
1. <code><b>cl</b>-r</code> ⇢ `right`
1. <code><b>cl</b>-b</code> ⇢ `both`
1. <code><b>cl</b>-n</code> ⇢ `none`

#### [`color`](https://developer.mozilla.org/en/docs/Web/CSS/color)
<code>[<a href="#breakpoints">breakpoint</a>\_]<b>c</b>{id}[-<a href="#pseudos">pseudo</a>]</code> ⇢ `color: {value}`

Specify mapping in <code><a href="#palette">$colors</a>: (id: value)</code>.

#### [`cursor`](https://developer.mozilla.org/en/docs/Web/CSS/cursor)
1. <code><b>cur</b>-a</code>     ⇢ `auto`
1. <code><b>cur</b>-d</code>     ⇢ `default`
1. <code><b>cur</b>-cm</code>    ⇢ `context-menu`
1. <code><b>cur</b>-h</code>     ⇢ `help`
1. <code><b>cur</b>-p</code>     ⇢ `pointer`
1. <code><b>cur</b>-ps</code>    ⇢ `progress`
1. <code><b>cur</b>-w</code>     ⇢ `wait`
1. <code><b>cur</b>-cl</code>    ⇢ `cell`
1. <code><b>cur</b>-c</code>     ⇢ `crosshair`
1. <code><b>cur</b>-t</code>     ⇢ `text`
1. <code><b>cur</b>-al</code>    ⇢ `alias`
1. <code><b>cur</b>-cp</code>    ⇢ `copy`
1. <code><b>cur</b>-m</code>     ⇢ `move`
1. <code><b>cur</b>-nd</code>    ⇢ `no-drop`
1. <code><b>cur</b>-na</code>    ⇢ `not-allowed`
1. <code><b>cur</b>-as</code>    ⇢ `all-scroll`
1. <code><b>cur</b>-cr</code>    ⇢ `col-resize`
1. <code><b>cur</b>-rr</code>    ⇢ `row-resize`
1. <code><b>cur</b>-nr</code>    ⇢ `n-resize`
1. <code><b>cur</b>-er</code>    ⇢ `e-resize`
1. <code><b>cur</b>-sr</code>    ⇢ `s-resize`
1. <code><b>cur</b>-wr</code>    ⇢ `w-resize`
1. <code><b>cur</b>-ner</code>   ⇢ `ne-resize`
1. <code><b>cur</b>-nwr</code>   ⇢ `nw-resize`
1. <code><b>cur</b>-ser</code>   ⇢ `se-resize`
1. <code><b>cur</b>-swr</code>   ⇢ `sw-resize`
1. <code><b>cur</b>-ewr</code>   ⇢ `ew-resize`
1. <code><b>cur</b>-nsr</code>   ⇢ `ns-resize`
1. <code><b>cur</b>-neswr</code> ⇢ `nesw-resize`
1. <code><b>cur</b>-nwser</code> ⇢ `nwse-resize`
1. <code><b>cur</b>-zi</code>    ⇢ `zoom-in`
1. <code><b>cur</b>-zo</code>    ⇢ `zoom-out`
1. <code><b>cur</b>-g</code>     ⇢ `grab`
1. <code><b>cur</b>-gr</code>    ⇢ `grabbing`
1. <code><b>cur</b>-n</code>     ⇢ `none`

#### [`display`](https://developer.mozilla.org/en/docs/Web/CSS/display)
1. <code><b>d</b>-n</code>    ⇢ `none`
1. <code><b>d</b>-b</code>    ⇢ `block`
1. <code><b>d</b>-fx</code>   ⇢ `flex`
1. <code><b>d</b>-li</code>   ⇢ `list-item`
1. <code><b>d</b>-ri</code>   ⇢ `run-in`<p/>
1. <code><b>d</b>-i</code>    ⇢ `inline`
1. <code><b>d</b>-itb</code>  ⇢ `inline-table`
1. <code><b>d</b>-ifx</code>  ⇢ `inline-flex`
1. <code><b>d</b>-ib</code>   ⇢ `inline-block`<p/>
1. <code><b>d</b>-tb</code>   ⇢ `table`
1. <code><b>d</b>-tcp</code>  ⇢ `table-caption`
1. <code><b>d</b>-tc</code>   ⇢ `table-column`
1. <code><b>d</b>-tcg</code>  ⇢ `table-column-group`
1. <code><b>d</b>-thg</code>  ⇢ `table-header-group`
1. <code><b>d</b>-tfg</code>  ⇢ `table-footer-group`
1. <code><b>d</b>-tr</code>   ⇢ `table-row`
1. <code><b>d</b>-trg</code>  ⇢ `table-row-group`
1. <code><b>d</b>-tcl</code>  ⇢ `table-cell`<p/>
1. <code><b>d</b>-rb</code>   ⇢ `ruby`
1. <code><b>d</b>-rbb</code>  ⇢ `ruby-base`
1. <code><b>d</b>-rbbc</code> ⇢ `ruby-base-container`
1. <code><b>d</b>-rbt</code>  ⇢ `ruby-text`
1. <code><b>d</b>-rbtc</code> ⇢ `ruby-text-container`

#### [`fill`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill)
<code>[<a href="#breakpoints">breakpoint</a>\_]<b>fi</b>{id}[-<a href="#pseudos">pseudo</a>]</code> ⇢ `fill: {value}`

Specify mapping in <code><a href="#palette">$background-colors</a>: (id: value)</code>.

#### [`flex-direction`](https://developer.mozilla.org/en/docs/Web/CSS/flex-direction)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>d-r</code>  ⇢ `row`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>d-rr</code> ⇢ `row-reverse`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>d-c</code>  ⇢ `column`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>d-cr</code> ⇢ `column-reverse`

#### [`flex-wrap`](https://developer.mozilla.org/en/docs/Web/CSS/flex-wrap)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>w-n</code>  ⇢ `nowrap`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>w-w</code>  ⇢ `wrap`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>w-wr</code> ⇢ `wrap-reverse`

#### [`flex-grow`](https://developer.mozilla.org/en/docs/Web/CSS/flex-grow)
<code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>g0</code> &hellip; <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>g10</code>  ⇢ `flex-grow: 0` &hellip; `flex-grow: 10`

#### [`flex-shrink`](https://developer.mozilla.org/en/docs/Web/CSS/flex-shrink)
<code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>s0</code> &hellip; <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>s10</code>  ⇢ `flex-shrink: 0` &hellip; `flex-shrink: 10`

#### [`flex-basis`](https://developer.mozilla.org/en/docs/Web/CSS/flex-basis)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>b-a</code>   ⇢ `auto`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>b-mac</code> ⇢ `max-content`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>b-mic</code> ⇢ `min-content`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>b-fc</code>  ⇢ `fit-content`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>b-c</code>   ⇢ `content`

#### [`justify-content`](https://developer.mozilla.org/en/docs/Web/CSS/justify-content)
1. <code><b>jc</b>-fs</code> ⇢ `flex-start`
1. <code><b>jc</b>-fe</code> ⇢ `flex-end`
1. <code><b>jc</b>-c</code>  ⇢ `center`
1. <code><b>jc</b>-sb</code> ⇢ `space-between`
1. <code><b>jc</b>-sa</code> ⇢ `space-around`

#### [`align-items`](https://developer.mozilla.org/en/docs/Web/CSS/align-items)
1. <code><b>ai</b>-fs</code> ⇢ `flex-start`
1. <code><b>ai</b>-fe</code> ⇢ `flex-end`
1. <code><b>ai</b>-c</code>  ⇢ `center`
1. <code><b>ai</b>-bs</code> ⇢ `baseline`
1. <code><b>ai</b>-s</code>  ⇢ `stretch`

#### [`align-content`](https://developer.mozilla.org/en/docs/Web/CSS/align-content)
1. <code><b>ac</b>-fs</code> ⇢ `flex-start`
1. <code><b>ac</b>-fe</code> ⇢ `flex-end`
1. <code><b>ac</b>-c</code>  ⇢ `center`
1. <code><b>ac</b>-sb</code> ⇢ `space-between`
1. <code><b>ac</b>-sa</code> ⇢ `space-around`
1. <code><b>ac</b>-s</code>  ⇢ `stretch`

#### [`align-self`](https://developer.mozilla.org/en/docs/Web/CSS/align-self)
1. <code><b>as</b>-a</code>  ⇢ `auto`
1. <code><b>as</b>-fs</code> ⇢ `flex-start`
1. <code><b>as</b>-fe</code> ⇢ `flex-end`
1. <code><b>as</b>-c</code>  ⇢ `center`
1. <code><b>as</b>-b</code>  ⇢ `baseline`
1. <code><b>as</b>-s</code>  ⇢ `stretch`

#### [`order`](https://developer.mozilla.org/en/docs/Web/CSS/order)
<code><b>ord</b>0</code> &hellip; <code><b>ord</b>10</code> ⇢ `order: 0` &hellip; `order: 10`

#### [`float`](https://developer.mozilla.org/en/docs/Web/CSS/float)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fl</b>-l</code> ⇢ `left`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fl</b>-r</code> ⇢ `right`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fl</b>-n</code> ⇢ `none`

#### [`font-size`](https://developer.mozilla.org/en/docs/Web/CSS/font-size)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-xxs</code> ⇢ `xx-small`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-xs</code>  ⇢ `x-small`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-s</code>   ⇢ `small`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-m</code>   ⇢ `medium`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-l</code>   ⇢ `large`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-xl</code>  ⇢ `x-large`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-xxl</code> ⇢ `xx-large`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-lr</code>  ⇢ `larger`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-sr</code>  ⇢ `smaller`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-i</code>   ⇢ `inherit`<p/>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z{id}</code> ⇢ `font-size: {value}`

Specify mapping in <code><a href="#palette">$font-sizes</a>: (id: value)</code>.

#### [`font-family`](https://developer.mozilla.org/en/docs/Web/CSS/font-family)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-s</code>   ⇢ `serif`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-ss</code>  ⇢ `sans-serif`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-m</code>   ⇢ `monospace`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-c</code>   ⇢ `cursive`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-f</code>   ⇢ `fantasy`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-i</code>   ⇢ `inherit`<p/>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s{id}</code> ⇢ `font-family: {value}`

Specify mapping in <code><a href="#palette">$font-families</a>: (id: value)</code>.

#### [`font-weight`](https://developer.mozilla.org/en/docs/Web/CSS/font-weight)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>w100</code> &hellip; <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>w900</code>  ⇢ `font-weight: 100` &hellip; `font-weight: 900`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>w-n</code>  ⇢ `normal`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>w-b</code>  ⇢ `bold`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>w-br</code> ⇢ `bolder`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>w-lr</code> ⇢ `lighter`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>w-i</code>  ⇢ `inherit`

#### [`font-style`](https://developer.mozilla.org/en/docs/Web/CSS/font-style)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-n</code>  ⇢ `normal`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-i</code>  ⇢ `italic`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-o</code>  ⇢ `oblique`

#### [`font-variant`](https://developer.mozilla.org/en/docs/Web/CSS/font-variant)
1. <code><b>f</b>v-cl</code>  ⇢ `common-ligatures`
1. <code><b>f</b>v-apc</code> ⇢ `all-petite-caps`
1. <code><b>f</b>v-asc</code> ⇢ `all-small-caps`
1. <code><b>f</b>v-sc</code>  ⇢ `small-caps`
1. <code><b>f</b>v-c</code>   ⇢ `contextual`
1. <code><b>f</b>v-df</code>  ⇢ `diagonal-fractions`
1. <code><b>f</b>v-sf</code>  ⇢ `stacked-fractions`
1. <code><b>f</b>v-hf</code>  ⇢ `historical-forms`
1. <code><b>f</b>v-hl</code>  ⇢ `historical-ligatures`
1. <code><b>f</b>v-i</code>   ⇢ `inherit`
1. <code><b>f</b>v-n</code>   ⇢ `normal`
1. <code><b>f</b>v-tn</code>  ⇢ `tabular-nums`
1. <code><b>f</b>v-pn</code>  ⇢ `proportional-nums`
1. <code><b>f</b>v-pw</code>  ⇢ `proportional-width`

#### [`font-size-adjust`](https://developer.mozilla.org/en/docs/Web/CSS/font-size-adjust)
1. <code><b>f</b>za-n</code>  ⇢ `none`

#### [`font-stretch`](https://developer.mozilla.org/en/docs/Web/CSS/font-stretch)
1. <code><b>f</b>st-n</code>  ⇢ `normal`
1. <code><b>f</b>st-uc</code> ⇢ `ultra-condensed`
1. <code><b>f</b>st-ec</code> ⇢ `extra-condensed`
1. <code><b>f</b>st-c</code>  ⇢ `condensed`
1. <code><b>f</b>st-sc</code> ⇢ `semi-condensed`
1. <code><b>f</b>st-se</code> ⇢ `semi-expanded`
1. <code><b>f</b>st-e</code>  ⇢ `expanded`
1. <code><b>f</b>st-ee</code> ⇢ `extra-expanded`
1. <code><b>f</b>st-ue</code> ⇢ `ultra-expanded`

#### [`-webkit-font-smoothing`](https://developer.mozilla.org/en/docs/Web/CSS/-webkit-font-smoothing)
1. <code><b>wf</b>sm-a</code>  ⇢ `antialiased`
1. <code><b>wf</b>sm-sa</code> ⇢ `subpixel-antialiased`
1. <code><b>wf</b>sm-n</code>  ⇢ `none`

#### [`-moz-osx-font-smoothing`](https://developer.mozilla.org/en/docs/Web/CSS/-moz-osx-font-smoothing)
1. <code><b>mf</b>sm-a</code> ⇢ `auto`
1. <code><b>mf</b>sm-g</code> ⇢ `grayscale`

#### [`height`](https://developer.mozilla.org/en/docs/Web/CSS/height)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>h</b>{id}</code>   ⇢ `height: {value}`<p/>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>mah</b>-n</code>   ⇢ `max-height: none`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>mah</b>{id}</code> ⇢ `max-height: {value}`<p/>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>mih</b>{id}</code> ⇢ `min-height: {value}`

Specify mapping in <code><a href="#palette">$heights</a>: (id: value)</code>.

#### [`width`](https://developer.mozilla.org/en/docs/Web/CSS/width)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>w</b>{id}</code>   ⇢ `width: {value}`<p/>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>maw</b>-n</code>   ⇢ `max-width: none`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>maw</b>{id}</code> ⇢ `max-width: {value}`<p/>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>miw</b>{id}</code> ⇢ `min-width: {value}`

Specify mapping in <code><a href="#palette">$widths</a>: (id: value)</code>.

#### [`letter-spacing`](https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing)
1. <code><b>ls</b>-n</code>   ⇢ `normal`
1. <code><b>ls</b>-i</code>   ⇢ `inherit`<p/>
1. <code><b>ls</b>{id}</code> ⇢ `letter-spacing: {value}`

Specify mapping in <code><a href="#palette">$letter-spacings</a>: (id: value)</code>.

#### [`line-height`](https://developer.mozilla.org/en/docs/Web/CSS/line-height)
1. <code><b>lh</b>-n</code> ⇢ `normal`
1. <code><b>lh</b>-i</code> ⇢ `inherit`
1. <code><b>lh</b>0</code>  ⇢ `0`
1. <code><b>lh</b>1</code>  ⇢ `1`<p/>
1. <code><b>lh</b>{id}</code> ⇢ `line-height: {value}`

Specify mapping in <code><a href="#palette">$line-heights</a>: (id: value)</code>.

#### [`list-style`](https://developer.mozilla.org/en/docs/Web/CSS/list-style)
1. <code><b>li</b>s-n</code> ⇢ `none`
1. <code><b>li</b>s-i</code> ⇢ `inherit`

#### [`list-style-position`](https://developer.mozilla.org/en/docs/Web/CSS/list-style-position)
1. <code><b>li</b>sp-in</code> ⇢ `inside`
1. <code><b>li</b>sp-o</code>  ⇢ `outside`
1. <code><b>li</b>sp-i</code>  ⇢ `inherit`

#### [`list-style-type`](https://developer.mozilla.org/en/docs/Web/CSS/list-style-type)
1. <code><b>li</b>st-n</code>    ⇢ `none`
1. <code><b>li</b>st-d</code>    ⇢ `disc`
1. <code><b>li</b>st-c</code>    ⇢ `circle`
1. <code><b>li</b>st-s</code>    ⇢ `square`
1. <code><b>li</b>st-dc</code>   ⇢ `decimal`
1. <code><b>li</b>st-dclz</code> ⇢ `decimal-leading-zero`
1. <code><b>li</b>st-lr</code>   ⇢ `lower-roman`
1. <code><b>li</b>st-ur</code>   ⇢ `upper-roman`
1. <code><b>li</b>st-i</code>    ⇢ `inherit`

#### [`margin`](https://developer.mozilla.org/en/docs/Web/CSS/margin)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>m</b>{id}</code>  ⇢ `margin: {value}`<p/>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>m</b>x-a</code>   ⇢ `margin-left: auto` `margin-right: auto`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>m</b>x{id}</code> ⇢ `margin-left: {value}` `margin-right: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>m</b>y{id}</code> ⇢ `margin-top: {value}` `margin-bottom: {value}`<p/>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>m</b>t{id}</code> ⇢ `margin-top: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>m</b>r{id}</code> ⇢ `margin-right: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>m</b>b{id}</code> ⇢ `margin-bottom: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>m</b>l{id}</code> ⇢ `margin-left: {value}`

Specify mapping in <code><a href="#palette">$margins</a>: (id: value)</code>.

#### [`padding`](https://developer.mozilla.org/en/docs/Web/CSS/padding)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>p</b>{id}</code>  ⇢ `padding: {value}`<p/>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>p</b>x{id}</code> ⇢ `padding-left: {value}` `padding-right: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>p</b>y{id}</code> ⇢ `padding-top: {value}` `padding-bottom: {value}`<p/>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>p</b>t{id}</code> ⇢ `padding-top: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>p</b>r{id}</code> ⇢ `padding-right: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>p</b>b100p</code> ⇢ `padding-bottom: 100%`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>p</b>b{id}</code> ⇢ `padding-bottom: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>p</b>l{id}</code> ⇢ `padding-left: {value}`

Specify mapping in <code><a href="#palette">$paddings</a>: (id: value)</code>.

#### [`object-fit`](https://developer.mozilla.org/en/docs/Web/CSS/object-fit)
1. <code><b>of</b>-n</code>  ⇢ `none`
1. <code><b>of</b>-f</code>  ⇢ `fill`
1. <code><b>of</b>-ct</code> ⇢ `contain`
1. <code><b>of</b>-cv</code> ⇢ `cover`
1. <code><b>of</b>-sd</code> ⇢ `scale-down`
1. <code><b>of</b>-i</code>  ⇢ `inherit`

#### [`opacity`](https://developer.mozilla.org/en/docs/Web/CSS/opacity)
<code><b>op</b>0</code> &hellip; <code><b>op</b>100</code> ⇢ `opacity: 0` &hellip; `opacity: 1`

#### [`z-index`](https://developer.mozilla.org/en/docs/Web/CSS/z-index)
1. <code><b>z</b>0</code> &hellip; <code><b>z</b>10</code>  ⇢ `z-index: 0` &hellip; `z-index: 10`
1. <code><b>z</b>-a</code> ⇢ `auto`
1. <code><b>z</b>-i</code> ⇢ `inherit`

#### [`page-break-before`](https://developer.mozilla.org/en/docs/Web/CSS/page-break-before)
1. <code><b>pgb</b>b-a</code>  ⇢ `auto`
1. <code><b>pgb</b>b-al</code> ⇢ `always`
1. <code><b>pgb</b>b-av</code> ⇢ `avoid`
1. <code><b>pgb</b>b-l</code>  ⇢ `left`
1. <code><b>pgb</b>b-r</code>  ⇢ `right`

#### [`page-break-inside`](https://developer.mozilla.org/en/docs/Web/CSS/page-break-inside)
1. <code><b>pgb</b>i-a</code>  ⇢ `auto`
1. <code><b>pgb</b>i-av</code> ⇢ `avoid`

#### [`page-break-after`](https://developer.mozilla.org/en/docs/Web/CSS/page-break-after)
1. <code><b>pgb</b>a-a</code>  ⇢ `auto`
1. <code><b>pgb</b>a-al</code> ⇢ `always`
1. <code><b>pgb</b>a-av</code> ⇢ `avoid`
1. <code><b>pgb</b>a-l</code>  ⇢ `left`
1. <code><b>pgb</b>a-r</code>  ⇢ `right`

#### [`position`](https://developer.mozilla.org/en/docs/Web/CSS/position)
1. <code><b>pos</b>-s</code> ⇢ `static`
1. <code><b>pos</b>-a</code> ⇢ `absolute`
1. <code><b>pos</b>-r</code> ⇢ `relative`
1. <code><b>pos</b>-f</code> ⇢ `fixed`

#### [`top`](https://developer.mozilla.org/en/docs/Web/CSS/top) [`right`](https://developer.mozilla.org/en/docs/Web/CSS/right) [`bottom`](https://developer.mozilla.org/en/docs/Web/CSS/bottom) [`left`](https://developer.mozilla.org/en/docs/Web/CSS/left)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>{id}</code> ⇢ `top: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>r</b>{id}</code> ⇢ `right: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>b</b>{id}</code> ⇢ `bottom: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>l</b>{id}</code> ⇢ `left: {value}`

Specify mapping in <code><a href="#palette">$positions</a>: (id: value)</code>.

#### [`resize`](https://developer.mozilla.org/en/docs/Web/CSS/resize)
1. <code><b>rz</b>-n</code> ⇢ `none`
1. <code><b>rz</b>-b</code> ⇢ `both`
1. <code><b>rz</b>-h</code> ⇢ `horizontal`
1. <code><b>rz</b>-v</code> ⇢ `vertical`

#### [`table-layout`](https://developer.mozilla.org/en/docs/Web/CSS/table-layout)
1. <code><b>tbl</b>-a</code> ⇢ `auto`
1. <code><b>tbl</b>-f</code> ⇢ `fixed`

#### [`caption-side`](https://developer.mozilla.org/en/docs/Web/CSS/caption-side)
1. <code><b>cps</b>-t</code> ⇢ `top`
1. <code><b>cps</b>-b</code> ⇢ `bottom`

#### [`empty-cells`](https://developer.mozilla.org/en/docs/Web/CSS/empty-cells)
1. <code><b>ec</b>-s</code> ⇢ `show`
1. <code><b>ec</b>-h</code> ⇢ `hide`

#### [`text-align`](https://developer.mozilla.org/en/docs/Web/CSS/text-align)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>a-l</code> ⇢ `left`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>a-c</code> ⇢ `center`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>a-r</code> ⇢ `right`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>a-j</code> ⇢ `justify`

#### [`text-align-last`](https://developer.mozilla.org/en/docs/Web/CSS/text-align-last)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>al-l</code> ⇢ `left`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>al-c</code> ⇢ `center`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>al-r</code> ⇢ `right`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>al-j</code> ⇢ `justify`

#### [`text-indent`](https://developer.mozilla.org/en/docs/Web/CSS/text-indent)
<code><b>t</b>i{id}</code> ⇢ `text-indent: {value}`

Specify mapping in <code><a href="#palette">$text-indents</a>: (id: value)</code>.

#### [`text-decoration`](https://developer.mozilla.org/en/docs/Web/CSS/text-decoration)
1. <code><b>t</b>d-n</code>  ⇢ `none`
1. <code><b>t</b>d-u</code>  ⇢ `underline`
1. <code><b>t</b>d-o</code>  ⇢ `overline`
1. <code><b>t</b>d-lt</code> ⇢ `line-through`

#### [`text-transform`](https://developer.mozilla.org/en/docs/Web/CSS/text-transform)
1. <code><b>t</b>t-c</code>  ⇢ `capitalize`
1. <code><b>t</b>t-u</code>  ⇢ `uppercase`
1. <code><b>t</b>t-l</code>  ⇢ `lowercase`
1. <code><b>t</b>t-n</code>  ⇢ `none`
1. <code><b>t</b>t-fw</code> ⇢ `full-width`

#### [`text-justify`](https://developer.mozilla.org/en/docs/Web/CSS/text-justify)
1. <code><b>t</b>j-a</code>  ⇢ `auto`
1. <code><b>t</b>j-iw</code> ⇢ `inter-word`
1. <code><b>t</b>j-d</code>  ⇢ `distribute`

#### [`text-overflow`](https://developer.mozilla.org/en/docs/Web/CSS/text-overflow)
1. <code><b>t</b>ov-e</code> ⇢ `ellipsis`
1. <code><b>t</b>ov-c</code> ⇢ `clip`

#### [`transform`](https://developer.mozilla.org/en/docs/Web/CSS/transform)
1. <code><b>ts</b>-n</code> ⇢ `none`
1. <code><b>ts</b>-i</code> ⇢ `inherit`<p/>
1. <code><b>ts</b>r-ccw2t</code> ⇢ `rotate(-2turn)`
1. <code><b>ts</b>r-ccw1t</code> ⇢ `rotate(-1turn)`
1. <code><b>ts</b>r-cw1t</code>  ⇢ `rotate(1turn)`
1. <code><b>ts</b>r-cw2t</code>  ⇢ `rotate(2turn)`<p/>
1. <code><b>ts</b>s0</code>   ⇢ `scale(0)`
1. <code><b>ts</b>s25</code>  ⇢ `scale(0.25)`
1. <code><b>ts</b>s50</code>  ⇢ `scale(0.5)`
1. <code><b>ts</b>s75</code>  ⇢ `scale(0.75)`
1. <code><b>ts</b>s200</code> ⇢ `scale(2)`

#### [`transition-property`](https://developer.mozilla.org/en/docs/Web/CSS/transition-property)
1. <code><b>tr</b>p-n</code> ⇢ `none`
1. <code><b>tr</b>p-a</code> ⇢ `all`

#### [`transition-duration`](https://developer.mozilla.org/en/docs/Web/CSS/transition-duration)
<code><b>tr</b>d100ms</code> &hellip; <code><b>tr</b>d1000ms</code>  ⇢ `transition-duration: 100ms` &hellip; `transition-duration: 1000ms`

#### [`transition-timing-function`](https://developer.mozilla.org/en/docs/Web/CSS/transition-timing-function)
1. <code><b>tr</b>tf-e</code>   ⇢ `ease`
1. <code><b>tr</b>tf-ei</code>  ⇢ `ease-in`
1. <code><b>tr</b>tf-eo</code>  ⇢ `ease-out`
1. <code><b>tr</b>tf-eio</code> ⇢ `ease-in-out`
1. <code><b>tr</b>tf-l</code>   ⇢ `linear`
1. <code><b>tr</b>tf-ss</code>  ⇢ `step-start`
1. <code><b>tr</b>tf-se</code>  ⇢ `step-end`

#### [`user-select`](https://developer.mozilla.org/en/docs/Web/CSS/user-select)
1. <code><b>us</b>-n</code> ⇢ `none`
1. <code><b>us</b>-t</code> ⇢ `text`
1. <code><b>us</b>-a</code> ⇢ `all`

#### [`vertical-align`](https://developer.mozilla.org/en/docs/Web/CSS/vertical-align)
1. <code><b>va</b>-sp</code> ⇢ `super`
1. <code><b>va</b>-t</code>  ⇢ `top`
1. <code><b>va</b>-tt</code> ⇢ `text-top`
1. <code><b>va</b>-m</code>  ⇢ `middle`
1. <code><b>va</b>-bs</code> ⇢ `baseline`
1. <code><b>va</b>-b</code>  ⇢ `bottom`
1. <code><b>va</b>-tb</code> ⇢ `text-bottom`
1. <code><b>va</b>-sb</code> ⇢ `sub`

#### [`visibility`](https://developer.mozilla.org/en/docs/Web/CSS/visibility)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>v</b>-v</code> ⇢ `visible`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>v</b>-h</code> ⇢ `hidden`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>v</b>-c</code> ⇢ `collapse`

#### [`white-space`](https://developer.mozilla.org/en/docs/Web/CSS/white-space)
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>v</b>-n </code> ⇢ `normal`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>v</b>-p </code> ⇢ `pre`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>v</b>-nw</code> ⇢ `nowrap`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>v</b>-pw</code> ⇢ `pre-wrap`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>v</b>-pl</code> ⇢ `pre-line`

#### [`word-break`](https://developer.mozilla.org/en/docs/Web/CSS/word-break)
1. <code><b>wo</b>b-n</code>  ⇢ `normal`
1. <code><b>wo</b>b-ka</code> ⇢ `keep-all`
1. <code><b>wo</b>b-ba</code> ⇢ `break-all`

#### [`word-wrap`](https://developer.mozilla.org/en/docs/Web/CSS/word-wrap)
1. <code><b>wo</b>w-n</code>  ⇢ `normal`
1. <code><b>wo</b>w-bw</code> ⇢ `break-word`


### Molecules

#### Flex

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>-r</code>  ⇢ `display: flex` `flex-direction: row`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>-rr</code> ⇢ `display: flex` `flex-direction: row-reverse`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>-c</code>  ⇢ `display: flex` `flex-direction: column`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>-cr</code> ⇢ `display: flex` `flex-direction: column-reverse`
