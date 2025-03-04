import { ExportSection } from "./components/export-section";
import { Item } from "./components/item";
import { ENDINGS } from "./data/endings";

function App() {
  return (
    <>
      <div className="p-8">
        <h1>Endings Checklist for The Stanley Parable Ultra Deluxe!</h1>
        <h2>Keep track of your progress!</h2>

        <div className="flex gap-16 mt-8">
          <div className="flex gap-4 flex-col">
            <h3>Endings</h3>
            <ul>
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
                              {Object.keys(
                                ENDINGS[k].endings?.[kk].endings
                              ).map((kkk) => (
                                <li key={kkk}>
                                  <Item
                                    title={kkk}
                                    url={
                                      ENDINGS[k].endings?.[kk].endings?.[kkk]
                                        .url
                                    }
                                  />
                                </li>
                              ))}
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

          <div className="flex gap-4 flex-col">
            <h3>Bucket Endings</h3>
            <ul>
              {Object.keys(ENDINGS).map((k) => (
                <li key={k}>
                  <Item
                    title={k}
                    url={ENDINGS[k].url}
                    hasBucketEnding={ENDINGS[k].hasBucketEnding}
                    isBucketList
                  />

                  {ENDINGS[k].endings ? (
                    <ul className="pl-8">
                      {Object.keys(ENDINGS[k].endings).map((kk) => (
                        <li key={kk}>
                          <Item
                            title={kk}
                            url={ENDINGS[k].endings?.[kk].url}
                            hasBucketEnding={
                              ENDINGS[k].endings?.[kk].hasBucketEnding
                            }
                            isBucketList
                          />

                          {ENDINGS[k].endings?.[kk].endings ? (
                            <ul className="pl-8">
                              {Object.keys(
                                ENDINGS[k].endings?.[kk].endings
                              ).map((kkk) => (
                                <li key={kkk}>
                                  <Item
                                    title={kkk}
                                    url={
                                      ENDINGS[k].endings?.[kk].endings?.[kkk]
                                        .url
                                    }
                                    hasBucketEnding={
                                      ENDINGS[k].endings?.[kk].endings?.[kkk]
                                        .hasBucketEnding
                                    }
                                    isBucketList
                                  />
                                </li>
                              ))}
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
        </div>

        <ExportSection />
      </div>
    </>
  );
}

export default App;
