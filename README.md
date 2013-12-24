ROT13
=========

A ROT13 encrypter/decrypter implementation in 113 bytes.

"ROT13... is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher, developed in ancient Rome.
... ROT13 is its own inverse; that is, to undo ROT13, the same algorithm is applied, so the same action can be used for encoding and decoding. The algorithm provides virtually no cryptographic security, and is often cited as a canonical example of weak encryption."

[Wikipedia](http://en.wikipedia.org/wiki/ROT13)

Source
------
```javascript
function r(a,b){return++b?String.fromCharCode((a<"["?91:123)>(a=a.charCodeAt()+13)?a:a-26):a.replace(/[A-z]/g,r)}
```

For more information
--------------------

See the [140byt.es](http://140byt.es) site for a showcase of entries (built itself using 140-byte entries!), and follow [@140bytes](http://twitter.com/140bytes) on Twitter.

To learn about byte-saving hacks for your own code, or to contribute what you've learned, head to [the wiki](https://github.com/jed/140bytes/wiki/Byte-saving-techniques).

140byt.es is brought to you by [Jed Schmidt](http://jed.is), with help from Alex Kloss. It was inspired by work from [Thomas Fuchs](http://mir.aculo.us) and [Dustin Diaz](http://www.dustindiaz.com/).