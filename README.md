# Authentcation
-
Somethign...


# Available endpoints	
-

**Note on Pathing**

All endpoints pretaining to the API are to be preceded by /api/ subpath. See example below:
	
	GET http://domain/api/trackdata
	

##	/trackdata			
	
Accepted Mehods: [GET, POST]

**GET**

URL params (optional):

- ?startDatetime={iso_string}
- ?endDatetime={iso_string}
- ?limit={integer}
- ?sortOrder={1,-1}, 1: asc (from newest), -1:desc (from oldest)

Returns all datapoints (latest to oldest) that falls within the specified range [startDatetime,endDatetime], maximum /w with. 

**Example request /w full parameters:**

	GET http://localhost:5000/api/trackdata?limit=5&startDatetime=2020-04-22T23:00:35.380Z&endDatetime=2020-04-22T23:00:35.380Z&sortOrder=-1



**Yields:**
	
	[
	    {
	        "_id": "5ea0cc931c82edb995291b31",
	        "ms_timestamp": 321,
	        "current": 0,
	        "temperature": 25,
	        "voltage": 17.31,
	        "pressure": -0.06,
	        "state": "STANDBY",
	        "alarm": "NONE",
	        "created_at": "2020-04-22T23:00:35.380Z",
	        "updated_at": "2020-04-22T23:00:35.380Z",
	        "__v": 0
	    },
	    {
	        "_id": "5ea0cc931c82edb995291b32",
	        "ms_timestamp": 331,
	        "current": 0,
	        "temperature": 25,
	        "voltage": 17.34,
	        "pressure": -0.03,
	        "state": "STANDBY",
	        "alarm": "NONE",
	        "created_at": "2020-04-22T23:00:35.380Z",
	        "updated_at": "2020-04-22T23:00:35.380Z",
	        "__v": 0
    	},
	   	... 3 more objects
	]	


	
	
**POST**

Creates new trackdatapoints for the given valid JSON data. Does accept a list of json objects, however maximum size of request is: *postReqMaxSize*


**Example request:**
	
	$ POST http://localhost:5000/api/trackdata 
	
		{
			"ms_timestamp": 999995,
			"current": 100,
		    "temperature": 30, 
		    "voltage": 2,
		    "pressure": 2,
		    "state": "okay",
		    "alarm": "okay"
		}

**Yields:**
	
	{
	    "_id": "5ea09a53d3cefa7bda7607f7",
	    "ms_timestamp": 999995,
	    "current": 100,
	    "temperature": 30,
	    "voltage": 2,
	    "pressure": 2,
	    "state": "okay",
	    "alarm": "okay",
	    "created_at": "2020-04-22T19:26:11.624Z",
	    "updated_at": "2020-04-22T19:26:11.624Z",
	    "__v": 0
	}



##/trackdata/:id	
	
Accepted Mehods: [GET, DELETE, UPDATE]
