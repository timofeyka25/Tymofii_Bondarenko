function meeting(s) {
  let names = s.toUpperCase().split(";");

  names = names
    .map((name) => {
      const [first, last] = name.split(":");
      return `(${last}, ${first})`;
    })
    .sort();

  return names.join("");
}

const s =
  "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
console.log(meeting(s));
