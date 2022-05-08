package main

import (
	"fmt"
	"os"
	"text/template"
)

type Payload struct {
	Cats []string
}

func main() {
	fmt.Println("do stuff")
	// Get a file
	// threadFile, err := os.Create("Threads3.json")
	// if err != nil {
	// 	fmt.Println("Cannot create file.")
	// 	return
	// }
	// defer threadFile.Close()
	replyFile, err := os.Create("Replies3.json")
	if err != nil {
		fmt.Println("Cannot create file.")
		return
	}
	defer replyFile.Close()

	// make slice of categories
	// pl1 := &Payload{Cats: []string{"Academic", "Art", "ATV", "Audio", "Aviation", "Baking", "Band", "Ball Sports", "Beach", "Bicycle", "Boat", "Brewing", "Camping", "Carnival", "Children", "Coffee", "Combat Sports", "Comic Books", "Computers", "Concert", "County Fair", "Crafts", "Dancing", "Dog Park", "E-Sports"}}
	// pl2 := &Payload{Cats: []string{"Electronics", "Exploring", "Farming", "Festival", "Fishing", "Fitness", "Gardening", "Geo Caching", "Glass Blowing", "Go Karts", "Gun Range", "Hiking", "Horse Riding", "Hunting", "Ice Sports", "Magnet Fishing", "Martial Arts", "Movies", "Motor Sports", "Mountain Biking", "Mushroom Hunting", "Music", "Other", "Park", "Pets"}}
	pl3 := &Payload{Cats: []string{"Photography", "Playground", "Recreation", "Water Sports", "Wheeled Sports"}}
	// var Cats []string = []string{"Academic","Art","ATV","Audio","Aviation","Baking","Band","Ball Sports","Beach","Bicycle","Boat","Brewing","Camping","Carnival","Children","Coffee","Combat Sports","Comic Books","Computers","Concert","County Fair","Crafts","Dancing","Dog Park","E-Sports","Electronics","Exploring","Farming","Festival","Fishing","Fitness","Gardening","Geo Caching","Glass Blowing","Go Karts","Gun Range","Hiking","Horse Riding","Hunting","Ice Sports","Magnet Fishing","Martial Arts","Movies","Motor Sports","Mountain Biking","Mushroom Hunting","Music","Other","Park","Pets","Photography","Playground","Recreation","Water Sports","Wheeled Sports"}

	// make template
	// tt := template.Must(template.New("").Parse(threadTmpl))
	// err = tt.Execute(threadFile, pl3)
	rt := template.Must(template.New("").Parse(replyTmpl))
	err = rt.Execute(replyFile, pl3)
	// err = rt.Execute(os.Stdout, pl3)
	if err != nil {
		panic(nil)
	}

}

// loop over slice
const threadTmpl = `{
    "Thread": [
		{{- range $k,$v := .Cats }}
        {
            "PutRequest": {
                "Item": {
                    "forum_name": {
                        "S": "{{ $v }}"
                    },
                    "title": {
                        "S": "Welcome to Lets Go"
                    },
                    "message": {
                        "S": "This is {{ $v }}!"
                    },
                    "posted_by": {
                        "S": "{{ $v }} User"
                    },
                    "last_posted_by": {
                        "S": "User A"
                    },
                    "last_posted_date_time": {
                        "S": "2015-09-22T19:58:22.514Z"
                    },
                    "views": {
                        "N": "1"
                    },
                    "replies": {
                        "N": "1"
                    },
                    "tags": {
                        "L": [
                            {
                                "S": "Welcome"
                            },
                            {
                                "S": "Lets Go"
                            },
                            {
                                "S": "{{ $v }}"
                            }
                        ]
                    }
                }
            }
        },
		{{- end }}
    ]
}`

const replyTmpl = `
{
    "Reply": [
		{{- range $k,$v := .Cats }}
        {
            "PutRequest": {
                "Item": {
                    "id": {
                        "S": "{{ $v }}#Welcome to Lets Go"
                    },
                    "reply_date_time": {
                        "S": "2015-09-15T19:58:22.947Z"
                    },
                    "message": {
                        "S": "{{ $v }} Reply 1 message"
                    },
                    "posted_by": {
                        "S": "User A"
                    }
                }
            }
        },
		{{- end }}
    ]
}`
