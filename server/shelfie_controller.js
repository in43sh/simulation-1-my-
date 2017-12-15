module.exports = {
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.create_bin()
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  get: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_bin()
      .then( bin => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  getBins: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_bin()
      .then( bin => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.update_bin()
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.delete_bin()
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  }
};