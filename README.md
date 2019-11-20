# tailwind tss

Tailwindcss styles applied in a Titanium App.

The app.tss file was created with [this converter](https://github.com/macCesar/tailwind-tss-color-generator).

I have also included all of [FontAwesome's](https://fontawesome.com) icon definitions in order to use them in Buttons and/or Labels.

## Examples
### 'Card' example
```xml
<Alloy>
    <View class="w-screen mt-4 mx-4 bg-white rounded-lg border-gray-300 shadow-lg vertical">
        <ImageView class="mt-3 h-16 w-16 rounded-16 mx-auto" image="https://randomuser.me/api/portraits/women/17.jpg" />

        <View class="mt-3 mb-3 vertical">
            <Label class="text-xl text-gray-800">Erin Lindford</Label>
            <Label class="text-base text-purple-500">Customer Support</Label>
            <Label class="text-base text-gray-600">erinlindford@example.com</Label>
            <Label class="text-base text-gray-600">(555) 765-4321</Label>
        </View>
    </View>
</Alloy>
```

### 'Card 2' Example
```xml
<Alloy>
    <View class="w-11/12 mt-4 bg-white rounded-lg border-gray-300 vertical clip-enabled">
        <ImageView class="shadow-md" image="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80" />

        <View class="m-3 text-gray-600 vertical">
            <View class="w-screen horizontal">
                <Label class="text-gray-600 text-2xl font-thin">Card Content</Label>
                <Label class="ml-2 text-sm text-gray-500 font-semibold">Nov 3rd, 2019</Label>
            </View>

            <Label class="text-gray-500 font-normal">This is some card content to demonstrate how the cards work.</Label>

            <Button class="mt-2 w-1/2 h-8 rounded-8 bg-gray-500 text-white">Read More</Button>
        </View>
    </View>
</Alloy>
```

### 'House' Example
```xml
<Alloy>
    <View class="w-11/12 mt-4 mb-4 bg-white rounded-lg border-gray-300 vertical clip-enabled">
        <ImageView class="w-screen" image="https://via.placeholder.com/450x350" />

        <View class="m-4 w-screen vertical">
            <Label class="ml-0 text-sm font-bold text-gray-700">Detached house • 5y old</Label>
            <Label class="ml-0 text-3xl text-gray-900">$750,000</Label>
            <Label class="ml-0 text-gray-700">742 Evergreen Terrace</Label>
        </View>

        <View class="h-px w-screen bg-gray-200"></View>
        <View class="horizontal">
            <View class="w-auto h-20 horizontal mr-2">
                <Label class="h-20 fa fa-bed text-gray-800" />
                <Label class="h-20 ml-1 text-gray-800 font-bold ">3 Bedrooms</Label>
            </View>

            <View class="w-auto h-20 horizontal ml-2">
                <Label class="h-20 fa fa-bath text-gray-800" />
                <Label class="h-20 ml-1 text-gray-800 font-bold">2 Bathrooms</Label>
            </View>
        </View>

        <View class="h-px w-screen bg-gray-200"></View>
        <View class="bg-gray-100 vertical w-screen">
            <Label class="mx-4 mt-3 text-xs font-bold text-gray-600">REALTOR</Label>

            <View class="m-4 horizontal">
                <ImageView class="w-10 h-10 rounded-10" image="https://randomuser.me/api/portraits/women/17.jpg" />

                <View class="vertical w-screen">
                    <Label class="ml-3 font-bold text-gray-900">Catherine Heffner</Label>
                    <Label class="ml-3 text-sm text-gray-700">(111) 111-1111</Label>
                </View>
            </View>
        </View>
    </View>
</Alloy>
```

### 'Projects' Example
```xml
<Alloy>
    <View class="w-screen mt-4 mx-4 bg-white rounded-lg border-gray-300 vertical clip-enabled">
        <View class="bg-gray-200 w-screen">
            <Label class="m-4 h-12 text-3xl font-semibold">Projects</Label>
        </View>

        <View class="h-px w-screen bg-gray-200"></View>
        <View class="horizontal w-screen m-4">
            <View class="w-3/12 mt-0">
                <Button class="ml-0 h-12 w-12 bg-indigo-500 rounded-12 text-white fa fa-code text-2xl"></Button>
            </View>

            <View class="w-9/12 vertical">
                <Label class="w-screen text-gray-600 text-sm">Engineering</Label>
                <Label class="mt-1 w-screen text-base font-semibold">GraphQL API</Label>
                <TextArea class="w-screen text-sm text-gray-600 -ml-1 -mr-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a excepturi et minus ipsum hic, porro voluptatem totam nulla suscipit!</TextArea>

                <View class="horizontal w-screen">
                    <View class="w-1/3 h-6 horizontal">
                        <Button class="far fa-user text-gray-600"/>
                        <Label class="text-sm text-gray-700 ml-1 font-bold">4</Label>
                    </View>

                    <View class="w-1/3 h-6 horizontal">
                        <Button class="far fa-comment-alt text-gray-600"/>
                        <Label class="text-sm text-gray-700 ml-1 font-bold">12</Label>
                    </View>

                    <View class="w-1/3 h-6 horizontal">
                        <Button class="fa fa-align-left text-gray-600"/>
                        <Label class="text-sm text-gray-700 ml-1 font-bold">20</Label>
                    </View>
                </View>
            </View>
        </View>

        <View class="h-px w-screen bg-gray-200"></View>
        <View class="horizontal w-screen m-4">
            <View class="w-3/12 mt-0">
                <Button class="ml-0 h-12 w-12 bg-green-500 rounded-12 text-white fa fa-suitcase text-2xl"></Button>
            </View>

            <View class="w-9/12 vertical">
                <Label class="w-screen text-gray-600 text-sm">Human Resources</Label>
                <Label class="mt-1 w-screen text-base font-semibold">Profit sharing program</Label>
                <TextArea class="w-screen text-sm text-gray-600 -ml-1 -mr-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a excepturi et minus ipsum hic, porro voluptatem totam nulla suscipit!</TextArea>

                <View class="horizontal w-screen">
                    <View class="w-1/3 h-6 horizontal">
                        <Button class="far fa-user text-gray-600"/>
                        <Label class="text-sm text-gray-700 ml-1 font-bold">6</Label>
                    </View>

                    <View class="w-1/3 h-6 horizontal">
                        <Button class="far fa-comment-alt text-gray-600"/>
                        <Label class="text-sm text-gray-700 ml-1 font-bold">5</Label>
                    </View>

                    <View class="w-1/3 h-6 horizontal">
                        <Button class="fa fa-align-left text-gray-600"/>
                        <Label class="text-sm text-gray-700 ml-1 font-bold">30</Label>
                    </View>
                </View>
            </View>
        </View>
    </View>
</Alloy>
```

### 'Private Villa' Example
```xml
<Alloy>
    <View class="w-screen mt-4 mx-4 bg-white vertical">
        <View class="vertical">
            <ImageView class="rounded-lg w-screen" image="https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=80" />

            <View class="vertical w-screen mt-2">
                <Label class="ml-0 text-xs text-gray-600 uppercase font-bold">PRIVATE VILLA</Label>
                <Label class="ml-0 font-bold text-gray-700">Relaxing All-Inclusive Resort in Cancun</Label>
                <Label class="ml-0 text-sm text-gray-600">$299 USD per night</Label>
            </View>
        </View>
    </View>
</Alloy>

```
