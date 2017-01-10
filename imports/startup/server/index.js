// Import server startup through a single index entry point

import '../both'

// Config
import './config'

// This defines all the collections, publications and methods that the application provides as an API to the client.
import '../../api/api'

// This defines a starting set of data to be loaded if the app is loaded with an empty db.
import './fixtures'
