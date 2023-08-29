with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "myenv";
  buildInputs = [
    deno
    typescript
  ];
}