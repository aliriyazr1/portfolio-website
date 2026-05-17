## Types as Sets
For example, in C#, it’s awkward to pass around a value that is either a string or int, because there isn’t a single type that represents this sort of value.

In TypeScript, this becomes very natural once you realize that every type is just a set. How do you describe a value that either belongs in the string set or the number set? It simply belongs to the union of those sets: string | number.

TypeScript provides a number of mechanisms to work with types in a set-theoretic way, and you’ll find them more intuitive if you think of types as sets.