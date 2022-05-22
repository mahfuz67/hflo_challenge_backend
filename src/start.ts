import {
    app,
    PORT,
    baseRouter,
    di,
    basePath,
  } from "./index";
  
  
  (async () => {
    const container = await di();
    app.use("*", (req, _, next) => {
      req.container = container;
      next();
    });
    app.use(basePath, baseRouter);
    app.listen(PORT, () => {
      console.log(`Server started and listening on port ${PORT}.`);
    });
  })();
  