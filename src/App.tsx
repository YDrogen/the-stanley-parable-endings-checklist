import { Item } from "./components/item";
import { ENDINGS } from "./data/endings";

function App() {
  return (
    <>
      <div className="p-8">
        <h1>Endings Checklist for The Stanley Parable Ultra Deluxe!</h1>
        <h2>Keep track of your progress!</h2>

        <ul className="mt-8">
          {Object.keys(ENDINGS).map((k) => (
            <li key={k}>
              <Item title={k} url={ENDINGS[k].url} />

              {ENDINGS[k].endings ? (
                <ul className="pl-8">
                  {Object.keys(ENDINGS[k].endings).map((kk) => (
                    <li key={kk}>
                      <Item title={kk} url={ENDINGS[k].endings?.[kk].url} />

                      {ENDINGS[k].endings?.[kk].endings ? (
                        <ul className="pl-8">
                          {Object.keys(ENDINGS[k].endings?.[kk].endings).map(
                            (kkk) => (
                              <li key={kkk}>
                                <Item
                                  title={kkk}
                                  url={
                                    ENDINGS[k].endings?.[kk].endings?.[kkk].url
                                  }
                                />
                              </li>
                            )
                          )}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
